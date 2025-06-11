
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";
import { siteConfig, navItems } from "@/config/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./ThemeToggleButton";

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavLink = ({ href, children, icon: Icon }: { href: string; children: React.ReactNode, icon: React.ElementType }) => (
    <Link
      href={href}
      className={cn(
        "relative group flex items-center gap-2 text-sm font-medium transition-colors",
        pathname === href
          ? "text-primary hover:text-foreground dark:hover:text-primary/80"
          : "text-muted-foreground hover:text-primary"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <Icon className="h-4 w-4" />
      {children}
      <span
        className="absolute bottom-[-4px] left-0 h-[3px] w-0 bg-primary transition-all duration-300 ease-out group-hover:w-full"
      ></span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold text-primary flex items-center gap-2">
          <SparklesIcon className="h-6 w-6 text-accent" />
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation & Theme Toggle */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href} icon={item.icon}>
                {item.title}
              </NavLink>
            ))}
          </nav>
          <ThemeToggleButton />
        </div>

        {/* Mobile Navigation & Theme Toggle */}
        <div className="flex items-center md:hidden">
          <ThemeToggleButton />
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-[18rem] bg-background p-6">
              <div className="flex flex-col space-y-6">
                <SheetClose asChild>
                  <Link href="/" className="text-lg font-bold text-primary flex items-center gap-2">
                    <SparklesIcon className="h-5 w-5 text-accent" />
                    {siteConfig.name}
                  </Link>
                </SheetClose>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                     <SheetClose asChild key={item.href}>
                        <NavLink href={item.href} icon={item.icon}>
                          {item.title}
                        </NavLink>
                    </SheetClose>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function SparklesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  )
}
