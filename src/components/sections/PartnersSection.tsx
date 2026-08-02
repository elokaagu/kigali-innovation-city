import { Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const partners = [
    { name: "Bank of Kigali", role: "Custodian Bank" },
    { name: "BK Capital", role: "Fund Manager" },
    { name: "BPR Bank", role: "Trustee" }
  ];

  const pressHighlights = [
    {
      outlet: "This Day Live",
      headline: "Citisquare Africa Partners Rwanda Chamber of Tourism to Promote Economic and Investment Inclusion",
      quote: "In a convergence of innovation, finance, and regional development, Citisquare Africa successfully hosted a virtual conference centered on legally structured co ownership investment models.",
      link: "https://www.thisdaylive.com/2025/08/18/citisquare-africa-partners-rwanda-chamber-of-tourism-to-promote-economic-and-investment-inclusion/",
      image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      outlet: "The Guardian Nigeria",
      headline: "Summit Seeks to Promote Financial Wellness",
      quote: "The programme has been designed to promote financial wellness through a holistic approach, targeting professionals prioritising well being and overall prosperity.",
      link: "https://guardian.ng/appointments/summit-seeks-to-promote-financial-wellness/",
      image: "https://images.unsplash.com/photo-1567552255286-edfe2bb088b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    },
    {
      outlet: "Punch Newspapers",
      headline: "Citisquare Africa Uses Tech to Tackle Burnout",
      quote: "Citisquare Africa is harnessing technology to tackle burnout among professionals, providing tools for combating workplace stress and enhancing financial stability.",
      link: "https://punchng.com/citisquare-africa-uses-tech-to-tackle-burnout/",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
    }
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 lg:py-20 bg-citisquare-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8" style={{ letterSpacing: 'var(--font-display-tracking)' }}>
            Our Partners & Coverage
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Backed by leading African financial institutions and featured in regional media
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Partners</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <Card key={index} className="text-center border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <h4 className="font-bold text-foreground text-sm mb-1">{partner.name}</h4>
                  <p className="text-muted-foreground text-xs">{partner.role}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">Media Coverage</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pressHighlights.map((article, index) => (
              <a key={index} href={article.link} target="_blank" rel="noopener noreferrer" className="block h-full">
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                  <CardContent className="p-8 h-full flex flex-col justify-between">
                    <div className="space-y-4 flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-citisquare-gold text-lg">{article.outlet}</span>
                        <ExternalLink className="h-5 w-5 text-citisquare-gold" />
                      </div>
                      <h4 className="font-bold text-foreground mb-3 text-xl leading-tight">{article.headline}</h4>
                      <div className="relative">
                        <Quote className="h-6 w-6 text-citisquare-gold/60 absolute -top-2 -left-2" />
                        <p className="text-muted-foreground text-base leading-relaxed pl-6 italic">
                          {article.quote}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-4">Institutional Backing</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our fund benefits from the expertise and credibility of Rwanda's most trusted financial institutions, 
              ensuring the highest standards of governance and regulatory compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-citisquare-gold mb-2">25+ Years</div>
                <div className="text-sm text-muted-foreground">Combined institutional experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-citisquare-gold mb-2">AAA</div>
                <div className="text-sm text-muted-foreground">Credit rating (Bank of Kigali)</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-citisquare-gold mb-2">$2B+</div>
                <div className="text-sm text-muted-foreground">Assets under management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;