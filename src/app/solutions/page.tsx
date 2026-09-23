import type { Metadata } from "next";

import { SolutionsPortfolioPage } from "@/components/portfolio/solutions-portfolio-page";

export const metadata: Metadata = {
  title: "Selected Work — Wang Hanzhi",
  description:
    "Selected finance cases, research presentations, community work, and project leadership by Wang Hanzhi.",
};

export default function SolutionsPage() {
  return <SolutionsPortfolioPage />;
}
