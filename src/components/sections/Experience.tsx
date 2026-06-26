import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import { experiences, type ExperienceItem } from "@/data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export function Experience() {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const lineRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!lineRef.current) {
        return;
      }

      gsap.fromTo(
        lineRef.current,
        { scaleY: 0, transformOrigin: "top" },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: lineRef.current,
            start: "top 74%",
            end: "bottom 30%",
            scrub: true,
          },
        },
      );
    },
    { scope: rootRef },
  );

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Career arc, reframed as impact."
      description="A responsive timeline of platform work, quality leadership, and AI adoption outcomes."
    >
      <div ref={rootRef} className="relative">
        <div className="absolute top-5 bottom-6 left-5 hidden w-px bg-white/10 md:left-[15.75rem] md:block">
          <div
            ref={lineRef}
            className="h-full w-px origin-top bg-gradient-to-b from-cyan-300 via-blue-400 to-transparent shadow-[0_0_34px_rgb(56_189_248/0.6)]"
          />
        </div>

        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <TimelineItem key={`${experience.date}-${experience.role}`} item={experience} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

type TimelineItemProps = {
  item: ExperienceItem;
  index: number;
};

function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.article
      className="relative grid gap-5 md:grid-cols-[13rem_3rem_1fr]"
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.08, 0.28), ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="md:pt-6 md:text-right">
        <span className="inline-flex rounded-full border border-sky-400/25 bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-100">
          {item.date}
        </span>
      </div>

      <div className="relative hidden justify-center pt-5 md:flex">
        <div className="z-10 flex size-12 items-center justify-center rounded-full border border-cyan-300/30 bg-slate-950 text-cyan-100 shadow-[0_0_34px_rgb(56_189_248/0.26)]">
          <ChevronRight size={22} />
        </div>
      </div>

      <GlassCard className="group overflow-hidden p-0">
        <div className="relative p-6 md:p-8">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/60 to-transparent opacity-70" />
          <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl">
            {item.role}
          </h3>

          <div className="mt-7 grid gap-6 lg:grid-cols-2">
            <TimelineList title="Responsibilities" items={item.responsibilities} />
            <TimelineList title="Impact" items={item.impact} />
          </div>
        </div>
      </GlassCard>
    </motion.article>
  );
}

type TimelineListProps = {
  title: string;
  items: string[];
};

function TimelineList({ title, items }: TimelineListProps) {
  return (
    <div>
      <p className="mb-4 text-sm font-semibold tracking-[0.2em] text-slate-400 uppercase">{title}</p>
      <ul className="grid gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-7 text-slate-300">
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_14px_rgb(56_189_248/0.85)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
