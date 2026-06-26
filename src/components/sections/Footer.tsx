import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="relative border-t border-white/10 py-10">
      <div className="container-page flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <p className="text-sm text-slate-400">
          Copyright &copy; {new Date().getFullYear()} Sebastian Calle
        </p>
        <Button type="button" variant="ghost" size="icon" onClick={() => scrollTo(0)} aria-label="Back to top">
          <ArrowUp size={18} />
        </Button>
        <div className="flex items-center gap-3">
          <Button asChild variant="ghost" className="px-4" aria-label="GitHub">
            <a href="https://github.com/mulecalle" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
          <Button asChild variant="ghost" className="px-4" aria-label="LinkedIn">
            <a href="https://linkedin.com/in/scalle" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
