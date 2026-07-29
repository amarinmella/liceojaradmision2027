import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const RECURSOS = [
  { icon: 'gradcap', n: '2', l: 'Profesoras Diferenciales' },
  { icon: 'brain', n: '1', l: 'Psicóloga' },
  { icon: 'heart', n: '2', l: 'Aulas de Recursos (Sala de la Calma)' },
];

export function PieDetalle() {
  return (
    <section id="pie" className="py-20 md:py-28 px-5 md:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Equipo de Inclusión Educativa" title="Programa de Integración Escolar (PIE)" />
        </Reveal>

        <div className="grid lg:grid-cols-[minmax(0,42%)_1fr] gap-6 mt-14">
          <div className="space-y-5">
            {RECURSOS.map((r, i) => (
              <Reveal key={r.l} delay={i * 0.08}>
                <div className="bg-bg-soft rounded-2xl p-5 flex items-center gap-5">
                  <IconCircle icon={r.icon} bg="bg-navy-light" size="lg" />
                  <div className="flex items-baseline gap-3">
                    <span className="font-heading font-bold text-4xl text-gold-dark">{r.n}</span>
                    <span className="font-bold text-navy text-sm leading-tight">{r.l}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={0.1}>
              <div className="bg-bg-soft rounded-2xl p-6 md:p-8">
                <p className="text-xs font-bold tracking-[0.15em] text-gold-dark mb-3">
                  ¿QUÉ HACE EL ÁREA DE INCLUSIÓN?
                </p>
                <p className="text-slate-700 leading-relaxed">
                  El área de Inclusión —que atiende la diversidad y las Necesidades Educativas
                  Especiales (NEE)— inició su funcionamiento sistemático en mayo de 2025 con una
                  Profesora Diferencial. Actualmente cuenta con PIE en Primeros Medios (2026) y
                  entrega atención psicopedagógica a las NEE diagnosticadas, abordadas de
                  distintas formas según las necesidades de apoyo y la normativa vigente.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="bg-navy rounded-2xl overflow-hidden">
                <div className="bg-gold px-6 py-3">
                  <p className="text-navy font-bold text-sm tracking-wide">
                    PROYECTO &ldquo;LECTURA FLASH&rdquo; · 1° Y 2° MEDIO
                  </p>
                </div>
                <p className="text-white/90 px-6 py-5 leading-relaxed">
                  Fortalece la lectura oral, la comprensión y el gusto por la lectura, como aporte
                  pedagógico transversal a todos los aprendizajes.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="border-l-2 border-gold-dark pl-4">
                <p className="font-bold text-navy">Alejandra Flores Muñoz</p>
                <p className="text-sm text-muted italic">
                  Profesora Diferencial · Coordinadora de Inclusión Educativa
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
