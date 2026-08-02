"use client";

import { Users, MapPin, Lightbulb, Wifi, Building2, Home, TreePine, Zap, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import visionCityImage from "@/assets/vision-city-2-interior.png";
import kigaliInnovationCityImage from "@/assets/kigali-innovation-city.jpeg";

const ProjectsShowcaseSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  const visionCityFeatures = [
    {
      icon: Home,
      title: "Smart Living",
      description: "Modern residences with integrated technology"
    },
    {
      icon: TreePine,
      title: "Wellness Focus", 
      description: "Green spaces and health-centered design"
    },
    {
      icon: Zap,
      title: "Sustainable Energy",
      description: "Solar power and eco-friendly systems"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "6km from airport, 3km from CBD"
    }
  ];

  const kicFeatures = [
    {
      icon: Lightbulb,
      title: "Innovation Hub",
      description: "State-of-the-art facilities for startups and tech companies"
    },
    {
      icon: Wifi,
      title: "Advanced Infrastructure",
      description: "High-speed connectivity and smart building systems"
    },
    {
      icon: Users,
      title: "Collaborative Spaces",
      description: "Co-working areas and networking opportunities"
    },
    {
      icon: Building2,
      title: "Strategic Location",
      description: "Central position in Rwanda's emerging tech corridor"
    }
  ];

  const propertyTypes = [
    { type: "Single Residences", price: "From $85,000", features: "2-3 bedrooms, modern finishes" },
    { type: "Townhouses", price: "From $120,000", features: "3-4 bedrooms, private gardens" },
    { type: "Luxury Villas", price: "From $200,000", features: "4+ bedrooms, premium amenities" }
  ];

  const kicStats = [
    { value: "50,000+", label: "Jobs Created" },
    { value: "$150M", label: "Annual ICT Exports" },
    { value: "2,600", label: "Annual Graduates" }
  ];

  return (
    <section 
      ref={ref}
      id="projects-showcase" 
      className={`py-12 sm:py-16 lg:py-20 bg-background transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8" style={{ letterSpacing: 'var(--font-display-tracking)' }}>
            Featured Investment Projects
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover two flagship opportunities representing the future of Rwanda's real estate and technology sectors, 
            offering exceptional returns and long-term growth potential.
          </p>
        </div>

        {/* Vision City 2 Section */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="inline-flex items-center bg-citisquare-gold/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-citisquare-gold">Project 1</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Vision City 2 by RSSB
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Rwanda's most advanced residential development, combining sustainable design, smart technology, 
                and wellness-focused amenities in Kigali's fastest-growing district.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {visionCityFeatures.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-citisquare-gold/10 rounded-lg flex items-center justify-center">
                      <feature.icon className="h-5 w-5 text-citisquare-gold" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">{feature.title}</div>
                      <div className="text-muted-foreground text-xs">{feature.description}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-citisquare-gold/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-citisquare-gold mb-2">12 to 15%</div>
                <div className="text-foreground font-semibold mb-1">Expected Annual Appreciation</div>
                <div className="text-muted-foreground text-sm">Based on Kigali's real estate growth trends and infrastructure development</div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={visionCityImage.src} 
                  alt="Vision City 2 Development" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Property Types */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {propertyTypes.map((property, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <h4 className="text-lg font-bold text-foreground mb-2">{property.type}</h4>
                  <div className="text-2xl font-bold text-citisquare-gold mb-3">{property.price}</div>
                  <p className="text-muted-foreground text-sm mb-4">{property.features}</p>
                  <div className="space-y-2">
                    <div className="text-xs text-muted-foreground">✓ Co ownership options available</div>
                    <div className="text-xs text-muted-foreground">✓ Flexible payment plans</div>
                    <div className="text-xs text-muted-foreground">✓ Property management included</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Kigali Innovation City Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <div className="inline-flex items-center bg-citisquare-gold/10 rounded-full px-4 py-2 mb-4">
                <span className="text-sm font-semibold text-citisquare-gold">Project 2</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Kigali Innovation City by Africa50
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                A transformative 61-hectare development designed to establish Kigali as a leading African center 
                for technological innovation and education.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                {kicFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-citisquare-gold/10 flex items-center justify-center">
                      <feature.icon className="w-5 h-5 text-citisquare-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-citisquare-gold/10 rounded-xl p-6">
                <div className="text-2xl font-bold text-citisquare-gold mb-2">18 to 22%</div>
                <div className="text-foreground font-semibold mb-1">Expected Annual Returns</div>
                <div className="text-muted-foreground text-sm">Based on Rwanda's tech sector growth and innovation hub performance</div>
              </div>
            </div>

            <div className="lg:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={kigaliInnovationCityImage.src}
                  alt="Kigali Innovation City aerial view showing modern facilities"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* KIC Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {kicStats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-citisquare-gold/10 rounded-lg">
                <div className="text-3xl font-bold text-citisquare-gold mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Combined Investment Summary */}
        <div className="text-center bg-gradient-to-r from-citisquare-gold/10 via-citisquare-gold-light/10 to-citisquare-gold/10 rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Invest in Rwanda's Future?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-3xl mx-auto">
            Secure your position in two of Africa's most promising development projects. Limited investment slots available.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8">
            <div className="bg-white/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-citisquare-gold mb-2">Vision City 2</div>
              <div className="text-muted-foreground mb-2">Premium Residential Development</div>
              <div className="text-sm text-citisquare-gold font-semibold">12 to 15% Expected Returns</div>
            </div>
            <div className="bg-white/50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-citisquare-gold mb-2">Innovation City</div>
              <div className="text-muted-foreground mb-2">Technology & Education Hub</div>
              <div className="text-sm text-citisquare-gold font-semibold">18 to 22% Expected Returns</div>
            </div>
          </div>
          
          <div className="flex justify-center items-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-citisquare-gold text-white px-8 py-4 rounded-md font-semibold hover:bg-citisquare-gold/90 transition-colors text-lg"
            >
              Reserve Your Investment Spot
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcaseSection;