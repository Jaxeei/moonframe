import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Case studies from MoonFrame: websites, storefronts, and brands that shipped with measurable results attached.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Work that shipped with numbers attached"
        description="We measure every launch. These case studies show the before, the after, and the result in between."
      />

      <section className="mx-auto max-w-6xl px-5 pb-10">
        <Reveal stagger className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <RevealItem key={project.slug}>
              <ProjectCard project={project} />
            </RevealItem>
          ))}
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
