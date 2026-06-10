import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { services } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Website design, redesign, e-commerce, SEO foundations, maintenance, and branding — six disciplines, one conversion-focused team.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Six ways we grow your business online"
        description="Each service stands alone, but they're designed to work together — strategy, design, build, and growth from one team."
      />

      <section className="mx-auto max-w-5xl space-y-6 px-5 pb-10">
        {services.map((service, i) => (
          <Reveal key={service.slug}>
            <article
              id={service.slug}
              className="glass grid scroll-mt-28 gap-8 rounded-2xl p-8 transition-colors duration-300 hover:border-glow/30 md:grid-cols-[1fr_280px] md:p-10"
            >
              <div>
                <p className="font-mono text-[11px] tracking-widest text-glow-soft">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-display text-2xl font-semibold text-moon">
                  {service.title}
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-lunar">
                  {service.description}
                </p>
                <Button asChild variant="outline" size="sm" className="mt-6">
                  <Link href="/contact">
                    Discuss this project
                    <ArrowRight className="size-3.5" />
                  </Link>
                </Button>
              </div>
              <div className="border-t border-moon/8 pt-6 md:border-l md:border-t-0 md:pl-8 md:pt-0">
                <h3 className="eyebrow">What you get</h3>
                <ul className="mt-4 space-y-3">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-moon/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-glow-soft" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <FinalCta />
    </>
  );
}
