import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const DEST = [
  {
    icon: 'university',
    t: 'Universidades',
    d: 'Carreras como Ingeniería Comercial, Administración de Empresas y Contador Auditor',
    className: 'bg-navy',
    iconBg: 'bg-gold',
    text: 'text-blue-100/80',
  },
  {
    icon: 'gradcap',
    t: 'CFT e Institutos Profesionales',
    d: 'Especializaciones técnicas que profundizan la formación TP del liceo',
    className: 'bg-navy-light',
    iconBg: 'bg-gold',
    text: 'text-blue-100/80',
  },
  {
    icon: 'briefcase',
    t: 'Mundo laboral',
    d: 'Ingreso directo al mercado del trabajo con certificación y práctica profesional',
    className: 'bg-gold-dark',
    iconBg: 'bg-navy',
    text: 'text-navy/80',
  },
];

export function EducacionSuperior() {
  return (
    <section id="futuro" className="py-20 md:py-28 px-5 md:px-8 bg-bg-soft scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Proyección de nuestros egresados" title="¿Hacia dónde van tras salir del liceo?" align="center" />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {DEST.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.1}>
              <div className={`rounded-2xl p-8 h-full flex flex-col items-center text-center gap-5 ${d.className}`}>
                <IconCircle icon={d.icon} bg={d.iconBg} size="lg" />
                <h3 className="font-heading font-bold text-xl text-white">{d.t}</h3>
                <span className="w-10 h-0.5 bg-white/40" />
                <p className={`text-sm ${d.text}`}>{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
