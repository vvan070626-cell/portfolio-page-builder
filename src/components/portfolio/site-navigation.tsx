"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

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

interface SiteNavigationProps {
  activePage: "home" | "solutions" | "contact";
}

const navigationItems = [
  { href: "/solutions", label: "Solutions", page: "solutions" },
  { href: "/contact", label: "Contact", page: "contact" },
] as const;

export function SiteNavigation({ activePage }: SiteNavigationProps) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-14 border-b border-transparent bg-background/95 backdrop-blur-[2px]">
      <div className="flex h-full w-full items-center justify-between px-5 sm:px-7 lg:px-8">
        <Link
          href="/"
          className={cn(
            "text-[20px] leading-none tracking-[-0.02em] transition-opacity duration-200 hover:opacity-55",
            activePage === "home" && "font-bold",
          )}
        >
          Your Name
        </Link>

        <nav className="hidden items-center gap-7 text-[20px] leading-none md:flex" aria-label="Primary navigation">
          {activePage !== "home" ? (
            <Link href="/" className="portfolio-home-spot" aria-label="Return to the profile page">
              <span aria-hidden="true" />
            </Link>
          ) : (
            <span className="portfolio-home-spot portfolio-home-spot-static" aria-hidden="true">
              <span />
            </span>
          )}
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "transition-opacity duration-200 hover:opacity-55",
                activePage === item.page && "font-bold",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Search size={22} strokeWidth={1.8} aria-hidden="true" />
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="-mr-2 rounded-full" aria-label="Open navigation" />
              }
            >
              <Menu size={22} strokeWidth={1.8} />
            </SheetTrigger>
            <SheetContent side="right" className="w-[84%] border-l bg-background p-0 shadow-none">
              <SheetHeader className="border-b px-7 py-6 text-left">
                <SheetTitle className="font-heading text-xl font-bold">Your Name</SheetTitle>
                <SheetDescription>Portfolio navigation</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col px-7 py-8" aria-label="Mobile navigation">
                <SheetClose render={<Link href="/" className="border-b py-5 text-2xl" />}>
                  Profile
                </SheetClose>
                {navigationItems.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={
                      <Link
                        href={item.href}
                        className={cn(
                          "border-b py-5 text-2xl",
                          activePage === item.page && "font-bold",
                        )}
                      />
                    }
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
