import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import { BABY_PHAT_GALLERY } from "../lib/data";

export default function BabyPhatGallery() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    dragFree: false,
    containScroll: "trimSnaps",
  });
  const [selected, setSelected] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (i) => emblaApi && emblaApi.scrollTo(i),
    [emblaApi]
  );

  return (
    <section
      data-testid="baby-phat-gallery"
      className="relative py-10 lg:py-14"
    >
      {/* Header */}
      <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
        <div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">
            Selected creatives
          </div>
          <h3 className="font-display font-black uppercase text-2xl sm:text-3xl lg:text-4xl tracking-tighter text-white">
            The hooks that scaled.
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            data-testid="gallery-prev"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous creative"
            className="w-11 h-11 border border-white/15 text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white flex items-center justify-center font-mono text-lg"
          >
            ←
          </button>
          <button
            type="button"
            data-testid="gallery-next"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next creative"
            className="w-11 h-11 border border-white/15 text-white hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white flex items-center justify-center font-mono text-lg"
          >
            →
          </button>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 pl-2 hidden sm:block">
            {String(selected + 1).padStart(2, "0")}
            <span className="text-zinc-700"> / </span>
            {String(BABY_PHAT_GALLERY.length).padStart(2, "0")}
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16" ref={emblaRef}>
        <div className="flex gap-4 lg:gap-5">
          {BABY_PHAT_GALLERY.map((item, i) => (
            <motion.div
              key={item.src}
              data-testid={`gallery-slide-${i}`}
              initial={{ opacity: 0.6 }}
              animate={{ opacity: selected === i ? 1 : 0.55 }}
              transition={{ duration: 0.4 }}
              className="relative flex-[0_0_85%] sm:flex-[0_0_60%] lg:flex-[0_0_42%] xl:flex-[0_0_34%] aspect-[4/5] border border-white/10 overflow-hidden bg-zinc-950 group"
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                draggable="false"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Top label */}
              <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] bg-black/70 backdrop-blur px-2 py-1 text-white border border-white/15">
                  {item.cluster}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] bg-black/70 backdrop-blur px-2 py-1 text-zinc-300 border border-white/15">
                  {item.stage}
                </span>
              </div>

              {/* Bottom gradient + caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/60 to-transparent p-5 pt-16">
                <div className="font-display font-bold text-lg lg:text-xl text-white leading-tight">
                  {item.title}
                </div>
                <p className="font-mono text-[11px] text-zinc-400 mt-1.5 leading-relaxed">
                  {item.note}
                </p>
              </div>

              {/* Frame index */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-white/40 hidden">
                {String(i + 1).padStart(2, "0")}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-6">
        {BABY_PHAT_GALLERY.map((_, i) => (
          <button
            key={i}
            type="button"
            data-testid={`gallery-dot-${i}`}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-1 transition-all duration-300 ${
              selected === i ? "w-8 bg-white" : "w-4 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
