import { Mail, Phone, Instagram, Linkedin, MapPin } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-citisquare-dark text-white py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-citisquare-gold mb-4">RiseAfric Unit Trust Fund</h3>
            <p className="text-white/80 mb-6 max-w-md leading-relaxed">
              Creating inclusive investment opportunities across Africa through strategic partnerships 
              and innovative financial solutions for diaspora and institutional investors.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/citisquare.africa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-citisquare-gold/20 rounded-lg flex items-center justify-center hover:bg-citisquare-gold/30 transition-colors"
              >
                <Instagram className="h-5 w-5 text-citisquare-gold" />
              </a>
              <a 
                href="https://www.linkedin.com/company/citisquare-africa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-citisquare-gold/20 rounded-lg flex items-center justify-center hover:bg-citisquare-gold/30 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-citisquare-gold" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-citisquare-gold mr-3" />
                <a 
                  href="mailto:uche.nnama@citisquare.africa" 
                  className="text-white/80 hover:text-citisquare-gold transition-colors text-sm"
                >
                  uche.nnama@citisquare.africa
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-citisquare-gold mr-3" />
                <a 
                  href="tel:+250788123456" 
                  className="text-white/80 hover:text-citisquare-gold transition-colors text-sm"
                >
                  +250 788 123 456
                </a>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-citisquare-gold mr-3 mt-0.5" />
                <span className="text-white/80 text-sm">
                  Kigali, Rwanda<br />
                  Vision City 2
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <div className="space-y-3">
              <a href="#about" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                About Citisquare
              </a>
              <a href="#benefits" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                Benefits
              </a>
              <a href="#fund" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                The Fund
              </a>
              <a href="#projects-showcase" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                Investment Projects
              </a>
              <a href="#partners" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                Partners
              </a>
              <a href="/certificates" className="block text-white/80 hover:text-citisquare-gold transition-colors text-sm">
                Certificates & Registrations
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 text-sm mb-4 md:mb-0">
              © 2025 RiseAfric Unit Trust Fund. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-white/60 hover:text-citisquare-gold transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="text-white/60 hover:text-citisquare-gold transition-colors">
                Terms & Conditions
              </a>
              <a href="/regulatory-disclosure" className="text-white/60 hover:text-citisquare-gold transition-colors">
                Regulatory Disclosure
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;