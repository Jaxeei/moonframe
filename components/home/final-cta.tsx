import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden px-5 py-24 md:py-36">
      {/* Rising full moon glow behind the closing ask */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-full size-[60rem] -translate-x-1/2 -translate-y-[22%] rounded-full"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(77,127,255,0.16), transparent 55%)",
        }}
      />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="eyebrow">Ready when you are</p>
        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-moon md:text-5xl">
          Your website should be your best{" "}
          <em className="font-serif font-normal text-glow-soft">salesperson</em>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-lunar md:text-lg">
          Book a free 30-minute consultation. We&apos;ll review your current
          site, show you exactly where it&apos;s losing customers, and tell you
          what we&apos;d do about it — whether you hire us or not.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <Link href="/contact">
              Book a free consultation
              <ArrowRight className="size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/portfolio">See the results first</Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
