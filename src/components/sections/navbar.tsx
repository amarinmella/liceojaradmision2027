'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ExternalLink, Sparkles } from 'lucide-react';

const LINKS = [
  { href: '#historia', label: 'Historia' },
  { href: '#nosotros', label: 'Quiénes somos' },
  { href: '#apoyo', label: 'Apoyo Estudiantil' },
  { href: '#pie', label: 'PIE' },
  { href: '#especialidades', label: 'Especialidades TP' },
  { href: '#humanista', label: 'Científico-Humanista' },
  { href: '#diferenciales', label: 'Nuestro sello' },
  { href: '#vida-escolar', label: 'Vida Escolar' },
  { href: '#futuro', label: 'Ed. Superior' },
];

export function Navbar() {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Reveal nav when scrolling past hero
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-3 md:top-4 left-3 right-3 md:left-6 md:right-6 z-50 max-w-7xl mx-auto"
        >
          {/* Main Floating Island Glass Container */}
          <div className="relative rounded-2xl md:rounded-full bg-[#0a1236]/85 backdrop-blur-xl border border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.45)] px-4 md:px-5 py-2 flex items-center justify-between transition-all duration-300">
            {/* Ambient Golden Rim Light */}
            <div className="absolute inset-x-8 -top-px h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent pointer-events-none" />

            {/* Brand Logo & Title */}
            <a href="#inicio" className="flex items-center gap-2.5 group shrink-0">
              <div className="relative w-8 h-8 md:w-9 md:h-9 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/badge.png"
                  alt="Liceo Juan Antonio Ríos"
                  fill
                  className="object-contain drop-shadow-[0_2px_8px_rgba(244,185,62,0.3)]"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-bold text-xs md:text-sm tracking-tight group-hover:text-gold transition-colors whitespace-nowrap">
                  Liceo Juan Antonio Ríos
                </span>
                <span className="text-[9px] text-gold/80 tracking-widest uppercase font-semibold hidden xl:block">
                  Admisión 2027
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center justify-center gap-0.5 xl:gap-1 flex-1 mx-2">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[10.5px] xl:text-[11.5px] font-medium tracking-wide text-white/85 hover:text-white hover:bg-white/10 px-2 xl:px-2.5 py-1.5 rounded-full transition-all duration-200 text-center flex items-center justify-center whitespace-nowrap"
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* Right Action Button & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.sistemadeadmisionescolar.cl/"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group overflow-hidden rounded-full bg-gradient-to-r from-[#f4b93e] via-[#ffcc5c] to-[#d89b1e] text-[#0a1236] text-xs font-extrabold px-4 py-2 md:px-5 md:py-2.5 tracking-wider uppercase shadow-[0_0_20px_rgba(244,185,62,0.35)] hover:shadow-[0_0_25px_rgba(244,185,62,0.6)] hover:scale-[1.03] active:scale-95 transition-all duration-300 flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#0a1236] animate-pulse" />
                <span>POSTULA AHORA</span>
                <ExternalLink className="w-3 h-3 text-[#0a1236]/80 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Drawer Dropdown */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="lg:hidden mt-2 rounded-2xl bg-[#0a1236]/95 backdrop-blur-2xl border border-white/15 p-5 shadow-2xl shadow-black/60"
              >
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {LINKS.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs font-medium text-white/90 hover:text-gold hover:bg-white/10 p-2.5 rounded-xl transition-all flex items-center justify-between border border-white/5"
                    >
                      <span>{l.label}</span>
                    </a>
                  ))}
                </div>

                <a
                  href="https://www.sistemadeadmisionescolar.cl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full rounded-xl bg-gradient-to-r from-[#f4b93e] to-[#d89b1e] text-[#0a1236] text-xs font-bold py-3 px-4 flex items-center justify-center gap-2 shadow-lg shadow-gold/20"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>POSTULA EN SISTEMA DE ADMISIÓN ESCOLAR</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

