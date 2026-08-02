import { TrendingUp, Building, Users2, ShieldCheck, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import StatsGrid from "@/components/common/StatsGrid";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "High-Return Opportunities",
      description:
        "Access legally structured, capital-growth real estate opportunities backed by rigorous origination and governance.",
      highlight: "Capital Growth",
    },
    {
      icon: Building,
      title: "Exclusive Co-Ownership Projects",
      description:
        "First access to flagship developments including Vision City 2 and Kigali Innovation City with flexible co-investment structures.",
      highlight: "Premium Real Estate",
    },
    {
      icon: Users2,
      title: "Strategic Partnerships",
      description:
        "Strong relationships across Nigeria's real estate and financial services ecosystem, connecting investors to bankable projects.",
      highlight: "Industry Connections",
    },
    {
      icon: ShieldCheck,
      title: "Governance-Led Delivery",
      description:
        "Transparent processes and good governance at every stage — from origination and structuring through to project delivery.",
      highlight: "Investor Protection",
    },
  ];

  return (
    <AnimatedSection id="benefits" animation="scale-in">
      <SectionHeader
        title="Investment Benefits"
        subtitle="Unlock structured real estate opportunities and build lasting partnerships in Africa's most promising markets"
      />

      <StaggeredGrid columns={2} className="px-4" staggerDelay={250}>
        {benefits.map((benefit, index) => (
          <FeatureCard
            key={index}
            icon={benefit.icon}
            title={benefit.title}
            description={benefit.description}
            highlight={benefit.highlight}
            size="lg"
          />
        ))}
      </StaggeredGrid>

      <div className="mt-12 sm:mt-16 text-center px-4">
        <div className="bg-gradient-to-r from-citisquare-gold/10 via-citisquare-gold-light/10 to-citisquare-gold/10 rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
            Partner With Us
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
            Join investors and institutions building wealth through structured African real estate —
            from project origination to delivery.
          </p>
          <StatsGrid
            stats={[
              { value: "2", label: "Flagship Projects" },
              { value: "3", label: "Core Services" },
              { value: "2", label: "Markets (NG & RW)" },
            ]}
            columns={3}
          />

          <div className="mt-12 text-center bg-gradient-to-r from-citisquare-gold/5 to-citisquare-gold-light/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Start Your Investment Journey
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Download our investment deck or speak with our team about co-investment opportunities
              across our project pipeline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-citisquare-gold text-white px-8 py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors text-lg"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default BenefitsSection;
