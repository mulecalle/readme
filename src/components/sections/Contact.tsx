import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { GlassCard } from "@/components/GlassCard";
import { Section } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Get in touch."
      description="For platform engineering, AI adoption, or developer productivity conversations."
    >
      <motion.div
        className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <GlassCard>
          <div className="flex size-14 items-center justify-center rounded-2xl border border-sky-400/25 bg-sky-500/10 text-sky-100">
            <Mail size={26} />
          </div>
          <h3 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em]">
            Send a signal through the noise.
          </h3>
          <p className="mt-5 leading-8 text-slate-300">
            The original Formspree flow is preserved, now framed inside a polished glass panel.
          </p>
        </GlassCard>

        <GlassCard>
          <form className="grid gap-4" method="POST" action="https://formspree.io/xrgwzlyq">
            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <Input type="email" name="_replyto" placeholder="Your email" required />
            <Textarea name="message" placeholder="Your message" required />
            <Button type="submit" size="lg" className="w-full">
              <Send size={18} />
              Send
            </Button>
          </form>
        </GlassCard>
      </motion.div>
    </Section>
  );
}
