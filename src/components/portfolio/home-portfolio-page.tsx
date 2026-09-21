import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { PageTransitionLink } from "@/components/portfolio/page-transition-link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";

const capabilities = [
  {
    title: "Direction & identity",
    body: "Clear positioning, visual systems, and creative decisions that give an independent business a recognizable point of view.",
  },
  {
    title: "Web experiences",
    body: "Useful, responsive websites shaped around real journeys, strong information design, and considered interaction.",
  },
  {
    title: "Digital products",
    body: "Focused product thinking, rapid prototypes, and practical systems that turn an early idea into something people can use.",
  },
];

export function HomePortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <SiteNavigation activePage="home" />
      <main>
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Independent digital practice"
            subtitle="Strategy, design, code ..."
            illustration="/illustration-working.webp"
            illustrationAlt="Black line illustration of a medium-short-haired woman working at a laptop"
            homeTitle
          />

          <section className="portfolio-capability-grid" aria-label="Practice areas">
            {capabilities.map((capability) => (
              <article key={capability.title}>
                <h2>{capability.title}</h2>
                <p>{capability.body}</p>
              </article>
            ))}
          </section>

          <div className="portfolio-home-action">
            <PageTransitionLink href="/solutions" label="Explore the work" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
