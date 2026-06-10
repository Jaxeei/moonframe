import { Reveal } from "@/components/motion/reveal";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-36 md:pb-20 md:pt-44">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(77,127,255,0.12), transparent 65%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-moon md:text-5xl">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-lunar md:text-lg">
          {description}
        </p>
      </Reveal>
    </section>
  );
}
