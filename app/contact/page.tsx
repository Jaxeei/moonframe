import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute consultation with MoonFrame. We'll review your site, show you where it's losing customers, and tell you what we'd do.",
};

const details = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Studio", value: siteConfig.address },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book your free consultation"
        description="Thirty minutes, no obligation. We'll review your current site, show you where it's losing customers, and tell you exactly what we'd do about it."
      />

      <section className="mx-auto max-w-5xl px-5 pb-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.15}>
            <aside className="space-y-6">
              <div className="glass rounded-2xl p-7">
                <h2 className="eyebrow">Reach us directly</h2>
                <ul className="mt-5 space-y-5">
                  {details.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-3.5">
                      <span className="glass flex size-10 shrink-0 items-center justify-center rounded-xl">
                        <Icon className="size-4 text-glow-soft" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs text-lunar">{label}</span>
                        {href ? (
                          <a href={href} className="text-sm font-medium text-moon transition-colors hover:text-glow-soft">
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm font-medium text-moon">{value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="glass rounded-2xl p-7">
                <h2 className="eyebrow">What happens next</h2>
                <ol className="mt-5 space-y-4 text-sm leading-relaxed text-lunar">
                  <li>
                    <span className="font-medium text-moon">1. We reply within a day</span>{" "}
                    with a few times for a 30-minute call.
                  </li>
                  <li>
                    <span className="font-medium text-moon">2. We review your site live</span>{" "}
                    and point out what&apos;s costing you customers.
                  </li>
                  <li>
                    <span className="font-medium text-moon">3. You get a fixed quote</span>{" "}
                    and a written timeline — then you decide.
                  </li>
                </ol>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>
    </>
  );
}
