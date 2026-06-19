import React from "react";
import { motion } from "framer-motion";
import AnimatedNumber from "../components/AnimatedNumber";
import { HEADLINE_METRICS, KILLED, PUSHBACKS } from "../lib/data";

export default function CaseStudySection() {
  return (
    <section
      id="work"
      data-testid="case-study-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto"
    >
      {/* Header */}
      <div className="grid grid-cols-12 gap-6 mb-16 lg:mb-24">
        <div className="col-span-12 lg:col-span-3">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">
            (02) — Case Study
          </div>
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-pink-500">
            Featured
          </div>
        </div>

        <div className="col-span-12 lg:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            data-testid="case-study-title"
            className="font-display font-black uppercase text-4xl sm:text-6xl lg:text-7xl leading-[0.9] tracking-tighter text-white"
          >
            Baby Phat —<br />
            <span className="italic font-medium">Rebuilding</span> the<br />
            creative engine.
          </motion.h2>
          <p className="mt-8 text-zinc-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            Y2K denim revival with strong brand recall but a leaking funnel.
            The creative engine was running one-size-fits-all assets across
            every stage. I rebuilt it as a 4×3 hook-cluster matrix and ran the
            account on kill discipline.
          </p>
        </div>
      </div>

      {/* Hero image + snapshot */}
      <div className="grid grid-cols-12 gap-6 mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden border border-white/10"
        >
          <img
            src="https://images.pexels.com/photos/16652535/pexels-photo-16652535.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1440"
            alt="Baby Phat case study"
            loading="lazy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
          <div className="absolute top-5 left-5 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
            01 / Anchor Case
          </div>
          <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Client
              </div>
              <div className="font-display font-bold text-2xl text-white">Baby Phat</div>
            </div>
            <div className="text-right hidden sm:block">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400">
                Window
              </div>
              <div className="font-mono text-sm text-white">90 days</div>
            </div>
          </div>
        </motion.div>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {[
            { k: "Vertical", v: "Y2K Denim Revival" },
            { k: "Role", v: "Senior Creative Strategist" },
            { k: "Mandate", v: "Rebuild creative engine" },
            { k: "Spend / mo", v: "$420K+" },
          ].map((row) => (
            <div
              key={row.k}
              className="bg-zinc-950 border border-white/10 p-5 flex flex-col justify-between min-h-[120px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                {row.k}
              </div>
              <div className="font-display font-bold text-lg text-white leading-tight">
                {row.v}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Headline metrics */}
      <div className="mb-20">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <h3 className="font-display font-black uppercase text-2xl sm:text-3xl text-white tracking-tighter">
            Headline results
          </h3>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
            90-day window · Margin-adjusted
          </div>
        </div>
        <div
          data-testid="metrics-grid"
          className="grid grid-cols-2 lg:grid-cols-6 gap-px bg-white/10 border border-white/10"
        >
          {HEADLINE_METRICS.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              viewport={{ once: true }}
              className="bg-black p-6 lg:p-7 flex flex-col justify-between min-h-[170px]"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                {m.label}
              </div>
              <div className="mt-4">
                <div className="font-display font-black text-3xl lg:text-4xl text-white tracking-tighter">
                  <AnimatedNumber value={m.to} />
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mt-2">
                  from <span className="text-zinc-300">{m.from}</span>
                </div>
              </div>
              <div className="font-mono text-xs text-emerald-400 mt-3">{m.delta}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pushbacks (Ownership layer) */}
      <div className="grid grid-cols-12 gap-6 mb-20">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
            Ownership layer
          </div>
          <h3 className="font-display font-black uppercase text-3xl lg:text-4xl text-white tracking-tighter leading-[0.95]">
            Three things I<br />
            pushed back on.
          </h3>
        </div>
        <div className="col-span-12 lg:col-span-8 grid gap-4">
          {PUSHBACKS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-950 border border-white/10 p-6 lg:p-7 group hover:border-pink-500/40 transition-colors"
            >
              <div className="flex items-start gap-5">
                <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-pink-500 pt-1">
                  0{i + 1}
                </div>
                <div className="flex-1">
                  <div className="font-display font-bold text-xl text-white mb-2">
                    {p.title}
                  </div>
                  <p className="text-zinc-400 text-sm lg:text-base leading-relaxed">
                    {p.body}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Kill discipline */}
      <div className="border border-white/10 bg-zinc-950 p-8 lg:p-12">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-red-400 mb-3">
              Kill discipline
            </div>
            <h3 className="font-display font-black uppercase text-2xl lg:text-3xl text-white tracking-tighter leading-tight">
              Cut $105K of monthly spend mid-campaign.
            </h3>
            <p className="text-zinc-400 text-sm mt-4">
              Reallocated to winners within 48h. No momentum lost.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0">
            <ul className="space-y-4">
              {KILLED.map((k, i) => (
                <li key={i} className="flex items-start gap-4 text-zinc-300">
                  <span className="font-mono text-[11px] text-red-400 pt-1">✕</span>
                  <span className="text-sm lg:text-base leading-relaxed">{k}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
