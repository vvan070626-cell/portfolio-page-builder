"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DeckMetric {
  value: string;
  label: string;
}

export interface DeckSlide {
  label: string;
  title: string;
  body: string;
  bullets?: string[];
  metrics?: DeckMetric[];
}

interface DeckGalleryProps {
  badge: string;
  description: string;
  slides: DeckSlide[];
  title: string;
}

export function DeckGallery({ badge, description, slides, title }: DeckGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = slides[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? slides.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === slides.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="portfolio-deck-gallery" aria-label={`${title} selected slides`}>
      <header className="portfolio-deck-gallery-header">
        <div>
          <p className="portfolio-eyebrow">{badge}</p>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <span>
          {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
      </header>

      <div className="portfolio-deck-slide" aria-live="polite">
        <p className="portfolio-deck-slide-label">{activeSlide.label}</p>
        <h5>{activeSlide.title}</h5>
        <p className="portfolio-deck-slide-body">{activeSlide.body}</p>

        {activeSlide.bullets ? (
          <ul>
            {activeSlide.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
        ) : null}

        {activeSlide.metrics ? (
          <div className="portfolio-deck-slide-metrics">
            {activeSlide.metrics.map((metric) => (
              <div key={metric.label}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>

      <footer className="portfolio-deck-gallery-controls">
        <div className="portfolio-deck-dots" aria-label="Choose a slide">
          {slides.map((slide, index) => (
            <Button
              key={slide.label}
              type="button"
              variant="ghost"
              size="icon-sm"
              aria-label={`Show slide ${index + 1}: ${slide.title}`}
              aria-pressed={index === activeIndex}
              className="portfolio-deck-dot"
              onClick={() => setActiveIndex(index)}
            >
              <span aria-hidden="true" />
            </Button>
          ))}
        </div>
        <div className="portfolio-deck-arrows">
          <Button type="button" variant="ghost" size="icon" onClick={showPrevious} aria-label="Previous slide">
            <ChevronLeft size={20} strokeWidth={1.7} />
          </Button>
          <Button type="button" variant="ghost" size="icon" onClick={showNext} aria-label="Next slide">
            <ChevronRight size={20} strokeWidth={1.7} />
          </Button>
        </div>
      </footer>
    </section>
  );
}
