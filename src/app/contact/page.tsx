import type { Metadata } from "next";

import { ContactPortfolioPage } from "@/components/portfolio/contact-portfolio-page";

export const metadata: Metadata = {
  title: "Contact — Your Name",
  description: "Placeholder contact details for a personal portfolio and independent digital practice.",
};

export default function ContactPage() {
  return <ContactPortfolioPage />;
}
