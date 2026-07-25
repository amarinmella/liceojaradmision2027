import Image from 'next/image';
import { Reveal } from '@/components/ui/reveal';

export function CTA() {
  return (
    <section id="postula" className="relative py-24 md:py-32 px-5 md:px-8 bg-navy overflow-hidden scroll-mt-16">
      <div className="absolute top-0 left-0 w-16 h-16 md:w-20 md:h-20 bg-gold" />
      <div className="absolute bottom-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gold" />

      <div className="max-w-3xl mx-auto text-center relative">
        <Reveal>
          <Image
            src="/badge.png"
            alt="Liceo Juan Antonio Ríos"
            width={200}
            height={230}
            className="mx-auto mb-8 w-32 md:w-40 h-auto"
          />
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-gold mb-5 leading-tight">
            Únete a 80 años de excelencia
          </h2>
          <p className="text-white/90 text-lg mb-10">
            Forma parte del Liceo Polivalente Juan Antonio Ríos
          </p>

          <a
            href="https://www.sistemadeadmisionescolar.cl/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-gold hover:bg-gold-dark text-navy font-bold text-sm tracking-wide px-8 py-4 transition-colors"
          >
            POSTULA EN SISTEMADEADMISIONESCOLAR.CL
          </a>

          <p className="text-blue-100/50 text-sm mt-12">
            Departamento de Admisión · Liceo Juan Antonio Ríos · Quinta Normal, Santiago
          </p>
        </Reveal>
      </div>
    </section>
  );
}
