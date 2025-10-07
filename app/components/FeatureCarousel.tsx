"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = { src: string; alt: string; caption?: string };

type Props = {
  items: Item[];
  /** Autoplay interval in ms */
  interval?: number;
  /** Visual style */
  variant?: "frameless" | "card";
};

export default function FeatureCarousel({
  items,
  interval = 4500,
  variant = "frameless",
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  // autoplay
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  // scroll to active
  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({
      left: ref.current.clientWidth * index,
      behavior: "smooth",
    });
  }, [index]);

  const go = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  const wrapperBase = "relative w-full";
  const trackBase =
    "overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar";

  // visual treatment
  const trackClass =
    variant === "card"
      ? // (kept for future use)
        `${trackBase} rounded-2xl bg-white/70 shadow-xl ring-1 ring-slate-200`
      : // FRAMeless: no background, no ring, no shadow
        `${trackBase} bg-transparent shadow-none ring-0`;

  const figureBase =
    "relative min-w-full snap-center flex items-center justify-center";

  return (
    <div className={wrapperBase}>
      <div ref={ref} className={trackClass}>
        <div className="flex w-full">
          {items.map((it, i) => (
            <figure key={i} className={`${figureBase} bg-transparent`}>
              <div className="relative w-full max-w-[820px] mx-auto aspect-[16/9] md:aspect-[21/9]">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 820px"
                  priority={i === 0}
                />
              </div>

              {it.caption && (
                <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/65 px-3 py-1 text-xs text-white backdrop-blur-sm">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      {/* Prev / Next — low-key “ghost” buttons */}
      <button
        aria-label="Previous"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-sm ring-1 ring-slate-200 hover:bg-white transition"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/70 p-2 shadow-sm ring-1 ring-slate-200 hover:bg-white transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2 w-2 rounded-full transition ${
              i === index ? "bg-sky-600 w-4" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
