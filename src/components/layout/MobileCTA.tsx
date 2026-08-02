"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";

export default function MobileCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.3);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:hidden animate-slide-in-bottom">
      <div className="bg-card border border-border rounded-xl p-4 shadow-2xl backdrop-blur-md transform transition-all duration-300 hover:scale-105 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-citisquare-gold/5 to-transparent opacity-50" />

        <div className="flex items-center justify-between mb-3 relative z-10">
          <div className="animate-fade-in-left">
            <p className="font-semibold text-foreground text-sm animate-pulse">
              Early Investor Special
            </p>
            <p className="text-xs text-muted-foreground">
              8-10% returns • Only 45 spots left
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110 hover:rotate-90"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="block relative z-10 group"
        >
          <Button className="w-full bg-citisquare-gold hover:bg-citisquare-gold/90 text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl group-hover:animate-pulse-glow">
            <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            Secure Investment Spot
          </Button>
        </a>
      </div>
    </div>
  );
}
