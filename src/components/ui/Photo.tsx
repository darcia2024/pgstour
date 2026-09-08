import { clsx } from "clsx";

/*
  Image slot with a built-in placeholder.

  While real photography is pending, pass only `label` and a tasteful SVG
  placeholder renders (no network request, works offline / behind proxies).
  When you have a real asset, drop it in /public and pass `src="/img/....jpg"`.

  TODO(pgs): replace every <Photo> that has no `src` with a real photograph.
*/

function hue(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) % 360;
  return h;
}

export function Photo({
  src,
  alt,
  label,
  fill = false,
  className,
  imgClassName,
  priority = false,
}: {
  src?: string;
  alt: string;
  label?: string;
  fill?: boolean;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  const wrap = clsx(
    fill ? "absolute inset-0 h-full w-full" : "relative h-full w-full",
    "overflow-hidden bg-sand",
    className,
  );

  if (src) {
    return (
      <div className={wrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          className={clsx("h-full w-full object-cover", imgClassName)}
        />
      </div>
    );
  }

  const h = hue(label ?? alt);
  const c1 = `hsl(${h} 22% 82%)`;
  const c2 = `hsl(${(h + 40) % 360} 26% 63%)`;
  const line = `hsl(${h} 30% 40%)`;

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
        <g fill="none" stroke={line} strokeOpacity="0.28" strokeWidth="1.5">
          <path d="M200 96c-46 0-83 37-83 83v128h166V179c0-46-37-83-83-83Z" />
          <path d="M200 138c-28 0-51 23-51 51v118h102V189c0-28-23-51-51-51Z" />
          <line x1="60" y1="307" x2="340" y2="307" />
        </g>
        <circle cx="200" cy="150" r="6" fill={line} fillOpacity="0.4" />
        {label ? (
          <text
            x="200"
            y="352"
            textAnchor="middle"
            fontFamily="ui-sans-serif, system-ui, sans-serif"
            fontSize="15"
            fontWeight="600"
            fill={line}
            fillOpacity="0.75"
          >
            {label}
          </text>
        ) : null}
        <text
          x="200"
          y="374"
          textAnchor="middle"
          fontFamily="ui-sans-serif, system-ui, sans-serif"
          fontSize="10"
          letterSpacing="2"
          fill={line}
          fillOpacity="0.5"
        >
          FOTO CONTOH
        </text>
      </svg>
    </div>
  );
}
