interface TechBadgeProps {
  name: string;
  colorClass?: string;
}

export function TechBadge({ name, colorClass = "bg-accent-violet/10 text-accent-violet" }: TechBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${colorClass} transition-transform hover:scale-105`}
    >
      {name}
    </span>
  );
}
