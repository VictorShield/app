import React from "react";
import { motion } from "framer-motion";
import { SERVICES, TESTING_ROADMAP } from "../lib/data";

export default function ServicesSection() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 mb-16">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">
            (04) — Services
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tighter text-white">
            What I do<br />
            when you hire me.
          </h2>
        </div>
      </div>

      {/* Services list (editorial style) */}
      <div className="border-t border-white/10 mb-24">
        {SERVICES.map((s, i) => (
          <motion.a
            key={s.id}
            href="#contact"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            viewport={{ once: true }}
            data-testid={`service-${s.id}`}
            className="group block border-b border-white/10 py-8 lg:py-10 hover:bg-white/[0.02] transition-colors"
          >
            <div className="grid grid-cols-12 gap-6 items-center">
              <div className="col-span-2 lg:col-span-1 font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                {s.id}
              </div>
              <div className="col-span-10 lg:col-span-5">
                <div className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-white leading-none group-hover:translate-x-2 transition-transform duration-500">
                  {s.title}
                </div>
              </div>
              <div className="col-span-12 lg:col-span-5 lg:col-start-7 text-zinc-400 text-sm lg:text-base leading-relaxed">
                {s.body}
              </div>
              <div className="hidden lg:block col-span-1 text-right font-mono text-2xl text-zinc-600 group-hover:text-pink-500 transition-colors">
                →
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Testing roadmap */}
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
            (05) — Process
          </div>
          <h3 className="font-display font-black uppercase text-3xl lg:text-4xl text-white tracking-tighter leading-[0.95]">
            Testing<br />
            roadmap.
          </h3>
          <p className="text-zinc-400 text-sm mt-4 max-w-sm leading-relaxed">
            Every engagement runs on this five-phase loop. Diagnosis-first, kill-discipline always.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8 space-y-3">
          {TESTING_ROADMAP.map((p, i) => (
            <motion.div
              key={p.phase}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="grid grid-cols-12 gap-4 border border-white/10 bg-zinc-950 p-5 lg:p-6 hover:border-white/30 transition-colors"
            >
              <div className="col-span-3 lg:col-span-2 font-mono text-[11px] uppercase tracking-[0.25em] text-pink-500">
                {p.phase}
              </div>
              <div className="col-span-9 lg:col-span-3 font-display font-bold text-lg text-white">
                {p.title}
              </div>
              <div className="col-span-12 lg:col-span-7 text-zinc-400 text-sm leading-relaxed">
                {p.body}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
