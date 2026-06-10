import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Testimonials"
        title="What clients say after launch"
        description="Not after the design reveal — after the results came in."
      />

      <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem
            key={t.name}
            className="glass flex h-full flex-col rounded-2xl p-7 transition-colors duration-300 hover:border-glow/30"
          >
            <div className="flex gap-1" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-glow-soft text-glow-soft" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-5 flex-1 text-[15px] leading-relaxed text-moon/90">
              “{t.quote}”
            </blockquote>
            <footer className="mt-6 border-t border-moon/8 pt-4">
              <p className="text-sm font-semibold text-moon">{t.name}</p>
              <p className="mt-0.5 text-xs text-lunar">{t.role}</p>
            </footer>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
