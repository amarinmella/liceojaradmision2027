import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Historia } from "@/components/sections/historia";
import { QuienesSomos } from "@/components/sections/quienes-somos";
import { ApoyoBienestar } from "@/components/sections/apoyo-bienestar";
import { PieDetalle } from "@/components/sections/pie-detalle";
import { Contabilidad } from "@/components/sections/contabilidad";
import { AdministracionBase } from "@/components/sections/administracion-base";
import { Logistica } from "@/components/sections/logistica";
import { RecursosHumanos } from "@/components/sections/recursos-humanos";
import { HumanistaCientifico } from "@/components/sections/humanista-cientifico";
import { Diferenciales } from "@/components/sections/diferenciales";
import { VidaEscolar } from "@/components/sections/vida-escolar";
import { EducacionSuperior } from "@/components/sections/educacion-superior";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Historia />
        <QuienesSomos />
        <ApoyoBienestar />
        <PieDetalle />
        <Contabilidad />
        <AdministracionBase />
        <Logistica />
        <RecursosHumanos />
        <HumanistaCientifico />
        <Diferenciales />
        <VidaEscolar />
        <EducacionSuperior />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
