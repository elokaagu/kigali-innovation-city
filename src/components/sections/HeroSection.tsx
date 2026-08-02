import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Phone } from "lucide-react";
import heroImage from "@/assets/kigali-skyline.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage.src})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight text-center animate-fade-in-down" style={{ letterSpacing: 'var(--font-display-tracking)', animationDelay: '0.2s', animationFillMode: 'both' }}>
            RiseAfric Unit Trust Fund
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-citisquare-gold mb-3 sm:mb-4 font-medium px-2 text-center animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            Invest in Rwanda's Fastest Growing Asset Classes
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 font-medium px-2 text-center animate-fade-in-up" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
            Expertly managed investments in Africa's rising markets
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4 animate-fade-in-up" style={{ animationDelay: '0.8s', animationFillMode: 'both' }}>
            <a
              href="https://drive.google.com/file/d/1zeD6v9PGZ-85BvbH551YwyaLNzbVgcMY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto group"
            >
              <Button 
                variant="cta"
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group-hover:animate-pulse-glow"
              >
                <Download className="mr-2 h-5 w-5 transition-transform duration-300 group-hover:translate-y-[-2px]" />
                Get Investment Deck
              </Button>
            </a>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScf_0y5IZzTQWGdKB9XqyYRDZr-Rrer3VCXE80Z6wKdK4Mwbg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="outline"
                size="lg" 
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-6 text-lg sm:text-xl border-white/30 text-black hover:bg-white/10 hover:border-white/50 hover:text-white transform transition-all duration-300 hover:scale-105"
              >
                Join our Waitlist
              </Button>
            </a>
          </div>
          
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center transition-all duration-300 hover:border-citisquare-gold/50">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 transition-all duration-300 hover:bg-citisquare-gold/70"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;