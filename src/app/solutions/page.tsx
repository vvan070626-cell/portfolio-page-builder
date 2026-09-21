import type { Metadata } from "next";

import { SolutionsPortfolioPage } from "@/components/portfolio/solutions-portfolio-page";

export const metadata: Metadata = {
  title: "Solutions — Your Name",
  description: "Explore a placeholder-ready overview of strategy, design, and digital product services.",
};

export default function SolutionsPage() {
  return <SolutionsPortfolioPage />;
}
