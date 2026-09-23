import Image from "next/image";

interface IllustratedHeroProps {
  title: string;
  subtitle: string;
  illustration: string;
  illustrationAlt: string;
  titleAccent?: boolean;
  titleLines?: string[];
}

export function IllustratedHero({
  title,
  subtitle,
  illustration,
  illustrationAlt,
  titleAccent = false,
  titleLines,
}: IllustratedHeroProps) {
  return (
    <section className="portfolio-hero" aria-labelledby="page-title">
      <div className="portfolio-hero-copy">
        {titleLines ? (
          <h1 id="page-title" className="portfolio-home-title">
            {titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>
        ) : (
          <h1 id="page-title" className="portfolio-page-title">
            {title}
            {titleAccent ? <span className="text-primary">.</span> : null}
          </h1>
        )}
        <p className="portfolio-kicker">{subtitle}</p>
      </div>
      <div className="portfolio-illustration-frame">
        <Image
          src={illustration}
          alt={illustrationAlt}
          width={1200}
          height={896}
          priority
          className="h-full w-full object-contain object-center mix-blend-multiply"
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 46vw, 88vw"
        />
      </div>
    </section>
  );
}
