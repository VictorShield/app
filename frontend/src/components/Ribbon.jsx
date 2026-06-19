import React from "react";
import Marquee from "react-fast-marquee";

export default function Ribbon({ items, speed = 60 }) {
  return (
    <div
      data-testid="editorial-ribbon"
      className="border-y border-white/10 py-5 bg-black overflow-hidden"
    >
      <Marquee gradient={false} speed={speed} pauseOnHover>
        {items.map((it, i) => (
          <span
            key={i}
            className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tighter px-8 flex items-center gap-8 text-white"
          >
            {it}
            <span className="text-pink-500 text-2xl">✦</span>
          </span>
        ))}
      </Marquee>
    </div>
  );
}
