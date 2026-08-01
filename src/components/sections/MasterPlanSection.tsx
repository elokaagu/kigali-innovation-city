"use client";

import { useState } from "react";
import Link from "next/link";
import {
  plots,
  plotCategoryColors,
  plotCategoryLabels,
  type Plot,
  type PlotCategory,
} from "@/data/plots";
import SectionHeader from "@/components/common/SectionHeader";
import { Badge } from "@/components/ui/badge";

const statusLabels: Record<Plot["status"], string> = {
  available: "Available",
  "under-development": "Under Development",
  operational: "Operational",
  allocated: "Allocated",
};

export default function MasterPlanSection() {
  const [selectedPlot, setSelectedPlot] = useState<Plot | null>(null);
  const [activeCategory, setActiveCategory] = useState<PlotCategory | "all">("all");

  const filteredPlots =
    activeCategory === "all"
      ? plots
      : plots.filter((p) => p.category === activeCategory);

  const categories = Object.entries(plotCategoryLabels) as [PlotCategory, string][];

  return (
    <section id="masterplan" className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Master Plan"
          title="Interactive Site Map"
          subtitle="Explore KIC's 62-hectare masterplan. Click any plot to view land use details and linked investment opportunities."
        />

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              activeCategory === "all"
                ? "bg-kic-dark text-white"
                : "bg-kic-grey-light text-muted-foreground hover:bg-muted"
            }`}
          >
            All Plots
          </button>
          {categories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex items-center gap-1.5 ${
                activeCategory === key
                  ? "bg-kic-dark text-white"
                  : "bg-kic-grey-light text-muted-foreground hover:bg-muted"
              }`}
            >
              <span
                className="w-2 h-2 rounded-full shrink-0"
                style={{ backgroundColor: plotCategoryColors[key] }}
              />
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* SVG Map */}
          <div className="lg:col-span-2 rounded-2xl border bg-kic-dark/5 overflow-hidden">
            <svg
              viewBox="0 0 1000 700"
              className="w-full h-auto"
              role="img"
              aria-label="Kigali Innovation City master plan"
            >
              {/* Background */}
              <rect x="0" y="0" width="1000" height="700" fill="#0E222B" rx="0" />
              <text x="500" y="30" textAnchor="middle" fill="#F5D424" fontSize="16" fontWeight="600">
                KIGALI INNOVATION CITY — MASTER PLAN
              </text>
              <text x="500" y="52" textAnchor="middle" fill="#ffffff60" fontSize="11">
                62 Hectares · 5 Phases · Click plots for details
              </text>

              {/* Road network hint */}
              <path d="M 50 350 Q 500 320 950 350" stroke="#ffffff15" strokeWidth="8" fill="none" />
              <path d="M 500 60 L 500 650" stroke="#ffffff10" strokeWidth="6" fill="none" />

              {/* Site boundary */}
              <rect x="60" y="70" width="880" height="560" fill="none" stroke="#F5D424" strokeWidth="2" strokeDasharray="8 4" rx="8" />

              {/* Plots */}
              {filteredPlots.map((plot) => {
                const isSelected = selectedPlot?.id === plot.id;
                const color = plotCategoryColors[plot.category];
                return (
                  <g key={plot.id}>
                    <rect
                      x={plot.x}
                      y={plot.y}
                      width={plot.width}
                      height={plot.height}
                      fill={color}
                      fillOpacity={isSelected ? 0.9 : 0.65}
                      stroke={isSelected ? "#F5D424" : "#ffffff40"}
                      strokeWidth={isSelected ? 3 : 1}
                      rx="4"
                      className="cursor-pointer transition-all"
                      onClick={() => setSelectedPlot(plot)}
                      onKeyDown={(e) => e.key === "Enter" && setSelectedPlot(plot)}
                      tabIndex={0}
                      role="button"
                      aria-label={`${plot.label}: ${plot.landUse}`}
                    />
                    <text
                      x={plot.x + plot.width / 2}
                      y={plot.y + plot.height / 2 + 4}
                      textAnchor="middle"
                      fill="#0E222B"
                      fontSize={plot.width > 60 ? 11 : 9}
                      fontWeight="700"
                      pointerEvents="none"
                    >
                      {plot.label}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Plot detail panel */}
          <div className="rounded-2xl border bg-card p-6 flex flex-col">
            {selectedPlot ? (
              <>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{selectedPlot.label}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {selectedPlot.landUse}
                    </p>
                  </div>
                  <span
                    className="w-4 h-4 rounded shrink-0 mt-1"
                    style={{ backgroundColor: plotCategoryColors[selectedPlot.category] }}
                  />
                </div>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Category</span>
                    <span className="font-medium">{plotCategoryLabels[selectedPlot.category]}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Phase</span>
                    <span className="font-medium">Phase {selectedPlot.phase}</span>
                  </div>
                  {selectedPlot.area && (
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Area</span>
                      <span className="font-medium">{selectedPlot.area}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant={selectedPlot.status === "available" ? "green" : "gold"}>
                      {statusLabels[selectedPlot.status]}
                    </Badge>
                  </div>
                </div>

                {selectedPlot.opportunitySlug ? (
                  <Link
                    href={`/opportunities/${selectedPlot.opportunitySlug}`}
                    className="block w-full text-center py-3 rounded-xl bg-kic-gold text-kic-dark font-semibold text-sm hover:bg-kic-gold/90 transition-colors"
                  >
                    View Investment Details →
                  </Link>
                ) : (
                  <p className="text-sm text-muted-foreground text-center py-3">
                    {selectedPlot.status === "operational"
                      ? "This plot is currently operational."
                      : "Contact us for availability information."}
                  </p>
                )}

                <button
                  onClick={() => setSelectedPlot(null)}
                  className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors text-center"
                >
                  Clear selection
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-kic-grey-light flex items-center justify-center mb-4">
                  <span className="text-2xl">🗺️</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Click a plot on the map to view land use details and investment opportunities.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map(([key, label]) => (
            <div key={key} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded" style={{ backgroundColor: plotCategoryColors[key] }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
