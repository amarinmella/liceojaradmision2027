import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const PIE = [
  'Apoyo especializado a estudiantes con Necesidades Educativas Especiales (NEE)',
  'Trabajo colaborativo con el equipo docente dentro del aula regular',
  'Seguimiento personalizado del proceso de aprendizaje',
  'Estrategias de enseñanza diversificada',
];

const CONVIVENCIA = [
  { icon: 'comments', t: 'Coordinadora de Convivencia Escolar', d: 'Promueve un clima escolar positivo y gestiona la resolución de conflictos' },
  { icon: 'brain', t: 'Psicólogo/a', d: 'Acompañamiento emocional y apoyo psicológico a los estudiantes' },
  { icon: 'heart', t: 'Trabajador/a Social', d: 'Vínculo con las familias y apoyo social a la comunidad escolar' },
];

export function ApoyoBienestar() {
  return (
    <section id="apoyo" className="py-20 md:py-28 px-5 md:px-8 bg-bg-soft scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-14">
          <Reveal>
            <SectionHeading kicker="Acompañamiento integral" title="Apoyo y Bienestar Estudiantil" />
          </Reveal>
          <Reveal delay={0.1}>
            <IconCircle icon="handshelping" bg="bg-gold" size="lg" />
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-lg shadow-navy/5 overflow-hidden h-full">
              <div className="bg-navy-light px-6 py-4">
                <p className="text-white font-bold text-sm tracking-wide">PROGRAMA DE INTEGRACIÓN ESCOLAR (PIE)</p>
              </div>
              <ul className="px-6 py-6 space-y-4">
                {PIE.map((t) => (
                  <li key={t} className="flex gap-3 text-slate-700">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-navy rounded-2xl shadow-lg shadow-navy/20 overflow-hidden h-full">
              <div className="bg-gold px-6 py-4">
                <p className="text-navy font-bold text-sm tracking-wide">EQUIPO DE CONVIVENCIA EDUCATIVA</p>
              </div>
              <div className="px-6 py-6 space-y-6">
                {CONVIVENCIA.map((c) => (
                  <div key={c.t} className="flex gap-4">
                    <IconCircle icon={c.icon} bg="bg-gold-dark" />
                    <div>
                      <p className="font-bold text-white">{c.t}</p>
                      <p className="text-sm text-blue-100/70 mt-1">{c.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
