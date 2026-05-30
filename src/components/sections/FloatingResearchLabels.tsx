"use client";

import { motion, useReducedMotion } from "framer-motion";
import { profile } from "@/data/profile";

export function FloatingResearchLabels() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
      {profile.heroLabels.map((label, index) => (
        <motion.span
          key={label}
          className="absolute rounded-full border border-white/[0.15] bg-neutral-950/[0.65] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-strong backdrop-blur"
          style={{
            left: `${[2, 52, 10, 58, 4, 46][index]}%`,
            top: `${[12, 18, 50, 56, 78, 82][index]}%`,
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  y: [0, index % 2 ? 10 : -10, 0],
                  rotate: [0, index % 2 ? -2 : 2, 0],
                }
          }
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {label}
        </motion.span>
      ))}
    </div>
  );
}
