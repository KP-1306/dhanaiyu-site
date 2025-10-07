"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  PointerEvent,
  KeyboardEvent,
} from "react";

type Item = { src: string; alt: string; caption?: string };

type Props = {
  items: Item[];
  /** Autoplay interval in ms. Default: 4000 */
  interval?: number;
};

export default function FeatureCarousel({ items, interval = 4000 }: Props) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = items.length;

  /* -------------------- autoplay -------------------- */
  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  /* -------------------- sync scroll ------------------ */
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollTo({ left: el.clientWidth * index, behavior: "smooth" });
  }, [index]);

  /* -------------------- controls -------------------- */
  const go = useCallback((i: number) => setIndex((i % count + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  /* -------------------- keyboard -------------------- */
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  /* -------------------- drag / swipe ---------------- */
  const drag = useRef<{ startX: number; deltaX: number; dragging: boolean }>({
    startX: 0,
    deltaX: 0,
    dragging: false,
  });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current.dragging = true;
    drag.current.startX = e.clientX;
    drag.current.deltaX = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
    setPaused(true);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging || !viewportRef.current) return;
    drag.current.deltaX = e.clientX - drag.current.startX;
    viewportRef.current.scrollLeft =
      viewportRef.current.clientWidth * index - drag.current.deltaX;
  };

  const onPointerUp = () => {
    if (!drag.current.dragging) return;
    drag.current.dragging = false;
    const threshold = 60; // px
    if (drag.current.deltaX > threshold) prev();
    else if (drag.current.deltaX < -threshold) next();
    setPaused(false);
  };

  const labelId = useMemo(() => `carousel-${Math.random().toString(36).slice(2)}`, []);

  return (
    <div
      role="region"
      aria-labelledby={labelId}
      onKeyDown={onKeyDown}
      className="relative w-full group"
    >
      <h2 id={labelId} className="sr-only">
        Feature highlights
      </h2>

      {/* Background + Frame */}
      <div className="rounded-3xl bg-gradient-to-b from-slate-50 to-white p-3 ring-1 ring-slate-200/60 shadow-sm">
        {/* Stage with fixed aspect and edge fade */}
        <div
          ref={viewportRef}
          className="overflow-x-auto snap-x snap-mandatory no-scrollbar rounded-2xl bg-white/70 shadow-xl ring-1 ring-slate-200"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
            maskImage:
              "linear-gradient(to right, transparent, black 6%, black 94%, transparent)",
          }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
          tabIndex={0}
          aria-roledescription="carousel"
          aria-live="polite"
        >
          <div className="flex w-full">
            {items.map((it, i) => (
              <figure
                key={`${it.src}-${i}`}
                className="relative min-w-full snap-center grid place-items-center bg-white p-6"
                aria-hidden={i !== index}
              >
                {/* consisent 16:9 stage => looks like a framed product shot */}
                <div
                  className={`relative w-full max-w-[860px] aspect-[16/9] md:aspect-[21/9] rounded-2xl ring-1 ring-slate-200/60 bg-white shadow-2xl transition-transform duration-500 ${
                    i === index ? "scale-[0.995] md:scale-100" : "scale-[0.975] opacity-90"
                  }`}
                >
                  <Image
                    src={it.src}
                    alt={it.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 860px"
                    priority={i === 0}
                  />
                </div>

                {it.caption && (
                  <figcaption className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-white shadow-lg backdrop-blur">
                    {it.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      </div>

      {/* arrows – subtle, floating outside frame */}
      {count > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute -left-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md ring-1 ring-slate-200 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 group-hover:flex"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute -right-3 top-1/2 -translate-y-1/2 hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-slate-700 shadow-md ring-1 ring-slate-200 backdrop-blur transition hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600 group-hover:flex"
          >
            ›
          </button>
        </>
      )}

      {/* dots – frosted glass pill */}
      {count > 1 && (
        <div className="mt-3 flex w-full items-center justify-center">
          <div className="rounded-full bg-white/70 px-2 py-1 shadow ring-1 ring-slate-200 backdrop-blur">
            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => go(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors ${
                    i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
