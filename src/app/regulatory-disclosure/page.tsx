import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/data/company";

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
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Company Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY_NAME} is a real estate investment consultancy specialising in project
              origination, structuring, and development across African markets. We operate with
              good governance at every stage of the investment lifecycle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Investment Risk</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All real estate investments carry risk. Past performance does not guarantee future
              results. Projected returns are estimates only and are not guaranteed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Contact Information</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">{COMPANY_NAME}</p>
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
