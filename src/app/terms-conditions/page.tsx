import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_NAME } from "@/data/company";

export default function TermsConditionsPage() {
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
            Terms &amp; Conditions
          </h1>
          <p className="text-muted-foreground">Last updated: September 22, 2025</p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              By accessing and using the services provided by {COMPANY_NAME}, you agree to be
              bound by these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY_NAME} provides real estate investment consultancy services including project
              origination, structuring, and development across African markets, including flagship
              projects such as Vision City 2 and Kigali Innovation City.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact Information</h2>
            <div className="mt-4 p-4 bg-muted rounded-lg">
              <p className="text-foreground font-medium">{COMPANY_NAME}</p>
              <p className="text-muted-foreground">Email: uche.nnama@citisquare.africa</p>
              <p className="text-muted-foreground">Address: Kigali, Rwanda, Vision City 2</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
