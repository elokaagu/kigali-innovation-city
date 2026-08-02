"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import citisquareLogoBlack from "@/assets/citisquare-logo-black.png";
import citisquareLogoWhite from "@/assets/citisquare-logo-white-alt.png";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "benefits", label: "Benefits" },
  { id: "fund", label: "Fund" },
  { id: "projects-showcase", label: "Projects" },
  { id: "partners", label: "Partners" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      setIsScrolled(window.scrollY > 50);

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

  return (
    <nav
      className={cn(
        "fixed top-0 w-full backdrop-blur-sm z-50 transition-all duration-500 animate-slide-in-top",
        isScrolled && "bg-background/95 border-b border-border shadow-lg"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 animate-fade-in-left">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="transition-transform duration-300 hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={isScrolled ? citisquareLogoBlack.src : citisquareLogoWhite.src}
                alt="Citisquare"
                className="h-20 w-auto"
              />
            </button>
          </div>

          <div className="hidden lg:block animate-fade-in-right">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:-translate-y-1",
                    activeSection === item.id
                      ? "text-citisquare-gold bg-citisquare-gold/10 shadow-lg"
                      : isScrolled
                        ? "text-foreground hover:text-citisquare-gold hover:bg-citisquare-gold/5"
                        : "text-white hover:text-citisquare-gold hover:bg-citisquare-gold/5"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden lg:block animate-fade-in-right">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-citisquare-gold text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-citisquare-gold/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1"
            >
              Contact Us
            </a>
          </div>

          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button
                  className={cn(
                    "inline-flex items-center justify-center p-2 rounded-md transition-colors",
                    isScrolled
                      ? "text-foreground hover:text-citisquare-gold hover:bg-citisquare-gold/5"
                      : "text-white hover:text-citisquare-gold hover:bg-citisquare-gold/5"
                  )}
                  aria-label="Open menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between py-4 border-b border-border">
                    <button
                      type="button"
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                        setIsOpen(false);
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={citisquareLogoBlack.src}
                        alt="Citisquare"
                        className="h-8 w-auto"
                      />
                    </button>
                  </div>

                  <div className="flex-1 py-6">
                    <div className="space-y-1">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className={cn(
                            "w-full text-left px-4 py-3 rounded-md text-base font-medium transition-colors",
                            activeSection === item.id
                              ? "text-citisquare-gold bg-citisquare-gold/10"
                              : "text-foreground hover:text-citisquare-gold hover:bg-citisquare-gold/5"
                          )}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-border">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-citisquare-gold text-white px-4 py-3 rounded-md text-base font-medium hover:bg-citisquare-gold/90 transition-colors text-center block"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
