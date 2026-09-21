"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight, Menu, Search } from "lucide-react";

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

const services = [
  {
    title: "Your discipline",
    description:
      "Add a short description of the craft, service, or perspective you want visitors to remember.",
  },
  {
    title: "Your process",
    description:
      "Explain how you turn an early idea into clear, useful work without filling the page with detail.",
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

function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-7 md:flex" aria-label="Primary navigation">
      <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
      {navItems.slice(1).map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-[15px] font-medium transition-opacity duration-200 ease-out hover:opacity-45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
        >
          {item.label}
        </a>
      ))}
      <Button
        variant="ghost"
        size="icon"
        aria-label="Jump to practice"
        onClick={() => document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" })}
        className="rounded-full"
      >
        <Search size={19} strokeWidth={1.8} />
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
                    className="flex items-center justify-between border-b py-5 text-2xl font-semibold tracking-tight"
                  />
                }
              >
                <span>{item.label}</span>
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
        variant="ghost"
        size="icon"
        aria-label="Jump to practice"
        onClick={() => document.querySelector("#practice")?.scrollIntoView({ behavior: "smooth" })}
        className="-mr-2 rounded-full"
      >
        <Search size={20} strokeWidth={1.8} />
      </Button>
    </div>
  );
}

export function PersonalSite() {
  return (
    <main className="min-h-dvh overflow-x-hidden bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-40 border-b border-transparent bg-background/95 backdrop-blur-sm">
        <div className="mx-auto w-full max-w-[1440px] px-6 py-5 sm:px-9 lg:px-12">
          <div className="hidden items-center justify-between md:flex">
            <a href="#profile" className="text-[15px] font-semibold tracking-tight">
              Your Name
            </a>
            <DesktopNavigation />
          </div>
          <MobileNavigation />
        </div>
      </header>

      <section
        id="profile"
        className="mx-auto grid min-h-[760px] w-full max-w-[1240px] scroll-mt-24 items-center gap-12 px-7 pb-24 pt-32 md:grid-cols-[0.9fr_1.1fr] md:px-12 md:pb-20 md:pt-36 lg:gap-20"
      >
        <div className="min-w-0 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:duration-700">
          <p className="mb-7 font-mono text-sm tracking-[0.16em] text-muted-foreground uppercase">
            Personal portfolio / 2026
          </p>
          <h1 className="text-[clamp(4rem,8vw,7.6rem)] leading-[0.78] font-black tracking-[-0.075em]">
            Your
            <span className="mt-3 block text-[0.66em] font-medium tracking-[-0.055em]">practice</span>
          </h1>
          <a
            href="#practice"
            className="mt-16 inline-flex items-center gap-5 font-mono text-base tracking-[0.06em] transition-opacity duration-200 ease-out hover:opacity-50"
          >
            A short positioning line ...
            <ArrowDown size={17} strokeWidth={1.7} />
          </a>
        </div>

        <div className="relative min-w-0 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-1000">
          <Image
            src="/portfolio-placeholder.webp"
            alt="Generic black and white placeholder illustration of a person working at a laptop"
            width={1200}
            height={896}
            priority
            className="h-auto w-full object-contain"
          />
          <p className="absolute bottom-3 right-2 bg-background px-2 py-1 font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase">
            Replace with your visual
          </p>
        </div>
      </section>

      <section
        id="practice"
        className="mx-auto w-full max-w-[1240px] scroll-mt-24 px-7 pb-28 md:px-12 md:pb-36"
      >
        <div className="grid gap-16 border-t pt-12 md:grid-cols-3 md:gap-10 md:pt-16">
          {services.map((service, index) => (
            <article key={service.title} className="max-w-[32rem]">
              <div className="mb-8 flex items-center justify-between">
                <h2 className="text-[1.75rem] leading-none font-black tracking-[-0.035em]">{service.title}</h2>
                <span className="font-mono text-xs text-muted-foreground">0{index + 1}</span>
              </div>
              <p className="text-[1.05rem] leading-8 text-foreground/78">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 px-7 pb-28 md:px-12 md:pb-40">
        <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center border-t pt-24 text-center md:pt-32">
          <p className="mb-8 font-mono text-xs tracking-[0.18em] text-muted-foreground uppercase">
            Available for selected projects
          </p>
          <Button
            nativeButton={false}
            render={<a href="mailto:hello@example.com" />}
            className="h-auto min-h-24 rounded-full border-[5px] border-primary bg-transparent px-10 py-5 text-[clamp(2.1rem,5vw,4.5rem)] font-black tracking-[-0.055em] text-primary transition-transform duration-300 ease-out hover:scale-[1.02] hover:bg-transparent sm:px-16"
          >
            Start a conversation
            <ArrowUpRight className="ml-2 size-[0.72em]" strokeWidth={2.4} />
          </Button>
          <p className="mt-5 text-sm text-muted-foreground">Replace the email address with your own.</p>
        </div>
      </section>

      <footer className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-7 pb-10 pt-8 text-sm sm:flex-row sm:items-end sm:justify-between md:px-12">
        <div>
          <p className="font-semibold">Your Name</p>
          <p className="mt-1 text-muted-foreground">Role or specialty placeholder</p>
        </div>
        <nav className="flex flex-wrap items-center gap-x-7 gap-y-3" aria-label="Footer navigation">
          <span className="size-2 rounded-full bg-foreground" aria-hidden="true" />
          <a href="#practice" className="transition-opacity hover:opacity-45">Practice</a>
          <a href="#contact" className="transition-opacity hover:opacity-45">Contact</a>
        </nav>
      </footer>
    </main>
  );
}
