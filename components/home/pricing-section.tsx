import Link from "next/link";
import { Check } from "lucide-react";
import { pricing } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Pricing"
        title="Fixed quotes. No invoice surprises."
        description="Every project starts with a free consultation and ends with a number you agreed to up front."
      />

      <Reveal stagger className="mt-14 grid gap-5 lg:grid-cols-3">
        {pricing.map((tier) => (
          <RevealItem
            key={tier.name}
            className={cn(
              "relative flex h-full flex-col rounded-2xl p-8",
              tier.featured
                ? "border border-glow/40 bg-glow/[0.07] glow-md"
                : "glass"
            )}
          >
            {tier.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-glow px-3 py-1 font-mono text-[10px] font-medium tracking-widest text-void">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-display text-lg font-semibold text-moon">
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-2">
              <span className="font-display text-4xl font-semibold text-moon">
                {tier.price}
              </span>
              <span className="font-mono text-xs text-lunar">{tier.cadence}</span>
            </p>
            <p className="mt-3 text-sm leading-relaxed text-lunar">
              {tier.description}
            </p>
            <ul className="mt-6 flex-1 space-y-3">
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-2.5 text-sm text-moon/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-glow-soft" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={tier.featured ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              <Link href="/contact">{tier.cta}</Link>
            </Button>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
