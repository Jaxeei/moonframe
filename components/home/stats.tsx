import { stats } from "@/lib/data";
import { Reveal, RevealItem } from "@/components/motion/reveal";

export function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
      <Reveal stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <RevealItem
            key={stat.label}
            className="glass rounded-2xl p-6 text-center transition-colors duration-300 hover:border-glow/30"
          >
            <p className="font-display text-3xl font-semibold text-moon md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm font-medium text-moon/90">{stat.label}</p>
            <p className="mt-1 text-xs text-lunar">{stat.detail}</p>
          </RevealItem>
        ))}
      </Reveal>
    </section>
  );
}
