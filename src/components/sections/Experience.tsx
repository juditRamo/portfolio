"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { ExperienceDict } from "@/lib/types";

interface ExperienceProps {
  dict: ExperienceDict;
}

export function Experience({ dict }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[23px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-violet via-accent-pink to-accent-cyan" />

          {dict.items.map((item, i) => (
            <TimelineItem key={item.company} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
