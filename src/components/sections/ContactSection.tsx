import { Mail, MapPin, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/common/SectionHeader";
import InquiryForm from "@/components/sections/InquiryForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-kic-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Get in Touch"
          title="Start Your Investment Journey"
          subtitle="Download the investment deck or submit an inquiry to the Kigali Innovation City Project Development Office."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact card */}
          <div className="rounded-2xl border bg-card shadow-lg p-8">
            <div className="w-16 h-16 rounded-full bg-kic-gold/15 flex items-center justify-center mb-6">
              <span className="text-xl font-bold text-kic-dark">CC</span>
            </div>

            <h3 className="text-xl font-bold mb-1">Craig Clulow</h3>
            <p className="text-kic-gold font-medium mb-6">Chief Executive Officer</p>

            <div className="space-y-3 mb-8">
              <a href="tel:+250790135976" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-4 w-4 text-kic-gold shrink-0" />
                +250 790 135 976
              </a>
              <a href="mailto:c.clulow@innovationcity.rw" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-4 w-4 text-kic-gold shrink-0" />
                c.clulow@innovationcity.rw
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-kic-gold shrink-0 mt-0.5" />
                <span>Kigali Innovation City, PDO<br />RDB Building, KG 220 St, Gishushu, Kigali</span>
              </div>
            </div>

            <Button variant="cta" className="w-full" asChild>
              <a href="/documents/KIC-Investment-Deck-2026.pptx" download>
                <Download className="mr-2 h-4 w-4" />
                Download Investment Deck
              </a>
            </Button>
          </div>

          {/* Inquiry form */}
          <div className="rounded-2xl border bg-card shadow-lg p-8">
            <h3 className="text-xl font-bold mb-2">Submit an Inquiry</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Our team responds within 2 business days.
            </p>
            <InquiryForm />
          </div>
        </div>
      </div>
    </section>
  );
}
