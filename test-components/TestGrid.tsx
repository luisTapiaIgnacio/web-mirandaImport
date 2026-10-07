"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import TestCard, { type Testimonio } from "./TestCard";

const TESTIMONIOS: Testimonio[] = [
  {
    texto:
      "Excelente servicio, el evento salió perfecto y nuestros invitados quedaron encantados.",
    nombre: "Nombre Cliente",
    profesion: "Gerente de Marketing",
    avatar: "/images/nova-btl/test1.jpg",
  },
  {
    texto:
      "Muy profesionales y puntuales. El espejo fotográfico fue lo más comentado de la noche.",
    nombre: "Nombre Cliente",
    profesion: "Organizadora de eventos",
    avatar: "/images/nova-btl/test2.jpg",
  },
  {
    texto:
      "Nos ayudaron con el team building de toda la empresa y los resultados fueron increíbles.",
    nombre: "Nombre Cliente",
    profesion: "Jefa de RR.HH.",
    avatar: "/images/nova-btl/test3.jpg",
  },
  {
    texto:
      "Atención cercana, buena comunicación y un servicio de primer nivel. Los recomiendo.",
    nombre: "Nombre Cliente",
    profesion: "Empresario",
    avatar: "/images/nova-btl/test4.jpg",
  },
];

export default function TestGrid() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const [active, setActive] = useState(1);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [dragging, setDragging] = useState(false);

  const getStep = () => {
    const el = scrollRef.current;
    if (!el || el.children.length < 2) return 0;
    return (
      (el.children[1] as HTMLElement).offsetLeft -
      (el.children[0] as HTMLElement).offsetLeft
    );
  };

  const scrollByStep = useCallback((dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * getStep(), behavior: "smooth" });
  }, []);

  // Posición actual (dots + flechas)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const c = child as HTMLElement;
        const mid = c.offsetLeft - el.offsetLeft + c.clientWidth / 2;
        const d = Math.abs(mid - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
      setAtStart(el.scrollLeft <= 2);
      setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 2);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Autoplay: avanza solo cada 4s, vuelve al inicio al llegar al final
  useEffect(() => {
    const id = setInterval(() => {
      const el = scrollRef.current;
      if (!el || pausedRef.current) return;
      if (el.scrollWidth <= el.clientWidth + 2) return; // nada que mover
      const end = el.scrollLeft + el.clientWidth >= el.scrollWidth - 2;
      if (end) el.scrollTo({ left: 0, behavior: "smooth" });
      else scrollByStep(1);
    }, 4000);
    return () => clearInterval(id);
  }, [scrollByStep]);

  // Arrastrar con el mouse (en celular ya funciona con el dedo)
  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    dragRef.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
    setDragging(true);
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = dragRef.current;
    const el = scrollRef.current;
    if (!d.active || !el) return;
    el.scrollLeft = d.startScroll - (e.clientX - d.startX);
  };
  const endDrag = () => {
    dragRef.current.active = false;
    setDragging(false);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gray-50 py-[70px]">
      <div className="relative mx-auto max-w-[1290px] px-5">
        <p className="mb-1 py-3 text-left font-krona text-sm font-bold uppercase text-[#3a3a3a]">
          Testimonios
        </p>
        <h2 className="font-krona text-4xl uppercase text-[#180d0d] md:text-5xl">
          Lo que dicen nuestros clientes
        </h2>

        <div
          className="relative mt-10 overflow-hidden"
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          onTouchStart={() => (pausedRef.current = true)}
          onTouchEnd={() => (pausedRef.current = false)}
        >
          {/* Track */}
          <div
            ref={scrollRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className={`scrollbar-hide flex gap-8 overflow-x-auto py-2 ${
              dragging
                ? "cursor-grabbing select-none"
                : "cursor-grab snap-x snap-mandatory"
            }`}
          >
            {TESTIMONIOS.map((t, i) => (
              <div
                key={`${t.nombre}-${i}`}
                className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(33.333%-1.34rem)]"
              >
                <TestCard {...t} active={i === active} />
              </div>
            ))}
          </div>

        </div>

        {/* Flechas abajo, centradas (como el modelo) */}
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            aria-label="Anterior"
            disabled={atStart}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-white disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            aria-label="Siguiente"
            disabled={atEnd}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary text-primary transition hover:bg-primary hover:text-white disabled:opacity-30"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}