import { clsx } from "clsx";

/*
  Optimized Photo component with automatic local asset resolution,
  fallback handling, and smooth hover interaction.
*/

const LABEL_MAP: Record<string, string> = {
  "Ka'bah, Masjidil Haram": "/img/makkah.jpg",
  "Kubah Hijau, Masjid Nabawi": "/img/nabawi.jpg",
  "Masjid Nabawi, Madinah": "/img/nabawi.jpg",
  "Masjid Sultan Ahmed, Istanbul": "/img/istanbul.jpg",
  "Blue Mosque, Istanbul": "/img/istanbul.jpg",
  "Kubah Sakhrah, Al-Quds": "/img/alquds.jpg",
  "Kota tua Al-Quds": "/img/alquds.jpg",
  "Masjid Al-Azhar, Cairo": "/img/cairo.jpg",
  "Masjidil Haram di malam hari": "/img/ramadhan.jpg",
  "Pelataran Masjid Nabawi": "/img/gallery-2.jpg",
  "Manasik": "/img/gallery-1.jpg",
  "Kebun kurma": "/img/gallery-3.jpg",
  "Menuju miqat": "/img/gallery-4.jpg",
  "Tawaf": "/img/gallery-1.jpg",
  "Buka puasa bersama": "/img/gallery-6.jpg",
  "City tour Istanbul": "/img/gallery-5.jpg",
  "Rombongan PGS di Madinah": "/img/gallery-2.jpg",
};

function hue(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  return h;
}

export function Photo({
  src,
  alt,
  label,
  bare = false,
  fill = false,
  className,
  imgClassName,
  priority = false,
}: {
  src?: string;
  alt: string;
  label?: string;
  /** hide the placeholder caption text */
  bare?: boolean;
  fill?: boolean;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const wrap = clsx(
    fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full",
    "overflow-hidden bg-sand/80",
    className,
  );

  // Resolve direct source or matched label
  const resolvedSrc = src || (label ? LABEL_MAP[label] : undefined);

  if (resolvedSrc) {
    return (
      <div className={wrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={resolvedSrc}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={clsx(
            "h-full w-full object-cover transition-transform duration-500 will-change-transform",
            imgClassName,
          )}
        />
      </div>
    );
  }

  // Graceful, refined geometric fallback
  const h = 200 + (hue(label ?? alt) % 24);
  const c1 = `hsl(${h} 36% 88%)`;
  const c2 = `hsl(${h + 10} 40% 70%)`;
  const line = `hsl(${h} 45% 28%)`;

  return (
    <div className={wrap}>
      <svg
        viewBox="0 0 400 400"
        preserveAspectRatio="xMidYMid slice"
        className={clsx("h-full w-full", imgClassName)}
        role="img"
        aria-label={alt}
      >
        <defs>
          <linearGradient id={`g-${h}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c1} />
            <stop offset="1" stopColor={c2} />
          </linearGradient>
        </defs>
        <rect width="400" height="400" fill={`url(#g-${h})`} />
        <g fill="none" stroke={line} strokeOpacity="0.22" strokeWidth="1.5">
          <path d="M200 110c-40 0-72 32-72 72v110h144V182c0-40-32-72-72-72Z" />
          <path d="M200 146c-24 0-44 20-44 44v102h88V190c0-24-20-44-44-44Z" />
          <line x1="80" y1="292" x2="320" y2="292" />
        </g>
        <circle cx="200" cy="156" r="5" fill={line} fillOpacity="0.35" />
        {!bare && label ? (
          <text
            x="200"
            y="336"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="14"
            fontWeight="600"
            fill={line}
            fillOpacity="0.75"
          >
            {label}
          </text>
        ) : null}
      </svg>
    </div>
  );
}
