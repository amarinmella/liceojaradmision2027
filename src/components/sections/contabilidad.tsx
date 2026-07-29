import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const INGRESO = [
  'Razonamiento lógico-matemático',
  'Orden, rigurosidad y atención al detalle',
  'Buena comprensión lectora',
  'Ética y responsabilidad',
  'Interés por herramientas digitales',
];

const EGRESO = [
  'Leer y procesar información contable (NIC / NIIF)',
  'Usar softwares contables de uso frecuente en empresas',
  'Tramitar documentación tributaria nacional e internacional',
  'Controlar inventario, caja y activos fijos',
  'Comunicar información contable a clientes internos y externos',
];

export function Contabilidad() {
  return (
    <section id="especialidades" className="py-20 md:py-28 px-5 md:px-8 bg-bg-soft scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-14">
          <Reveal>
            <SectionHeading kicker="Especialidad técnico-profesional" title="Contabilidad — 3° y 4° Medio" />
          </Reveal>
          <Reveal delay={0.1}>
            <IconCircle icon="invoice" bg="bg-gold" size="lg" />
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-white rounded-2xl shadow-lg shadow-navy/5 overflow-hidden h-full">
              <div className="bg-navy-light px-6 py-4">
                <p className="text-white font-bold text-sm tracking-wide">PERFIL DE INGRESO</p>
              </div>
              <ul className="px-6 py-6 space-y-4">
                {INGRESO.map((t) => (
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
                <p className="text-navy font-bold text-sm tracking-wide">AL EGRESAR, EL ESTUDIANTE PODRÁ</p>
              </div>
              <ul className="px-6 py-6 space-y-4">
                {EGRESO.map((t) => (
                  <li key={t} className="flex gap-3 text-white/90">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-gold px-6 py-5 text-center mt-6">
            <p className="text-navy font-bold text-sm md:text-base">
              Campo laboral: estudios contables, auditorías, departamentos de finanzas y empresas de todo tamaño
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
