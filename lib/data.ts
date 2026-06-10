export const siteConfig = {
  name: "MoonFrame",
  url: "https://moonframe.studio",
  email: "hello@moonframe.studio",
  phone: "+1 (415) 555-0148",
  address: "660 Mission St, San Francisco, CA",
  description:
    "MoonFrame is a premium web design agency. We design and build conversion-focused websites that help businesses grow online.",
  socials: [
    { label: "X / Twitter", href: "https://x.com/moonframe" },
    { label: "Instagram", href: "https://instagram.com/moonframe.studio" },
    { label: "LinkedIn", href: "https://linkedin.com/company/moonframe" },
    { label: "Dribbble", href: "https://dribbble.com/moonframe" },
  ],
};

export const stats = [
  { value: "120+", label: "Websites launched", detail: "across 14 industries" },
  { value: "3.2×", label: "Average conversion lift", detail: "within 90 days of launch" },
  { value: "98", label: "Median Lighthouse score", detail: "performance on launch day" },
  { value: "4.9/5", label: "Client rating", detail: "from 87 verified reviews" },
];

export const services = [
  {
    slug: "website-design",
    title: "Website Design",
    description:
      "A custom site designed around your sales process — not a template with your logo on it. Strategy, copy direction, and design that moves visitors toward one clear action.",
    deliverables: ["Conversion strategy", "Custom UI design", "Copy direction", "Design system"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description:
      "Your current site has traffic but no results. We audit what's leaking, keep what works, and rebuild the rest — without losing your search rankings.",
    deliverables: ["Conversion audit", "SEO-safe migration", "Analytics setup", "A/B-ready layout"],
  },
  {
    slug: "e-commerce",
    title: "E-Commerce",
    description:
      "Storefronts engineered for checkout completion. Fast product pages, frictionless carts, and merchandising that lifts average order value.",
    deliverables: ["Storefront design", "Checkout optimization", "Product page systems", "Payment integration"],
  },
  {
    slug: "seo-foundations",
    title: "SEO Foundations",
    description:
      "Technical SEO built into the site itself: clean architecture, structured data, Core Web Vitals in the green, and content structure search engines reward.",
    deliverables: ["Technical audit", "Structured data", "Core Web Vitals", "Content architecture"],
  },
  {
    slug: "maintenance",
    title: "Maintenance",
    description:
      "Your site stays fast, secure, and current after launch. Monitoring, updates, and a design team on call — so you never ship a broken page.",
    deliverables: ["Uptime monitoring", "Security updates", "Monthly reporting", "Priority support"],
  },
  {
    slug: "branding",
    title: "Branding",
    description:
      "Logo, palette, and voice that hold together everywhere your business shows up. Built first, so your website isn't decorating a brand that doesn't exist yet.",
    deliverables: ["Logo & identity", "Brand guidelines", "Voice & messaging", "Asset library"],
  },
];

export const comparison = {
  rows: [
    {
      label: "Starting point",
      generic: "A template with your logo dropped in",
      moonframe: "Strategy session on your customers and sales process",
    },
    {
      label: "Design goal",
      generic: "Looks nice in the portfolio",
      moonframe: "Measured conversion lift within 90 days",
    },
    {
      label: "Performance",
      generic: "Page speed checked after launch, if at all",
      moonframe: "95+ Lighthouse score is a launch requirement",
    },
    {
      label: "Copywriting",
      generic: "You write it, they paste it",
      moonframe: "Conversion copy direction included in every project",
    },
    {
      label: "After launch",
      generic: "Final invoice, then silence",
      moonframe: "30-day tuning period and ongoing growth support",
    },
    {
      label: "Communication",
      generic: "Account manager relays messages",
      moonframe: "Direct line to the designer and developer",
    },
  ],
};

export const projects = [
  {
    slug: "northwind-capital",
    title: "Northwind Capital",
    category: "Finance — Website Design",
    summary:
      "A wealth management firm whose site looked like 2014. We rebuilt it around advisor credibility and a single booking flow.",
    result: "+212% consultation bookings",
    gradient: "from-[#16203d] via-[#0d1426] to-[#050608]",
  },
  {
    slug: "atelier-soma",
    title: "Atelier Soma",
    category: "E-Commerce — Furniture",
    summary:
      "Handcrafted furniture deserved more than a default storefront. Editorial product pages and a rebuilt checkout.",
    result: "+38% average order value",
    gradient: "from-[#1c2a4f] via-[#101a33] to-[#050608]",
  },
  {
    slug: "pulseboard",
    title: "Pulseboard",
    category: "SaaS — Redesign",
    summary:
      "A B2B analytics tool with traffic that wouldn't convert. New positioning, new demo flow, same domain authority.",
    result: "+167% demo requests",
    gradient: "from-[#0f2238] via-[#0b1322] to-[#050608]",
  },
  {
    slug: "harbor-and-vine",
    title: "Harbor & Vine",
    category: "Hospitality — Branding + Web",
    summary:
      "A coastal restaurant group needed one identity across four venues. Brand system first, then a reservations-driven site.",
    result: "+89% online reservations",
    gradient: "from-[#141f3e] via-[#0e1628] to-[#050608]",
  },
  {
    slug: "veritas-legal",
    title: "Veritas Legal",
    category: "Professional Services — SEO + Web",
    summary:
      "A boutique law firm invisible on search. Technical SEO foundations and practice-area pages built to rank.",
    result: "Page 1 for 23 target keywords",
    gradient: "from-[#101b36] via-[#0a0f1e] to-[#050608]",
  },
  {
    slug: "kembara",
    title: "Kembara",
    category: "Travel — Website Design",
    summary:
      "A small-group adventure operator competing with giants. A booking experience that feels like the trips themselves.",
    result: "+143% direct bookings",
    gradient: "from-[#0d2030] via-[#0c1424] to-[#050608]",
  },
];

// Each step is paired with a moon phase — the site's signature motif.
// `phase` is the fraction of the disc that is lit, from new moon to full.
export const process = [
  {
    phase: 0,
    name: "Discovery",
    description:
      "We learn your business before we touch a pixel: your customers, your competitors, and the one action your website must drive.",
  },
  {
    phase: 0.25,
    name: "Design",
    description:
      "Wireframes, then high-fidelity design. You see the real pages with real copy — never a mood board standing in for the work.",
  },
  {
    phase: 0.5,
    name: "Development",
    description:
      "Clean, fast code built to a 95+ Lighthouse standard. You get staging access from week one, not a reveal at the end.",
  },
  {
    phase: 0.75,
    name: "Launch",
    description:
      "Zero-downtime deployment, analytics wired, redirects mapped, search engines notified. Launch day is a checklist, not a gamble.",
  },
  {
    phase: 1,
    name: "Growth",
    description:
      "30 days of post-launch tuning included. We watch the data, fix the friction, and hand you a site that keeps improving.",
  },
];

export const testimonials = [
  {
    quote:
      "We'd been through two agencies before MoonFrame. The difference was night and day — they asked about our sales pipeline before they ever showed us a design. Bookings tripled in the first quarter.",
    name: "Daniel Reyes",
    role: "Managing Partner, Northwind Capital",
  },
  {
    quote:
      "They treated our checkout like an engineering problem, not a styling exercise. Average order value is up 38% and the site loads instantly, even on the product pages with twenty photos.",
    name: "Mara Lindqvist",
    role: "Founder, Atelier Soma",
  },
  {
    quote:
      "The redesign paid for itself in six weeks. What I appreciated most: I always talked to the people doing the work, and every decision came with a reason attached.",
    name: "James Okafor",
    role: "CEO, Pulseboard",
  },
];

export const pricing = [
  {
    name: "Starter Website",
    price: "$4,800",
    cadence: "one-time",
    description: "For new businesses that need a credible, fast site that converts from day one.",
    features: [
      "Up to 5 custom-designed pages",
      "Conversion-focused copy direction",
      "Mobile-first responsive build",
      "Technical SEO foundations",
      "Analytics & contact forms",
      "2 weeks post-launch support",
    ],
    cta: "Start your project",
    featured: false,
  },
  {
    name: "Business Website",
    price: "$9,600",
    cadence: "one-time",
    description: "For established businesses ready to make their website their best salesperson.",
    features: [
      "Up to 12 custom-designed pages",
      "Full conversion strategy & copywriting",
      "CMS so your team can edit anything",
      "Advanced SEO & structured data",
      "Blog / content hub setup",
      "30-day post-launch tuning period",
      "Priority support for 3 months",
    ],
    cta: "Book a consultation",
    featured: true,
  },
  {
    name: "Custom Solution",
    price: "Let's talk",
    cadence: "scoped to fit",
    description: "E-commerce, web apps, multi-brand systems, or anything that doesn't fit a box.",
    features: [
      "Unlimited pages & custom features",
      "E-commerce or web application build",
      "Brand identity included if needed",
      "Dedicated project team",
      "Ongoing growth partnership",
      "SLA-backed maintenance available",
    ],
    cta: "Tell us what you need",
    featured: false,
  },
];

export const faqs = [
  {
    question: "How long does a website project take?",
    answer:
      "A Starter Website typically launches in 3–4 weeks, a Business Website in 6–8 weeks. Custom builds are scoped individually. You'll get a week-by-week timeline before we start, and staging access throughout — so there are no surprises at the end.",
  },
  {
    question: "Do you write the copy, or do we?",
    answer:
      "We lead it. Every project includes conversion copy direction: we interview you, draft the key pages, and refine the wording with you. You know your business; we know what makes visitors act. The result reads like you, but sells.",
  },
  {
    question: "Will I be able to edit the site myself?",
    answer:
      "Yes. Business and Custom projects ship with a CMS, and we record short walkthrough videos for your team. Most clients edit text, images, blog posts, and pricing without touching us — or code.",
  },
  {
    question: "What happens to our search rankings during a redesign?",
    answer:
      "Protecting them is part of the job. We map every existing URL, set up redirects, preserve the content that ranks, and monitor Search Console through launch. Done properly, a redesign improves rankings rather than risking them.",
  },
  {
    question: "What does 'conversion-focused' actually mean?",
    answer:
      "It means every page is designed backwards from one action — a booked call, a purchase, a signup. We define that action with you in Discovery, design the path to it, and measure it after launch. Pretty is a byproduct, not the goal.",
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer:
      "Every project includes a post-launch support window, and our Maintenance plans cover updates, monitoring, security, and small improvements from $290/month. Around 70% of our clients stay on a plan — your site is never abandoned.",
  },
];

export const values = [
  {
    title: "Conversion before decoration",
    description:
      "A website is a salesperson, not a brochure. Every design decision we make is answerable to one question: does this move a visitor closer to becoming a customer?",
  },
  {
    title: "Performance is a feature",
    description:
      "Slow sites lose sales before the first headline loads. We treat a 95+ Lighthouse score as a launch requirement, not a nice-to-have.",
  },
  {
    title: "No layers between you and the work",
    description:
      "You talk directly to the designer and developer building your site. Decisions happen in days, not weeks of account-manager telephone.",
  },
  {
    title: "Honest scope, honest pricing",
    description:
      "Fixed quotes, written timelines, and no invoice surprises. If something changes mid-project, you hear about it before it costs anything.",
  },
];

export const team = [
  { name: "Elena Marsh", role: "Founder & Design Director", initials: "EM" },
  { name: "Tomás Ferreira", role: "Lead Engineer", initials: "TF" },
  { name: "Priya Raman", role: "Conversion Strategist", initials: "PR" },
  { name: "Jonas Weber", role: "Brand Designer", initials: "JW" },
];
