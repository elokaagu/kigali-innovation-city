import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import StatsGrid from "@/components/common/StatsGrid";
import AnimatedSection from "@/components/common/AnimatedSection";
import { theApex } from "@/data/the-apex";

export default function InvestmentHighlightsSection() {
  return (
    <AnimatedSection id="investment" bgColor="citisquare-grey-light" animation="scale-in">
      <SectionHeader
        title="Investment at a Glance"
        subtitle="Independent feasibility validation by Knight Frank · Q1 2026"
      />

      <StatsGrid stats={theApex.stats} columns={4} className="mb-12 px-4" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mb-12">
        {[
          { label: "Commercial Asset Value", value: theApex.commercialValue, sub: "Retained & rented" },
          { label: "Green Certification", value: theApex.certification, sub: "Target certification" },
          { label: "Land Size", value: theApex.landSize, sub: theApex.plot },
        ].map((item) => (
          <div key={item.label} className="bg-card rounded-xl p-6 shadow-lg text-center">
            <p className="text-2xl font-bold text-citisquare-gold mb-1">{item.value}</p>
            <p className="font-semibold text-foreground text-sm">{item.label}</p>
            <p className="text-muted-foreground text-xs mt-1">{item.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mx-4 text-center">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Projected Value at Completion: {theApex.projectedValue}
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Knight Frank independent feasibility validation confirms total building value at
          completion. {theApex.structure}.
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-citisquare-gold text-white px-8 py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors text-lg"
        >
          Request Investor Materials
          <ArrowRight className="ml-2 h-5 w-5" />
        </a>
      </div>
    </AnimatedSection>
  );
}
