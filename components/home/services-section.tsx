import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function ServicesSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Services"
        title="Everything your website needs to sell"
        description="Six disciplines, one team, one goal: a website that earns its keep."
      />

      <Reveal stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <RevealItem key={service.slug}>
            <Link
              href={`/services#${service.slug}`}
              className="group glass flex h-full flex-col rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-glow/35 hover:glow-sm"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-display text-lg font-semibold text-moon">
                  {service.title}
                </h3>
                <ArrowUpRight className="size-4 text-lunar transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-glow-soft" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-lunar">
                {service.description}
              </p>
              <p className="mt-5 font-mono text-[11px] tracking-wider text-lunar/70">
                {service.deliverables.slice(0, 3).join(" · ")}
              </p>
            </Link>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
