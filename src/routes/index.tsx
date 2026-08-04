import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Experience, Education } from "@/components/sections/timeline";
import { Contact } from "@/components/sections/contact";
import { Toaster } from "@/components/ui/sonner";

const TITLE = "Muhammad Anique Qadir — Frontend Engineer & Web Developer";
const DESCRIPTION =
  "Frontend engineer building fast, elegant React, WordPress and Shopify experiences for clients worldwide. Selected work, case studies and contact.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Anique Qadir",
          jobTitle: "Frontend Engineer",
          address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
          sameAs: ["https://github.com/m-anique", "https://www.linkedin.com/in/web-works-by-mohammad-anique9321"],
          knowsAbout: ["React", "TypeScript", "WordPress", "Shopify", "Node.js"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <SmoothScroll />
      <div className="relative min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
      <Toaster position="bottom-right" />
    </ThemeProvider>
  );
}
