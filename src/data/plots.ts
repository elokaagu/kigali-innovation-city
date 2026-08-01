export type PlotCategory =
  | "university"
  | "residential"
  | "commercial"
  | "retail"
  | "hotel"
  | "industrial"
  | "research"
  | "open-space"
  | "infrastructure"
  | "mixed-use";

export interface Plot {
  id: string;
  label: string;
  category: PlotCategory;
  landUse: string;
  phase: number;
  /** SVG map position (viewBox 0 0 1000 700) */
  x: number;
  y: number;
  width: number;
  height: number;
  area?: string;
  opportunitySlug?: string;
  status: "available" | "under-development" | "operational" | "allocated";
}

export const plotCategoryColors: Record<PlotCategory, string> = {
  university: "#8634D8",
  residential: "#05F28C",
  commercial: "#F5D424",
  retail: "#FF6B35",
  hotel: "#4ECDC4",
  industrial: "#95A5A6",
  research: "#E74C3C",
  "open-space": "#27AE60",
  infrastructure: "#7F8C8D",
  "mixed-use": "#3498DB",
};

export const plotCategoryLabels: Record<PlotCategory, string> = {
  university: "University",
  residential: "Residential",
  commercial: "Commercial Office",
  retail: "Retail",
  hotel: "Hotel",
  industrial: "Light Industrial",
  research: "Research & Pharma",
  "open-space": "Open Space",
  infrastructure: "Infrastructure",
  "mixed-use": "Mixed Use",
};

/** Key plots from KIC CAD masterplan — positions approximate for interactive map */
export const plots: Plot[] = [
  // Universities
  { id: "ALU", label: "ALU", category: "university", landUse: "African Leadership University", phase: 1, x: 120, y: 80, width: 90, height: 70, status: "operational" },
  { id: "CMU", label: "CMU", category: "university", landUse: "Carnegie Mellon University Africa", phase: 1, x: 220, y: 420, width: 80, height: 65, status: "operational" },
  { id: "AIMS", label: "AIMS", category: "university", landUse: "African Institute for Mathematical Sciences", phase: 2, x: 680, y: 200, width: 85, height: 70, status: "under-development" },
  { id: "UoR", label: "UoR", category: "university", landUse: "University of Rwanda – Biomedical Engineering", phase: 1, x: 300, y: 430, width: 75, height: 55, status: "operational" },

  // Research & Industrial
  { id: "COOPER", label: "Cooper Pharma", category: "research", landUse: "Pharmaceutical Manufacturing", phase: 1, x: 400, y: 440, width: 70, height: 50, status: "operational" },
  { id: "IC1", label: "IC1", category: "research", landUse: "Incubator", phase: 2, x: 520, y: 380, width: 55, height: 45, status: "available", opportunitySlug: "vaccine-pharma-research" },
  { id: "IC2", label: "IC2", category: "research", landUse: "Innovation Center", phase: 2, x: 580, y: 350, width: 55, height: 45, status: "available" },

  // Retail
  { id: "NSC1", label: "NSC1", category: "retail", landUse: "Neighbourhood Shopping Center", phase: 2, x: 500, y: 300, width: 65, height: 50, status: "available", opportunitySlug: "retail-nsc" },
  { id: "NSC2", label: "NSC2", category: "mixed-use", landUse: "Commercial Mixed Use (Hotel & University)", phase: 2, x: 560, y: 280, width: 80, height: 55, area: "10,700 m²", status: "available", opportunitySlug: "nsc2-mixed-use" },

  // Hotels
  { id: "3*H", label: "3★ Hotel", category: "hotel", landUse: "3-Star Business Hotel", phase: 2, x: 620, y: 320, width: 60, height: 45, status: "available", opportunitySlug: "international-hotel" },
  { id: "4*H", label: "4★ Hotel", category: "hotel", landUse: "4-Star Business Hotel", phase: 3, x: 80, y: 60, width: 55, height: 40, status: "available", opportunitySlug: "international-hotel" },

  // Commercial
  { id: "KOFISI", label: "Kofisi", category: "commercial", landUse: "A-Grade Commercial Office (LEED Gold)", phase: 1, x: 350, y: 350, width: 70, height: 55, status: "operational" },
  { id: "GA1", label: "GA1", category: "commercial", landUse: "Commercial Office", phase: 2, x: 450, y: 200, width: 55, height: 45, status: "available", opportunitySlug: "commercial-office" },
  { id: "GA2", label: "GA2", category: "commercial", landUse: "Commercial Office", phase: 2, x: 510, y: 180, width: 55, height: 45, status: "available", opportunitySlug: "commercial-office" },
  { id: "GA3", label: "GA3", category: "commercial", landUse: "Offices with Retail", phase: 3, x: 700, y: 350, width: 60, height: 50, status: "available", opportunitySlug: "commercial-office" },

  // Residential
  { id: "SA1", label: "SA1", category: "residential", landUse: "Student Accommodation", phase: 2, x: 180, y: 200, width: 65, height: 50, status: "available", opportunitySlug: "student-accommodation" },
  { id: "SA2", label: "SA2", category: "residential", landUse: "Student Accommodation", phase: 2, x: 250, y: 180, width: 65, height: 50, status: "available", opportunitySlug: "student-accommodation" },
  { id: "SA3", label: "SA3", category: "residential", landUse: "Student Accommodation", phase: 3, x: 320, y: 160, width: 65, height: 50, status: "available", opportunitySlug: "student-accommodation" },
  { id: "V1", label: "V1", category: "residential", landUse: "High-End Villas", phase: 3, x: 750, y: 100, width: 50, height: 40, status: "available", opportunitySlug: "residential" },
  { id: "V2", label: "V2", category: "residential", landUse: "Townhouses", phase: 3, x: 800, y: 130, width: 50, height: 40, status: "available", opportunitySlug: "residential" },
  { id: "A1", label: "A1", category: "residential", landUse: "Apartments", phase: 3, x: 720, y: 450, width: 55, height: 45, status: "available", opportunitySlug: "residential" },

  // Data & Tech
  { id: "DC1", label: "Data Center", category: "infrastructure", landUse: "Data Center", phase: 3, x: 600, y: 480, width: 80, height: 60, status: "available", opportunitySlug: "data-center" },

  // Science Center
  { id: "STC", label: "Sci-Tech Center", category: "mixed-use", landUse: "Science & Technology Museum", phase: 2, x: 420, y: 280, width: 75, height: 55, status: "under-development" },

  // Open spaces
  { id: "OS1", label: "OS1", category: "open-space", landUse: "Open Space / Parks", phase: 1, x: 350, y: 250, width: 100, height: 60, status: "operational" },
  { id: "OS8", label: "OS8", category: "open-space", landUse: "Green Connector", phase: 1, x: 540, y: 420, width: 80, height: 50, status: "operational" },
];

export function getPlotById(id: string): Plot | undefined {
  return plots.find((p) => p.id === id);
}

export function getPlotsByCategory(category: PlotCategory): Plot[] {
  return plots.filter((p) => p.category === category);
}
