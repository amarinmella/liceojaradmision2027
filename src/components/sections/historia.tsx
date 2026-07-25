import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

const TIMELINE = [
  { year: '1946', event: 'Fundación como liceo experimental de educación mixta' },
  { year: '1965', event: 'Se consolida como Liceo Humanista-Científico' },
  { year: '1979', event: 'Fusión con el Liceo Nocturno — doble jornada' },
  { year: '1991', event: 'Nace el Liceo Polivalente: Educación Técnico-Profesional' },
  { year: '1994', event: 'Ingreso al Programa MECE de modernización' },
  { year: '2026', event: 'Referente en formación técnica de la comuna' },
];

export function Historia() {
  return (
    <section id="historia" className="py-20 md:py-28 px-5 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Nuestra historia" title="80 años de trayectoria educativa" />
        </Reveal>

        <div className="relative mt-14 pl-8 md:pl-10">
          <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-0.5 bg-slate-200" />

          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06} className="relative mb-10 last:mb-0">
              <span className="absolute -left-8 md:-left-10 top-1.5 w-4 h-4 rounded-full bg-gold ring-4 ring-white shadow" />
              <p className="font-heading font-bold text-xl text-gold-dark">{item.year}</p>
              <p className="text-slate-700 mt-1">{item.event}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
