import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RegulatoryDisclosurePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Regulatory Disclosure
          </h1>
          <p className="text-muted-foreground">Last updated: September 22, 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Regulatory Authorization</h2>
            <p className="text-muted-foreground leading-relaxed">
              RiseAfric Unit Trust Fund is authorized and regulated by the Rwanda Development Board (RDB)
              and operates under the oversight of relevant Rwandan financial regulatory authorities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Target Returns</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The fund targets annual returns of 8 to 10% through diversified investments across
              Rwanda&apos;s high-growth sectors. These are projections only and not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">RiseAfric Unit Trust Fund</p>
              <p className="text-muted-foreground">Email: uche.nnama@citisquare.africa</p>
              <p className="text-muted-foreground">Address: Kigali, Rwanda, Vision City 2</p>
              <p className="text-muted-foreground">Phone: +250 788 123 456</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
