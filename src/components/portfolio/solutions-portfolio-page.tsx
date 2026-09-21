import {
  Accessibility,
  BadgeDollarSign,
  Leaf,
  MonitorSmartphone,
} from "lucide-react";

import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { PageTransitionLink } from "@/components/portfolio/page-transition-link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const serviceGroups = [
  { title: "Product strategy", items: ["Opportunity framing", "Audience research", "Roadmap direction", "Decision workshops"] },
  { title: "Web design", items: ["Creative direction", "Interface systems", "Responsive layouts", "Interaction design"] },
  { title: "User experience", items: ["Journey mapping", "Content structure", "Rapid prototypes", "Usability review"] },
  { title: "Visual identity", items: ["Design systems", "Identity concepts", "Art direction", "Launch materials"] },
  { title: "Digital launch", items: ["Messaging systems", "Campaign pages", "Search foundations", "Iteration support"] },
  { title: "Advisory", items: ["Product critique", "Design leadership", "Team alignment", "Ongoing guidance"] },
];

const features = [
  {
    title: "Responsive",
    description: "Layouts hold their rhythm across phones, tablets, laptops, and wide screens.",
    icon: MonitorSmartphone,
  },
  {
    title: "Accessible",
    description: "Clear hierarchy, useful semantics, and inclusive interaction are part of the foundation.",
    icon: Accessibility,
  },
  {
    title: "Economical",
    description: "The work stays focused on the decisions and details that create visible value.",
    icon: BadgeDollarSign,
  },
  {
    title: "Sustainable",
    description: "Lean pages, durable systems, and maintainable choices keep the work useful longer.",
    icon: Leaf,
  },
];

const principles = [
  { title: "Clarity", items: ["Useful priorities", "Direct communication", "Visible next steps"] },
  { title: "Craft", items: ["Strong hierarchy", "Considered details", "Consistent systems"] },
  { title: "Momentum", items: ["Fast prototypes", "Decisive reviews", "Practical delivery"] },
  { title: "Impact", items: ["Better journeys", "Sharper positioning", "Measurable improvement"] },
];

export function SolutionsPortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <SiteNavigation activePage="solutions" />
      <main>
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Solutions"
            titleAccent
            subtitle="Creative, useful, considered, durable"
            illustration="/illustration-solutions.webp"
            illustrationAlt="Black line illustration of a medium-short-haired woman giving a thumbs-up beside a laptop"
          />

          <section className="portfolio-service-grid" aria-label="Services">
            {serviceGroups.map((group) => (
              <article key={group.title}>
                <h2>{group.title}</h2>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <div className="portfolio-segmented-rule" aria-hidden="true" />

          <section className="portfolio-features-section" aria-labelledby="features-heading">
            <h2 id="features-heading">Features</h2>
            <p className="portfolio-section-intro">
              The strongest solutions balance expression with restraint. Each engagement is shaped to be clear,
              efficient, and easy to carry forward after launch.
            </p>
            <div className="portfolio-feature-grid">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <article key={feature.title}>
                    <Icon size={58} strokeWidth={1.35} aria-hidden="true" />
                    <div>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <div className="portfolio-segmented-rule" aria-hidden="true" />

          <section className="portfolio-faq-section" aria-labelledby="faq-heading">
            <h2 id="faq-heading">Questions</h2>
            <Accordion className="portfolio-accordion">
              <AccordionItem value="approach">
                <AccordionTrigger>How does a project begin?</AccordionTrigger>
                <AccordionContent>
                  <p>We start by defining the problem, the audience, and the smallest useful outcome worth making.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="scope">
                <AccordionTrigger>Can the scope start small?</AccordionTrigger>
                <AccordionContent>
                  <p>Yes. A focused first release often creates better decisions than an oversized initial brief.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="collaboration">
                <AccordionTrigger>Can this work with an existing team?</AccordionTrigger>
                <AccordionContent>
                  <p>The process can support founders directly or work alongside an established creative or product team.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </div>

        <section className="portfolio-work-band" aria-labelledby="selected-work-heading">
          <div className="portfolio-content-shell">
            <h2 id="selected-work-heading"><span>Selected work</span></h2>
            <div className="portfolio-work-grid">
              {[
                ["Launch", "Positioning and web experience"],
                ["System", "Identity and product language"],
                ["Prototype", "New service exploration"],
              ].map(([title, description], index) => (
                <article key={title}>
                  <div className={`portfolio-work-placeholder portfolio-work-placeholder-${index + 1}`} aria-hidden="true">
                    <span>0{index + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="portfolio-content-shell">
          <section className="portfolio-principles-section" aria-labelledby="principles-heading">
            <h2 id="principles-heading"><span>Core</span></h2>
            <div className="portfolio-principles-grid">
              {principles.map((principle) => (
                <article key={principle.title}>
                  <h3>{principle.title}</h3>
                  <ul>
                    {principle.items.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <div className="portfolio-solutions-action">
            <PageTransitionLink href="/contact" label="Start a conversation" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
