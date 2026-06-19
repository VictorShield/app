import React from "react";
import { motion } from "framer-motion";

export default function PhilosophySection() {
  return (
    <section
      id="philosophy"
      data-testid="philosophy-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        {/* Left: label + portrait */}
        <div className="col-span-12 lg:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-6">
            (01) — Philosophy
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-80px" }}
            className="relative aspect-[4/5] overflow-hidden border border-white/10"
          >
            <img
              src="https://images.pexels.com/photos/17513315/pexels-photo-17513315.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720"
              alt="Portrait"
              loading="lazy"
              className="w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 flex justify-between">
              <span>JVT — 2024</span>
              <span>Roll 04 / Frame 17</span>
            </div>
          </motion.div>
        </div>

        {/* Right: copy */}
        <div className="col-span-12 lg:col-span-7 lg:pl-12 flex flex-col justify-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-display font-black uppercase text-3xl sm:text-4xl lg:text-5xl leading-[0.95] tracking-tighter text-white mb-10"
          >
            Creative is an<br />
            <span className="italic font-normal">asset class</span> —<br />
            treat it like one.
          </motion.h2>

          <div className="space-y-6 text-zinc-300 text-base lg:text-lg leading-relaxed max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I'm a creative strategist who runs the work like a portfolio:
              every asset has a job, a placement, a kill criteria and a margin
              target. No vanity ROAS. No briefs without diagnosis.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              The work below — rebuilding Baby Phat's creative engine — took a
              denim account from 1.82x to 3.47x blended ROAS in 90 days. Not
              by making more creative, but by making creative do the right job
              at the right stage.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {[
              ["12+", "Brands"],
              ["$8M+", "Ad spend optimized"],
              ["90 days", "Avg. turnaround"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display font-black text-3xl sm:text-4xl text-white">
                  {num}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-1">
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
