'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const LINKS = [
  { href: '#historia', label: 'Historia' },
  { href: '#nosotros', label: 'Quiénes somos' },
  { href: '#especialidades', label: 'Especialidades TP' },
  { href: '#humanista', label: 'Científico-Humanista' },
  { href: '#diferenciales', label: 'Nuestro sello' },
  { href: '#futuro', label: 'Educación superior' },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // The hero pins window.scrollY at 0 until fully expanded, so this
    // naturally reveals the nav only once the scroll-expand gesture completes.
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 z-50 bg-navy/90 backdrop-blur-md border-b border-white/10"
        >
          <nav className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
            <a href="#inicio" className="flex items-center gap-3">
              <Image src="/badge.png" alt="Liceo Juan Antonio Ríos" width={36} height={41} />
              <span className="hidden sm:block text-white font-heading font-bold text-sm leading-tight">
                Liceo Juan Antonio Ríos
              </span>
            </a>

            <div className="hidden lg:flex items-center gap-7">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs font-semibold tracking-wide text-white/80 hover:text-gold transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <a
              href="#postula"
              className="rounded-full bg-gold hover:bg-gold-dark text-navy text-xs font-bold px-4 py-2.5 tracking-wide transition-colors"
            >
              POSTULA AHORA
            </a>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
