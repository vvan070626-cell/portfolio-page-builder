import { Download, Mail, MapPin, Phone } from "lucide-react";

import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";

const contactMethods = [
  {
    label: "E-mail",
    value: "hzwang@connect.ust.hk",
    href: "mailto:hzwang@connect.ust.hk",
    icon: Mail,
  },
  {
    label: "Phone",
    value: "+86 172 6955 8718",
    href: "tel:+8617269558718",
    icon: Phone,
  },
  {
    label: "CV",
    value: "Download PDF",
    href: "/wang-hanzhi-cv.pdf",
    icon: Download,
    download: true,
  },
];

export function ContactPortfolioPage() {
  return (
    <div className="portfolio-page portfolio-contact-page page-enter">
      <SiteNavigation activePage="contact" />
      <main className="portfolio-contact-main">
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Let’s talk"
            subtitle="Internships, case competitions, research, and projects with a real business question"
            illustration="/illustration-contact.webp"
            illustrationAlt="Black line illustration of Wang Hanzhi speaking on the phone beside a laptop"
          />

          <section className="portfolio-contact-intro" aria-labelledby="contact-intro-title">
            <p className="portfolio-eyebrow">Open to conversation</p>
            <h2 id="contact-intro-title">I’m most useful where analysis has to become a clear decision or deliverable.</h2>
            <p>
              I’m interested in finance, strategy, data-informed research, and project roles where I can contribute to
              both the thinking and the execution.
            </p>
            <div className="portfolio-location-note">
              <MapPin size={20} strokeWidth={1.5} aria-hidden="true" />
              <span>Hong Kong · Shanghai · Online</span>
            </div>
          </section>

          <section className="portfolio-contact-grid" aria-label="Contact details">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <article key={method.label}>
                  <div className="flex items-center gap-3">
                    <Icon size={25} strokeWidth={1.65} aria-hidden="true" />
                    <h2>{method.label}</h2>
                  </div>
                  <a href={method.href} download={method.download || undefined}>
                    {method.value}
                  </a>
                </article>
              );
            })}
          </section>

          <aside className="portfolio-contact-placeholder" aria-label="Future profile links">
            <p className="portfolio-eyebrow">Next material to add</p>
            <p>
              Add the confirmed LinkedIn profile URL when it is ready to publish. The Douban archive and seminar deck
              are already available from the selected work page.
            </p>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
