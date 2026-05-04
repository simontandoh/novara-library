import {
  HeroCinematic,
  ServicesEditorial,
  TestimonialsEditorial,
  PricingTiered
} from "@novara/ui-blocks";
import { editorialTheme } from "@novara/themes";

export default function Page() {
  return (
    <main>
      <HeroCinematic
        theme={editorialTheme}
        eyebrow="Novara Studios"
        headline="Quiet luxury, built in code."
        sub="We design and engineer premium digital systems for brands that prefer restraint to noise."
        ctaPrimary={{ label: "Begin a project", href: "#contact" }}
        image={{
          src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=80",
          alt: ""
        }}
      />

      <ServicesEditorial
        theme={editorialTheme}
        eyebrow="Capabilities"
        headline="Systems designed to be felt, not noticed."
        sub="Every engagement compounds — design, code, and automation working as one infrastructure beneath your brand."
        items={[
          {
            title: "Premium Websites",
            description: "Bespoke Next.js builds engineered for performance, SEO, and longevity."
          },
          {
            title: "Automation Systems",
            description:
              "Lead routing, booking, review collection, and follow-up running quietly in the background."
          },
          {
            title: "Brand Identity",
            description:
              "Visual systems built around restraint — type, colour, and motion that scale across every surface."
          },
          {
            title: "Ongoing Care",
            description: "Hosting, monitoring, and continuous refinement under a single retainer."
          }
        ]}
      />

      <TestimonialsEditorial
        theme={editorialTheme}
        eyebrow="In their words"
        items={[
          {
            quote:
              "Novara delivered a system, not a website. Six months in, our enquiries doubled and we haven’t touched a thing.",
            author: "Elodie Marsh",
            role: "Founder",
            company: "Marsh Photography"
          }
        ]}
      />

      <PricingTiered
        theme={editorialTheme}
        eyebrow="Engagement"
        headline="One foundation. Three ways to begin."
        sub="Choose the path that matches where you are. Every tier includes design, build, hosting, and continuous care."
        tiers={[
          {
            name: "Launch Plan",
            price: "£79",
            cadence: "/month",
            description: "No upfront. Novara retains site ownership while you grow.",
            features: [
              "Bespoke design",
              "Premium hosting",
              "Monthly content updates",
              "Performance monitoring",
              "Cancel any time"
            ],
            cta: { label: "Begin Launch Plan", href: "#launch" }
          },
          {
            name: "Ownership Plan",
            price: "£499",
            cadence: "+ £49/mo",
            description: "Own the site outright from day one. Retainer covers care.",
            features: [
              "Bespoke design",
              "Full ownership transfer",
              "Hosting included",
              "Quarterly refinements",
              "Priority support"
            ],
            cta: { label: "Begin Ownership", href: "#ownership" },
            featured: true
          },
          {
            name: "Premium",
            price: "From £2,500",
            cadence: "bespoke retainer",
            description: "For brands requiring custom systems, automation, and editorial work.",
            features: [
              "Custom architecture",
              "Automation engineered to fit",
              "Quarterly strategy",
              "Dedicated build team",
              "Award-tier finish"
            ],
            cta: { label: "Request Proposal", href: "#premium" }
          }
        ]}
      />
    </main>
  );
}
