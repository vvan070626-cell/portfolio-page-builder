import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { PageTransitionLink } from "@/components/portfolio/page-transition-link";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";

const strengths = [
  {
    eyebrow: "Finance",
    title: "Evidence before opinion",
    body: "I turn market structure, operating data, and financial logic into recommendations that can be tested and explained.",
  },
  {
    eyebrow: "Data",
    title: "Tools for real decisions",
    body: "My case work connects graph analysis, NLP, mobility data, and practical business assumptions rather than treating technology as decoration.",
  },
  {
    eyebrow: "Execution",
    title: "Ideas carried through",
    body: "From a 400-person event budget to a 5,000-member community, I’m comfortable owning details after the strategy is agreed.",
  },
];

const proofPoints = [
  { value: "Semi-finalist", label: "HKSI Institute Case Competition 2026" },
  { value: "HK$18.88M", label: "Projected additional NOI in the REIT case" },
  { value: "5,000+", label: "Members in a niche eye-care community" },
  { value: "~200k", label: "Prom spend managed and reconciled" },
];

export function HomePortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <SiteNavigation activePage="home" />
      <main>
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Vivian Wang"
            titleLines={["Vivian", "Wang"]}
            subtitle="Vivian Wang (Wang Hanzhi) — business and management student at HKUST, building analytical ideas into decisions, presentations, and projects."
            illustration="/illustration-working.webp"
            illustrationAlt="Black line illustration of Wang Hanzhi working at a laptop"
          />

          <section className="portfolio-capability-grid" aria-label="Core strengths">
            {strengths.map((strength) => (
              <article key={strength.eyebrow}>
                <p className="portfolio-eyebrow">{strength.eyebrow}</p>
                <h2>{strength.title}</h2>
                <p>{strength.body}</p>
              </article>
            ))}
          </section>

          <section className="portfolio-proof-strip" aria-label="Selected evidence">
            {proofPoints.map((point) => (
              <article key={point.label}>
                <strong>{point.value}</strong>
                <span>{point.label}</span>
              </article>
            ))}
          </section>

          <section className="portfolio-profile-note" aria-labelledby="profile-note-title">
            <p className="portfolio-eyebrow">Current chapter</p>
            <h2 id="profile-note-title">Learning in Hong Kong, applying ideas across finance and community projects.</h2>
            <p>
              I’m completing a Bachelor in Business and Management at HKUST, with coursework spanning business
              statistics, accounting, financial management, information systems, and coding for business.
            </p>
          </section>

          <div className="portfolio-home-action">
            <PageTransitionLink href="/solutions" label="See the evidence" />
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
