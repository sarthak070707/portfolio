"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Mail, ArrowUp } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/sarthak070707",
    handle: "github.com/sarthak070707",
    Icon: Code,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sarthak-arya-059920303",
    handle: "linkedin.com/in/sarthak-arya",
    Icon: ExternalLink,
  },
  {
    label: "Email",
    href: "mailto:sarthakarya4@gmail.com",
    handle: "sarthakarya4@gmail.com",
    Icon: Mail,
  },
];

export function Contact() {
  return (
    <footer
      id="contact"
      className="w-full px-6 sm:px-10 pt-16 md:pt-20 pb-8 scroll-mt-20"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1100px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-end"
        >
          {/* Left: headline + line + CTA */}
          <div>
            <span
              className="text-xs font-medium tracking-widest uppercase"
              style={{ color: "var(--clay)" }}
            >
              Contact
            </span>
            <h2
              className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight"
              style={{ color: "var(--cream)" }}
            >
              Let&apos;s build
              <br />
              something.
            </h2>
            <p
              className="mt-5 text-base sm:text-lg max-w-md"
              style={{ color: "var(--cream-dim)" }}
            >
              I&apos;m looking for SDE, full-stack, and product internships. If
              you&apos;re hiring — or just want to talk tech — reach out.
            </p>
            <a
              href="mailto:sarthakarya4@gmail.com"
              className="inline-flex items-center gap-2 mt-7 text-sm font-medium px-6 py-3 rounded-full transition-colors"
              style={{ background: "var(--clay)", color: "var(--bg)" }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>

          {/* Right: stacked links */}
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            {socials.map(({ label, href, handle, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm transition-colors md:flex-row-reverse"
                style={{ color: "var(--cream-dim)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--cream)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--cream-dim)")
                }
              >
                <Icon className="w-4 h-4" />
                {handle}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Footer bar */}
        <div
          className="mt-20 pt-6 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="text-xs" style={{ color: "var(--cream-dim)" }}>
            © {new Date().getFullYear()} Sarthak Arya
          </span>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs transition-colors"
            style={{ color: "var(--cream-dim)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--cream-dim)")}
          >
            <ArrowUp className="w-3.5 h-3.5" />
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
