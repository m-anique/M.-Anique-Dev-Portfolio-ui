import { useState } from "react";

type Props = {
  url: string;          // live site URL
  title: string;
  gradient?: string;    // fallback tailwind gradient classes
};

// Free auto-screenshot service (WordPress mShots). No API key needed.
// First load of a brand-new URL can take a few seconds while it generates.
const shot = (url: string) =>
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=900&h=560`;

export default function ProjectThumbnail({
  url,
  title,
  gradient = "from-blue-900/60 to-zinc-900",
}: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-2xl bg-zinc-900">
      {!failed && (
        <img
          src={shot(url)}
          alt={`${title} website preview`}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
      )}
      {failed && <div className={`h-full w-full bg-gradient-to-br ${gradient}`} />}
      {/* keeps the title readable over any screenshot */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
    </div>
  );
}
