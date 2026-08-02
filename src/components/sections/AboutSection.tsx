import { Building2, Layers, Shield, Globe2, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";
import { COMPANY_BIO, COMPANY_NAME } from "@/data/company";
import { theApex } from "@/data/the-apex";

export default function AboutSection() {
  const highlights = [
    {
      icon: Building2,
      title: "Project Origination",
      description: "Identifying high-potential real estate at the intersection of sovereign policy and innovation ecosystems",
    },
    {
      icon: Layers,
      title: "SPV Structuring",
      description: "End-to-end development from concept to capital raise — REIT-ready, ESG-linked vehicles",
    },
    {
      icon: Shield,
      title: "Knight Frank Validated",
      description: theApex.credentials[0].value,
    },
    {
      icon: Globe2,
      title: "Multi-Jurisdiction",
      description: theApex.credentials[3].value,
    },
  ];

  return (
    <AnimatedSection id="about" bgColor="background" animation="fade-in-blur">
      <SectionHeader title={`About ${COMPANY_NAME}`} />

      <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4 mb-12 sm:mb-16 text-center">
        {COMPANY_BIO}
      </p>

      <StaggeredGrid columns={4} className="mb-12 sm:mb-16 px-4" staggerDelay={200}>
        {highlights.map((highlight, index) => (
          <FeatureCard
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
            size="md"
          />
        ))}
      </StaggeredGrid>

      <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg mx-4 text-center">
        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4">
          Flagship Transaction — {theApex.name}
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
          {theApex.totalCost} mixed-use GreenTech Tower at the main entrance of Kigali Innovation City.
          Acquire a structurally fortified, monopoly-like position within a sovereign-backed innovation
          ecosystem, and build a diversified cash flow machine around it.
        </p>
        <a
          href="#the-apex"
          className="inline-flex items-center bg-citisquare-gold text-white px-6 py-3 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors"
        >
          Explore The Apex
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </AnimatedSection>
  );
}
