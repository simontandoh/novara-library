import { HeroCinematic } from "@novara/ui-blocks";
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
    </main>
  );
}
