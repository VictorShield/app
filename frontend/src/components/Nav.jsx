import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROFILE } from "../lib/data";

const NAV = [
  { id: "work", label: "Work" },
  { id: "philosophy", label: "Philosophy" },
  { id: "framework", label: "Framework" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between">
        <button
          data-testid="nav-logo"
          onClick={() => go("hero")}
          className="font-display font-black uppercase text-base tracking-tighter text-white"
        >
          JVT<span className="text-pink-500">.</span>
        </button>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <button
              key={n.id}
              data-testid={`nav-link-${n.id}`}
              onClick={() => go(n.id)}
              className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            data-testid="nav-linkedin"
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn ↗
          </a>
          <button
            data-testid="nav-contact-cta"
            onClick={() => go("contact")}
            className="group relative font-mono text-[11px] uppercase tracking-[0.2em] px-4 py-2.5 border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Let's build →
          </button>
          <button
            data-testid="nav-toggle"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden font-mono text-[11px] uppercase tracking-[0.2em] text-white px-2 py-2"
            aria-label="Toggle menu"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <button
                  key={n.id}
                  data-testid={`mobile-nav-${n.id}`}
                  onClick={() => go(n.id)}
                  className="text-left font-display text-2xl uppercase text-white"
                >
                  {n.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
