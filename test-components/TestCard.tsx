import Image from "next/image";

export type Testimonio = {
  texto: string;
  nombre: string;
  profesion: string;
  avatar?: string; // opcional: si no hay imagen, se muestran las iniciales
};

type Props = Testimonio & { active?: boolean };

export default function TestCard({
  texto,
  nombre,
  profesion,
  avatar,
  active = false,
}: Props) {
  const iniciales = nombre
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article
      className={`h-full rounded-sm p-8 transition-colors duration-500 ${
        active ? "bg-primary text-white" : "bg-transparent text-[#3a3a3a]"
      }`}
    >
      {/* Comillas (dentro de la card, no se salen del contenedor) */}
      <svg
        width="48"
        height="40"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`mb-4 transition-colors duration-500 ${
          active ? "text-white/70" : "text-primary"
        }`}
      >
        <path d="M9.5 5C6.5 6.2 4 9 4 13v6h6v-6H7c0-2 1.2-3.6 3.2-4.4L9.5 5zm9 0c-3 1.2-5.5 4-5.5 8v6h6v-6h-3c0-2 1.2-3.6 3.2-4.4L18.5 5z" />
      </svg>

      <p className="mb-6 text-base leading-relaxed">{texto}</p>

      <div className="flex items-center gap-4">
        {avatar ? (
          <Image
            src={avatar}
            alt={nombre}
            width={60}
            height={60}
            className="h-[60px] w-[60px] shrink-0 rounded-full object-cover"
          />
        ) : (
          <div
            className={`flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full font-krona text-sm font-bold ${
              active ? "bg-white/20 text-white" : "bg-primary/10 text-primary"
            }`}
          >
            {iniciales}
          </div>
        )}
        <div>
          <h5
            className={`font-krona text-sm font-bold uppercase ${
              active ? "text-white" : "text-[#180d0d]"
            }`}
          >
            {nombre}
          </h5>
          <span className={active ? "text-white/80" : "text-[#3a3a3a]/70"}>
            {profesion}
          </span>
        </div>
      </div>
    </article>
  );
}