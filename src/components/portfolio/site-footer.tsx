import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="portfolio-footer">
      <Link
        href="/"
        className="portfolio-home-spot !size-4 shrink-0 [&>span]:!size-2"
        aria-label="Return to the profile page"
      >
        <span aria-hidden="true" />
      </Link>
      <Link href="/solutions">Solutions</Link>
      <Link href="/contact">Contact</Link>
    </footer>
  );
}
