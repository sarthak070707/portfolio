"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { title: "Work", url: "#work" },
  { title: "About", url: "#about" },
];

const menuLinks = [
  { title: "Work", url: "#work" },
  { title: "About", url: "#about" },
  { title: "Contact", url: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 100);
  });

  const toggle = () => setIsMenuOpen((v) => !v);

  return (
    <>
      <motion.nav
        initial={{ y: 0, opacity: 1 }}
        animate={{ y: isScrolled ? -100 : 0, opacity: isScrolled ? 0 : 1 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{
          background: "color-mix(in srgb, var(--bg) 82%, transparent)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="w-full px-8 sm:px-12">
          <div className="flex items-center justify-between h-16">
            <a
              href="#home"
              className="text-lg font-semibold tracking-tight"
              style={{ color: "var(--cream)" }}
            >
              Sarthak Arya
            </a>

            <div className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.title}
                  href={l.url}
                  className="text-sm transition-colors"
                  style={{ color: "var(--cream-dim)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cream)")}
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = "var(--cream-dim)")
                  }
                >
                  {l.title}
                </a>
              ))}
              <a
                href="#contact"
                className="text-sm px-4 py-2 rounded-full transition-colors"
                style={{ color: "var(--clay)", border: "1px solid var(--clay)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--clay)";
                  e.currentTarget.style.color = "var(--bg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "var(--clay)";
                }}
              >
                Contact
              </a>
            </div>

            <button
              onClick={toggle}
              className="md:hidden p-2"
              style={{ color: "var(--cream)" }}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: isScrolled ? 1 : 0, opacity: isScrolled ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed top-6 right-6 z-50"
      >
        <button
          onClick={toggle}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: "var(--clay)", color: "var(--bg)" }}
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </motion.div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 backdrop-blur-sm"
              style={{ background: "color-mix(in srgb, var(--bg) 80%, transparent)" }}
              onClick={toggle}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.85, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.85, y: -30 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-[300px] rounded-3xl p-8"
              style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
            >
              <button
                onClick={toggle}
                className="absolute top-4 right-4 p-2"
                style={{ color: "var(--cream)" }}
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="mt-8 space-y-2">
                {menuLinks.map((l) => (
                  <a
                    key={l.title}
                    href={l.url}
                    onClick={toggle}
                    className="block p-3 rounded-xl text-lg font-medium transition-colors"
                    style={{ color: "var(--cream)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--bg)";
                      e.currentTarget.style.color = "var(--clay)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "var(--cream)";
                    }}
                  >
                    {l.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}