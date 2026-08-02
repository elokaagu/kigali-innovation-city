import { Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Start Your Investment Journey"
          subtitle="Download the KIC investment deck or submit an inquiry through Citisquare. For Kigali Innovation City project inquiries, contact the Project Development Office below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="rounded-2xl border bg-card shadow-lg p-8 relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ background: "hsl(var(--citisquare-gold))" }}
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-wider text-citisquare-gold mb-4">
                Kigali Innovation City · Project Contact
              </p>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-citisquare-gold to-citisquare-gold/70 flex items-center justify-center mb-6 shadow-md">
                <span className="text-xl font-bold text-citisquare-dark">CC</span>
              </div>

              <h3 className="text-xl font-bold mb-1">Craig Clulow</h3>
              <p className="text-citisquare-gold font-medium mb-1">Chief Executive Officer</p>
              <p className="text-sm text-muted-foreground mb-6">Kigali Innovation City, Project Development Office</p>

              <div className="space-y-3 mb-8">
                <a href="tel:+250790135976" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-citisquare-grey-light flex items-center justify-center group-hover:bg-citisquare-gold/10 transition-colors">
                    <Phone className="h-4 w-4 text-citisquare-gold" />
                  </span>
                  +250 790 135 976
                </a>
                <a href="mailto:c.clulow@innovationcity.rw" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                  <span className="w-8 h-8 rounded-lg bg-citisquare-grey-light flex items-center justify-center group-hover:bg-citisquare-gold/10 transition-colors">
                    <Mail className="h-4 w-4 text-citisquare-gold" />
                  </span>
                  c.clulow@innovationcity.rw
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="w-8 h-8 rounded-lg bg-citisquare-grey-light flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-citisquare-gold" />
                  </span>
                  <span className="leading-relaxed">
                    Kigali Innovation City, PDO<br />
                    RDB Building, KG 220 St, Gishushu, Kigali
                  </span>
                </div>
              </div>

              <Button variant="cta" className="w-full" asChild>
                <a href="/documents/KIC-Investment-Deck-2026.pptx" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download KIC Investment Deck
                </a>
              </Button>
            </div>
          </div>

          <div className="rounded-2xl border bg-card shadow-lg p-8">
            <h3 className="text-xl font-bold mb-2">Submit an Inquiry</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Our Citisquare team responds within 2 business days.
            </p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
