import Image from "next/image";
import {
  ChartNoAxesCombined,
  Coins,
  Download,
  ExternalLink,
  FileChartColumnIncreasing,
  GraduationCap,
  Presentation,
  UsersRound,
} from "lucide-react";

import { DeckGallery, type DeckSlide } from "@/components/portfolio/deck-gallery";
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

const workingMethods = [
  { title: "Research", items: ["Market structure", "Policy context", "Competitor logic"] },
  { title: "Model", items: ["Financial assumptions", "Qualitative evidence", "Scenario evaluation"] },
  { title: "Build", items: ["Python", "Graph and NLP concepts", "Business prototypes"] },
  { title: "Communicate", items: ["PPT narratives", "Team presentations", "Sponsorship pitches"] },
  { title: "Operate", items: ["Budget ownership", "Procurement", "Reconciliation"] },
  { title: "Languages", items: ["Mandarin", "English", "Familiar with Cantonese"] },
];

const reitSlides: DeckSlide[] = [
  {
    label: "Building operations · overview",
    title: "Two models for lower cost and earlier intervention",
    body: "My section connected daily building operations to measurable financial outcomes rather than treating AI as a separate technology layer.",
    bullets: ["HVAC energy optimization", "Predictive maintenance", "Operational savings translated into REIT value"],
  },
  {
    label: "Model 1 · energy optimization",
    title: "PPO adjusts HVAC decisions from live operating inputs",
    body: "The model uses outdoor temperature, electricity pricing, occupancy, and floor area to choose a practical cooling action.",
    bullets: ["Deep reinforcement learning", "Proximal policy optimization", "Example action: increase cooling set-point by 0.5°C"],
  },
  {
    label: "Model 1 · result",
    title: "Five-year electricity cost falls in the Yuen Long example",
    body: "The deck compares the traditional operating method with the PPO-controlled scenario under the same building assumptions.",
    metrics: [
      { value: "HK$7.84M", label: "traditional five-year cost" },
      { value: "HK$6.4288M", label: "PPO five-year cost" },
      { value: "HK$1.4112M", label: "projected savings" },
    ],
  },
  {
    label: "Model 2 · predictive maintenance",
    title: "The regression workflow measures the reconstruction gap",
    body: "I built this predictive-maintenance model with AI-assisted vibe coding. The website separates the original animated steps so the logic is visible without overlap.",
    bullets: ["Continuously measure the reconstruction gap", "Compare the error against a three-sigma threshold", "Reject the all-normal assumption when the error is too large"],
  },
  {
    label: "Model 2 · alert",
    title: "An anomaly becomes a maintenance decision",
    body: "Once the threshold is crossed, the system issues a warning and supports remaining-useful-life and supply-chain planning.",
    metrics: [
      { value: "3σ", label: "anomaly threshold" },
      { value: "RUL", label: "remaining useful life" },
      { value: "Alert", label: "maintenance action" },
    ],
  },
];

const goldenLifeSlides: DeckSlide[] = [
  {
    label: "Final round · premise",
    title: "Golden Life addresses the elderly-care funding gap",
    body: "The final-round proposal connects investment capital, future service access, and community participation in one tokenized framework.",
    metrics: [
      { value: "1/3", label: "Hong Kong population aged 65+ by 2035" },
      { value: "16,500", label: "2024 bed gap cited in the deck" },
      { value: "8–10 mo", label: "waiting period cited in the deck" },
    ],
  },
  {
    label: "Pillar I · $BUILD",
    title: "Fractional capital for physical elderly-care assets",
    body: "The first pillar opens development funding to smaller investors while tying fund releases to verified construction milestones.",
    bullets: ["Fractional ownership from HK$5,000", "Construction, operation, and exit phases", "Target fund IRR of approximately 12%"],
  },
  {
    label: "Pillar II · $PEACE",
    title: "A future-care option locks in access and pricing",
    body: "Users pay a premium today for a tradable right to future accommodation, with physical settlement through partner care homes.",
    bullets: ["Redeemable for real accommodation", "Tradable in a secondary market", "5% platform fulfillment fee"],
  },
  {
    label: "Pillar III · $COMMUNITY",
    title: "Participation becomes a shared growth asset",
    body: "The third pillar links contribution, anonymized health data, and peer-to-peer activity to the future value of the ecosystem.",
    bullets: ["70% contribution-mining distribution", "30% initial-liquidity reserve", "Activity and buybacks reinforce the network"],
  },
  {
    label: "Smart allocation · FoF",
    title: "Golden Life Balancer connects the three pillars",
    body: "Allocation changes by age and risk profile, while physical assets, future demand, and community intelligence reinforce one another.",
    bullets: ["Conservative, balanced, and aggressive profiles", "Age-sensitive allocation", "Market intelligence refines pricing"],
  },
  {
    label: "Revenue model",
    title: "Four revenue streams make the system commercially legible",
    body: "The business model earns from managed assets, service fulfillment, product issuance, and aggregated data services.",
    bullets: ["Asset-management fees", "5% fulfillment commission", "Product issuance fees", "Anonymized data services"],
  },
];

const projectHighlights = [
  {
    label: "HKSI case competition · preliminary round",
    title: "AI application in REIT asset management",
    description:
      "A data-led acquisition, building-operations, and tenant-management concept using spatial networks, economic and policy signals, population mobility, graph methods, and NLP.",
    metric: "HK$1.41M",
    metricLabel: "projected operating savings",
    secondMetric: "HK$18.88M",
    secondMetricLabel: "projected additional NOI",
    note: "The CV records adoption by Champion REIT; this view highlights the building-operations section I developed.",
    galleryBadge: "Selected PPT pages · my building-operations section",
    galleryTitle: "AI-REIT building operations",
    galleryDescription:
      "Five selected pages preserve the original deck sequence while separating slide 21's overlapping animation states.",
    slides: reitSlides,
    icon: ChartNoAxesCombined,
  },
  {
    label: "HKSI case competition · final round",
    title: "Golden Life: a tokenized framework for the aging economy",
    description:
      "A closed-loop concept connecting physical assets, service rights, and community incentives, grounded in real market pricing and allocation data.",
    metric: "4 streams",
    metricLabel: "AUM, fulfillment, issuance, and data",
    secondMetric: "5%",
    secondMetricLabel: "proposed fulfillment commission",
    note: "Designed as a business model, not a technology-only proposal.",
    galleryBadge: "Selected PPT pages · final round",
    galleryTitle: "Golden Life final-round deck",
    galleryDescription:
      "Six selected pages cover the problem, three pillars, smart FoF allocation, and revenue model without loading the entire presentation.",
    slides: goldenLifeSlides,
    icon: Coins,
  },
];

const supportingProjects = [
  {
    eyebrow: "Research presentation",
    title: "Entrepreneurial Finance Seminar",
    body: "Co-authored an NFTz report and led the team presentation after applying POCD to market, competition, and growth strategy through qualitative and quantitative evaluation.",
    detail: "Delivered by Prof. Shai Bernstein, Harvard Business School",
    image: "/nftz-seminar-cover.jpg",
    href: "/nftz-seminar-deck.pptx",
    linkLabel: "Download seminar deck",
    download: true,
    evidence: null,
    placeholder: null,
    icon: Presentation,
  },
  {
    eyebrow: "Community building",
    title: "Eye-care community on Douban",
    body: "Identified an underserved eye-health niche, built a community of more than 5,000 members, and published screen-break challenges and science-based guidance.",
    detail: "Presented as an archive of niche discovery and community formation",
    image: null,
    href: "https://www.douban.com/group/742302/",
    linkLabel: "Open Douban community archive",
    download: false,
    evidence: null,
    placeholder: null,
    icon: UsersRound,
  },
  {
    eyebrow: "Financial operations",
    title: "400-person prom finance lead",
    body: "Owned budgeting, payments, procurement, and reconciliation across approximately 200k in spend, then wrote the sponsorship pitch that secured HSBC and ABC in-kind support.",
    detail: "End-to-end responsibility from planning through closeout",
    image: null,
    href: null,
    linkLabel: null,
    download: false,
    evidence: {
      title: "Selected evidence · itemized vendor quote",
      note: "Chosen over the event run-sheet and sponsorship draft because it most directly proves budget review and cost control. Vendor identity and private payment details are not published.",
      metrics: [
        { value: "¥22,800", label: "final quoted amount" },
        { value: "16", label: "itemized production lines" },
        { value: "4", label: "largest costs isolated for review" },
      ],
      lines: ["Photography · ¥5,500", "LED screen · ¥3,780", "Audio system · ¥3,500", "Sign-in backdrop · ¥3,000"],
    },
    placeholder: null,
    icon: FileChartColumnIncreasing,
  },
];

const experienceNotes = [
  {
    period: "2025 — present",
    title: "BSc Business and Management · HKUST",
    body: "Coursework includes business statistics, accounting, financial management, information systems, coding for business, and business communication.",
    icon: GraduationCap,
  },
  {
    period: "2022 — 2023",
    title: "President · Chinese Medicine Club",
    body: "Won the Model Club Prize and produced two flagship events that attracted more than 200 visitors, coordinating proposals, venue administration, members, and on-site delivery.",
    icon: UsersRound,
  },
];

export function SolutionsPortfolioPage() {
  return (
    <div className="portfolio-page page-enter">
      <SiteNavigation activePage="solutions" />
      <main>
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Selected work"
            titleAccent
            subtitle="Cases, presentations, communities, and the decisions behind them"
            illustration="/illustration-solutions.webp"
            illustrationAlt="Black line illustration of Wang Hanzhi presenting work beside a laptop"
          />

          <section className="portfolio-service-grid" aria-label="Working methods">
            {workingMethods.map((group) => (
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

          <section className="portfolio-case-section" aria-labelledby="case-heading">
            <p className="portfolio-eyebrow">Featured evidence</p>
            <h2 id="case-heading">From an open problem to a defensible business case.</h2>
            <p className="portfolio-section-intro">
              The competition work is the strongest proof of analytical range, so it receives the largest visual
              space. Each case combines a clear commercial model with the data or operating logic needed to support it.
            </p>

            <div className="portfolio-case-grid">
              {projectHighlights.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.title} className="portfolio-case-card">
                    <div className="portfolio-case-card-heading">
                      <Icon size={38} strokeWidth={1.35} aria-hidden="true" />
                      <p>{project.label}</p>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="portfolio-metric-grid">
                      <div>
                        <strong>{project.metric}</strong>
                        <span>{project.metricLabel}</span>
                      </div>
                      <div>
                        <strong>{project.secondMetric}</strong>
                        <span>{project.secondMetricLabel}</span>
                      </div>
                    </div>
                    <p className="portfolio-case-note">{project.note}</p>
                    <DeckGallery
                      badge={project.galleryBadge}
                      title={project.galleryTitle}
                      description={project.galleryDescription}
                      slides={project.slides}
                    />
                  </article>
                );
              })}
            </div>
          </section>
        </div>

        <section className="portfolio-work-band" aria-labelledby="supporting-heading">
          <div className="portfolio-content-shell">
            <p className="portfolio-eyebrow">Supporting work</p>
            <h2 id="supporting-heading">
              Research is stronger when it can <span>travel.</span>
            </h2>
            <div className="portfolio-work-grid">
              {supportingProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <article key={project.title}>
                    <div className="portfolio-work-icon">
                      <Icon size={32} strokeWidth={1.4} aria-hidden="true" />
                    </div>
                    <p className="portfolio-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p>{project.body}</p>
                    <p className="portfolio-work-detail">{project.detail}</p>
                    {project.image ? (
                      <div className="portfolio-deck-cover">
                        <Image
                          src={project.image}
                          alt="Cover slide from the NFTz seminar presentation"
                          width={256}
                          height={144}
                          className="h-auto w-full"
                        />
                      </div>
                    ) : null}
                    {project.href && project.linkLabel ? (
                      <a
                        href={project.href}
                        download={project.download || undefined}
                        target={!project.download ? "_blank" : undefined}
                        rel={!project.download ? "noreferrer" : undefined}
                        className="portfolio-evidence-link"
                      >
                        {project.linkLabel}
                        {project.download ? (
                          <Download size={17} strokeWidth={1.6} aria-hidden="true" />
                        ) : (
                          <ExternalLink size={17} strokeWidth={1.6} aria-hidden="true" />
                        )}
                      </a>
                    ) : null}
                    {project.evidence ? (
                      <div className="portfolio-prom-evidence">
                        <p className="portfolio-eyebrow">{project.evidence.title}</p>
                        <div className="portfolio-prom-evidence-metrics">
                          {project.evidence.metrics.map((metric) => (
                            <div key={metric.label}>
                              <strong>{metric.value}</strong>
                              <span>{metric.label}</span>
                            </div>
                          ))}
                        </div>
                        <ul>
                          {project.evidence.lines.map((line) => (
                            <li key={line}>{line}</li>
                          ))}
                        </ul>
                        <p>{project.evidence.note}</p>
                      </div>
                    ) : null}
                    {project.placeholder ? (
                      <div className="portfolio-artifact-placeholder portfolio-artifact-placeholder-compact">
                        <span>{project.placeholder}</span>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <div className="portfolio-content-shell">
          <section className="portfolio-faq-section" aria-labelledby="evidence-heading">
            <h2 id="evidence-heading">Reading the evidence</h2>
            <Accordion className="portfolio-accordion">
              <AccordionItem value="competition-materials">
                <AccordionTrigger>How are the competition decks shown?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    The page rebuilds the strongest arguments as readable web sequences. This is especially important for
                    the preliminary-round slide 21, where an animated second image overlaps the first in a static file.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="seminar-materials">
                <AccordionTrigger>Where does the finance seminar belong?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    It sits beside the competition work as proof of structured research and presentation skill. Visitors
                    can see its original cover and download the complete NFTz presentation.
                  </p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="douban-archive">
                <AccordionTrigger>How is the Douban project framed?</AccordionTrigger>
                <AccordionContent>
                  <p>
                    As evidence of identifying a neglected audience and building an owned community. The presentation
                    focuses on the 5,000-member archive, the content system, and the original insight—not recent posting
                    frequency.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="portfolio-experience-section" aria-labelledby="experience-heading">
            <p className="portfolio-eyebrow">Foundation</p>
            <h2 id="experience-heading">Education and early leadership.</h2>
            <div className="portfolio-experience-grid">
              {experienceNotes.map((experience) => {
                const Icon = experience.icon;
                return (
                  <article key={experience.title}>
                    <Icon size={34} strokeWidth={1.4} aria-hidden="true" />
                    <p className="portfolio-eyebrow">{experience.period}</p>
                    <h3>{experience.title}</h3>
                    <p>{experience.body}</p>
                  </article>
                );
              })}
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
