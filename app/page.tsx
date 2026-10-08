import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiciosCarousel from "@/components/ServiciosGrid";
/*import ComplementaSection from "@/components/ComplementaSection"; */
import CelebraSection from "@/components/CelebraSecction";
import ExperienciaSection from "@/components/ExperienciaSection";
import ComoReservarSection from "@/components/ConservarSection";
import PorQueSection from "@/components/PorQueSection";
import ProcesoSection from "@/components/ProcesoSection";
import EnvioNacional from "@/components/EnvioNacional";

import AliadosCarousel from "@/components/AliadosCarousel";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";

const MARQUEE_ITEMS = [
  "Diseño de Eventos",
  "Estrategia BTL",
  "Team Building",
  "Merchandising & Branding",
];

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServiciosCarousel />
      <CelebraSection />
      <ExperienciaSection />
      <ComoReservarSection/>
      <EnvioNacional/>
      <Marquee items={MARQUEE_ITEMS} variant="light" />
      <PorQueSection />
      <ProcesoSection />
      <AliadosCarousel />
      <Footer />
    </>
  );
}
