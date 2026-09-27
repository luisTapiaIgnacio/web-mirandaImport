import Image from "next/image";

const REDES = [
  {
    nombre: "Instagram",
    href: "https://www.instagram.com/nova_btl_eventos",
    path: "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z",
    viewBox: "0 0 448 512",
  },
  {
    nombre: "TikTok",
    href: "https://www.tiktok.com/@nova.c35",
    path: "M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z",
    viewBox: "0 0 448 512",
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-5 pt-[80px] pb-8">
      {/* 🎨 Fondo oscuro con imagen */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/nova-btl/bg-black.jpg')" }}
      />
      

      <div className="relative mx-auto max-w-[1400px] text-center">
        {/* Título principal */}
        <h2 className="font-krona text-2xl uppercase leading-tight tracking-wide text-white! md:text-3xl">
          Diseñamos <span className="text-pink">experiencias memorables</span> para tu marca
        </h2>

        {/* Grid de 3 columnas */}
        <div className="my-12 grid grid-cols-1 gap-10 text-left md:grid-cols-3">
          {/* Ubicación */}
          <div>
            <h3 className="mb-4 font-krona text-base uppercase tracking-wide text-white">
              Ubicación
            </h3>
            <p className="font-poppins text-sm leading-relaxed text-white/80">
              Lima, Perú
            </p>
            <p className="font-poppins text-sm leading-relaxed text-white/70">
              Producción de eventos corporativos y activaciones BTL a nivel nacional
            </p>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 font-krona text-base uppercase tracking-wide text-white">
              Contáctanos
            </h3>
            <p className="font-poppins text-sm leading-relaxed text-white/80">
              <a
                href="mailto:nova.corporativo25@gmail.com"
                className="transition-colors hover:text-pink"
              >
                nova.corporativo25@gmail.com
              </a>
            </p>
            <p className="font-poppins text-sm leading-relaxed text-white/80">
              <a
                href="tel:+51989661090"
                className="transition-colors hover:text-pink"
              >
                +51 989 661 090
              </a>
            </p>
          </div>

          {/* Redes */}
          <div>
            <h3 className="mb-4 font-krona text-base uppercase tracking-wide text-white">
              Síguenos
            </h3>
            <ul className="flex list-none flex-col gap-3 p-0">
              {REDES.map((red) => (
                <li key={red.nombre}>
                  <a
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex items-center gap-3
                      font-poppins text-sm text-white/80
                      transition-colors duration-300
                      hover:text-pink
                    "
                  >
                    <span className="flex h-6 w-6 items-center justify-center text-white transition-colors group-hover:text-pink">
                      <svg
                        width="18"
                        height="18"
                        viewBox={red.viewBox}
                        fill="currentColor"
                      >
                        <path d={red.path} />
                      </svg>
                    </span>
                    {red.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Separador */}
        <hr className="border-t border-white/15" />

        {/* Copyright */}
       <p className="mt-6 font-poppins text-xs tracking-wide text-white/60 md:text-sm">
  © {new Date().getFullYear()} Nova BTL y Eventos. Todos los derechos reservados.
</p>


<p className="mt-2 whitespace-nowrap font-poppins text-[11px] tracking-wide text-white/50">
  | Sitio web diseñado y desarrollado por:{" "}
  <a
    href="https://www.facebook.com/share/1AUShyLaTm/"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-white/80 transition-colors hover:text-pink"
  >
    Z-CORP
  </a>{" "}
  |{" "}
  <a
    href="https://wa.me/51999002030?text=Hola,%20vi%20la%20web%20de%20Nova%20BTL%20y%20quiero%20informaci%C3%B3n%20sobre%20dise%C3%B1o%20web"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-white/80 transition-colors hover:text-pink"
  >
    999002030
  </a>
</p>
      </div>
    </footer>
  );
}