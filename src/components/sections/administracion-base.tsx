import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const COMPS = [
  { icon: 'invoice', t: 'Información contable básica' },
  { icon: 'clipboard', t: 'Programas de actividades operativas' },
  { icon: 'chart', t: 'Seguimiento e informes de gestión' },
  { icon: 'handshake', t: 'Atención a clientes internos y externos' },
  { icon: 'laptop', t: 'Herramientas tecnológicas de gestión' },
];

export function AdministracionBase() {
  return (
    <section className="py-20 md:py-28 px-5 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-14">
          <Reveal>
            <SectionHeading kicker="Especialidad técnico-profesional" title="Administración — Formación base, 3° Medio" />
          </Reveal>
          <Reveal delay={0.1}>
            <IconCircle icon="briefcase" bg="bg-gold" size="lg" />
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {COMPS.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.06}>
              <div className="bg-bg-soft rounded-2xl p-6 h-full flex flex-col items-center text-center gap-4">
                <IconCircle icon={c.icon} bg="bg-navy-light" />
                <p className="text-sm font-bold text-navy leading-snug">{c.t}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="bg-navy rounded-2xl px-6 py-8 md:px-10 md:py-9 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p className="text-gold font-bold text-sm tracking-wide mb-2">
                EN 4° MEDIO, CADA ESTUDIANTE ELIGE UNA MENCIÓN
              </p>
              <p className="text-blue-100/80 text-sm max-w-md">
                Dos caminos, una misma base sólida en gestión empresarial.
              </p>
            </div>

            <div className="flex gap-8">
              <a href="#logistica" className="flex flex-col items-center gap-2 group">
                <IconCircle icon="truck" bg="bg-gold group-hover:bg-gold-dark transition-colors" size="lg" />
                <span className="text-white text-sm font-bold">Logística</span>
                <span className="text-blue-100/60 text-xs">Mención</span>
              </a>
              <a href="#rrhh" className="flex flex-col items-center gap-2 group">
                <IconCircle icon="users" bg="bg-gold group-hover:bg-gold-dark transition-colors" size="lg" />
                <span className="text-white text-sm font-bold">RR.HH.</span>
                <span className="text-blue-100/60 text-xs">Mención</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
