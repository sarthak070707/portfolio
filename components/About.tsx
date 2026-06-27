"use client";

import { motion } from "framer-motion";

const paragraphs = [
  "I've always loved making things real. Give me an idea and the first thing I want to do is build it — that itch is older than any line of code I've written. As a kid it was whatever I could take apart and put back together; now it's software, but the feeling is identical: the moment a thing you imagined actually runs.",
  "Watching Tony Stark tinker his way out of every problem is what first pulled me toward tech. It wasn't the suit — it was the workshop. The idea that if you understood how things worked, you could just make the solution. Somewhere between breaking my first program and finally getting it to run at 2 a.m., that fascination turned into a habit, and the habit turned into how I spend most of my days.",
  "The way I work hasn't really changed since then: I learn by shipping, not by waiting. I'd rather build the rough version today and make it good than plan the perfect one forever — most of what I actually know came from getting something to work, breaking it, and figuring out why.",
  "I like the whole arc, too, not just the code: deciding what's worth building, who it's for, and where to draw the line. StockSahi only works because I decided early it would educate, never advise — and that one product call shaped every screen after it. The fun, for me, is in those decisions as much as the implementation.",
  "What I'm chasing now is simple: harder problems and better people to learn from. I do my best work when I own something end-to-end and there's someone in the room who's three steps ahead of me. That's the kind of team I'm looking for.",
];

export function About() {
  return (
    <section id="about" className="w-full px-6 sm:px-10 py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1100px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10 md:gap-16">
          {/* Left: heading + label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="md:sticky md:top-28 self-start"
          >
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--clay)" }}
            >
              About
            </span>
            <h2
              className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight"
              style={{ color: "var(--cream)" }}
            >
              The short story
            </h2>
          </motion.div>

          {/* Right: story, with a hairline on the left edge */}
          <div
            className="space-y-6 md:pl-12"
            style={{ borderLeft: "1px solid var(--border)" }}
          >
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-base sm:text-lg leading-relaxed pl-6 md:pl-0"
                style={{ color: i === 0 ? "var(--cream)" : "var(--cream-dim)" }}
              >
                {text}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
