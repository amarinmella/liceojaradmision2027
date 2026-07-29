import Image from 'next/image';
import { Reveal } from '@/components/ui/reveal';

const STATS = [
  { n: '80', l: 'Años de trayectoria' },
  { n: '3+1', l: 'Especialidades técnicas y HC' },
  { n: 'JEC', l: 'Jornada Escolar Completa' },
];

const INFRAESTRUCTURA = [
  'Laboratorios de Ciencias (Física, Química y Biología)',
  'Laboratorio de Computación',
  'Sala de Diseño y Arquitectura',
  'Sala de Emprendimiento',
  'Sala de Inteligencia Artificial',
  'Cancha techada',
  'Casino para estudiantes',
  'WiFi en todo el establecimiento',
];

const TALLERES = [
  'Instrumentación Musical',
  'Vóleibol',
  'Básquetbol',
  'Baby Fútbol',
  'Teatro',
  'Folclor',
  'Artes Visuales',
];

export function QuienesSomos() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="grid lg:grid-cols-[minmax(0,42%)_1fr]">
        <div className="relative bg-navy px-8 py-16 md:px-12 md:py-20 overflow-hidden">
          <Image
            src="/badge.png"
            alt=""
            width={320}
            height={368}
            className="absolute -bottom-10 -right-10 w-64 opacity-10 pointer-events-none select-none"
          />
          <Reveal>
            <p className="text-xs font-bold tracking-[0.2em] text-gold mb-3">QUIÉNES SOMOS</p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-white mb-10 leading-tight">
              Un liceo con
              <br />
              identidad propia
            </h2>
          </Reveal>

          <div className="space-y-8">
            {STATS.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08} className="flex items-baseline gap-4">
                <span className="font-heading font-bold text-4xl md:text-5xl text-gold">{s.n}</span>
                <span className="text-xs md:text-sm font-bold text-blue-100/80 uppercase tracking-wide leading-tight">
                  {s.l}
                </span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="px-8 py-16 md:px-14 md:py-20">
          <Reveal>
            <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-4">
              Ubicados en Quinta Normal, Santiago
            </h3>
            <p className="text-muted max-w-2xl mb-12">
              Formamos técnicos de nivel medio y estudiantes con proyección a la educación
              superior, con foco en habilidades del siglo XXI.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mb-10">
            <p className="text-xs font-bold tracking-[0.2em] text-gold-dark mb-4">INFRAESTRUCTURA</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {INFRAESTRUCTURA.map((item) => (
                <div key={item} className="flex gap-3 text-slate-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-xs font-bold tracking-[0.2em] text-gold-dark mb-4">TALLERES EXTRACURRICULARES</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
              {TALLERES.map((item) => (
                <div key={item} className="flex gap-3 text-slate-700 text-sm">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
