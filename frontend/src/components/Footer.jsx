import React from "react";
import { PROFILE } from "../lib/data";

export default function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-white/10 bg-black">
      <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-12 gap-6 mb-12">
          <div className="col-span-12 lg:col-span-6">
            <div className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl tracking-tighter text-white leading-none">
              JVT<span className="text-pink-500">.</span>
            </div>
            <p className="text-zinc-400 text-sm mt-4 max-w-md leading-relaxed">
              Creative strategy that respects margin. Built in Brasil, deployed
              worldwide.
            </p>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-4">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-zinc-300 hover:text-white"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-6 lg:col-span-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-4">
              Status
            </div>
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Booking Q1 2025
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          <span>© 2024 João Victor Tavares. All rights reserved.</span>
          <span>Built with intent. No template.</span>
        </div>
      </div>
    </footer>
  );
}
