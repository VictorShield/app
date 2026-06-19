import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { PROFILE } from "../lib/data";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/contact`, form);
      setSent(true);
      toast.success("Message received. I'll be in touch.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      const msg =
        err?.response?.data?.detail?.[0]?.msg ||
        err?.response?.data?.detail ||
        "Could not send. Try again.";
      toast.error(typeof msg === "string" ? msg : "Could not send. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative py-24 sm:py-32 px-6 sm:px-10 lg:px-16 max-w-[1600px] mx-auto"
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-12">
        {/* Left: pitch */}
        <div className="col-span-12 lg:col-span-6">
          <div className="font-mono text-[11px] uppercase tracking-[0.25em] text-zinc-500 mb-3">
            (06) — Contact
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="font-display font-black uppercase text-5xl sm:text-6xl lg:text-7xl leading-[0.85] tracking-tighter text-white"
          >
            Have a creative<br />
            engine to<br />
            <span className="chrome-text">rebuild</span>?
          </motion.h2>

          <p className="text-zinc-300 text-base lg:text-lg mt-8 max-w-md leading-relaxed">
            Booking 1–2 strategist engagements per quarter. If you're spending
            $200K+/mo on paid social and the creative isn't pulling its weight,
            let's talk.
          </p>

          <div className="mt-10 space-y-4">
            <a
              data-testid="contact-email-link"
              href={`mailto:${PROFILE.email}`}
              className="block font-mono text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <span className="uppercase tracking-[0.25em] text-[10px] text-zinc-600 block mb-1">
                Email
              </span>
              {PROFILE.email} →
            </a>
            <a
              data-testid="contact-linkedin-link"
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="block font-mono text-sm text-zinc-400 hover:text-white transition-colors"
            >
              <span className="uppercase tracking-[0.25em] text-[10px] text-zinc-600 block mb-1">
                LinkedIn
              </span>
              linkedin.com/in/joao-victor-t-4a2b6085 ↗
            </a>
          </div>
        </div>

        {/* Right: form */}
        <div className="col-span-12 lg:col-span-6">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            onSubmit={submit}
            data-testid="contact-form"
            className="border border-white/10 bg-zinc-950 p-6 lg:p-8"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 mb-6 flex items-center justify-between">
              <span>Inbound brief</span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open
              </span>
            </div>

            <div className="space-y-5">
              <Field
                label="Your name"
                id="name"
                value={form.name}
                onChange={onChange("name")}
                placeholder="Jane Doe"
              />
              <Field
                label="Email"
                id="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="jane@brand.com"
              />
              <div>
                <label
                  htmlFor="message"
                  className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2"
                >
                  The brief
                </label>
                <textarea
                  id="message"
                  data-testid="contact-input-message"
                  value={form.message}
                  onChange={onChange("message")}
                  rows={5}
                  placeholder="What's broken, what's the spend, what's the timeline?"
                  className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-white/50 transition-colors resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              data-testid="contact-submit-button"
              className="mt-8 w-full group relative font-mono text-[11px] uppercase tracking-[0.25em] py-4 bg-white text-black hover:bg-pink-500 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending…" : sent ? "Sent ✓ — Send another?" : "Send the brief →"}
            </button>

            <div className="mt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-600">
              Typical response · within 48h
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, id, type = "text", value, onChange, placeholder }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500 block mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        data-testid={`contact-input-${id}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent border border-white/10 px-4 py-3 text-white text-sm font-mono focus:outline-none focus:border-white/50 transition-colors"
      />
    </div>
  );
}
