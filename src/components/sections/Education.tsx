import { GraduationCap } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education"
      title="Formal foundation."
      description="Core engineering fundamentals from a software engineering degree."
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-5">
            <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-100">
              <GraduationCap size={26} />
            </div>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em]">
                Pontificia Universidad Catolica Argentina
              </h3>
              <p className="mt-2 text-slate-300">Engineer's degree, Computer Software Engineering</p>
            </div>
          </div>
          <p className="rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-slate-200">
            2008 - 2015
          </p>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
