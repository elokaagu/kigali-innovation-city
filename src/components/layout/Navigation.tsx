"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import KicLogo from "@/components/brand/KicLogo";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "vision", label: "Vision" },
  { id: "masterplan", label: "Master Plan" },
  { id: "why-rwanda", label: "Why Rwanda" },
  { id: "opportunities", label: "Opportunities" },
  { id: "academic", label: "Academic" },
  { id: "tenants", label: "Tenants" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const navLinkClass = (id: string) =>
    cn(
      "px-3 py-2 rounded-md text-sm font-medium transition-colors",
      activeSection === id
        ? "text-kic-gold"
        : isScrolled
          ? "text-foreground hover:text-kic-gold"
          : "text-white/90 hover:text-kic-gold"
    );

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection("hero")}
            className="group transition-opacity hover:opacity-90"
          >
            <KicLogo
              variant={isScrolled ? "dark" : "light"}
              showWordmark
            />
          </button>

          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={navLinkClass(item.id)}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-4 py-2 rounded-lg bg-kic-gold text-kic-dark text-sm font-semibold hover:bg-kic-gold/90 transition-all hover:shadow-md"
            >
              Invest Now
            </button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className={cn(
                  "p-2 rounded-md",
                  isScrolled ? "text-foreground" : "text-white"
                )}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <KicLogo variant="dark" showWordmark className="mb-6" />
              <div className="flex flex-col gap-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="px-4 py-3 text-left rounded-lg hover:bg-muted transition-colors font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={() => scrollToSection("contact")}
                  className="mt-4 px-4 py-3 rounded-lg bg-kic-gold text-kic-dark font-semibold"
                >
                  Invest Now
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
