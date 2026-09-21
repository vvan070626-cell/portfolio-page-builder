import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="portfolio-footer">
      <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
      <Link href="/solutions">Solutions</Link>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}
