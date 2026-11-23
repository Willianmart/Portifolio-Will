"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";

export function PageLoader() {
  const [show, setShow] = useState(true);
  const reduced = useReducedMotion();

  useEffect(() => {
    const t = window.setTimeout(() => setShow(false), reduced ? 0 : 1000);
    return () => window.clearTimeout(t);
  }, [reduced]);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          aria-hidden={!show}
        >
          <BrandMark className="text-xl" />
          <motion.div
            className="h-10 w-10 rounded-full border-2 border-line border-t-accent"
            animate={reduced ? undefined : { rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.9, ease: "linear" }}
          />
          <span className="sr-only">Carregando WillianMart.DEV</span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
