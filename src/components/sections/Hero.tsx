import { ArrowDown, Download } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden px-4 pt-28 pb-16">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: "url('/images/lead-bg.jpg')",
          backgroundPosition: "top center",
          backgroundSize: "cover",
          filter: "brightness(1.35) saturate(1.1)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/5 via-slate-950/35 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_42%,transparent_38%,rgb(3_7_18/0.5))]" />

      <div className="container-page relative z-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Badge
            variant="sapphire"
            className="mb-6 border border-white/10 bg-gradient-to-r from-blue-600/25 via-sky-500/25 to-teal-400/25 text-white shadow-[0_0_18px_rgb(37_99_235/0.18)] backdrop-blur-sm"
          >
            Principal Software Engineer
          </Badge>
          <h1 className="font-display text-6xl leading-[0.98] font-semibold tracking-[-0.06em] text-balance md:text-8xl xl:text-9xl">
            Sebastian <span className="gradient-text">Calle</span>
          </h1>
          <p className="mt-7 max-w-2xl text-xl leading-9 text-slate-300 md:text-2xl">
            I build developer productivity systems, platform infrastructure, and AI adoption
            programs that help engineering teams move faster with confidence.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg">
              <a href="/resume/sebastian-calle.pdf" download>
                <Download size={18} />
                Download Resume
              </a>
            </Button>
            <Button type="button" size="lg" variant="ghost" onClick={() => scrollTo("#about")}>
              Explore Profile
              <ArrowDown size={18} />
            </Button>
          </div>
        </motion.div>

        <motion.div
          className="glass-panel relative overflow-hidden rounded-[2.5rem] p-6 md:p-8"
          initial={{ opacity: 0, scale: 0.95, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.16, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute -top-20 -right-16 size-52 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 size-60 rounded-full bg-blue-500/18 blur-3xl" />
          <div className="relative">
            <div className="mb-8">
              <p className="text-sm tracking-[0.28em] text-cyan-100 uppercase">Focus</p>
                <p className="mt-1 font-display text-2xl font-semibold">Platform + Productivity + AI</p>
            </div>

            <div className="grid gap-4">
              {[
                ["15+", "Years across startups, public companies, and enterprise platforms"],
                ["T&P", "Company-wide coding assistant adoption"],
                ["AI", "Vendor evaluation, integration, and internal rollout"],
              ].map(([metric, label]) => (
                <div
                  key={metric}
                  className="group/metric rounded-3xl border border-white/10 bg-white/6 p-5 transition-colors duration-300 hover:border-sky-400/40 hover:bg-sky-500/12"
                >
                  <p className="font-display text-4xl font-semibold text-white transition-colors group-hover/metric:text-sky-50">
                    {metric}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-300 transition-colors group-hover/metric:text-sky-100/90">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
