import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Download,
  MapPin,
  FileText,
  CheckCircle2,
} from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import FooterSection from "@/components/sections/FooterSection";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import InquiryForm from "@/components/sections/InquiryForm";
import {
  getOpportunityBySlug,
  getOpportunitySlugs,
} from "@/data/opportunities";
import { getPlotById } from "@/data/plots";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getOpportunitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const opp = getOpportunityBySlug(slug);
  if (!opp) return { title: "Opportunity Not Found" };
  return {
    title: `${opp.title} | Kigali Innovation City`,
    description: opp.summary,
  };
}

export default async function OpportunityPage({ params }: PageProps) {
  const { slug } = await params;
  const opportunity = getOpportunityBySlug(slug);
  if (!opportunity) notFound();

  const plot = opportunity.plotId ? getPlotById(opportunity.plotId) : undefined;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero banner */}
        <div className="bg-kic-dark text-white py-16 sm:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/#opportunities"
              className="inline-flex items-center gap-2 text-white/60 hover:text-kic-gold text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Opportunities
            </Link>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge variant="gold">{opportunity.category}</Badge>
              {plot && (
                <Badge variant="green">Plot {plot.id}</Badge>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {opportunity.title}
            </h1>
            <p className="text-lg text-white/80 max-w-3xl leading-relaxed">
              {opportunity.summary}
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Overview</h2>
            <p className="text-muted-foreground leading-relaxed">
              {opportunity.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              {opportunity.tags.map((tag) => (
                <Badge key={tag} variant="gold">{tag}</Badge>
              ))}
            </div>
          </section>

          {/* Site Analysis */}
          {(opportunity.siteContext || opportunity.nearbyLandmarks) && (
            <section>
              <h2 className="text-2xl font-bold mb-6">Site Analysis</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {opportunity.siteContext && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-kic-gold" />
                        Site Context
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {opportunity.siteContext.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-kic-green shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
                {opportunity.nearbyLandmarks && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Nearby Landmarks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {opportunity.nearbyLandmarks.map((item) => (
                          <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-kic-gold shrink-0 mt-2" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>
          )}

          {/* Development Parameters */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Development Parameters</h2>
            <div className="overflow-x-auto rounded-xl border">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-kic-grey-light">
                    <th className="text-left p-4 font-semibold">Parameter</th>
                    {opportunity.parameters.some((p) => p.current) && (
                      <th className="text-left p-4 font-semibold">Current</th>
                    )}
                    {opportunity.parameters.some((p) => p.proposed) && (
                      <th className="text-left p-4 font-semibold">Proposed</th>
                    )}
                    {opportunity.parameters.some((p) => p.value) && (
                      <th className="text-left p-4 font-semibold">Value</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {opportunity.parameters.map((param, i) => (
                    <tr key={param.label} className={i % 2 === 0 ? "bg-background" : "bg-kic-grey-light/50"}>
                      <td className="p-4 font-medium">{param.label}</td>
                      {opportunity.parameters.some((p) => p.current) && (
                        <td className="p-4 text-muted-foreground">{param.current ?? "—"}</td>
                      )}
                      {opportunity.parameters.some((p) => p.proposed) && (
                        <td className="p-4 font-semibold text-kic-dark">{param.proposed ?? "—"}</td>
                      )}
                      {opportunity.parameters.some((p) => p.value) && (
                        <td className="p-4 font-semibold">{param.value ?? "—"}</td>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Demand & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">Demand Drivers</h2>
              <ul className="space-y-3">
                {opportunity.demandDrivers.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-kic-green shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="space-y-3">
                {opportunity.features.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-kic-gold shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Documents */}
          {opportunity.documents && opportunity.documents.length > 0 && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Documents</h2>
              <div className="flex flex-wrap gap-3">
                {opportunity.documents.map((doc) => (
                  <Button key={doc.href} variant="outline" asChild>
                    <a href={doc.href} download>
                      <FileText className="mr-2 h-4 w-4" />
                      {doc.label}
                    </a>
                  </Button>
                ))}
                <Button variant="outline" asChild>
                  <a href="/documents/KIC-Investment-Deck-2026.pptx" download>
                    <Download className="mr-2 h-4 w-4" />
                    Full Investment Deck
                  </a>
                </Button>
              </div>
            </section>
          )}

          {/* Inquiry form */}
          <section className="rounded-2xl border bg-card p-8">
            <h2 className="text-2xl font-bold mb-2">Express Your Interest</h2>
            <p className="text-muted-foreground text-sm mb-6">
              Submit an inquiry about {opportunity.title}. Our team will respond within 2 business days.
            </p>
            <InquiryForm
              defaultSubject={opportunity.contactSubject}
              defaultPlot={opportunity.plotId}
            />
          </section>
        </div>
      </main>
      <FooterSection />
    </div>
  );
}
