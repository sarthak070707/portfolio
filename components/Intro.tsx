"use client";

import { motion } from "framer-motion";

export function Intro() {
  return (
    <section id="intro" className="w-full px-6 sm:px-10 pt-20 md:pt-24 pb-4 scroll-mt-20">
      <div className="max-w-[820px] mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-snug"
          style={{ color: "var(--cream)" }}
        >
          I don&apos;t wait for graduation, permission, or the perfect plan to build
          something — I just build it.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="mt-6 text-base sm:text-lg leading-relaxed max-w-[640px]"
          style={{ color: "var(--cream-dim)" }}
        >
          Over the last year I&apos;ve shipped six products solo: live market tools,
          an AI retrieval system, a speech pipeline — things that are actually online
          and working, not slide-deck demos. I care as much about the decisions behind
          a product as the code that makes it run. Everything below is real, and most
          of it took breaking things at 2&nbsp;a.m. to get right.
        </motion.p>
      </div>
    </section>
  );
}
