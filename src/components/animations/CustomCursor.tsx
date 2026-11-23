"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    setEnabled(fine && wide && !reduced);
  }, [reduced]);

  useEffect(() => {
    if (!enabled) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, [enabled]);

  if (!enabled || !visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[95] hidden lg:block h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/80 bg-accent/20 mix-blend-difference"
      style={{ left: pos.x, top: pos.y }}
      aria-hidden
    />
  );
}
