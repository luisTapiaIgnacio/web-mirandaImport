"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Complementa tu Evento", href: "/complementa-tu-evento" },
  { label: "Portafolio", href: "/portafolio" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Contáctanos", href: "/contactanos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Detectar scroll para activar el fondo del header
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll cuando el offcanvas está abierto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`
       sticky top-0 z-50
    transition-all duration-300 ease-out
    ${
      scrolled
        ? "bg-primary/30 backdrop-blur-xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.8)] border-b border-white/10"
        : "bg-primary border-b border-transparent"
    }
      `}
    >
      {/* --- Desktop --- */}
      <div className="hidden min-h-[100px] items-center md:flex">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between gap-6 px-5">
          {/* Logo */}
          <Link href="/" className="block shrink-0">
            <Image
              src="/images/nova-btl/logo-mirada.png"
              alt="Miranda Import"
              width={220}
              height={60}
              className="max-h-[90px] w-auto"
              priority
            />
          </Link>

          {/* Menú central con separadores */}
          <nav aria-label="Menú principal" className="flex-1">
            <ul className="flex list-none items-center justify-center gap-0 p-0">
              {NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <li key={link.href} className="flex items-center">
                    <Link
                      href={link.href}
                      className={`
                        group relative px-4 py-2.5
                        rounded-full
                        font-poppins text-[15px] font-medium capitalize
                        transition-all duration-300
                        ${
                          isActive
                            ? "text-white"
                            : "text-white/70 hover:bg-white/[0.08] hover:text-white"
                        }
                      `}
                    >
                      {link.label}

                      {/* Línea inferior */}
                      <span
                        className={`
                          absolute bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-pink
                          transition-all duration-300
                          ${
                            isActive
                              ? "w-6 opacity-100"
                              : "w-0 opacity-0 group-hover:w-6 group-hover:opacity-100"
                          }
                        `}
                      />
                    </Link>

                    {/* Separador vertical */}
                    {i < NAV_LINKS.length - 1 && (
                      <span
                        className="h-4 w-px bg-white/15"
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Botón Suscríbete */}
          <Link
            href="/suscribete"
            className="
              group shrink-0 inline-flex items-center gap-2
              rounded-full px-6 py-2.5
              bg-primary-light
              font-poppins text-sm font-bold text-white
              shadow-lg shadow-primary-glow/30
              transition-all duration-300
              hover:scale-105 hover:shadow-primary-glow/50
              focus:outline-none focus:ring-2 focus:ring-primary-glow/50 focus:ring-offset-2 focus:ring-offset-primary
            "
          >
            Suscríbete
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* --- Mobile --- */}
      <div className="flex min-h-[70px] items-center md:hidden">
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5">
          <Link href="/">
            <Image
              src="/images/nova-btl/logo-mirada.png"
              alt="Nova BTL y eventos"
              width={160}
              height={44}
              className="w-auto max-h-20"
            />
          </Link>
          <button
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-[1000] cursor-pointer border-none bg-transparent text-white"
          >
            {open ? (
              /* ❌ Ícono X */
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300"
              >
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              /* ☰ Ícono hamburguesa */
              <svg
                width="18"
                height="14"
                viewBox="0 0 18 14"
                aria-hidden="true"
                className="transition-transform duration-300"
              >
                <rect
                  y="0"
                  width="18"
                  height="1.7"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  y="6.15"
                  width="18"
                  height="1.7"
                  rx="1"
                  fill="currentColor"
                />
                <rect
                  y="12.3"
                  width="18"
                  height="1.7"
                  rx="1"
                  fill="currentColor"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* --- Offcanvas móvil --- */}
      <div
        className={
          "fixed top-0 right-0 bottom-0 z-[999] w-4/5 max-w-[360px] overflow-y-auto rounded-l-3xl bg-[rgba(5,10,25,0.92)] backdrop-blur-xl transition-transform duration-300 ease-out " +
          (open
            ? "translate-x-0 pointer-events-auto"
            : "translate-x-full pointer-events-none")
        }
      >
        <div className="flex justify-end p-5">
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="cursor-pointer border-none bg-transparent text-white"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        <ul className="list-none px-5 pb-8">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href} className="mb-3">
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`
                    flex items-center justify-between rounded-2xl border px-5 py-[18px]
                    text-xs font-bold transition-colors duration-300
                    ${
                      isActive
                        ? "border-pink/40 bg-gradient-to-r from-pink/20 to-pink/[0.08] text-white"
                        : "border-white/[0.06] bg-white/[0.03] text-white hover:border-pink/40 hover:bg-gradient-to-r hover:from-pink/20 hover:to-pink/[0.08]"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}

          <li className="mt-6">
            <Link
              href="/suscribete"
              onClick={() => setOpen(false)}
              className="
                group flex items-center justify-center gap-2
                rounded-2xl px-5 py-[18px]
                bg-primary-light
                font-poppins text-sm font-semibold text-white
                shadow-lg shadow-primary-glow/30
                transition-all duration-300
                hover:scale-[1.02] hover:shadow-primary-glow/50
              "
            >
              Suscríbete
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-0.5"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </div>

      {/* Fondo oscuro al abrir el offcanvas */}
      {open && (
        <div
          aria-hidden="true"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-[998] bg-black/50 md:hidden"
        />
      )}
    </header>
  );
}
