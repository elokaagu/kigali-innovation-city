const TickerSection = () => {
  const tickerItems = [
    "Fund Launch - Limited Time",
    "Vision City 2 - Kigali, Rwanda", 
    "$5M Target Fund Size",
    "Premium Real Estate Opportunities",
    "Join Africa's Diaspora Investors",
    "8 to 10% Target Annual Returns",
    "Direct Institutional Partnerships"
  ];

  return (
    <div className="bg-gray-900 text-white py-4 overflow-hidden relative animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'both' }}>
      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />
      
      {/* Scrolling Ticker */}
      <div className="relative">
        <div className="animate-scroll-left whitespace-nowrap">
          <div className="inline-flex space-x-12">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
              <span key={index} className="text-sm font-medium transition-colors duration-300 hover:text-citisquare-gold">
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-citisquare-gold rounded-full mr-3 animate-pulse" />
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>
      
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-citisquare-gold/10 via-transparent to-citisquare-gold/10" />
    </div>
  );
};

export default TickerSection;