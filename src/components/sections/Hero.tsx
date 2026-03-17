"use client";

import { motion } from "framer-motion";
import { HeroDict } from "@/lib/types";
import { HiChevronDown } from "react-icons/hi2";

interface HeroProps {
  dict: HeroDict;
}

export function Hero({ dict }: HeroProps) {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted mb-4"
        >
          {dict.greeting}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold mb-4 gradient-text leading-tight"
        >
          {dict.name}
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-2xl md:text-3xl font-semibold text-foreground mb-6"
        >
          {dict.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-lg text-muted max-w-2xl mx-auto mb-10"
        >
          {dict.subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-accent-violet via-accent-pink to-accent-cyan shadow-lg shadow-accent-violet/25 hover:shadow-accent-violet/40 transition-shadow"
        >
          {dict.cta}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <HiChevronDown className="w-8 h-8 text-muted" />
        </motion.div>
      </motion.button>
    </section>
  );
}
