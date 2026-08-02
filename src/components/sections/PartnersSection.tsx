import { Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PartnersSection = () => {
  const pressHighlights = [
    {
      outlet: "This Day Live",
      headline:
        "Citisquare Africa Partners Rwanda Chamber of Tourism to Promote Economic and Investment Inclusion",
      quote:
        "In a convergence of innovation, finance, and regional development, Citisquare Africa successfully hosted a virtual conference centered on legally structured co ownership investment models.",
      link: "https://www.thisdaylive.com/2025/08/18/citisquare-africa-partners-rwanda-chamber-of-tourism-to-promote-economic-and-investment-inclusion/",
    },
    {
      outlet: "The Guardian Nigeria",
      headline: "Summit Seeks to Promote Financial Wellness",
      quote:
        "The programme has been designed to promote financial wellness through a holistic approach, targeting professionals prioritising well being and overall prosperity.",
      link: "https://guardian.ng/appointments/summit-seeks-to-promote-financial-wellness/",
    },
    {
      outlet: "Punch Newspapers",
      headline: "Citisquare Africa Uses Tech to Tackle Burnout",
      quote:
        "Citisquare Africa is harnessing technology to tackle burnout among professionals, providing tools for combating workplace stress and enhancing financial stability.",
      link: "https://punchng.com/citisquare-africa-uses-tech-to-tackle-burnout/",
    },
  ];

  return (
    <section id="partners" className="py-12 sm:py-16 lg:py-20 bg-citisquare-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8"
            style={{ letterSpacing: "var(--font-display-tracking)" }}
          >
            Media Coverage
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Featured in regional media for our work in structured real estate investment and
            economic inclusion across Africa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pressHighlights.map((article, index) => (
            <a
              key={index}
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full"
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer h-full">
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div className="space-y-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-citisquare-gold text-lg">
                        {article.outlet}
                      </span>
                      <ExternalLink className="h-5 w-5 text-citisquare-gold" />
                    </div>
                    <h4 className="font-bold text-foreground mb-3 text-xl leading-tight">
                      {article.headline}
                    </h4>
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
    </section>
  );
};

export default PartnersSection;
