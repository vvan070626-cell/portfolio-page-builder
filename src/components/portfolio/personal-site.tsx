"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { ArrowDown, ArrowUpRight, Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sections = [
  { id: "profile", label: "Profile" },
  { id: "practice", label: "Solutions" },
  { id: "contact", label: "Contact" },
] as const;

type SectionId = (typeof sections)[number]["id"];

const illustrations: Record<SectionId, { src: string; alt: string }> = {
  profile: {
    src: "/illustration-working.webp",
    alt: "Original black line illustration of a short-haired woman working at a laptop",
  },
  practice: {
    src: "/illustration-approval.webp",
    alt: "Original black line illustration of a short-haired woman giving a thumbs-up behind a laptop",
  },
  contact: {
    src: "/illustration-contact.webp",
    alt: "Original black line illustration of a short-haired woman speaking on the phone beside a laptop",
  },
};

const serviceGroups = [
  { title: "Your offer", items: ["Primary service", "Supporting service", "Optional add-on"] },
  { title: "Your process", items: ["Discovery phase", "Design or build", "Delivery and support"] },
  { title: "Your focus", items: ["Ideal project type", "Preferred audience", "Key outcome"] },
  { title: "Your craft", items: ["Core capability", "Specialist skill", "Working principle"] },
  { title: "Your approach", items: ["Clear communication", "Useful decisions", "Measured progress"] },
  { title: "Your value", items: ["What improves", "Why it matters", "What comes next"] },
];

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={cn(
        "transition-[opacity,transform] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function MobileNavigation({ activeSection }: { activeSection: SectionId }) {
  return (
    <div className="flex h-14 items-center justify-between md:hidden">
      <Sheet>
        <SheetTrigger
          render={
            <Button variant="ghost" size="icon" className="-ml-2 rounded-full" aria-label="Open navigation" />
          }
        >
          <Menu size={21} strokeWidth={1.8} />
        </SheetTrigger>
        <SheetContent side="left" className="w-[86%] border-r-0 bg-background p-0 shadow-none">
          <SheetHeader className="border-b px-7 py-6 text-left">
            <SheetTitle className="font-heading text-lg font-semibold">Your Name</SheetTitle>
            <SheetDescription>Personal portfolio navigation</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col px-7 py-10" aria-label="Mobile navigation">
            {sections.map((item, index) => (
              <SheetClose
                key={item.id}
                render={
                  <a
                    href={`#${item.id}`}
                    className="group flex items-center justify-between border-b py-5 text-2xl tracking-tight transition-opacity duration-200 active:opacity-45"
                  />
                }
              >
                <span className={cn("transition-transform duration-200 ease-out group-hover:translate-x-1", activeSection === item.id && "font-bold")}>
                  {item.label}
                </span>
                <span className="font-mono text-xs font-normal text-muted-foreground">0{index + 1}</span>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <a href="#profile" className="text-xl font-normal tracking-tight">
        Your Name
      </a>
      <Button
        nativeButton={false}
        render={<a href="#practice" aria-label="Jump to solutions" />}
        variant="ghost"
        size="icon"
        className="-mr-2 rounded-full"
      >
        <ArrowDown size={19} strokeWidth={1.8} />
      </Button>
    </div>
  );
}

function DesktopNavigation({ activeSection }: { activeSection: SectionId }) {
  return (
    <nav className="hidden h-14 items-center gap-7 text-xl md:flex" aria-label="Primary navigation">
      <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
      {sections.slice(1).map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={cn(
            "transition-[opacity,transform] duration-200 ease-out hover:-translate-y-px hover:opacity-45 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4",
            activeSection === item.id && "font-bold",
          )}
        >
          {item.label}
        </a>
      ))}
      <Button
        nativeButton={false}
        render={<a href="#practice" aria-label="Jump to solutions" />}
        variant="ghost"
        size="icon"
        className="rounded-full transition-transform duration-200 ease-out hover:translate-y-0.5 active:translate-y-1"
      >
        <ArrowDown size={19} strokeWidth={1.8} />
      </Button>
    </nav>
  );
}

function MobileIllustration({ section }: { section: SectionId }) {
  const illustration = illustrations[section];

  return (
    <Reveal className="mt-10 md:hidden">
      <Image
        src={illustration.src}
        alt={illustration.alt}
        width={1200}
        height={896}
        className="h-auto w-full object-contain mix-blend-multiply"
      />
    </Reveal>
  );
}

function StickyIllustrations({ activeSection }: { activeSection: SectionId }) {
  const artworkRef = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = artworkRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 12;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 12;
    element.style.setProperty("--art-x", `${x.toFixed(2)}px`);
    element.style.setProperty("--art-y", `${y.toFixed(2)}px`);
  }

  function resetPointer() {
    const element = artworkRef.current;
    if (!element) return;
    element.style.setProperty("--art-x", "0px");
    element.style.setProperty("--art-y", "0px");
  }

  const artworkStyle = {
    "--art-x": "0px",
    "--art-y": "0px",
  } as CSSProperties;

  return (
    <aside className="relative hidden md:block" aria-label="Section illustrations">
      <div className="sticky top-14 flex h-[calc(100svh-3.5rem)] items-center justify-center">
        <div
          ref={artworkRef}
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          style={artworkStyle}
          className="relative aspect-[1.15/1] w-full max-w-[560px] translate-x-[var(--art-x)] translate-y-[var(--art-y)] transition-transform duration-300 ease-out motion-reduce:transform-none"
        >
          {sections.map((section) => {
            const illustration = illustrations[section.id];
            const isActive = activeSection === section.id;

            return (
              <div
                key={section.id}
                className={cn(
                  "absolute inset-0 flex items-center justify-center transition-[opacity,transform,filter] duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none",
                  isActive ? "scale-100 translate-y-0 opacity-100 blur-0" : "pointer-events-none scale-[0.965] translate-y-5 opacity-0 blur-[1px]",
                )}
                aria-hidden={!isActive}
              >
                <Image
                  src={illustration.src}
                  alt={isActive ? illustration.alt : ""}
                  width={1200}
                  height={896}
                  priority={section.id === "profile"}
                  className="h-auto w-full object-contain mix-blend-multiply"
                />
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export function PersonalSite() {
  const [activeSection, setActiveSection] = useState<SectionId>("profile");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  useEffect(() => {
    const sectionElements = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) setActiveSection(visibleEntry.target.id as SectionId);
      },
      { threshold: [0.2, 0.35, 0.55], rootMargin: "-28% 0px -38% 0px" },
    );

    sectionElements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-background/96 transition-[border-color,box-shadow] duration-300 ease-out",
          hasScrolled ? "border-border shadow-sm" : "border-transparent shadow-none",
        )}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-9 lg:px-4">
          <div className="hidden h-14 items-center justify-between md:flex">
            <a href="#profile" className="text-xl font-normal tracking-tight transition-opacity duration-200 hover:opacity-45">
              Your Name
            </a>
            <DesktopNavigation activeSection={activeSection} />
          </div>
          <MobileNavigation activeSection={activeSection} />
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1310px] grid-cols-1 px-7 pt-14 md:grid-cols-[minmax(0,1fr)_minmax(430px,0.92fr)] md:gap-8 md:px-12 lg:gap-14 lg:px-0">
        <div className="min-w-0">
          <section
            id="profile"
            className="flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 flex-col justify-center py-16 md:py-20"
          >
            <Reveal>
              <p className="font-heading text-[56px] leading-[1.02] font-black tracking-[-0.055em] sm:text-[64px] md:text-[80px] md:leading-[1.2]">
                Your
              </p>
              <h1 className="font-heading mt-0 text-[44px] leading-[1.06] font-semibold tracking-[-0.045em] sm:text-[52px] md:-mt-3 md:text-[64px] md:leading-[1.2]">
                practice
              </h1>
              <p className="mt-12 max-w-[30rem] font-mono text-[17px] leading-8 font-normal tracking-[0.05em] sm:text-[19px] md:mt-14 md:text-[21.333px]">
                Your positioning, your craft, your next chapter ...
              </p>
            </Reveal>
            <MobileIllustration section="profile" />
            <a
              href="#practice"
              className="group mt-12 inline-flex w-fit items-center gap-4 text-lg transition-opacity duration-200 hover:opacity-45 md:mt-16"
            >
              Explore the work
              <ArrowDown className="transition-transform duration-300 ease-out group-hover:translate-y-1.5" size={20} strokeWidth={1.7} />
            </a>
          </section>

          <section
            id="practice"
            className="flex min-h-[calc(112svh-3.5rem)] scroll-mt-14 flex-col justify-center border-t border-border/70 py-20 md:border-t-0 md:py-24"
          >
            <Reveal>
              <h2 className="font-heading text-[44px] leading-[1.2] font-bold tracking-[-0.045em] md:text-[45.333px]">
                Solutions<span className="text-primary">.</span>
              </h2>
              <p className="mt-8 max-w-[34rem] font-mono text-[16px] leading-8 tracking-[0.04em] md:text-[18px]">
                Clear, useful, adaptable, and made around your real goals.
              </p>
            </Reveal>
            <MobileIllustration section="practice" />

            <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {serviceGroups.map((group, index) => (
                <Reveal key={group.title} delay={(index % 3) * 70}>
                  <article className="group">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <h3 className="font-heading text-[20px] leading-7 font-bold tracking-[-0.025em] md:text-[22px]">
                        {group.title}
                      </h3>
                      <span className="font-mono text-[11px] text-muted-foreground">0{index + 1}</span>
                    </div>
                    <ul className="space-y-3 text-[17px] leading-7 md:text-[18px]">
                      {group.items.map((item) => (
                        <li key={item} className="transition-transform duration-250 ease-out group-hover:translate-x-1">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="flex min-h-[calc(100svh-3.5rem)] scroll-mt-14 flex-col justify-center border-t border-border/70 py-20 md:border-t-0 md:py-24"
          >
            <Reveal>
              <h2 className="font-heading text-[44px] leading-[1.2] font-bold tracking-[-0.045em] md:text-[45.333px]">
                Contact
              </h2>
              <p className="mt-10 font-mono text-[18px] leading-9 tracking-[0.05em] md:text-2xl">Send a message, say hello</p>
            </Reveal>
            <MobileIllustration section="contact" />

            <div className="mt-20 grid gap-12 sm:grid-cols-3 md:mt-24">
              <Reveal>
                <div>
                  <h3 className="font-heading text-2xl font-bold">E-mail</h3>
                  <a className="mt-5 inline-block text-xl transition-opacity hover:opacity-45 md:text-2xl" href="mailto:hello@example.com">
                    hello@example.com
                  </a>
                </div>
              </Reveal>
              <Reveal delay={80}>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Tel.</h3>
                  <a className="mt-5 inline-block text-xl transition-opacity hover:opacity-45 md:text-2xl" href="tel:+10000000000">
                    +1 000 000 0000
                  </a>
                </div>
              </Reveal>
              <Reveal delay={160}>
                <div>
                  <h3 className="font-heading text-2xl font-bold">Profile</h3>
                  <p className="mt-5 text-xl text-muted-foreground md:text-2xl">Add your link</p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-20 md:mt-24">
              <Button
                nativeButton={false}
                render={<a href="mailto:hello@example.com" />}
                className="h-auto rounded-full border-[4px] border-primary bg-transparent px-8 py-4 font-heading text-[34px] font-bold tracking-[-0.045em] text-primary transition-[transform,background-color,color] duration-300 ease-out hover:scale-[1.015] hover:bg-primary hover:text-primary-foreground active:translate-y-1 md:px-12 md:text-[42px]"
              >
                Contact me
                <ArrowUpRight className="ml-1 size-[0.72em] transition-transform duration-300 ease-out group-hover/button:translate-x-1 group-hover/button:-translate-y-1" strokeWidth={2.4} />
              </Button>
            </Reveal>
          </section>
        </div>

        <StickyIllustrations activeSection={activeSection} />
      </div>

      <div className="pointer-events-none fixed top-1/2 left-5 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {sections.map((section, index) => (
          <span
            key={section.id}
            className={cn(
              "font-mono text-[10px] transition-[opacity,transform] duration-300",
              activeSection === section.id ? "translate-x-1 opacity-100" : "opacity-25",
            )}
          >
            0{index + 1}
          </span>
        ))}
      </div>

      <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-7 pb-10 pt-8 text-base sm:flex-row sm:items-end sm:justify-between md:px-12 lg:px-4">
        <div>
          <p className="text-xl">Your Name</p>
          <p className="mt-1 text-muted-foreground">Role or specialty placeholder</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="Footer navigation">
          <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
          <a href="#practice" className="transition-opacity duration-200 hover:opacity-45">Solutions</a>
          <a href="#contact" className="transition-opacity duration-200 hover:opacity-45">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
