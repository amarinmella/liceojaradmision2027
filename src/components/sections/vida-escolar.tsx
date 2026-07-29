import Image from 'next/image';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal } from '@/components/ui/reveal';

const PHOTOS = [
  { src: '/vida-aniversario.png', caption: 'Desfile Aniversario 1946' },
  { src: '/vida-dia-del-libro.png', caption: 'Día del Libro' },
  { src: '/vida-ajedrez.png', caption: 'Torneo de Ajedrez' },
  { src: '/vida-informatica-1.png', caption: 'Taller de Informática' },
  { src: '/vida-informatica-2.png', caption: 'Laboratorio de Computación' },
  { src: '/vida-escalera.png', caption: 'Escalón por escalón hacia el éxito' },
];

export function VidaEscolar() {
  return (
    <section id="vida-escolar" className="py-20 md:py-28 px-5 md:px-8 bg-white scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading kicker="Nuestra comunidad" title="Vida Escolar en Imágenes" align="center" />
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 mt-14">
          {PHOTOS.map((p, i) => (
            <Reveal key={p.src} delay={i * 0.06}>
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg shadow-navy/10 group">
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 via-navy/40 to-transparent px-3 pt-8 pb-3">
                  <p className="text-white text-xs md:text-sm font-bold leading-tight">{p.caption}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
