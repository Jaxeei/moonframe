import type { Metadata } from "next";
import { values, team, stats } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { SectionHeading } from "@/components/section-heading";
import { Reveal, RevealItem } from "@/components/motion/reveal";
import { FinalCta } from "@/components/home/final-cta";

export const metadata: Metadata = {
  title: "About",
  description:
    "MoonFrame is a small senior team of designers, engineers, and strategists who build websites accountable to business results.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About MoonFrame"
        title="A small team with an unreasonable standard"
        description="We started MoonFrame because most agency websites are judged on how they look in a portfolio — not on what they earn for the client. We wanted to be judged on the second thing."
      />

      <section className="mx-auto max-w-3xl px-5 pb-20">
        <Reveal>
          <div className="space-y-5 leading-relaxed text-lunar">
            <p>
              MoonFrame is a web design studio of four senior practitioners.
              No juniors learning on your budget, no account managers playing
              telephone — the people you meet on the first call are the people
              who design, write, and build your site.
            </p>
            <p>
              Since 2019 we&apos;ve launched more than 120 websites across
              finance, e-commerce, SaaS, hospitality, and professional
              services. The throughline isn&apos;t an industry — it&apos;s a
              type of client: businesses that treat their website as a revenue
              channel and expect it to perform like one.
            </p>
            <p>
              The name comes from how we work. A moon doesn&apos;t appear all
              at once; it waxes in phases, each one visibly building on the
              last. So does every project here — you see real progress every
              week, from the first discovery call to the full-moon launch and
              the growth work after it.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="border-y border-moon/8 bg-navy/30 py-20">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind every project"
          />
          <Reveal stagger className="mt-14 grid gap-5 md:grid-cols-2">
            {values.map((value) => (
              <RevealItem
                key={value.title}
                className="glass rounded-2xl p-7 transition-colors duration-300 hover:border-glow/30"
              >
                <h3 className="font-display text-lg font-semibold text-moon">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-lunar">
                  {value.description}
                </p>
              </RevealItem>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-28">
        <SectionHeading
          eyebrow="The Team"
          title="Four people, no layers"
        />
        <Reveal stagger className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4">
          {team.map((member) => (
            <RevealItem key={member.name} className="text-center">
              <div className="glass mx-auto flex size-24 items-center justify-center rounded-full font-display text-xl font-semibold text-glow-soft glow-sm">
                {member.initials}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-moon">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-lunar">{member.role}</p>
            </RevealItem>
          ))}
        </Reveal>

        <Reveal className="mt-20">
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-moon/8 p-6 text-center">
                <p className="font-display text-2xl font-semibold text-moon">{stat.value}</p>
                <p className="mt-1 text-xs text-lunar">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <FinalCta />
    </>
  );
}
