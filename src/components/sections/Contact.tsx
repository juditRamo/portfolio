"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactDict } from "@/lib/types";
import { HiEnvelope, HiPhone } from "react-icons/hi2";
import { FaLinkedinIn } from "react-icons/fa6";

interface ContactProps {
  dict: ContactDict;
}

export function Contact({ dict }: ContactProps) {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="text-lg text-muted mb-10 max-w-xl mx-auto">{dict.subtitle}</p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* Email button */}
            <a
              href={`mailto:${dict.email}`}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-accent-violet via-accent-pink to-accent-cyan shadow-lg shadow-accent-violet/25 hover:shadow-accent-violet/40 hover:scale-105 transition-all"
            >
              <HiEnvelope className="w-5 h-5" />
              {dict.emailLabel}
            </a>

            {/* LinkedIn */}
            <a
              href={dict.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold gradient-border bg-card text-foreground hover:scale-105 transition-all"
            >
              <FaLinkedinIn className="w-5 h-5 text-accent-violet" />
              {dict.linkedinLabel}
            </a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href={`tel:${dict.phone}`}
              className="flex items-center gap-2 text-muted hover:text-accent-violet transition-colors"
            >
              <HiPhone className="w-4 h-4" />
              <span className="text-sm">{dict.phone}</span>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
