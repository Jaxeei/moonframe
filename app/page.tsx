import { Hero } from "@/components/home/hero";
import { Stats } from "@/components/home/stats";
import { ServicesSection } from "@/components/home/services-section";
import { Comparison } from "@/components/home/comparison";
import { PortfolioSection } from "@/components/home/portfolio-section";
import { ProcessSection } from "@/components/home/process-section";
import { Testimonials } from "@/components/home/testimonials";
import { PricingSection } from "@/components/home/pricing-section";
import { FaqSection } from "@/components/home/faq-section";
import { FinalCta } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesSection />
      <Comparison />
      <PortfolioSection />
      <ProcessSection />
      <Testimonials />
      <PricingSection />
      <FaqSection />
      <FinalCta />
    </>
  );
}
