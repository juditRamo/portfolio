interface SectionHeadingProps {
  children: string;
}

export function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
      <span className="gradient-text">{children}</span>
    </h2>
  );
}
