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
  const count = items.length;

  /** ---- Autoplay (pause on hover/focus) ---- */
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || count < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(id);
  }, [paused, count, interval]);

  /** ---- Sync scroll to active slide ---- */
  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    el.scrollTo({
      left: el.clientWidth * index,
      behavior: "smooth",
    });
  }, [index]);

  /** ---- Controls ---- */
  const go = useCallback((i: number) => setIndex((i % count + count) % count), [count]);
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count]);

  /** ---- Keyboard (left/right) ---- */
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      next();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      prev();
    }
  };

  /** ---- Pointer drag / swipe ---- */
  const drag = useRef<{ startX: number; deltaX: number; dragging: boolean }>({
    startX: 0,
    deltaX: 0,
    dragging: false,
  });

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    drag.current.dragging = true;
    drag.current.startX = e.clientX;
    drag.current.deltaX = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    setPaused(true);
  };

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging || !viewportRef.current) return;
    drag.current.deltaX = e.clientX - drag.current.startX;
    viewportRef.current.scrollLeft =
      viewportRef.current.clientWidth * index - drag.current.deltaX;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    if (!drag.current.dragging) return;
    drag.current.dragging = false;
    const threshold = 50; // px
    if (drag.current.deltaX > threshold) prev();
    else if (drag.current.deltaX < -threshold) next();
    setPaused(false);
  };

  /** ---- ARIA/labels ---- */
  const labelId = useMemo(() => `carousel-${Math.random().toString(36).slice(2)}`, []);

  return (
    <div
      className="relative w-full"
      aria-labelledby={labelId}
      role="region"
      onKeyDown={onKeyDown}
    >
      <h2 id={labelId} className="sr-only">
        Feature highlights
      </h2>

      <div
        ref={viewportRef}
        className="overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar rounded-2xl bg-white/70 shadow-xl ring-1 ring-slate-200"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        <div className="flex w-full">
          {items.map((it, i) => (
            <figure
              key={`${it.src}-${i}`}
              className="relative min-w-full snap-center flex items-center justify-center bg-white"
              aria-hidden={i !== index}
            >
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

      {/* Prev / Next */}
      {count > 1 && (
        <>
          <button
            aria-label="Previous slide"
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow ring-1 ring-slate-200 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow ring-1 ring-slate-200 backdrop-blur hover:bg-white focus:outline-none focus:ring-2 focus:ring-sky-600"
          >
            ›
          </button>
        </>
      )}

      {/* Dots */}
      {count > 1 && (
        <div className="mt-3 flex items-center justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-sky-600" : "bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
