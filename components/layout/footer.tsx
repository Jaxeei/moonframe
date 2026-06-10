import Link from "next/link";
import { Logo } from "@/components/layout/logo";
import { siteConfig } from "@/lib/data";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-moon/8 bg-navy/40">
      <div className="mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-lunar">
              A premium web design agency building websites that turn visitors
              into customers.
            </p>
          </div>

          <nav aria-label="Footer">
            <h3 className="eyebrow">Navigate</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-lunar transition-colors hover:text-moon"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="eyebrow">Contact</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-lunar">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-moon"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/[^+\d]/g, "")}`}
                  className="transition-colors hover:text-moon"
                >
                  {siteConfig.phone}
                </a>
              </li>
              <li>{siteConfig.address}</li>
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Follow</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-lunar transition-colors hover:text-moon"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rule-fade mt-14" />
        <div className="mt-6 flex flex-col gap-2 text-xs text-lunar/70 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} MoonFrame Studio. All rights reserved.</p>
          <p>Designed & built in San Francisco.</p>
        </div>
      </div>
    </footer>
  );
}
