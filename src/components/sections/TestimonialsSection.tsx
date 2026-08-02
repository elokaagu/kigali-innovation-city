import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Over the years, Rwanda has grown in resilience with a proven concept as the heart of tourism, Gaming and parks",
      author: "Irene Murewa",
      role: "Industry Leader"
    },
    {
      quote: "Rwanda is opening the door for you. You only need to make sure you pay your taxes, and the door will be open for you.",
      author: "Vinay Palaparthy",
      role: "Investment Expert"
    },
    {
      quote: "Rwanda is considered as one of the countries that offers a flexible tax system suitable for investors in high rental returns.",
      author: "Ronald Kambagambe",
      role: "Financial Advisor"
    },
    {
      quote: "Your energy influences those around you. Be the one who strengthens the field with optimism.",
      author: "Peggy Mccoll",
      role: "Motivational Leader"
    },
    {
      quote: "It's easier to go for when you invest together just like the popular saying.",
      author: "Lehlé Baldé",
      role: "Investment Strategist"
    },
    {
      quote: "Rwanda is a unique country that has zero tolerance to corruption so you can expect your investment to perform a very great deal",
      author: "Mukiza Darius",
      role: "Business Development"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Leaders Are Saying
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Insights from industry leaders on Rwanda's investment landscape
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-citisquare-gold mb-4" />
                <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;