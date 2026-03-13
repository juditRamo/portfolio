"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AboutDict } from "@/lib/types";

interface AboutProps {
  dict: AboutDict;
}

export function About({ dict }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="space-y-4 text-foreground/80 text-lg leading-relaxed mb-12">
            {dict.description.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="grid grid-cols-3 gap-6">
            {dict.stats.map((stat, i) => (
              <div key={i} className="text-center gradient-border bg-card rounded-2xl p-6">
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
