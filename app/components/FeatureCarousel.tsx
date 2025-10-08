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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const count = items.length;

  // --- autoplay
  useEffect(() => {
    if (count <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [count, interval]);

  // --- subtle parallax (desktop)
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--parallaxX", `${x * 6}px`);
      el.style.setProperty("--parallaxY", `${y * 6}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  const go = (i: number) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % count);
  const prev = () => setIndex((i) => (i - 1 + count) % count);

  // --- frame style
  const frameClass =
    variant === "card"
      ? "rounded-3xl bg-white shadow-2xl ring-1 ring-slate-200"
      : "rounded-3xl bg-white shadow-2xl"; // frameless = softer but still premium

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        className={`group relative overflow-hidden ${frameClass}`}
        style={{
          transform:
            "translate3d(var(--parallaxX,0), var(--parallaxY,0), 0)",
          transition: "transform 120ms ease-out",
        }}
      >
        {/* Tall hero area */}
        <div className="relative h-[520px] md:h-[680px] w-full">
          {/* Slides (fade) */}
          {items.map((it, i) => (
            <figure
              key={i}
              className={`absolute inset-0 transition-opacity duration-500 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* For phone mockups, contain is nicer; if you use wide banners, swap to object-cover */}
              <Image
                src={it.src}
                alt={it.alt}
                fill
                priority={i === 0}
                sizes="(max-width: 768px) 100vw, 1200px"
                className="object-contain"
              />
              {/* Light gradient for text legibility if you add overlay copy later */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
              {it.caption && (
                <figcaption className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white backdrop-blur">
                  {it.caption}
                </figcaption>
              )}
            </figure>
          ))}
        </div>

        {/* Arrows */}
        {count > 1 && (
          <>
            <button
              aria-label="Previous"
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/85 p-3 backdrop-blur transition hover:bg-white shadow"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 19l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              aria-label="Next"
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-white/70 bg-white/85 p-3 backdrop-blur transition hover:bg-white shadow"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </>
        )}

        {/* Dots (overlay) */}
        {count > 1 && (
          <div className="pointer-events-none absolute bottom-5 left-0 right-0 flex justify-center gap-2.5">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`pointer-events-auto h-1.5 rounded-full transition-all ${
                  i === index ? "w-7 bg-white" : "w-2.5 bg-white/60 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
