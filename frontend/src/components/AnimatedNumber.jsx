import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";

/**
 * Animated number counter that detects either numeric values or strings like
 * "$1.39M", "3.47x", "+88.5%" — extracts the numeric portion, animates it,
 * and preserves the surrounding format.
 */
export default function AnimatedNumber({ value, duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState(formatLikeTarget(value, 0));
  const mv = useMotionValue(0);

  const { number, prefix, suffix, decimals } = parseValue(value);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(mv, number, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => {
        setDisplay(`${prefix}${formatNumber(latest, decimals)}${suffix}`);
      },
    });
    return () => controls.stop();
  }, [isInView, number, prefix, suffix, decimals, duration, mv]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
}

function parseValue(v) {
  if (typeof v === "number") return { number: v, prefix: "", suffix: "", decimals: 0 };
  const str = String(v);
  // Match optional sign, optional $, number with decimals, optional K/M/B, optional x/%
  const m = str.match(/^([+\-−]?)(\$?)([\d,.]+)([KMB]?)([x%]?)$/i);
  if (!m) return { number: 0, prefix: "", suffix: str, decimals: 0 };
  const [, sign, dollar, numPart, scale, unit] = m;
  let num = parseFloat(numPart.replace(/,/g, ""));
  let suffix = "";
  if (scale) suffix = scale.toUpperCase();
  if (unit) suffix += unit.toLowerCase();
  const decimals = (numPart.split(".")[1] || "").length;
  const prefix = (sign === "−" ? "-" : sign) + (dollar || "");
  return { number: num, prefix, suffix, decimals };
}

function formatNumber(n, decimals) {
  return n.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatLikeTarget(value, initial) {
  const { prefix, suffix, decimals } = parseValue(value);
  return `${prefix}${formatNumber(initial, decimals)}${suffix}`;
}
