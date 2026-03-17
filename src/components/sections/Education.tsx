"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EducationDict } from "@/lib/types";
import { HiAcademicCap } from "react-icons/hi2";

interface EducationProps {
  dict: EducationDict;
}

export function Education({ dict }: EducationProps) {
  return (
    <section id="education" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>

        {dict.items.map((item, i) => (
          <AnimatedSection key={i} delay={0.1}>
            <div className="gradient-border glass rounded-2xl p-8 flex gap-6 items-start">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-violet to-accent-pink flex items-center justify-center">
                <HiAcademicCap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">{item.institution}</h3>
                <p className="text-accent-violet font-semibold mt-1">{item.degree}</p>
                <p className="text-sm text-muted mt-1">{item.period}</p>
                <p className="text-foreground/70 mt-3">{item.description}</p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
