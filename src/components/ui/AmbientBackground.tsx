export function AmbientBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-x-0 top-0 min-h-lvh -z-10 pointer-events-none overflow-hidden"
    >
      {/* Top-left violet */}
      <div className="absolute top-[5%] -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-violet/20 blur-[120px]" />
      {/* Top-right pink */}
      <div className="absolute top-[15%] right-0 w-[500px] h-[500px] rounded-full bg-accent-pink/20 blur-[120px]" />
      {/* Mid-left cyan */}
      <div className="absolute top-[45%] left-1/3 w-[400px] h-[400px] rounded-full bg-accent-cyan/15 blur-[120px]" />
      {/* Bottom-right emerald */}
      <div className="absolute top-[70%] -right-1/4 w-[500px] h-[500px] rounded-full bg-accent-emerald/15 blur-[120px]" />
    </div>
  );
}
