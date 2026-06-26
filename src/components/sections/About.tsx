import { motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import { aboutParagraphs } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Engineering leverage, from tooling to AI adoption."
      description="A broad operating background across product, quality, infrastructure, and developer platforms."
    >
      <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="sticky top-28">
            <p className="text-sm tracking-[0.24em] text-cyan-100 uppercase">Current thesis</p>
            <p className="mt-5 font-display text-3xl leading-tight font-semibold tracking-[-0.04em]">
              Better tools change how organizations ship.
            </p>
            <p className="mt-5 text-sm leading-7 text-slate-300">
              I focus on the durable systems around engineering teams: adoption loops, platform
              foundations, automation, and feedback channels.
            </p>
          </GlassCard>
        </motion.div>

        <motion.div
          className="grid gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
          {aboutParagraphs.map((paragraph) => (
            <GlassCard key={paragraph} className="p-6 md:p-7">
              <p className="text-lg leading-9 text-slate-200">{paragraph}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
