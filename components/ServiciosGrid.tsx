"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import ServicioCard from "./ServicioCard";

type Servicio = {
  eyebrow: string;
  titulo: string;
  descripcion: string;
  whatsapp: string;
  imagen: string;
};

const SERVICIOS: Servicio[] = [
  {
    eyebrow: "CORP",
    titulo: "Eventos corporativos",
    descripcion:
      "Diseñamos y producimos eventos que fortalecen tu marca y generan experiencias memorables.",
    whatsapp:
      "https://wa.me/51989661090?text=Hola,%20quiero%20cotizar%20un%20evento%20corporativo%20con%20Nova%20BTL%20y%20Eventos",
    imagen: "/images/nova-btl/serv1.png",
  },
  {
    eyebrow: "SNACKS",
    titulo: "Estaciones de snacks premium",
    descripcion:
      "Carritos de snacks premium que complementan reuniones, celebraciones y experiencias memorables.",
    whatsapp:
      "https://wa.me/51989661090?text=Hola,%20estoy%20interesado%20en%20una%20Estacion%20de%20Snack%20Premium",
    imagen: "/images/nova-btl/serv4.png",
  },
  {
    eyebrow: "TEAM",
    titulo: "Team Building",
    descripcion:
      "Desarrollamos experiencias que fortalecen equipos y cultura organizacional.",
    whatsapp:
      "https://wa.me/51989661090?text=Hola,%20quiero%20cotizar%20una%20actividad%20de%20team%20building",
    imagen: "/images/nova-btl/serv3.png",
  },
  {
    eyebrow: "MERCH & BRAND",
    titulo: "Merchandising & Branding",
    descripcion:
      "Gestionamos productos y materiales que refuerzan tu identidad de marca.",
    whatsapp:
      "https://wa.me/51989661090?text=Hola,%20estoy%20interesado%20en%20merchandising%20y%20branding",
    imagen: "/images/nova-btl/serv4.png",
  },
  {
    eyebrow: "FOTO",
    titulo: "Espejo fotográfico",
    descripcion:
      "Recuerdos instantáneos y personalizados para tus invitados.",
    whatsapp:
      "https://wa.me/51989661090?text=Hola,%20quiero%20cotizar%20un%20espejo%20fotografico",
    imagen: "/images/nova-btl/serv3.png",
  },
];

export default function ServiciosGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  // ✅ Scroll correcto: centra la card sin pelear con el snap
  const scrollToIndex = useCallback((i: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[i] as HTMLElement;
    if (!card) return;

    const targetLeft =
      card.offsetLeft - el.offsetLeft - (el.clientWidth - card.clientWidth) / 2;

    el.scrollTo({ left: targetLeft, behavior: "smooth" });
    setCurrent(i);
  }, []);

  const scrollPrev = () => scrollToIndex(Math.max(0, current - 1));
  const scrollNext = () =>
    scrollToIndex(Math.min(SERVICIOS.length - 1, current + 1));

  // ✅ Detectar la card más centrada
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const containerCenter = el.scrollLeft + el.clientWidth / 2;
      let closest = 0;
      let closestDist = Infinity;

      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const cardCenter = c.offsetLeft - el.offsetLeft + c.clientWidth / 2;
        const dist = Math.abs(cardCenter - containerCenter);
        if (dist < closestDist) {
          closestDist = dist;
          closest = i;
        }
      });

      setCurrent(closest);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white py-[70px]">
      {/* 🔷 Patrón de cuadrícula */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(8,16,71,0.10) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(8,16,71,0.10) 1px, transparent 1px),
            linear-gradient(to right, rgba(8,16,71,0.25) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(8,16,71,0.25) 2px, transparent 2px)
          `,
          backgroundSize: "40px 40px, 40px 40px, 200px 200px, 200px 200px",
        }}
      />

      <div className="relative mx-auto max-w-[1290px] px-5">
        <p className="mb-1 py-3 text-left font-krona text-sm font-bold uppercase text-[#3a3a3a]">
          Soluciones diseñadas para tu negocio
        </p>
        <h2 className="font-krona text-4xl uppercase text-[#180d0d] md:text-5xl">
          ¿Cómo te ayudamos?
        </h2>

        {/* Carrusel */}
        <div className="relative mt-10">
          {/* Flecha izquierda */}
          <button
            type="button"
            onClick={scrollPrev}
            aria-label="Anterior"
            disabled={current === 0}
            className="absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-primary hover:text-white disabled:opacity-30 md:block"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Track */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex snap-x snap-mandatory gap-8 overflow-x-auto px-4 pt-4 pb-14"
          >
            {SERVICIOS.map((s, i) => (
              <div
                key={`${s.titulo}-${i}`}
                className="w-[85%] shrink-0 snap-center sm:w-[45%] lg:w-[calc(25%-1.5rem)]"
              >
                <ServicioCard {...s} />
              </div>
            ))}
          </div>

          {/* Flecha derecha */}
          <button
            type="button"
            onClick={scrollNext}
            aria-label="Siguiente"
            disabled={current === SERVICIOS.length - 1}
            className="absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition hover:bg-primary hover:text-white disabled:opacity-30 md:block"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {SERVICIOS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Ir al servicio ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                current === i
                  ? "w-8 bg-primary"
                  : "w-2.5 bg-primary/30 hover:bg-primary/60"
              }`}
            />
          ))}
        </div>

        {/* Botón inferior */}
        <div className="mt-20 text-center">
          <a
            href="/servicios"
            className="
              inline-block rounded-full
              bg-gradient-to-r from-primary to-primary-dark
              px-10 py-4
              font-bold text-[20px] text-white
              shadow-lg
              transition-all duration-500
              hover:scale-105 hover:shadow-xl hover:brightness-110
            "
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
