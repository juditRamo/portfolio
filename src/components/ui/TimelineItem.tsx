"use client";

import { motion } from "framer-motion";
import { ExperienceItem } from "@/lib/types";
import { TechBadge } from "./TechBadge";

interface TimelineItemProps {
  item: ExperienceItem;
  index: number;
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="relative pl-8 md:pl-12 pb-12 last:pb-0"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-gradient-to-br from-accent-violet to-accent-pink border-4 border-background z-10" />

      {/* Content card */}
      <div className="gradient-border bg-card rounded-2xl p-6 hover:shadow-lg hover:shadow-accent-violet/5 transition-all duration-300">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h3 className="text-xl font-bold text-foreground">{item.company}</h3>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-pink/10 text-accent-pink">
            {item.duration}
          </span>
        </div>

        <p className="text-accent-violet font-semibold mb-1">{item.role}</p>
        <p className="text-sm text-muted mb-3">{item.period}</p>
        <p className="text-foreground/80 mb-4">{item.description}</p>

        <ul className="space-y-2 mb-4">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/70">
              <span className="text-accent-cyan mt-1 shrink-0">&#9656;</span>
              {highlight}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {item.tech.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
