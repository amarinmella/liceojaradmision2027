'use client';

import ScrollExpandMedia from '@/components/blocks/scroll-expansion-hero';
import { IconCircle } from '@/components/ui/icon-circle';

const FEATURES = [
  { icon: 'briefcase', t: 'Especialidades TP', d: 'Contabilidad y Administración (Logística / RR.HH.)' },
  { icon: 'gradcap', t: 'Científico-Humanista', d: 'Ruta directa hacia la universidad' },
  { icon: 'flask', t: 'Laboratorios de Ciencias', d: 'Física, Química y Biología equipados' },
  { icon: 'laptop', t: 'Inteligencia Artificial', d: 'Formación en IA aplicada al aula y al trabajo' },
];

export function Hero() {
  return (
    <div id="inicio">
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc="/hero-media.png"
        bgImageSrc="/hero-bg.png"
        title="Admisión 2027"
        date="80 años formando tu proyecto de futuro"
        scrollToExpand="Desliza para descubrir tu especialidad"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-14">
            <div className="text-center lg:text-left">
              <p className="text-xs md:text-sm font-bold tracking-[0.25em] text-gold-dark mb-3">
                LICEO POLIVALENTE JUAN ANTONIO RÍOS
              </p>
              <h2 className="font-heading font-bold text-3xl md:text-5xl text-navy mb-6 leading-tight">
                Bienvenido a tu futuro: técnico o científico-humanista
              </h2>
              <p className="text-base md:text-lg text-muted max-w-xl mx-auto lg:mx-0">
                Desde 1946 formamos estudiantes de Quinta Normal con especialidades reales,
                certificaciones vigentes en la industria y una ruta clara hacia la educación
                superior. Sigue bajando para conocer todo lo que te espera en 3° y 4° Medio.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl shadow-navy/20 aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/8sHRvuzJouM"
                title="Video institucional Liceo Juan Antonio Ríos"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {FEATURES.map((f) => (
              <div key={f.t} className="flex flex-col items-center text-center gap-3">
                <IconCircle icon={f.icon} bg="bg-navy-light" size="lg" />
                <p className="font-bold text-navy text-sm">{f.t}</p>
                <p className="text-xs text-muted">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </ScrollExpandMedia>
    </div>
  );
}
