import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { projects } from "@/lib/data";

export function ProjectCard({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <Link
      href="/portfolio"
      className="group relative block overflow-hidden rounded-2xl border border-moon/10 transition-all duration-500 hover:-translate-y-1 hover:border-glow/35 hover:glow-sm"
    >
      {/* Case-study visual: abstract navy gradient field with a rim-lit arc */}
      <div
        className={cn(
          "relative aspect-[16/10] bg-gradient-to-br transition-transform duration-700 group-hover:scale-[1.03]",
          project.gradient
        )}
      >
        <div
          aria-hidden="true"
          className="absolute -bottom-1/2 left-1/2 size-[120%] -translate-x-1/2 rounded-full opacity-60 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            boxShadow:
              "inset 0 24px 60px rgba(77,127,255,0.22), 0 -2px 40px rgba(77,127,255,0.12)",
          }}
        />
        <span className="absolute left-5 top-5 font-mono text-[11px] tracking-widest text-moon/60">
          {project.category}
        </span>
      </div>

      <div className="glass border-x-0 border-b-0 p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-moon">
            {project.title}
          </h3>
          <ArrowUpRight className="size-4 shrink-0 text-lunar transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-glow-soft" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-lunar">{project.summary}</p>
        <p className="mt-4 inline-block rounded-full border border-glow/30 bg-glow/10 px-3 py-1 font-mono text-[11px] tracking-wide text-glow-soft">
          {project.result}
        </p>
      </div>
    </Link>
  );
}
