import { Check, X } from "lucide-react";
import { comparison } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";

export function Comparison() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-20 md:py-28">
      <SectionHeading
        eyebrow="Why MoonFrame"
        title="The difference is in how we work"
        description="Most agencies sell pages. We build the system that turns your traffic into revenue."
      />

      <Reveal className="mt-14 overflow-hidden rounded-2xl border border-moon/10">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-moon/10 bg-navy/60">
              <th scope="col" className="w-[22%] p-4 font-mono text-[11px] font-medium uppercase tracking-widest text-lunar md:p-5">
                Stage
              </th>
              <th scope="col" className="w-[39%] p-4 font-medium text-lunar md:p-5">
                Generic agency
              </th>
              <th scope="col" className="w-[39%] bg-glow/[0.06] p-4 font-semibold text-glow-soft md:p-5">
                MoonFrame
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((row) => (
              <tr key={row.label} className="border-b border-moon/8 last:border-0">
                <th scope="row" className="p-4 align-top font-mono text-[11px] font-medium uppercase tracking-widest text-lunar md:p-5">
                  {row.label}
                </th>
                <td className="p-4 align-top text-lunar md:p-5">
                  <span className="flex gap-2.5">
                    <X className="mt-0.5 size-4 shrink-0 text-lunar/50" aria-hidden="true" />
                    {row.generic}
                  </span>
                </td>
                <td className="bg-glow/[0.06] p-4 align-top text-moon md:p-5">
                  <span className="flex gap-2.5">
                    <Check className="mt-0.5 size-4 shrink-0 text-glow-soft" aria-hidden="true" />
                    {row.moonframe}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
