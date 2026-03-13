"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TechStackDict } from "@/lib/types";

interface TechStackProps {
  dict: TechStackDict;
}

const categoryColors: Record<string, string> = {
  Primary: "bg-accent-violet/15 text-accent-violet border border-accent-violet/20",
  Principal: "bg-accent-violet/15 text-accent-violet border border-accent-violet/20",
  Frontend: "bg-accent-pink/15 text-accent-pink border border-accent-pink/20",
  Backend: "bg-accent-emerald/15 text-accent-emerald border border-accent-emerald/20",
  Other: "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20",
  Otros: "bg-accent-cyan/15 text-accent-cyan border border-accent-cyan/20",
};

export function TechStack({ dict }: TechStackProps) {
  return (
    <section id="techStack" className="py-24 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <AnimatedSection>
          <SectionHeading>{dict.title}</SectionHeading>
        </AnimatedSection>

        <div className="space-y-10">
          {dict.categories.map((category, catIndex) => (
            <AnimatedSection key={category.name} delay={catIndex * 0.1}>
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-3">
                {category.items.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: techIndex * 0.05,
                      type: "spring",
                      stiffness: 200,
                    }}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                      categoryColors[category.name] || categoryColors["Other"]
                    } transition-transform hover:scale-105`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
