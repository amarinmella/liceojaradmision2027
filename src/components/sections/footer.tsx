import Image from 'next/image';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

const PHONES = [
  { label: 'Secretaría', number: '442122803' },
  { label: 'Inspectoría General', number: '442122804' },
];

const MAPS_EMBED_SRC =
  'https://www.google.com/maps?q=Liceo+Polivalente+Juan+Antonio+R%C3%ADos,+Poeta+Pedro+Prado+1197,+Quinta+Normal,+Santiago&output=embed';

function formatPhone(n: string) {
  return `${n.slice(0, 2)} ${n.slice(2, 5)} ${n.slice(5)}`;
}

export function Footer() {
  return (
    <footer className="bg-navy pt-16 pb-8 px-5 md:px-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <Reveal className="flex flex-col gap-3">
            <Image src="/badge.png" alt="Liceo Juan Antonio Ríos" width={64} height={74} />
            <p className="font-heading font-bold text-white">Liceo Polivalente Juan Antonio Ríos</p>
            <p className="text-blue-100/60 text-sm">
              Formando técnicos y profesionales desde 1946.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="text-xs font-bold tracking-[0.2em] text-gold mb-5">CONTACTO</p>
            <div className="flex flex-col gap-4">
              <a href="mailto:liceojar@sleplosparques.gob.cl" className="flex items-center gap-3 group">
                <IconCircle icon="mail" bg="bg-navy-light" size="sm" />
                <span className="text-blue-100/80 text-sm group-hover:text-gold transition-colors break-all">
                  liceojar@sleplosparques.gob.cl
                </span>
              </a>
              {PHONES.map((p) => (
                <a key={p.number} href={`tel:+56${p.number}`} className="flex items-center gap-3 group">
                  <IconCircle icon="phone" bg="bg-navy-light" size="sm" />
                  <span className="text-blue-100/80 text-sm group-hover:text-gold transition-colors">
                    {formatPhone(p.number)}
                    <span className="text-blue-100/50"> · {p.label}</span>
                  </span>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="text-xs font-bold tracking-[0.2em] text-gold mb-5">UBICACIÓN</p>
            <div className="flex items-start gap-3">
              <IconCircle icon="pin" bg="bg-navy-light" size="sm" />
              <span className="text-blue-100/80 text-sm">
                Poeta Pedro Prado 1197, Quinta Normal, Santiago
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden h-72 md:h-80 border border-white/10">
            <iframe
              src={MAPS_EMBED_SRC}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del Liceo Polivalente Juan Antonio Ríos"
            />
          </div>
        </Reveal>

        <p className="text-center text-blue-100/40 text-xs mt-10">
          © 2027 Liceo Polivalente Juan Antonio Ríos · Quinta Normal, Santiago
        </p>
      </div>
    </footer>
  );
}
