import { process } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { MoonPhase } from "@/components/moon-phase";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function ProcessSection() {
  return (
    <section className="border-y border-moon/8 bg-navy/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The Process"
          title="From new moon to full"
          description="Five phases. Your project waxes from first conversation to a site that keeps growing after launch."
        />

        <Reveal stagger className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {process.map((step, i) => (
            <RevealItem key={step.name} className="relative text-center lg:text-left">
              {/* connecting line between phases on desktop */}
              {i < process.length - 1 && (
                <div
                  aria-hidden="true"
                  className="rule-fade absolute left-[60%] top-7 hidden w-[80%] lg:block"
                />
              )}
              <MoonPhase
                phase={step.phase}
                className="mx-auto size-14 lg:mx-0"
              />
              <p className="mt-5 font-mono text-[11px] tracking-widest text-glow-soft">
                PHASE {i + 1} / 5
              </p>
              <h3 className="mt-2 font-display text-lg font-semibold text-moon">
                {step.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-lunar">
                {step.description}
              </p>
            </RevealItem>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
