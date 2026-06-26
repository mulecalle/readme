import { motion } from "motion/react";
import { Section } from "@/components/Section";
import { techStack } from "@/data/portfolio";

export function TechStack() {
  return (
    <Section
      id="techstack"
      eyebrow="Tech Stack"
      title="Systems, platforms, and AI-native workflows."
      description="The working toolkit behind developer productivity, platform infrastructure, and modern AI integrations."
    >
      <motion.div
        className="glass-panel rounded-[2rem] p-5 md:p-8"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex flex-wrap gap-3">
          {techStack.map((item, index) => (
            <motion.span
              key={item}
              className="rounded-full border border-white/10 bg-white/7 px-4 py-2 text-sm font-medium text-slate-200 shadow-[inset_0_1px_0_rgb(255_255_255/0.08)] transition-colors hover:border-sky-400/40 hover:bg-sky-500/12 hover:text-sky-50 md:px-5 md:py-3 md:text-base"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.025, duration: 0.45 }}
            >
              {item}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
