import { CalendarDays, MapPin, Users, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import StatsGrid from "@/components/common/StatsGrid";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";

const AboutSection = () => {
  
  const highlights = [
    {
      icon: CalendarDays,
      title: "Proven Experience",
      description: "Years of experience in African market development across multiple sectors"
    },
    {
      icon: MapPin,
      title: "Strategic Investments",
      description: "Diversified portfolio across Rwanda's high-growth sectors and regions"
    },
    {
      icon: Users,
      title: "Expert Partners",
      description: "Connect with Bank of Kigali, BK Capital, and industry leaders"
    },
    {
      icon: TrendingUp,
      title: "Strong Returns",
      description: "Target 8 to 10% annual returns through diversified investments"
    }
  ];

  return (
    <AnimatedSection id="about" bgColor="citisquare-grey-light" animation="fade-in-blur">
      <SectionHeader 
        title="About Citisquare" 
        subtitle="Citisquare brings together diaspora investors, financial institutions, and development partners to explore inclusive investment opportunities in Africa's fastest-growing markets."
      />

      <StaggeredGrid 
        columns={4} 
        className="mb-12 sm:mb-16 px-4"
        staggerDelay={200}
      >
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
                Investment Opportunities
              </h3>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Discover exclusive access to Rwanda's most promising investment opportunities across multiple high-growth sectors through our diversified Unit Trust Fund.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-citisquare-gold rounded-full mr-3"></div>
                  <span className="text-foreground">Diversified multi-sector portfolio</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-citisquare-gold rounded-full mr-3"></div>
                  <span className="text-foreground">Real estate, green energy, and agro-processing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-citisquare-gold rounded-full mr-3"></div>
                  <span className="text-foreground">Fixed income securities for stability</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-citisquare-gold rounded-full mr-3"></div>
                  <span className="text-foreground">Professional fund management & transparency</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-citisquare-gold/20 to-citisquare-gold-light/10 rounded-xl p-4 sm:p-6 lg:p-8 text-center">
              <div className="mb-10">
                <StatsGrid 
                  stats={[
                    { value: "8 to 10%", label: "Target annual returns for investors" },
                    { value: "$5M", label: "Target fund size for strategic growth" }
                  ]} 
                  columns={1} 
                />
              </div>
              
              <div className="text-center">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-citisquare-gold text-white px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-all duration-300 transform hover:scale-105 text-base sm:text-lg shadow-lg"
                >
                  Start Investing
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
    </AnimatedSection>
  );
};

export default AboutSection;