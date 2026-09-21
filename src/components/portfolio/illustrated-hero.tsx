import Image from "next/image";

interface IllustratedHeroProps {
  title: string;
  subtitle: string;
  illustration: string;
  illustrationAlt: string;
  titleAccent?: boolean;
  homeTitle?: boolean;
}

export function IllustratedHero({
  title,
  subtitle,
  illustration,
  illustrationAlt,
  titleAccent = false,
  homeTitle = false,
}: IllustratedHeroProps) {
  return (
    <section className="portfolio-hero" aria-labelledby="page-title">
      <div className="portfolio-hero-copy">
        {homeTitle ? (
          <h1 id="page-title" className="portfolio-home-title">
            <span>Independent</span>
            <span>digital</span>
            <span>practice</span>
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
          className="h-full w-full object-contain object-center"
          sizes="(min-width: 1024px) 500px, (min-width: 768px) 46vw, 88vw"
        />
      </div>
    </section>
  );
}
