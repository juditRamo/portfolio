import { ProjectItem } from "@/lib/types";
import { TechBadge } from "./TechBadge";
import { HiArrowTopRightOnSquare, HiCodeBracket } from "react-icons/hi2";

interface ProjectCardProps {
  item: ProjectItem;
  isActive?: boolean;
}

export function ProjectCard({ item, isActive = false }: ProjectCardProps) {
  return (
    <div
      className={`group gradient-border glass rounded-2xl hover:shadow-xl hover:shadow-accent-violet/10 transition-all duration-300 flex flex-col h-full ${
        isActive ? "shadow-lg shadow-accent-violet/5" : ""
      }`}
    >
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent-violet transition-colors">
          {item.title}
        </h3>

        <p className="text-foreground/70 mb-5 leading-relaxed flex-1">
          {item.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {item.tech.map((tech) => (
            <TechBadge
              key={tech}
              name={tech}
              colorClass="bg-accent-cyan/10 text-accent-cyan"
            />
          ))}
        </div>

        {/* Links */}
        {(item.liveUrl || item.repoUrl) && (
          <div className="flex items-center gap-4">
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-violet hover:text-accent-pink transition-colors"
              >
                Live <HiArrowTopRightOnSquare className="w-4 h-4" />
              </a>
            )}
            {item.repoUrl && (
              <a
                href={item.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-accent-violet hover:text-accent-pink transition-colors"
              >
                Code <HiCodeBracket className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
