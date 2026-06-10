import Link from "next/link";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function PortfolioSection() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Selected Work"
        title="Results our clients can measure"
        description="Every project below shipped with a number attached. Here are a few."
      />

      <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.slice(0, 3).map((project) => (
          <RevealItem key={project.slug}>
            <ProjectCard project={project} />
          </RevealItem>
        ))}
      </Reveal>

      <Reveal className="mt-10 text-center">
        <Button asChild variant="outline">
          <Link href="/portfolio">View all case studies</Link>
        </Button>
      </Reveal>
    </section>
  );
}
