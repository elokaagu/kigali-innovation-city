"use client";

import { Mail } from "lucide-react";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden p-4 bg-background/95 backdrop-blur-sm border-t border-border">
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-kic-gold text-kic-dark font-semibold text-sm"
      >
        <Mail className="h-4 w-4" />
        Contact Our Team
      </a>
    </div>
  );
}
