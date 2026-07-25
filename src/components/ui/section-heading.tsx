export function SectionHeading({
  kicker,
  title,
  align = 'left',
  dark = false,
}: {
  kicker: string;
  title: string;
  align?: 'left' | 'center';
  dark?: boolean;
}) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      <p
        className="text-xs md:text-sm font-bold tracking-[0.2em] mb-2"
        style={{ color: 'var(--gold-dark)' }}
      >
        {kicker.toUpperCase()}
      </p>
      <h2
        className={`font-heading font-bold text-3xl md:text-4xl leading-tight ${
          dark ? 'text-white' : 'text-navy'
        }`}
      >
        {title}
      </h2>
    </div>
  );
}
