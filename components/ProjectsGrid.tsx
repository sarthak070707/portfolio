"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Code } from "lucide-react";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  live?: string;
  github: string;
}

const projects: Project[] = [
  {
    title: "StockSahi",
    description:
      "Live NSE stock-research app with 53 indicators and paper trading — educate, never advise.",
    image: "/stocksahi.png",
    tags: ["Next.js", "React", "TypeScript", "Node.js", "Tailwind"],
    live: "https://stocksahi.vercel.app",
    github: "https://github.com/sarthak070707/stocksahi",
  },
  {
    title: "DevVerify",
    description:
      "Audits developer résumé claims against real GitHub code with a typed claim lifecycle.",
    image: "/devverify.png",
    tags: ["Next.js", "Prisma", "PostgreSQL", "Zod", "NextAuth"],
    live: "https://dev-verify-sarthak.vercel.app",
    github: "https://github.com/sarthak070707/dev-verify",
  },
  {
    title: "Speech Data Pipeline",
    description:
      "Turns raw audio/video into structured speech-model training data, built for batch runs.",
    image: "/speech.png",
    tags: ["Python", "FFmpeg", "pyannote", "HuggingFace"],
    github: "https://github.com/sarthak070707/speech-data-pipeline",
  },
  {
    title: "GapScope",
    description:
      "AI market-intelligence tool that surfaces underserved startup opportunities and gaps.",
    image: "/gapscope.png",
    tags: ["Next.js", "TypeScript", "NLP / LLM"],
    live: "https://gapscope-market-intelligence.vercel.app",
    github: "https://github.com/sarthak070707/gapscope-market-intelligence",
  },
  {
    title: "RAG-Chain",
    description:
      "Retrieval-augmented Q&A over your own PDFs, grounded with sources to cut hallucination.",
    image: "/ragchain.png",
    tags: ["Python", "LangChain", "ChromaDB", "Gemini"],
    github: "https://github.com/sarthak070707/RAG-Chain",
  },
  {
    title: "IntradayBot",
    description:
      "Algorithmic intraday signal engine for NSE with a 6-state regime gatekeeper.",
    image: "/intradaybot.png",
    tags: ["Next.js", "TypeScript", "Zustand", "Prisma"],
    live: "https://regime-trading-engine.space-z.ai",
    github: "https://github.com/sarthak070707/Regime-trading-engine",
  },
];

export function ProjectsGrid() {
  return (
    <section id="work" className="w-full px-6 sm:px-10 py-16 md:py-20 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "var(--cream)" }}
          >
            Selected work
          </h2>
          <p
            className="mt-3 text-base sm:text-lg max-w-xl"
            style={{ color: "var(--cream-dim)" }}
          >
            Live products I&apos;ve designed and shipped end-to-end — across software,
            full-stack, and product.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col overflow-hidden rounded-2xl transition-colors"
              style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "var(--clay)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--border)")
              }
            >
              {/* Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {project.live && (
                  <span
                    className="absolute top-3 left-3 text-xs font-medium px-2.5 py-1 rounded-full"
                    style={{ background: "var(--clay)", color: "var(--bg)" }}
                  >
                    Live
                  </span>
                )}
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="text-lg font-semibold"
                  style={{ color: "var(--cream)" }}
                >
                  {project.title}
                </h3>
                <p
                  className="mt-2 text-sm leading-relaxed flex-1"
                  style={{ color: "var(--cream-dim)" }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-md"
                      style={{
                        background: "var(--bg)",
                        color: "var(--cream-dim)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg transition-colors"
                      style={{ background: "var(--clay)", color: "var(--bg)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.opacity = "0.9")
                      }
                      onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-2 rounded-lg transition-colors"
                    style={{
                      color: "var(--cream)",
                      border: "1px solid var(--border)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--cream-dim)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--border)";
                    }}
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
