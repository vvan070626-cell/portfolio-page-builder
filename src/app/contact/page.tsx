import type { Metadata } from "next";

import { ContactPortfolioPage } from "@/components/portfolio/contact-portfolio-page";

export const metadata: Metadata = {
  title: "Contact — Wang Hanzhi",
  description: "Contact Wang Hanzhi about internships, finance and strategy cases, research, or project collaboration.",
};

export default function ContactPage() {
  return <ContactPortfolioPage />;
}
