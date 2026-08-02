import { TrendingUp, Shield, MapPin, Award, Building2, Users, Handshake, Leaf, ArrowRight, MessageCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import StatsGrid from "@/components/common/StatsGrid";
import AnimatedSection from "@/components/common/AnimatedSection";

const WhyKigaliSection = () => {
  
  const highlights = [
    {
      icon: TrendingUp,
      title: "Robust Economic Growth",
      description: "Consistent average GDP growth rate of 7.15% - one of the highest in Africa with sound fiscal management and low debt levels.",
      stat: "7.15%",
      statLabel: "GDP Growth"
    },
    {
      icon: Award,
      title: "Global Recognition",
      description: "Most improved nation in human development indicators by UNDP. Ranked 2nd safest country globally for female solo travelers.",
      stat: "#2",
      statLabel: "Safest Country"
    },
    {
      icon: MapPin,
      title: "Thriving Tourism Sector",
      description: "Over 1.3 million tourists and $647 million in tourism revenue recorded. Enhanced by the largest airport in the region.",
      stat: "$647M",
      statLabel: "Tourism Revenue"
    },
    {
      icon: Building2,
      title: "Real Estate Appreciation",
      description: "Annual property growth rates between 12 to 15%, signaling strong upward trends in real estate investments.",
      stat: "12 to 15%",
      statLabel: "Annual Growth"
    },
  ];

  const keyStats = [
    { value: "1.3M+", label: "Annual Tourists" },
    { value: "$647M", label: "Tourism Revenue" },
    { value: "7.15%", label: "GDP Growth Rate" },
    { value: "#1", label: "Business Climate in Africa" }
  ];

  return (
    <AnimatedSection id="why-kigali">
      <SectionHeader 
        title="Why Kigali, Rwanda?" 
        subtitle="Discover why Kigali stands out as Africa's premier investment destination with exceptional growth, stability, and opportunity for sustainable returns."
      />
      
      <div className="max-w-4xl mx-auto mb-12">
        <StatsGrid 
          stats={keyStats} 
          columns={4} 
          className="bg-citisquare-gold/10 rounded-lg p-4"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {highlights.map((highlight, index) => (
          <FeatureCard
            key={index}
            icon={highlight.icon}
            title={highlight.title}
            description={highlight.description}
            stat={highlight.stat}
            statLabel={highlight.statLabel}
            size="lg"
          />
        ))}
      </div>


        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-citisquare-gold/10 via-citisquare-gold-light/10 to-citisquare-gold/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Don't Miss Rwanda's Growth Opportunity
          </h3>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Rwanda's economy is booming and property values are rising fast. Smart investors are positioning themselves now 
            before prices climb even higher.
          </p>
          
          <div className="flex justify-center items-center mb-6">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-citisquare-gold text-white px-8 py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors text-lg"
            >
              Secure Your Position Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <StatsGrid 
            stats={[
              { value: "2030", label: "Vision Goals" },
              { value: "ESG", label: "Aligned Investments" },
              { value: "Sustainable", label: "Community Impact" }
            ]}
            columns={3}
          />
        </div>
    </AnimatedSection>
  );
};

export default WhyKigaliSection;