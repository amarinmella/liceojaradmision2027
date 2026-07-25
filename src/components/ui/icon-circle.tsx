import Image from 'next/image';

const SIZE_MAP = {
  sm: { circle: 56, icon: 26 },
  md: { circle: 72, icon: 34 },
  lg: { circle: 92, icon: 44 },
};

export function IconCircle({
  icon,
  bg = 'bg-navy-light',
  size = 'md',
  className = '',
}: {
  icon: string;
  bg?: string;
  size?: keyof typeof SIZE_MAP;
  className?: string;
}) {
  const { circle, icon: iconSize } = SIZE_MAP[size];
  return (
    <div
      className={`flex items-center justify-center rounded-full shadow-lg shadow-navy/20 ${bg} ${className}`}
      style={{ width: circle, height: circle }}
    >
      <Image
        src={`/icon_${icon}.png`}
        alt=""
        width={iconSize}
        height={iconSize}
        style={{ width: iconSize, height: iconSize }}
      />
    </div>
  );
}
