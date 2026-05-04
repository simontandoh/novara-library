import { HeroCinematic, ServicesEditorial } from "@novara/ui-blocks";
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
        sub="Every engagement compounds - design, code, and automation working as one infrastructure beneath your brand."
        items={[
          {
            title: "Premium Websites",
            description:
              "Bespoke Next.js builds engineered for performance, SEO, and longevity. Design that reflects positioning, not trends."
          },
          {
            title: "Automation Systems",
            description:
              "Lead routing, booking, review collection, and follow-up - operating quietly in the background so your team focuses on the work."
          },
          {
            title: "Brand Identity",
            description:
              "Visual systems built around restraint. Type, colour, and motion direction that scales across every surface."
          },
          {
            title: "Ongoing Care",
            description:
              "Hosting, monitoring, content updates, and continuous refinement under a single retainer. No tickets, no friction."
          }
        ]}
      />
    </main>
  );
}
