import { Mail, Phone, UserRound } from "lucide-react";

import { IllustratedHero } from "@/components/portfolio/illustrated-hero";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { SiteNavigation } from "@/components/portfolio/site-navigation";

const contactMethods = [
  {
    label: "E-mail",
    value: "hello@example.com",
    href: "mailto:hello@example.com",
    icon: Mail,
  },
  {
    label: "Tel.",
    value: "+00 000 000 0000",
    href: "tel:+000000000000",
    icon: Phone,
  },
  {
    label: "Profile",
    value: "Professional network",
    href: "https://www.linkedin.com",
    icon: UserRound,
  },
];

export function ContactPortfolioPage() {
  return (
    <div className="portfolio-page portfolio-contact-page page-enter">
      <SiteNavigation activePage="contact" />
      <main className="portfolio-contact-main">
        <div className="portfolio-content-shell">
          <IllustratedHero
            title="Contact"
            subtitle="Send a message, say hello"
            illustration="/illustration-contact.webp"
            illustrationAlt="Black line illustration of a medium-short-haired woman speaking on the phone beside a laptop"
          />

          <section className="portfolio-contact-grid" aria-label="Contact details">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <article key={method.label}>
                  <div className="flex items-center gap-3">
                    <Icon size={25} strokeWidth={1.65} aria-hidden="true" />
                    <h2>{method.label}</h2>
                  </div>
                  <a
                    href={method.href}
                    target={method.href.startsWith("http") ? "_blank" : undefined}
                    rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {method.value}
                  </a>
                </article>
              );
            })}
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
