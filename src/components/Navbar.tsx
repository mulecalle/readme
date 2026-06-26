import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSmoothScroll } from "./SmoothScrollProvider";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Tech Stack", href: "#techstack" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/mulecalle" },
  { label: "LinkedIn", href: "https://linkedin.com/in/scalle" },
];

const topBarButton =
  "border-white/10 bg-white/5 text-slate-200 hover:border-white/20 hover:bg-white/10 hover:text-white focus-visible:ring-white/20";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  const onNavigate = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-4 z-50 px-4"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="container-page flex items-center justify-between gap-4 rounded-full border border-white/10 bg-slate-950/55 px-3 py-2.5 shadow-[0_12px_60px_rgb(0_0_0/0.32)] backdrop-blur-2xl md:px-4">
        <div className="flex items-center gap-2.5 rounded-full pr-3 pl-1.5 select-none">
          <span className="flex size-9 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-sky-500/55 to-blue-600/55 font-display text-sm font-semibold text-white">
            SC
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-slate-100">
            Sebastian Calle
          </span>
        </div>

        <div className="hidden items-center gap-1.5 lg:flex">
          {navItems.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant="ghost"
              size="sm"
              className={cn("px-3.5", topBarButton)}
              onClick={() => onNavigate(item.href)}
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div className="hidden items-center gap-1.5 md:flex">
          {socials.map((social) => (
            <Button key={social.label} asChild variant="ghost" size="sm" className={cn("px-3.5", topBarButton)}>
              <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
              </a>
            </Button>
          ))}
          <Button asChild variant="ghost" size="sm" className={topBarButton}>
            <a href="/resume/sebastian-calle.pdf" download>
              Resume
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <div
        className={cn(
          "container-page mt-3 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/80 shadow-2xl backdrop-blur-2xl transition-all duration-300 md:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 border-transparent opacity-0",
        )}
      >
        <div className="grid gap-1 p-3">
          {navItems.map((item) => (
            <Button
              key={item.href}
              type="button"
              variant="ghost"
              size="sm"
              className={cn("w-full justify-start", topBarButton)}
              onClick={() => onNavigate(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <div className="my-1 h-px bg-white/10" />
          <div className="grid grid-cols-2 gap-2 px-1 pb-1">
            {socials.map((social) => (
              <Button key={social.label} asChild variant="ghost" size="sm" className={topBarButton}>
                <a href={social.href} target="_blank" rel="noreferrer">
                  {social.label}
                </a>
              </Button>
            ))}
            <Button asChild variant="ghost" size="sm" className={cn("col-span-2", topBarButton)}>
              <a href="/resume/sebastian-calle.pdf" download>
                Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
