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
    previewTitle: "Building operations — my contribution",
    previewIntro:
      "I used AI-assisted vibe coding to build the predictive-maintenance regression model. The original slide 21 revealed its visuals in sequence; the web version separates them so the logic stays legible.",
    previewItems: [
      { step: "01", title: "Measure", body: "Track the reconstruction gap against the normal operating pattern." },
      { step: "02", title: "Test", body: "Compare the error with a three-sigma threshold rather than relying on a manual check." },
      { step: "03", title: "Act", body: "Reject the all-normal assumption, issue a maintenance alert, and support RUL planning." },
    ],
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
    previewTitle: "Golden Life — final-round structure",
    previewIntro:
      "The final-round deck turns the elderly-care funding gap into three connected products and a smart allocation layer.",
    previewItems: [
      { step: "$BUILD", title: "Physical backing", body: "Fractional access to elderly-care development assets." },
      { step: "$PEACE", title: "Future care", body: "A tradable service option that locks in future access and pricing." },
      { step: "$COMMUNITY", title: "Shared growth", body: "A contribution-linked asset supporting participation and data value." },
    ],
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
    placeholder: "Evidence slot reserved — budget summary or sponsorship excerpt",
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
                    <div className="portfolio-deck-preview">
                      <p className="portfolio-eyebrow">Deck reconstruction</p>
                      <h4>{project.previewTitle}</h4>
                      <p>{project.previewIntro}</p>
                      <div className="portfolio-deck-sequence">
                        {project.previewItems.map((item) => (
                          <div key={item.step}>
                            <span>{item.step}</span>
                            <strong>{item.title}</strong>
                            <p>{item.body}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
