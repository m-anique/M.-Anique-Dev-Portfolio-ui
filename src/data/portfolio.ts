export type ProjectCategory = "React" | "Frontend" | "Backend" | "WordPress" | "Shopify";

export interface Project {
  id: string;
  title: string;
  client: string;
  summary: string;
  categories: ProjectCategory[];
  stack: string[];
  live: string;
  repo?: string;
  accent: "primary" | "secondary" | "accent";
  caseStudy: {
    overview: string;
    problem: string;
    solution: string;
    features: string[];
    challenges: string;
    results: string[];
  };
}

export const PERSON = {
  name: "Muhammad Anique Qadir",
  shortName: "Anique",
  role: "Frontend Engineer",
  roles: ["Frontend Engineer", "WordPress Developer", "Shopify Developer", "Full Stack Developer"],
  location: "Lahore, Pakistan",
  email: "m.anique.dev@gmail.com",
  phone: "03116319211",
  github: "https://github.com/m-anique",
  linkedin: "https://www.linkedin.com/in/web-works-by-mohammad-anique9321",
  availability: "Available for new work",
  responseTime: "Replies within 24 hours",
  summary:
    "I combine modern frontend engineering, considered interface design and practical backend work to ship fast, scalable and genuinely beautiful digital products.",
} as const;

export const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const STATS = [
  { value: 40, suffix: "+", label: "Projects shipped" },
  { value: 12, suffix: "+", label: "International clients" },
  { value: 25, suffix: "+", label: "Technologies used" },
  { value: 4, suffix: "yrs", label: "Building for the web" },
];

export interface SkillGroup {
  name: string;
  blurb: string;
  skills: { name: string; note: string }[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    name: "Frontend",
    blurb: "Interfaces that stay fast under real-world load.",
    skills: [
      { name: "React", note: "Component architecture, hooks, state design" },
      { name: "TypeScript", note: "Strict typing across UI and data layers" },
      { name: "Tailwind CSS", note: "Token-driven design systems" },
      { name: "GSAP", note: "ScrollTrigger timelines and choreography" },
      { name: "Framer Motion", note: "Layout, gesture and spring motion" },
      { name: "Responsive Design", note: "Fold to ultrawide, no breakage" },
    ],
  },
  {
    name: "Backend",
    blurb: "APIs and data models built to be maintained.",
    skills: [
      { name: "Node.js", note: "Service layers and background jobs" },
      { name: "Express.js", note: "REST APIs with clean middleware" },
      { name: "MongoDB", note: "Schema design with Mongoose" },
      { name: "JWT & Auth", note: "Sessions, roles and refresh flows" },
      { name: "Cloudinary", note: "Media pipelines and transformations" },
      { name: "REST APIs", note: "Versioned, documented, testable" },
    ],
  },
  {
    name: "WordPress",
    blurb: "Business sites clients can actually run themselves.",
    skills: [
      { name: "WordPress", note: "Custom themes and editorial workflows" },
      { name: "WooCommerce", note: "Catalogue, checkout and payments" },
      { name: "Elementor", note: "Reusable, locked-down page systems" },
      { name: "Core Web Vitals", note: "Caching, images, script budgets" },
    ],
  },
  {
    name: "Shopify",
    blurb: "Storefronts tuned for conversion.",
    skills: [
      { name: "Shopify", note: "Theme architecture and app integrations" },
      { name: "Liquid", note: "Custom sections and metafield-driven UI" },
      { name: "Storefront UX", note: "PDP, cart and checkout refinement" },
    ],
  },
  {
    name: "Tooling",
    blurb: "The unglamorous parts, done properly.",
    skills: [
      { name: "Git & GitHub", note: "Trunk-based workflow, clean history" },
      { name: "Vercel", note: "Preview deploys and edge hosting" },
      { name: "Railway", note: "Node services and managed runtimes" },
      { name: "MongoDB Atlas", note: "Clusters, indexes and backups" },
      { name: "Postman", note: "API contracts and regression collections" },
      { name: "VS Code", note: "Lint, format and debug automation" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "live-chat",
    title: "Live Chat Application",
    client: "Personal product",
    summary:
      "Realtime messaging UI with presence and typing indicators. The demo backend is currently offline, so the full source is on GitHub.",
    categories: ["React", "Frontend", "Backend"],
    stack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    live: "https://live-chat-app-ui.vercel.app/",
    repo: "https://github.com/m-anique",
    accent: "primary",
    caseStudy: {
      overview:
        "A realtime chat product built to explore how far a single-page React app can be pushed before the interface starts to feel heavy.",
      problem:
        "Chat UIs degrade quickly: long lists re-render, presence state goes stale and message ordering breaks under latency.",
      solution:
        "Normalised message state, optimistic sends with reconciliation, and a virtualised thread so scroll stays at 60fps regardless of history length.",
      features: [
        "Authenticated sessions with JWT refresh",
        "Optimistic message delivery with failure recovery",
        "Presence and typing indicators",
        "Responsive layout from mobile to desktop",
      ],
      challenges:
        "Keeping the message list stable while new items arrive at the bottom, without fighting the browser's scroll anchoring.",
      results: ["Sub-100ms perceived send latency", "Stable 60fps thread scrolling"],
    },
  },
  {
    id: "news-hub",
    title: "News Hub",
    client: "Personal product",
    summary:
      "Editorial reading experience with category routing, search and a typographic system built for long-form scanning.",
    categories: ["React", "Frontend"],
    stack: ["React", "TypeScript", "React Router", "REST APIs", "Tailwind CSS"],
    live: "https://news-hub-website-ui.vercel.app/",
    repo: "https://github.com/m-anique",
    accent: "secondary",
    caseStudy: {
      overview:
        "A news aggregation front end focused on reading comfort and fast category switching.",
      problem:
        "News interfaces bury the article. Dense grids and aggressive layouts make scanning exhausting.",
      solution:
        "A restrained editorial grid, a strict type scale and cached category fetches so switching feels instant.",
      features: [
        "Category and keyword driven browsing",
        "Client-side routing with preserved scroll",
        "Skeleton loading states",
        "Accessible landmarks and heading order",
      ],
      challenges:
        "Handling inconsistent article payloads from the upstream API without breaking layout.",
      results: ["Instant category switching from cache", "Readable at every breakpoint"],
    },
  },
    {
    id: "standard-drift",
    title: "Standard Drift",
    client: "Barcelona art & brand studio",
    summary:
      "Multilingual editorial site for an art platform: services, journal, artists directory, manifesto, FAQ and a contact form with a video hero.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "TranslatePress", "Custom CSS"],
    live: "https://standarddrift.com/",
    accent: "accent",
    caseStudy: {
      overview:
        "An art and brand studio in Barcelona that needed an editorial, multilingual home for its services and artists.",
      problem:
        "The studio had to present services, a journal and an artists directory to an international audience in several languages.",
      solution:
        "A clear editorial structure, TranslatePress for language switching and a video hero that sets the tone without slowing the page.",
      features: [
        "Multilingual content with language switcher",
        "Journal and artists directory",
        "Services, manifesto and FAQ pages",
        "Video hero and contact form",
      ],
      challenges: "Keeping a video hero and several languages fast and consistent on mobile.",
      results: ["One site for a multilingual audience", "Editorial look the studio can update itself"],
    },
  },
  {
    id: "citygate",
    title: "City Gate Accountants",
    client: "UK accountancy firm",
    summary:
      "Trust-first marketing site for an accountancy practice, with service architecture and lead capture.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "Custom CSS", "SEO"],
    live: "https://citygateaccountants.co.uk/",
    accent: "primary",
    caseStudy: {
      overview:
        "A professional services site where credibility matters more than visual novelty.",
      problem:
        "The practice needed to explain a broad service range without overwhelming first-time visitors.",
      solution:
        "A clear service taxonomy, consistent page templates and a single dominant call to action per page.",
      features: [
        "Templated service pages",
        "Enquiry forms with spam protection",
        "On-page SEO structure",
        "Editor-safe reusable blocks",
      ],
      challenges: "Keeping page speed healthy while the client kept adding rich media.",
      results: ["Consistent template system the client maintains alone", "Improved enquiry flow"],
    },
  },
  {
    id: "barzo",
    title: "Barzo Security Services",
    client: "UK security company",
    summary: "Corporate site for a security firm, built around service credibility and fast contact.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "Custom CSS"],
    live: "https://barzosecurityservices.com/",
    accent: "accent",
    caseStudy: {
      overview: "A conversion-focused corporate presence for a manned-guarding provider.",
      problem: "The previous site did not communicate scale, coverage or compliance.",
      solution:
        "Service-led information architecture with proof points surfaced above the fold on every page.",
      features: ["Service and sector pages", "Coverage sections", "Quote request flow", "Mobile-first layout"],
      challenges: "Presenting a wide service catalogue without a maze of navigation.",
      results: ["Clearer service positioning", "Faster route to a quote request"],
    },
  },
  {
    id: "boiler",
    title: "Boiler Service East London",
    client: "UK home services",
    summary: "Local services site engineered for mobile search intent and one-tap calling.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "Local SEO"],
    live: "https://boilerserviceeastlondon.co.uk/",
    accent: "secondary",
    caseStudy: {
      overview: "A local trade business whose customers arrive on mobile, in a hurry.",
      problem: "Visitors needed to call within seconds; the old site buried the phone number.",
      solution: "Sticky call actions, service-area pages and a layout that loads fast on poor connections.",
      features: ["Sticky call-to-action bar", "Service area landing pages", "Schema-aware markup", "Lightweight media"],
      challenges: "Balancing rich imagery against mobile data budgets.",
      results: ["Phone action always in reach", "Strong mobile performance"],
    },
  },
  {
    id: "youritexpert",
    title: "Your IT Expert",
    client: "IT services provider",
    summary: "Technical services marketing site with a structured solutions catalogue.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "Custom CSS"],
    live: "https://youritexpert.com/",
    accent: "primary",
    caseStudy: {
      overview: "A B2B IT provider needing to look as capable as its enterprise competitors.",
      problem: "Generic templated design undermined a genuinely technical offering.",
      solution: "A tighter grid, consistent iconography and solution pages written around outcomes.",
      features: ["Solutions catalogue", "Case study blocks", "Contact routing", "Responsive tables"],
      challenges: "Translating deeply technical services into plain client language.",
      results: ["Stronger perceived seniority", "Clearer service comparison"],
    },
  },
  {
    id: "eprint99",
    title: "ePrint99",
    client: "Print & e-commerce",
    summary: "Product-led print commerce experience with configurable ordering.",
    categories: ["WordPress", "Shopify"],
    stack: ["WordPress", "WooCommerce", "Liquid", "Payments"],
    live: "https://eprint99.com/",
    accent: "accent",
    caseStudy: {
      overview: "A print business selling highly configurable physical products online.",
      problem: "Print products have many variants; a flat catalogue could not express them.",
      solution: "Variant-driven product templates with dependent options and clear price feedback.",
      features: ["Configurable products", "Cart and checkout tuning", "Order notifications", "Bulk pricing display"],
      challenges: "Keeping variant logic understandable for both customers and staff.",
      results: ["Fewer order clarification emails", "Self-serve configuration"],
    },
  },
  {
    id: "inogix",
    title: "Inogix",
    client: "Technology brand",
    summary: "Brand-forward technology site with motion used sparingly and deliberately.",
    categories: ["WordPress", "Frontend"],
    stack: ["WordPress", "Custom CSS", "JavaScript"],
    live: "https://inogix.com/",
    accent: "secondary",
    caseStudy: {
      overview: "A technology brand that wanted personality without gimmicks.",
      problem: "Off-the-shelf themes made the brand indistinguishable from competitors.",
      solution: "A custom section library with restrained scroll motion and a distinct type treatment.",
      features: ["Custom section library", "Scroll-reveal system", "Brand-consistent components", "CMS-editable content"],
      challenges: "Adding motion without hurting Core Web Vitals.",
      results: ["Distinct brand presence", "Motion budget kept under control"],
    },
  },
  {
    id: "seymour",
    title: "Seymour Chauffeurs",
    client: "UK chauffeur service",
    summary: "Premium transport booking experience with a luxury visual register.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "Booking Forms"],
    live: "https://seymourchauffeursltd.co.uk/",
    accent: "primary",
    caseStudy: {
      overview: "A luxury chauffeur service where the site itself has to feel expensive.",
      problem: "Booking friction and a downmarket look were costing enquiries.",
      solution: "A darker, quieter palette, generous spacing and a booking flow reduced to essentials.",
      features: ["Multi-step booking enquiry", "Fleet showcase", "Route and pricing sections", "Mobile booking flow"],
      challenges: "Keeping a long booking form from feeling like paperwork.",
      results: ["Higher-quality enquiries", "Premium brand perception"],
    },
  },
  {
    id: "marksol.pk",
    title: "marksol.pk",
    client: "Marketing agency",
    summary: "Agency site built to sell capability through structure and proof.",
    categories: ["WordPress"],
    stack: ["WordPress", "Elementor", "SEO"],
    live: "https://marksol.pk/",
    accent: "accent",
    caseStudy: {
      overview: "An agency site that had to demonstrate the craft it sells.",
      problem: "The old site claimed quality but did not demonstrate it.",
      solution: "Work-first layout, measurable outcomes on every service page and a consistent editorial voice.",
      features: ["Service and results pages", "Testimonial system", "Lead capture", "Blog architecture"],
      challenges: "Presenting results honestly without breaching client confidentiality.",
      results: ["Work leads the narrative", "Cleaner lead qualification"],
    },
  },
  {
    id: "goodmarketer",
    title: "The Good Marketer",
    client: "Growth agency",
    summary: "High-traffic agency marketing site with a performance-first build.",
    categories: ["WordPress", "Frontend"],
    stack: ["WordPress", "Custom CSS", "Performance"],
    live: "https://thegoodmarketer.co.uk/",
    accent: "secondary",
    caseStudy: {
      overview: "A busy agency site where every millisecond affects paid-traffic economics.",
      problem: "Plugin bloat and unoptimised media were slowing key landing pages.",
      solution: "Script auditing, image pipeline changes and above-the-fold CSS prioritisation.",
      features: ["Landing page templates", "Performance budget", "Optimised media delivery", "Tracking integration"],
      challenges: "Removing plugins without breaking marketing team workflows.",
      results: ["Measurably faster landing pages", "Lower bounce on paid traffic"],
    },
  },
  {
    id: "humanfirstrights",
    title: "Human First Rights",
    client: "Non-profit",
    summary: "Accessible non-profit platform focused on clarity and reach.",
    categories: ["WordPress"],
    stack: ["WordPress", "Accessibility", "Custom CSS"],
    live: "https://humanfirstrights.com/",
    accent: "primary",
    caseStudy: {
      overview: "A rights organisation reaching a broad, low-bandwidth international audience.",
      problem: "Content had to be readable on old devices and assistive technology.",
      solution: "Semantic structure, high contrast, minimal JavaScript and a lean media strategy.",
      features: ["Accessible navigation", "High-contrast typography", "Low-bandwidth media", "Editor-friendly CMS"],
      challenges: "Meeting accessibility standards while keeping the design distinctive.",
      results: ["Broad device compatibility", "Improved accessibility audits"],
    },
  },
];

export const PROJECT_FILTERS = ["All", "React", "Frontend", "Backend", "WordPress", "Shopify"] as const;

export interface TimelineItem {
  period: string;
  title: string;
  org: string;
  description: string;
  tags: string[];
}

export const EXPERIENCE: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "Frontend Engineer, Freelance",
    org: "International clients",
    description:
      "Designing and building React and TypeScript interfaces for UK and international businesses, from marketing sites to product dashboards. Owning the work end to end: architecture, motion, accessibility and deployment.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    period: "2022 — Present",
    title: "WordPress & Shopify Developer",
    org: "Agency and direct clients",
    description:
      "Delivering custom themes, WooCommerce catalogues and Shopify storefronts. Focused on page speed, editor experience and keeping sites maintainable long after handover.",
    tags: ["WordPress", "WooCommerce", "Shopify", "Liquid"],
  },
  {
    period: "2022 — Present",
    title: "Full Stack Development",
    org: "Node.js · Express · MongoDB",
    description:
      "Building REST APIs, authentication flows and media pipelines behind the interfaces I design, with deployments on Vercel, Railway and MongoDB Atlas.",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    period: "Ongoing",
    title: "Continuous Learning",
    org: "Self-directed",
    description:
      "Studying interface engineering, motion design and system architecture — shipping side projects specifically to test new ideas in production conditions.",
    tags: ["GSAP", "Architecture", "Performance"],
  },
];

export const EDUCATION: TimelineItem[] = [
  {
    period: "Bachelor of Computer Science",
    title: "Government College University",
    org: "Lahore, Pakistan",
    description:
      "Computer science fundamentals — data structures, algorithms, databases and software engineering practice — applied directly to client work throughout.",
    tags: ["Computer Science", "Algorithms", "Databases"],
  },
  {
    period: "Intermediate",
    title: "MAO College",
    org: "Lahore, Pakistan",
    description:
      "Pre-engineering foundation, alongside the first self-taught years of HTML, CSS and JavaScript that started this career.",
    tags: ["Foundation", "Self-taught web"],
  },
];

export const MARQUEE_TECH = [
  "React",
  "TypeScript",
  "Next-level UI",
  "Tailwind CSS",
  "GSAP",
  "Framer Motion",
  "Node.js",
  "Express",
  "MongoDB",
  "WordPress",
  "WooCommerce",
  "Shopify",
  "Liquid",
  "Vercel",
  "Railway",
  "Git",
];
