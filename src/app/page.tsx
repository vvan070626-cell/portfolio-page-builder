import type { Metadata } from "next";

import { HomePortfolioPage } from "@/components/portfolio/home-portfolio-page";

export const metadata: Metadata = {
  title: "Wang Hanzhi — Finance, Data & Project Work",
  description:
    "Portfolio of Wang Hanzhi, an HKUST business and management student working across finance, data-informed research, presentations, and project execution.",
};

export default function Home() {
  return <HomePortfolioPage />;
}
