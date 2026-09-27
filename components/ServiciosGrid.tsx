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
    imagen: "/images/nova-btl/serv2.png",
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
];

export default function ServiciosGrid() {
  return (
    <section className="w-full bg-[#c2f6fe9a] py-[70px]">
      <div className="mx-auto max-w-[1290px] px-5 ">
        <p className="mb-1 text-sm font-bold text-[#3a3a3a] uppercase text-left py-3 font-krona">
          Soluciones diseñadas para tu negocio
        </p>
        <h2 className="font-krona text-4xl text-[#180d0d] uppercase md:text-5xl">
          ¿Cómo te ayudamos?
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICIOS.map((s) => (
            <ServicioCard key={s.titulo} {...s} />
          ))}
        </div>

       <div className="mt-20 text-center">
         <a
  href="/servicios"
  className="
  inline-block rounded-full
  bg-pink
  px-10 py-4 font-bold
  font-roboto  text-[20px]  text-white
  shadow-lg
  transition-all duration-500
  hover:bg-gradient-to-r hover:from-[#7fffd4] hover:to-[#ff69ff]
  hover:font-bold hover:text-black
  hover:scale-105 hover:shadow-xl

  "
>
  Ver servicios
</a>
       </div>
      </div>
    </section>
  );
}