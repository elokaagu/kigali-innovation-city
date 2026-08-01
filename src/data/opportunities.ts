export interface DevelopmentParameter {
  label: string;
  current?: string;
  proposed?: string;
  value?: string;
}

export interface Opportunity {
  slug: string;
  title: string;
  plotId?: string;
  category: string;
  summary: string;
  description: string;
  tags: string[];
  /** Site analysis */
  siteContext?: string[];
  nearbyLandmarks?: string[];
  /** Development parameters */
  parameters: DevelopmentParameter[];
  /** Demand drivers */
  demandDrivers: string[];
  /** Product placement / features */
  features: string[];
  documents?: { label: string; href: string }[];
  contactSubject: string;
}

export const opportunities: Opportunity[] = [
  {
    slug: "nsc2-mixed-use",
    title: "NSC2 – Mid-Scale Hotel & University",
    plotId: "NSC2",
    category: "Mixed Use",
    summary:
      "Development of a mid-scale hotel with integrated university programme to train the next generation of African hotel managers.",
    description:
      "NSC2 is a flagship mixed-use opportunity within Kigali Innovation City, proposing a transformation from neighbourhood shopping center to a commercial mixed-use development combining hospitality, education, and F&B. The site benefits from proximity to the SEZ Freezone, Kigali International Airport, and internal KIC demand from four international universities.",
    tags: ["Hotel & University", "MICE Ready", "F&B Integration", "SEZ Proximity"],
    siteContext: [
      "Located within Kigali Innovation City masterplan, designed by Surbana Jurong",
      "Adjacent to SEZ Freezone with tenants including Volkswagen, African Global Logistics, and Alfa Cables",
      "Near Kigali Conference Center, BK Arena, and Kigali International Airport",
      "Integrated into regional bus network with project bus stop access",
    ],
    nearbyLandmarks: [
      "Kigali Conference Center & Radisson Hotel",
      "BK Arena and Stadium",
      "SEZ Freezone",
      "Kigali International Airport",
    ],
    parameters: [
      { label: "Plot Area", current: "10,700 m²", proposed: "7,000 m²" },
      { label: "Use", current: "Neighbourhood Shopping Center", proposed: "Commercial Mixed Use" },
      { label: "Floor Area Ratio (FAR)", current: "0.7", proposed: "1.3" },
      { label: "Gross Floor Area (GFA)", current: "7,490 m²", proposed: "9,100 m²" },
      { label: "Max Ground Coverage", current: "0.5", proposed: "0.4" },
      { label: "Max Storeys", current: "G+1", proposed: "G+5" },
      { label: "Parking Bays", current: "157", proposed: "TBD" },
    ],
    demandDrivers: [
      "Internal demand from ALU, CMU, AIMS, and UoR student and faculty population",
      "External demand from SEZ Freezone corporate tenants",
      "MICE conference facilities to service universities and surrounding corporates",
      "Integrated F&B serving hotel guests, KIC internal demand, and SEZ visitors",
    ],
    features: [
      "Mid-scale hotel with variety of rooms for short and medium stay guests",
      "University programme for middle management hospitality qualifications",
      "State-of-the-art university classrooms and training rooms",
      "Support offices and conference facilities",
      "Active roof and solar panel areas per urban design guidelines",
      "157+ parking bays with street parking and NMT corridors",
    ],
    documents: [
      { label: "NSC2 Development Concept (PDF)", href: "/documents/NSC2-Development-Concept.pdf" },
    ],
    contactSubject: "NSC2 Mixed-Use Development Inquiry",
  },
  {
    slug: "retail-nsc",
    title: "Retail – Neighbourhood Shopping Center",
    plotId: "NSC1",
    category: "Retail",
    summary:
      "Neighborhood-based retail center with strong food and beverage opportunities, centrally located in KIC.",
    description:
      "A neighbourhood shopping center opportunity integrated into the regional bus network, serving both the internal KIC community and external catchment areas with strong F&B and retail potential.",
    tags: ["Wide Catchment", "F&B Focus", "Bus Network"],
    parameters: [
      { label: "Plot Size", value: "9,178 m²" },
      { label: "Use", value: "Neighbourhood Shopping Center" },
      { label: "Location", value: "Central KIC, regional bus integration" },
    ],
    demandDrivers: [
      "Captive market from students, office workers, and residents",
      "Wide external catchment area",
      "Strong food and beverage demand from university and corporate tenants",
    ],
    features: [
      "Ground floor retail with F&B opportunities",
      "Integration with regional bus network",
      "Development incentives available",
    ],
    contactSubject: "Retail Investment Inquiry",
  },
  {
    slug: "international-hotel",
    title: "International Hotel",
    plotId: "4*H",
    category: "Hospitality",
    summary:
      "200-key international hotel centrally located in the Prime Economic Zone to service KIC and Freezone tenants.",
    description:
      "Hotel investment opportunity with captive internal demand from international universities and external demand from the SEZ Freezone and Kigali's growing MICE sector.",
    tags: ["200 Keys", "MICE Ready", "Captive Market"],
    parameters: [
      { label: "Plot Size", value: "6,711 m²" },
      { label: "Keys", value: "200" },
      { label: "GLA", value: "5,537 m²" },
      { label: "Location", value: "Prime Economic Zone, central KIC" },
    ],
    demandDrivers: [
      "Internal demand from four international universities",
      "SEZ Freezone corporate and visitor demand",
      "Growing MICE sector in Kigali (#2 in Africa)",
    ],
    features: [
      "Variety of room types for short and medium stay",
      "Conference and MICE facilities",
      "Integrated F&B for hotel and external demand",
      "Development incentives available",
    ],
    contactSubject: "International Hotel Investment Inquiry",
  },
  {
    slug: "student-accommodation",
    title: "Student Accommodation",
    plotId: "SA1",
    category: "Residential",
    summary:
      "4,500-bed student accommodation development with independent development fund and external operator.",
    description:
      "Large-scale student housing opportunity serving ALU, CMU, AIMS, and UoR with a captive tenant pipeline and government-backed development support.",
    tags: ["4,500 Beds", "Captive Market", "Independent Fund"],
    parameters: [
      { label: "Total Capacity", value: "4,500 beds" },
      { label: "Structure", value: "Independent Development Fund" },
      { label: "Operator", value: "External Operator & Developer" },
      { label: "Plots", value: "SA1, SA2, SA3 and additional sites" },
    ],
    demandDrivers: [
      "4,000+ students enrolled at ALU alone",
      "CMU, AIMS, and UoR expanding enrolment",
      "59 nationalities represented at ALU",
    ],
    features: [
      "Multiple plot options across KIC phases",
      "External operator partnership model",
      "Development incentives and infrastructure support",
    ],
    contactSubject: "Student Accommodation Inquiry",
  },
  {
    slug: "data-center",
    title: "Data Center",
    plotId: "DC1",
    category: "Technology",
    summary:
      "Regional data center hub leveraging Kigali's strategic gateway position for East African data distribution.",
    description:
      "Rwanda's data centre market is rapidly expanding, transitioning from nascent to a regional digital hub with strong government data localization laws and financial sector security requirements.",
    tags: ["Regional Hub", "408 MW Power", "Low Disaster Risk"],
    parameters: [
      { label: "Market Phase", value: "Rapid expansion (2026)" },
      { label: "Location", value: "Kigali – Phase 3 & 4" },
      { label: "Power Capacity", value: "~408.9 MW installed" },
      { label: "Risk Profile", value: "Moderate – low natural disaster risk" },
    ],
    demandDrivers: [
      "Government data localization laws",
      "Financial sector security requirements (KIFC)",
      "Regional connectivity to DRC, Uganda, and Burundi",
    ],
    features: [
      "Strategic gateway for data distribution across East Africa",
      "Hydropower-dominated energy mix (43-48%)",
      "100% electricity access target by 2030",
    ],
    contactSubject: "Data Center Investment Inquiry",
  },
  {
    slug: "commercial-office",
    title: "Commercial Office",
    plotId: "GA1",
    category: "Commercial",
    summary:
      "Prime office spaces in Kigali's evolving regional financial hub, supported by KIFC demand.",
    description:
      "Commercial office development opportunities with integrated ground floor retail, serving Kigali International Financial Centre tenants and international university research collaborations.",
    tags: ["KIFC Demand", "High Yields", "Integrated Retail"],
    parameters: [
      { label: "Plot Options", value: "GA1, GA2, GA3 and others" },
      { label: "Certification", value: "LEED Gold target (reference: Kofisi)" },
      { label: "Retail", value: "Integrated ground floor retail" },
    ],
    demandDrivers: [
      "KIFC positioning Kigali as premier financial services hub",
      "Highest rental yields in the region",
      "University research internship collaboration opportunities",
    ],
    features: [
      "Variety of site sizes available",
      "A-grade commercial specifications",
      "Ground floor retail integration",
    ],
    contactSubject: "Commercial Office Investment Inquiry",
  },
  {
    slug: "residential",
    title: "Residential Development",
    plotId: "A1",
    category: "Residential",
    summary:
      "Apartments, townhomes, and villas addressing Kigali's severe housing shortage.",
    description:
      "Residential development across multiple plot types — high-end villas, townhouses, and apartments — supported by rapid urbanization and government PPP frameworks.",
    tags: ["High Demand", "PPP Support", "Multiple Typologies"],
    parameters: [
      { label: "Demand", value: "310,000 units needed by 2032" },
      { label: "Urbanization", value: "18% → 35% by 2050" },
      { label: "Typologies", value: "Villas, townhomes, apartments" },
    ],
    demandDrivers: [
      "Growing middle class and rapid urbanization",
      "Shift from single-family to high-density housing",
      "Government land provision and infrastructure support",
    ],
    features: [
      "High-end villas (V plots)",
      "Townhouses and multiplexes",
      "High-rise apartments (A plots)",
      "IFC-backed investment support",
    ],
    contactSubject: "Residential Development Inquiry",
  },
  {
    slug: "vaccine-pharma-research",
    title: "Vaccine & Pharmaceutical Research",
    plotId: "IC1",
    category: "Research",
    summary:
      "Clinical research and pharmaceutical manufacturing hub with global partner engagement.",
    description:
      "Position Rwanda as a clinical research hub with engagements from Africa Clinical Research Network, Gates Foundation, Bayer Pharmaceuticals, and Minapharm.",
    tags: ["Tax Incentives", "FDA Support", "Global Partners"],
    parameters: [
      { label: "Focus", value: "Clinical research & local production" },
      { label: "Regulatory", value: "Rwanda FDA + National Pharmacy Policy" },
      { label: "Platform", value: "RDB Digital Platform for incentives" },
    ],
    demandDrivers: [
      "National pharmacy policy encouraging R&D",
      "Tax incentives and streamlined drug registration",
      "Visa facilitation for international researchers",
    ],
    features: [
      "Early-stage to late-stage research facilities",
      "Continent and international certification pathways",
      "Cooper Pharma as operational anchor tenant",
    ],
    contactSubject: "Vaccine & Pharma Research Inquiry",
  },
];

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return opportunities.find((o) => o.slug === slug);
}

export function getOpportunitySlugs(): string[] {
  return opportunities.map((o) => o.slug);
}
