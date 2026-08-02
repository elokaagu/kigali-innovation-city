import { Building2, Layers, Shield, Users, ArrowRight } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";
import { COMPANY_BIO, COMPANY_NAME } from "@/data/company";

const AboutSection = () => {
  const highlights = [
    {
      icon: Building2,
      title: "Project Origination",
      description:
        "Identifying high-potential real estate opportunities across the continent",
    },
    {
      icon: Layers,
      title: "Structuring",
      description:
        "Packaging opportunities into sound, legally structured, investable vehicles",
    },
    {
      icon: Users,
      title: "Development",
      description:
        "Guiding projects through to delivery with institutional-grade execution",
    },
    {
      icon: Shield,
      title: "Good Governance",
      description:
        "Transparent processes and governance at every stage of the investment lifecycle",
    },
  ];

  return (
    <AnimatedSection id="about" bgColor="citisquare-grey-light" animation="fade-in-blur">
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

      <div className="bg-card rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-lg mx-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
              What We Do
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
              From origination to delivery, we partner with property investors,
              institutions, and development finance partners to unlock bankable African
              real estate — backed by Nigeria&apos;s real estate and financial services
              ecosystem.
            </p>
            <div className="space-y-3">
              {[
                "Legally structured, high-return real estate vehicles",
                "Project origination across Nigeria and Rwanda",
                "Institutional and retail co-investment pathways",
                "Governance-led development from concept to delivery",
              ].map((item) => (
                <div key={item} className="flex items-center">
                  <div className="w-2 h-2 bg-citisquare-gold rounded-full mr-3 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-citisquare-gold/20 to-citisquare-gold-light/10 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">
              Building Africa&apos;s property investment infrastructure
            </p>
            <p className="text-muted-foreground text-sm mb-8">
              For individual investors, institutions, and development partners alike.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-citisquare-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg"
            >
              Partner With Us
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
