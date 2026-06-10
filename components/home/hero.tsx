"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ease = [0.21, 0.5, 0.2, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const enter = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Eclipse: a dark disc rim-lit in electric blue, rising behind the headline */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[8%] size-[34rem] -translate-x-1/2 rounded-full md:size-[44rem]"
        style={{
          background:
            "radial-gradient(circle at 50% 38%, #0d1426 58%, #050608 72%)",
          boxShadow:
            "0 0 80px 8px rgba(77,127,255,0.22), 0 0 260px 40px rgba(77,127,255,0.10), inset 0 -40px 90px rgba(77,127,255,0.18)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-void to-transparent"
      />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-24 pt-40 text-center md:pt-48">
        <motion.p {...enter(0)} className="eyebrow">
          MoonFrame · Premium Web Design Agency
        </motion.p>

        <motion.h1
          {...enter(0.12)}
          className="mx-auto mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-moon sm:text-6xl md:text-7xl"
        >
          Websites that turn visitors into{" "}
          <em className="font-serif font-normal text-glow-soft [text-shadow:0_0_32px_rgba(77,127,255,0.45)]">
            customers
          </em>
        </motion.h1>

        <motion.p
          {...enter(0.24)}
          className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-lunar md:text-lg"
        >
          We design and build fast, conversion-focused websites for businesses
          that want to grow online — not just look good doing it.
        </motion.p>

        <motion.div
          {...enter(0.36)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Button asChild size="lg">
            <Link href="/contact">
              Book a free consultation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">View our work</Link>
          </Button>
        </motion.div>

        <motion.p
          {...enter(0.5)}
          className="mt-14 font-mono text-xs tracking-widest text-lunar/60"
        >
          TRUSTED BY 120+ BUSINESSES ACROSS 14 INDUSTRIES
        </motion.p>
      </div>
    </section>
  );
}
