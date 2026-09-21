import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface PageTransitionLinkProps {
  href: string;
  label: string;
}

export function PageTransitionLink({ href, label }: PageTransitionLinkProps) {
  return (
    <Link href={href} className="portfolio-transition-link">
      <span>{label}</span>
      <ArrowRight size={30} strokeWidth={2.3} aria-hidden="true" />
    </Link>
  );
}
