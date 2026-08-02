import SectionHeader from "@/components/common/SectionHeader";
import AnimatedSection from "@/components/common/AnimatedSection";
import { theApex } from "@/data/the-apex";

export default function MarketContextSection() {
  return (
    <AnimatedSection id="why-rwanda" bgColor="citisquare-grey-light" animation="fade-in-up">
      <SectionHeader
        title="Market Context — Why Rwanda, Why Now"
        subtitle="This is not speculation on an emerging market — it is the strategic acquisition of a monopoly-like position within Africa's most disciplined economic zone."
      />

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4 mb-12">
        {theApex.marketStats.map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-5 shadow-md text-center">
            <p className="text-2xl md:text-3xl font-bold text-citisquare-gold mb-2">{stat.value}</p>
            <p className="text-xs text-muted-foreground leading-tight">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {[
          {
            title: "Rwanda Policy Commitment",
            body: "NST2 (2024–2029) targets 9.3% GDP growth, raising private investment to 21.5% of GDP and creating over 1.25 million jobs. Capital is already deployed behind this — it is not aspirational.",
          },
          {
            title: "KIC Scale & Mandate",
            body: "KIC alone is projected to create 50,000 jobs, generate $150M in annual ICT exports, and attract $300M FDI. Africa50 commits $400M — focused primarily on real estate, including $315M in commercial complexes.",
          },
          {
            title: "Rental Yield Premium",
            body: "Kigali delivers 9.3% residential, 10.8% office, and 12.3% retail yields — outperforming most comparable Sub-Saharan African markets. Rwanda ranks top in Africa for ease of doing business.",
          },
        ].map((block) => (
          <div key={block.title} className="bg-card rounded-xl p-6 shadow-lg">
            <h4 className="font-bold text-foreground mb-3">{block.title}</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">{block.body}</p>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
