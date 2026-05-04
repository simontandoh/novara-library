import {
  HeroCinematic,
  ServicesEditorial,
  TestimonialsEditorial,
  PricingTiered,
  FAQAccordion,
  FooterMinimal
} from "@simontandoh/novara-ui-blocks";
import { editorialTheme } from "@simontandoh/novara-themes";

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

      <FAQAccordion
        theme={editorialTheme}
        eyebrow="Considerations"
        headline="Everything you’d ask, before you ask it."
        sub="If something’s missing, send us a note. We’ll answer it the same day."
        items={[
          {
            question: "How long does a typical build take?",
            answer:
              "Launch Plan sites ship in 5–7 working days. Ownership builds run 2–3 weeks. Premium engagements are scoped per brief, typically 4–8 weeks."
          },
          {
            question: "Do I own the site under the Launch Plan?",
            answer:
              "Novara retains ownership during the subscription. You can transition to ownership at any point by paying the difference to the Ownership Plan tier — full code, hosting, and accounts transfer to you."
          },
          {
            question: "What if I want to leave?",
            answer:
              "Launch Plan cancels with 30 days’ notice. Ownership and Premium have no lock-in beyond the initial term. We hand over cleanly, no friction."
          },
          {
            question: "Can you handle hosting and maintenance?",
            answer:
              "Every tier includes premium hosting on Vercel or Cloudflare, SSL, monitoring, security updates, and content adjustments. You never touch infrastructure unless you choose to."
          },
          {
            question: "Do you work with my existing brand?",
            answer:
              "Yes. We can build inside your established identity, refine it, or develop something new alongside the site. Brand work scopes separately under Premium."
          },
          {
            question: "What about automation — what’s actually possible?",
            answer:
              "Lead routing, missed-call texting, review collection, booking confirmations, follow-up sequences, dashboard reporting — anything that removes friction from your operations. We scope per business."
          }
        ]}
      />

      <FooterMinimal
        theme={editorialTheme}
        brand="Novara"
        tagline="Invisible systems powering visible brands."
        social={[
          { label: "Instagram", href: "https://instagram.com/novara" },
          { label: "LinkedIn", href: "https://linkedin.com/company/novara" }
        ]}
        legal={[
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" }
        ]}
      />
    </main>
  );
}
