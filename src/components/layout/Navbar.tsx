"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiBars3, HiXMark } from "react-icons/hi2";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { useActiveSection } from "@/hooks/useActiveSection";
import { Locale, Dictionary } from "@/lib/types";

interface NavbarProps {
  locale: Locale;
  dict: Dictionary;
}

const navKeys = ["about", "experience", "projects", "techStack", "education", "contact"];

export function Navbar({ locale, dict }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const activeSection = useActiveSection();

  const scrollTo = (id: string) => {
    setIsOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-card-border"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xl font-bold gradient-text"
          >
            JRS
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navKeys.map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(key)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === key
                    ? "text-accent-violet bg-accent-violet/10"
                    : "text-muted hover:text-foreground hover:bg-foreground/5"
                }`}
              >
                {dict.nav[key]}
              </button>
            ))}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-2">
            <LanguageSwitch locale={locale} />
            <ThemeToggle />

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-foreground/5 hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiXMark className="w-5 h-5" /> : <HiBars3 className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-b border-card-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navKeys.map((key) => (
                <button
                  key={key}
                  onClick={() => scrollTo(key)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === key
                      ? "text-accent-violet bg-accent-violet/10"
                      : "text-muted hover:text-foreground hover:bg-foreground/5"
                  }`}
                >
                  {dict.nav[key]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
