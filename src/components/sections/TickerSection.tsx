import { theApex } from "@/data/the-apex";

const TickerSection = () => {
  const tickerItems = [
    `The Apex · ${theApex.tagline}`,
    `${theApex.totalCost} Total Project Cost · ${theApex.debtEquity} Debt/Equity`,
    `${theApex.projectedValue} Knight Frank Valuation`,
    "Kigali Tech Tower · 6-Storey Mixed-Use Innovation Hub",
    "RDB Free Trade Zone · KIC Main Entrance",
    "EDGE/LEED Green Certification Pathway",
    "5 Revenue Streams · SPV · REIT-Ready",
  ];

  return (
    <div
      className="bg-gray-900 text-white py-4 overflow-hidden relative animate-fade-in"
      style={{ animationDelay: "1s", animationFillMode: "both" }}
    >
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10" />

      <div className="relative">
        <div className="animate-scroll-left whitespace-nowrap">
          <div className="inline-flex space-x-12">
            {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
              <span
                key={index}
                className="text-sm font-medium transition-colors duration-300 hover:text-citisquare-gold"
              >
                <span className="inline-flex items-center">
                  <span className="w-2 h-2 bg-citisquare-gold rounded-full mr-3 animate-pulse" />
                  {item}
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 opacity-5 bg-gradient-to-r from-citisquare-gold/10 via-transparent to-citisquare-gold/10" />
    </div>
  );
};

export default TickerSection;
