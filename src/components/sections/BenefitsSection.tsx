import { TrendingUp, Building, Users2, ShieldCheck, ArrowRight, Phone } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import StatsGrid from "@/components/common/StatsGrid";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";

const BenefitsSection = () => {
  
  const benefits = [
    {
      icon: TrendingUp,
      title: "8 to 10% ROI Opportunities",
      description: "Access high-yield investment opportunities with competitive returns backed by Rwanda's growing economy and real estate market.",
      highlight: "Expected Annual Returns"
    },
    {
      icon: Building,
      title: "Exclusive Co ownership Projects",
      description: "Get first access to Vision City 2 properties with flexible co ownership options and expected 12 to 15% appreciation.",
      highlight: "Premium Real Estate"
    },
    {
      icon: Users2,
      title: "Strategic Partnerships",
      description: "Direct access to Bank of Kigali, BK Capital, and other leading financial institutions for future investments.",
      highlight: "Industry Connections"
    },
    {
      icon: ShieldCheck,
      title: "Diaspora Investment Community",
      description: "Join a growing network of African diaspora investors creating wealth and impact across the continent.",
      highlight: "Community & Impact"
    }
  ];

  return (
    <AnimatedSection id="benefits" animation="scale-in">
      <SectionHeader 
        title="Investment Benefits" 
        subtitle="Unlock exclusive investment opportunities and build lasting partnerships in Africa's most promising markets"
      />

      <StaggeredGrid 
        columns={2} 
        className="px-4"
        staggerDelay={250}
      >
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
              Investment Opportunity
            </h3>
            <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Join our Unit Trust Fund and become part of Rwanda's real estate growth story with professional management and transparent reporting.
            </p>
            <StatsGrid 
              stats={[
                { value: "$5M", label: "Target Fund Size" },
                { value: "8 to 10%", label: "Target Annual Returns" },
                { value: "5+", label: "Strategic Properties" }
              ]}
              columns={3}
            />
            
            <div className="mt-12 text-center bg-gradient-to-r from-citisquare-gold/5 to-citisquare-gold-light/5 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Start Building Wealth Today</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Join successful investors who are already earning returns from Rwanda's booming real estate market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-citisquare-gold text-white px-8 py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors text-lg"
              >
                Claim Your Investment Spot
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