import { FooterDict } from "@/lib/types";

interface FooterProps {
  dict: FooterDict;
}

export function Footer({ dict }: FooterProps) {
  return (
    <footer className="relative glass border-t border-card-border">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-violet to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-center">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Judit Ramo Solé. {dict.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
