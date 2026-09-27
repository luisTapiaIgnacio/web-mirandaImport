import Image from "next/image";

const BENEFICIOS = [
  { highlight: "Acompañamiento", texto: "cercano." },
  { pre: "Proveedores ", highlight: "confiables y competitivos." },
  { highlight: "Optimización", texto: "del presupuesto." },
  { highlight: "Comunicación", texto: "constante." },
  { pre: "Ejecución ", highlight: "profesional." },
];

function CheckIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="12" cy="12" r="10" stroke="#c04493" strokeWidth="1.8" />
      <path
        d="M7.5 12.5l3 3 6-6.5"
        stroke="#c04493"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PorQueSection() {
  return (
    <section className="relative w-full overflow-hidden py-[100px]">
      {/* 🎨 Fondo oscuro */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/nova-btl/bg-black.jpg')" }}
      />
      <div className="absolute inset-0 -z-10 bg-black/60" />

      <div className="relative mx-auto max-w-[1290px] px-5">
        {/* Encabezado: título izquierda + párrafo derecha */}
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <h2 className="
            font-krona text-3xl uppercase leading-tight tracking-wide text-pink!
            md:text-5xl
            [text-shadow:0.5px_0_currentColor,-0.5px_0_currentColor]
          ">
            ¿Por qué contratar a Nova?
          </h2>

          <p className="font-poppins text-base leading-relaxed tracking-wide text-white/80 md:text-right md:text-lg">
            Más que proveedores, somos un aliado estratégico que se involucra
            en cada detalle para asegurar resultados alineados a tu negocio.
          </p>
        </div>

        {/* Lista de beneficios (centrada) */}
        <ul className="mx-auto mt-16 max-w-xl list-none space-y-5 p-0 text-left">
          {BENEFICIOS.map((b, i) => (
            <li key={i} className="flex items-center gap-4">
              <CheckIcon />
              <span className="font-poppins text-base font-bold tracking-wide text-white md:text-lg">
                {b.pre}
                <span className="text-cyan-alt">{b.highlight}</span> {b.texto}
              </span>
            </li>
          ))}
        </ul>

        {/* Botón */}
        <div className="mt-14 text-center">
          <a
            href="/sobre-nosotros"
            className="
              inline-block rounded-xl
              bg-pink px-10 py-3.5
              font-poppins text-base font-semibold text-white
              transition-all duration-300
              hover:scale-105 hover:bg-pink/90
              focus:outline-none focus:ring-2 focus:ring-pink/50 focus:ring-offset-2 focus:ring-offset-transparent
            "
          >
            Ver más...
          </a>
        </div>
      </div>
    </section>
  );
}