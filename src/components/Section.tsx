import type { ReactNode } from "react";
import { motion } from "motion/react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, description, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("section-shell", className)}>
      <div className="container-page">
        <motion.div
          className="mb-8 max-w-3xl md:mb-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge>{eyebrow}</Badge>
          <h2 className="mt-5 font-display text-4xl font-semibold tracking-[-0.04em] text-foreground md:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
