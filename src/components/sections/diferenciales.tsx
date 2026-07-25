import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const DIFS = [
  { icon: 'cert', t: 'Certificación ERP Defontana', d: 'Salida laboral inmediata con software real de empresas' },
  { icon: 'robot', t: 'Inteligencia Artificial aplicada', d: 'IA integrada al aprendizaje académico y laboral' },
  { icon: 'laptop', t: 'Oficios digitales', d: 'Desarrollo web, apps y automatización' },
  { icon: 'flask', t: 'Laboratorios de Ciencias', d: 'Física, Química y Biología equipados' },
  { icon: 'chart', t: 'Competencias siglo XXI', d: 'Pensamiento crítico, datos y trabajo colaborativo' },
  { icon: 'handshake', t: 'Equipo docente comprometido', d: 'Acompañamiento cercano durante toda la especialidad' },
];

export function Diferenciales() {
  return (
    <section id="diferenciales" className="py-20 md:py-28 px-5 md:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Nuestro sello" title="¿Por qué elegir el JAR?" align="center" />
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14">
          {DIFS.map((d, i) => (
            <Reveal key={d.t} delay={i * 0.06}>
              <div className="bg-bg-soft rounded-2xl p-7 h-full flex flex-col items-center text-center gap-4 hover:shadow-lg hover:shadow-navy/10 transition-shadow">
                <IconCircle icon={d.icon} bg="bg-gold-dark" size="lg" />
                <p className="font-bold text-navy">{d.t}</p>
                <p className="text-sm text-muted">{d.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
