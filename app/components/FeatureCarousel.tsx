"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Item = { src: string; alt: string; caption?: string };

export default function FeatureCarousel({
  items,
  interval = 4000,
}: {
  items: Item[];
  interval?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  useEffect(() => {
    if (!ref.current) return;
    ref.current.scrollTo({ left: ref.current.clientWidth * index, behavior: "smooth" });
  }, [index]);

  const go = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  return (
    <div className="relative w-full">
      <div
        ref={ref}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar rounded-2xl bg-white/70 shadow-xl ring-1 ring-slate-200"
      >
        <div className="flex w-full">
          {items.map((it, i) => (
            <figure key={i} className="relative min-w-full snap-center flex items-center justify-center bg-white">
              <div className="relative w-full max-w-[820px] aspect-[16/9] md:aspect-[21/9]">
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
                <figcaption className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      </div>

      <button
        aria-label="Prev"
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow ring-1 ring-slate-200 backdrop-blur hover:bg-white"
      >
        ‹
      </button>
      <button
        aria-label="Next"
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow ring-1 ring-slate-200 backdrop-blur hover:bg-white"
      >
        ›
      </button>

      <div className="mt-3 flex items-center justify-center gap-2">
        {items.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => go(i)}
            className={`h-2.5 w-2.5 rounded-full transition ${
              i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
