import { MapPin, Shield, Leaf, Building2 } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import FeatureCard from "@/components/common/FeatureCard";
import AnimatedSection from "@/components/common/AnimatedSection";
import StaggeredGrid from "@/components/common/StaggeredGrid";
import { theApex } from "@/data/the-apex";

const icons = [MapPin, Shield, Building2, Leaf];

export default function AlphaThesisSection() {
  return (
    <AnimatedSection id="alpha-thesis" animation="fade-in-blur">
      <SectionHeader
        title="The Alpha Thesis"
        subtitle="The SEZ Tax Alpha: tenant savings on corporate tax, import duties, and registration fees inside the RDB Free Trade Zone directly subsidise premium rent — and lease longevity. That is Citisquare's rental income security."
      />

      <StaggeredGrid columns={2} className="px-4 mb-16" staggerDelay={200}>
        {theApex.alphaThesis.map((item, index) => (
          <FeatureCard
            key={item.title}
            icon={icons[index]}
            title={item.title}
            description={item.description}
            size="lg"
          />
        ))}
      </StaggeredGrid>

      <div className="px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
          Five Revenue Streams
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {theApex.revenueStreams.map((stream) => (
            <div
              key={stream.num}
              className="bg-card rounded-xl p-6 shadow-lg border border-border/50 hover:shadow-xl transition-shadow"
            >
              <span className="text-citisquare-gold font-bold text-sm">{stream.num}</span>
              <h4 className="text-lg font-bold text-foreground mt-2 mb-1">{stream.name}</h4>
              <p className="text-citisquare-gold text-sm font-medium mb-3">{stream.detail}</p>
              <p className="text-muted-foreground text-sm mb-2">{stream.role}</p>
              <p className="text-foreground/70 text-xs">{stream.audience}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
