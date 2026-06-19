import React, { useState } from "react";
import { motion } from "framer-motion";
import { HOOK_CLUSTERS } from "../lib/data";

const STAGES = ["TOFU", "MOFU", "BOFU"];

function getCellContent(cluster, stage) {
  // Map clusters to their primary stage
  const stageMap = {
    A: { TOFU: "Lead", MOFU: "Support", BOFU: "—" },
    B: { TOFU: "Hook", MOFU: "Lead", BOFU: "Support" },
    C: { TOFU: "Lead", MOFU: "Brand", BOFU: "—" },
    D: { TOFU: "—", MOFU: "Hook", BOFU: "Lead" },
  };
  return stageMap[cluster.code][stage];
}

export default function FrameworkSection() {
  const [active, setActive] = useState(HOOK_CLUSTERS[0]);

  return (
    <section
      id="framework"
      data-testid="framework-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 mb-12 lg:mb-16">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-2">
            (03) — Framework
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8">
          <h2 className="font-display font-black uppercase text-4xl sm:text-5xl lg:text-6xl leading-[0.9] tracking-tighter text-white">
            The 4×3<br />
            hook-cluster matrix.
          </h2>
          <p className="mt-6 text-zinc-300 text-base lg:text-lg max-w-2xl leading-relaxed">
            Every creative gets a coordinate. Four thematic clusters mapped
            across three funnel stages. No asset runs without a job.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Matrix */}
        <div className="col-span-12 lg:col-span-8">
          <div className="border border-white/10 bg-zinc-950">
            {/* Header row */}
            <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] border-b border-white/10">
              <div className="p-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                Cluster ↓ / Stage →
              </div>
              {STAGES.map((s) => (
                <div
                  key={s}
                  className="p-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-400 border-l border-white/10 text-center"
                >
                  {s}
                </div>
              ))}
            </div>

            {/* Cluster rows */}
            {HOOK_CLUSTERS.map((c, i) => (
              <div
                key={c.code}
                className={`grid grid-cols-[1.5fr_1fr_1fr_1fr] ${
                  i !== HOOK_CLUSTERS.length - 1 ? "border-b border-white/10" : ""
                }`}
                onMouseEnter={() => setActive(c)}
              >
                <button
                  data-testid={`cluster-row-${c.code}`}
                  onClick={() => setActive(c)}
                  className={`p-5 text-left transition-colors ${
                    active.code === c.code ? "bg-white/[0.04]" : "hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: c.color }}
                    />
                    <div>
                      <div className="font-display font-bold text-base text-white leading-tight">
                        {c.code} · {c.name}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500 mt-1">
                        {c.sub}
                      </div>
                    </div>
                  </div>
                </button>

                {STAGES.map((s) => {
                  const content = getCellContent(c, s);
                  const isActive = content !== "—";
                  return (
                    <div
                      key={s}
                      className="p-5 border-l border-white/10 flex items-center justify-center"
                    >
                      {isActive ? (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="font-mono text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 border"
                          style={{
                            borderColor: c.color,
                            color: c.color,
                            background: `${c.color}10`,
                          }}
                        >
                          {content}
                        </motion.div>
                      ) : (
                        <span className="text-zinc-700 font-mono">—</span>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Active cluster card */}
        <div className="col-span-12 lg:col-span-4">
          <motion.div
            key={active.code}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border border-white/10 bg-black p-6 lg:p-7 h-full flex flex-col"
            data-testid="active-cluster-card"
          >
            <div className="flex items-center justify-between mb-5">
              <span
                className="font-mono text-[10px] uppercase tracking-[0.25em] px-2 py-1"
                style={{ background: active.color, color: "#050505" }}
              >
                Cluster {active.code}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                {active.stage}
              </span>
            </div>

            <div className="font-display font-black text-2xl lg:text-3xl text-white tracking-tighter leading-[0.95]">
              {active.name}
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 mt-1">
              {active.sub}
            </div>

            <p className="text-zinc-300 text-sm mt-5 leading-relaxed flex-1">
              {active.desc}
            </p>

            <div className="grid grid-cols-2 gap-4 pt-5 mt-5 border-t border-white/10">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  ROAS
                </div>
                <div className="font-display font-black text-2xl text-white mt-1">
                  {active.roas}
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                  CAC
                </div>
                <div className="font-display font-black text-2xl text-white mt-1">
                  {active.cac}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
