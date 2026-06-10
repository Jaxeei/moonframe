"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const inputClasses =
  "w-full rounded-xl border border-moon/12 bg-navy/60 px-4 py-3 text-sm text-moon placeholder:text-lunar/60 transition-colors focus:border-glow/50 focus:outline-none";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Wire to your form backend (e.g. an API route, Resend, or Formspree).
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="glass flex flex-col items-center rounded-2xl p-12 text-center">
        <CheckCircle2 className="size-10 text-glow-soft" aria-hidden="true" />
        <h2 className="mt-4 font-display text-xl font-semibold text-moon">
          Message received
        </h2>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-lunar">
          Thanks for reaching out. We read every inquiry personally and
          we&apos;ll reply within one business day with next steps.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-moon">
            Name
          </label>
          <input id="name" name="name" required autoComplete="name" placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-moon">
            Email
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" placeholder="you@company.com" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-moon">
          Company <span className="text-lunar">(optional)</span>
        </label>
        <input id="company" name="company" autoComplete="organization" placeholder="Company or project name" className={inputClasses} />
      </div>

      <div>
        <label htmlFor="budget" className="mb-2 block text-sm font-medium text-moon">
          Budget range
        </label>
        <select id="budget" name="budget" defaultValue="" required className={inputClasses}>
          <option value="" disabled>
            Select a range
          </option>
          <option value="under-5k">Under $5,000</option>
          <option value="5k-10k">$5,000 – $10,000</option>
          <option value="10k-25k">$10,000 – $25,000</option>
          <option value="25k-plus">$25,000+</option>
          <option value="not-sure">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-moon">
          What are you trying to achieve?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your business, your current site if you have one, and what success looks like."
          className={inputClasses}
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send message
        <ArrowRight className="size-4" />
      </Button>
      <p className="text-center text-xs text-lunar/70">
        We reply within one business day. No newsletters, no spam.
      </p>
    </form>
  );
}
