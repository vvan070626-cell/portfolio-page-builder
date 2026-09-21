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

const services = [
  {
    title: "Your discipline",
    description:
      "Add a short description of the craft, service, or point of view you want visitors to remember.",
  },
  {
    title: "Your process",
    description:
      "Explain how you turn an early idea into useful work without filling the page with unnecessary detail.",
  },
  {
    title: "Your focus",
    description:
      "Use this space for the clients, industries, or kinds of problems you would like to work on next.",
  },
];

const navItems = [
  { label: "Profile", href: "#profile" },
  { label: "Practice", href: "#practice" },
  { label: "Contact", href: "#contact" },
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
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
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

function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
      <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
      {navItems.slice(1).map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[15px] font-medium transition-[opacity,transform] duration-200 ease-out hover:-translate-y-px hover:opacity-45 active:translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          {item.label}
        </a>
      ))}
      <Button
        nativeButton={false}
        render={<a href="#practice" aria-label="Jump to practice" />}
        variant="ghost"
        size="icon"
        className="rounded-full transition-transform duration-200 ease-out hover:translate-y-0.5 active:translate-y-1"
      >
        <ArrowDown size={18} strokeWidth={1.8} />
      </Button>
    </nav>
  );
}

function MobileNavigation() {
  return (
    <div className="flex items-center justify-between md:hidden">
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
            <SheetTitle className="text-lg font-semibold">Your Name</SheetTitle>
            <SheetDescription>Personal portfolio navigation</SheetDescription>
          </SheetHeader>
          <nav className="flex flex-col px-7 py-10" aria-label="Mobile navigation">
            {navItems.map((item, index) => (
              <SheetClose
                key={item.href}
                render={
                  <a
                    href={item.href}
                    className="group flex items-center justify-between border-b py-5 text-2xl font-semibold tracking-tight transition-opacity duration-200 active:opacity-45"
                  />
                }
              >
                <span className="transition-transform duration-200 ease-out group-hover:translate-x-1">{item.label}</span>
                <span className="font-mono text-xs font-normal text-muted-foreground">0{index + 1}</span>
              </SheetClose>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      <a href="#profile" className="text-[15px] font-semibold tracking-tight">
        Your Name
      </a>
      <Button
        nativeButton={false}
        render={<a href="#practice" aria-label="Jump to practice" />}
        variant="ghost"
        size="icon"
        className="-mr-2 rounded-full"
      >
        <ArrowDown size={19} strokeWidth={1.8} />
      </Button>
    </div>
  );
}

export function PersonalSite() {
  const [hasScrolled, setHasScrolled] = useState(false);
  const artworkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeader = () => setHasScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  function handleArtworkPointerMove(event: ReactPointerEvent<HTMLDivElement>) {
    if (event.pointerType === "touch" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const element = artworkRef.current;
    if (!element) return;

    const bounds = element.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 16;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 16;
    element.style.setProperty("--art-x", `${x.toFixed(2)}px`);
    element.style.setProperty("--art-y", `${y.toFixed(2)}px`);
  }

  function resetArtworkPosition() {
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
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 border-b bg-background/96 transition-[border-color,box-shadow] duration-300 ease-out",
          hasScrolled ? "border-border shadow-[0_1px_0_rgba(0,0,0,0.03)]" : "border-transparent shadow-none",
        )}
      >
        <div className="mx-auto w-full max-w-[1440px] px-6 py-[18px] sm:px-9 lg:px-12">
          <div className="hidden items-center justify-between md:flex">
            <a
              href="#profile"
              className="text-[15px] font-semibold tracking-tight transition-opacity duration-200 hover:opacity-45"
            >
              Your Name
            </a>
            <DesktopNavigation />
          </div>
          <MobileNavigation />
        </div>
      </header>

      <section
        id="profile"
        className="mx-auto grid min-h-[780px] w-full max-w-[1240px] scroll-mt-24 items-center gap-10 px-7 pb-24 pt-32 md:grid-cols-[0.88fr_1.12fr] md:px-12 md:pb-20 md:pt-36 lg:gap-16"
      >
        <Reveal className="min-w-0">
          <p className="mb-8 font-mono text-[12px] tracking-[0.18em] text-muted-foreground uppercase">
            Personal portfolio / 2026
          </p>
          <h1 className="max-w-[620px] text-[clamp(4.15rem,8.2vw,7.75rem)] leading-[0.79] font-black tracking-[-0.077em]">
            Your
            <span className="mt-4 block text-[0.65em] font-medium tracking-[-0.058em]">practice</span>
          </h1>
          <a
            href="#practice"
            className="group mt-16 inline-flex items-center gap-5 font-mono text-[15px] tracking-[0.06em] transition-opacity duration-200 ease-out hover:opacity-50"
          >
            A short positioning line ...
            <ArrowDown
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 ease-out group-hover:translate-y-1.5"
            />
          </a>
        </Reveal>

        <Reveal delay={100} className="relative min-w-0">
          <div
            ref={artworkRef}
            onPointerMove={handleArtworkPointerMove}
            onPointerLeave={resetArtworkPosition}
            style={artworkStyle}
            className="relative transition-transform duration-300 ease-out motion-reduce:transform-none"
          >
            <div className="translate-x-[var(--art-x)] translate-y-[var(--art-y)] transition-transform duration-200 ease-out motion-reduce:transform-none">
              <Image
                src="/portfolio-placeholder.webp"
                alt="Generic black and white placeholder illustration of a person working at a laptop"
                width={1200}
                height={896}
                priority
                className="h-auto w-full object-contain mix-blend-multiply"
              />
            </div>
            <p className="absolute right-1 bottom-2 bg-background px-2 py-1 font-mono text-[9px] tracking-[0.13em] text-muted-foreground uppercase">
              Replace with your visual
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="practice"
        className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-7 pb-28 md:px-12 md:pb-36"
      >
        <div className="border-t pt-8 md:pt-10">
          <Reveal>
            <div className="mb-16 flex items-end justify-between gap-8 md:mb-20">
              <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground uppercase">Practice</p>
              <p className="hidden max-w-[28rem] text-right text-sm leading-6 text-muted-foreground sm:block">
                Three flexible content blocks for your services, capabilities, or working principles.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-16 md:grid-cols-3 md:gap-10">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={index * 90}>
                <article className="group max-w-[32rem] border-t border-transparent pt-1 transition-colors duration-300 hover:border-foreground/18 md:min-h-64">
                  <div className="mb-8 flex items-center justify-between pt-4">
                    <h2 className="text-[1.75rem] leading-none font-black tracking-[-0.037em] transition-transform duration-300 ease-out group-hover:translate-x-1.5">
                      {service.title}
                    </h2>
                    <span className="font-mono text-xs text-muted-foreground transition-transform duration-300 ease-out group-hover:-translate-x-1.5">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="text-[1.05rem] leading-8 text-foreground/78">{service.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-7 pb-28 md:px-12 md:pb-40">
        <Reveal className="mx-auto flex w-full max-w-[1240px] flex-col items-center border-t pt-24 text-center md:pt-32">
          <p className="mb-8 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
            Available for selected projects
          </p>
          <Button
            nativeButton={false}
            render={<a href="mailto:hello@example.com" />}
            className="h-auto min-h-24 w-full max-w-[920px] rounded-full border-[5px] border-primary bg-transparent px-7 py-5 text-[clamp(2rem,5vw,4.5rem)] font-black tracking-[-0.057em] text-primary transition-[transform,background-color,color] duration-300 ease-out hover:scale-[1.015] hover:bg-primary hover:text-primary-foreground active:translate-y-1 sm:w-auto sm:px-16"
          >
            Start a conversation
            <ArrowUpRight className="ml-1 size-[0.72em] transition-transform duration-300 ease-out group-hover/button:translate-x-1 group-hover/button:-translate-y-1" strokeWidth={2.4} />
          </Button>
          <p className="mt-5 text-sm text-muted-foreground">Replace the email address with your own.</p>
        </Reveal>
      </section>

      <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-7 pb-10 pt-8 text-sm sm:flex-row sm:items-end sm:justify-between md:px-12">
        <div>
          <p className="font-semibold">Your Name</p>
          <p className="mt-1 text-muted-foreground">Role or specialty placeholder</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="Footer navigation">
          <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
          <a href="#practice" className="transition-opacity duration-200 hover:opacity-45">Practice</a>
          <a href="#contact" className="transition-opacity duration-200 hover:opacity-45">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
