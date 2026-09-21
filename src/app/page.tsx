import type { Metadata } from "next";

import { HomePortfolioPage } from "@/components/portfolio/home-portfolio-page";

export const metadata: Metadata = {
  title: "Your Name — Independent Digital Practice",
  description: "An independent practice helping shape clear digital products, identities, and web experiences.",
};

export default function Home() {
  return <HomePortfolioPage />;
}
