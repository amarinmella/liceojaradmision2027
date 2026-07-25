import Image from 'next/image';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const ITEMS = [
  {
    icon: 'gradcap',
    t: 'Acceso amplio a la educación superior',
    d: 'Preparación para rendir la PAES y postular a distintas carreras',
  },
  {
    icon: 'bulb',
    t: 'Pensamiento crítico',
    d: 'Análisis, argumentación y resolución de problemas',
  },
  {
    icon: 'university',
    t: 'Exploración vocacional',
    d: 'Orientación temprana hacia intereses universitarios',
  },
  {
    icon: 'book',
    t: 'Formación ciudadana',
    d: 'Competencias para la vida en sociedad y el mundo laboral',
  },
];

export function HumanistaCientifico() {
  return (
    <section id="humanista" className="relative py-20 md:py-28 px-5 md:px-8 bg-navy overflow-hidden scroll-mt-16">
      <Image
        src="/badge.png"
        alt=""
        width={420}
        height={483}
        className="absolute -bottom-16 -right-16 w-72 md:w-96 opacity-10 pointer-events-none select-none"
      />

      <div className="max-w-5xl mx-auto relative">
        <Reveal>
          <p className="text-xs md:text-sm font-bold tracking-[0.2em] text-gold mb-3">
            EDUCACIÓN MEDIA CIENTÍFICO-HUMANISTA
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-white mb-14 leading-tight max-w-2xl">
            Formación integral, con rumbo a la universidad
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
          {ITEMS.map((item, i) => (
            <Reveal key={item.t} delay={i * 0.08} className="flex gap-4">
              <IconCircle icon={item.icon} bg="bg-gold" />
              <div>
                <p className="text-white font-bold">{item.t}</p>
                <p className="text-blue-100/70 text-sm mt-1">{item.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
