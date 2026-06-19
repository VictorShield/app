import React from "react";
import { motion } from "framer-motion";
import Hero3D from "../components/Hero3D";
import { PROFILE } from "../lib/data";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background 3D Canvas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Hero3D />
      </div>

      {/* Grid lines overlay */}
      <div className="absolute inset-0 z-10 grid-lines pointer-events-none opacity-50" />

      {/* Vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,#050505_85%)]" />

      {/* Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Top label row */}
        <div className="pt-32 sm:pt-36 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500"
          >
            <span data-testid="hero-tag-portfolio">Portfolio / 2024 — Active</span>
            <span className="hidden sm:inline">Lisbon · São Paulo · NYC</span>
          </motion.div>
        </div>

        {/* Big title block */}
        <div className="flex-1 flex items-center px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
          <div className="w-full grid grid-cols-12 gap-6">
            <div className="col-span-12 lg:col-span-10">
              <motion.h1
                data-testid="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-black uppercase text-[14vw] sm:text-[12vw] lg:text-[8.5vw] leading-[0.85] tracking-tighter text-white"
              >
                João<br />
                <span className="chrome-text">Victor</span><br />
                Tavares<span className="text-pink-500">.</span>
              </motion.h1>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pb-14 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto w-full">
          <div className="grid grid-cols-12 gap-6 items-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="col-span-12 sm:col-span-6 lg:col-span-5"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
                Role
              </div>
              <div className="font-display text-xl sm:text-2xl lg:text-3xl text-white leading-tight">
                {PROFILE.role}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.75 }}
              className="col-span-12 sm:col-span-6 lg:col-span-5 lg:col-start-7"
            >
              <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
                Thesis
              </div>
              <p className="text-base lg:text-lg text-zinc-300 leading-snug max-w-md">
                {PROFILE.tagline}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="col-span-12 lg:col-span-2 lg:col-start-11 flex lg:justify-end mt-6 lg:mt-0"
            >
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                Scroll
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
