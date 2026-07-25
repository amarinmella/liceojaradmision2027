import { SectionHeading } from '@/components/ui/section-heading';
import { IconCircle } from '@/components/ui/icon-circle';
import { Reveal } from '@/components/ui/reveal';

interface MencionItem {
  icon: string;
  t: string;
  d: string;
}

export function MencionSection({
  id,
  headerIcon,
  title,
  items,
  campoLaboral,
  theme,
}: {
  id: string;
  headerIcon: string;
  title: string;
  items: MencionItem[];
  campoLaboral: string;
  theme: 'light' | 'dark';
}) {
  const dark = theme === 'dark';
  return (
    <section
      id={id}
      className={`py-20 md:py-28 px-5 md:px-8 scroll-mt-16 ${dark ? 'bg-navy' : 'bg-bg-soft'}`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between gap-6 flex-wrap mb-14">
          <Reveal>
            <SectionHeading kicker="Administración · Mención · 4° Medio" title={title} dark={dark} />
          </Reveal>
          <Reveal delay={0.1}>
            <IconCircle icon={headerIcon} bg="bg-gold" size="lg" />
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-5 mb-10">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.06}>
              <div
                className={`rounded-2xl p-6 h-full flex flex-col items-center text-center gap-4 ${
                  dark ? 'bg-navy-light' : 'bg-white shadow-md shadow-navy/5'
                }`}
              >
                <IconCircle icon={it.icon} bg={dark ? 'bg-gold' : 'bg-navy-light'} />
                <div>
                  <p className={`text-sm font-bold ${dark ? 'text-white' : 'text-navy'}`}>{it.t}</p>
                  <p className={`text-xs mt-2 ${dark ? 'text-blue-100/70' : 'text-muted'}`}>{it.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="rounded-2xl bg-gold px-6 py-5 text-center">
            <p className="text-navy font-bold text-sm md:text-base">{campoLaboral}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
