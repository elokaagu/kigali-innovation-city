"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
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
    <section id="masterplan" className="py-20 sm:py-28 bg-kic-grey-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Master Plan"
          title="Interactive Site Map"
          subtitle="Explore KIC's 62-hectare masterplan on the aerial site view. Click any plot to view land use details and linked investment opportunities."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              activeCategory === "all"
                ? "bg-kic-dark text-white shadow-md"
                : "bg-white text-muted-foreground hover:bg-muted border border-border"
            }`}
          >
            All Plots
          </button>
          {categories.map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                activeCategory === key
                  ? "bg-kic-dark text-white shadow-md"
                  : "bg-white text-muted-foreground hover:bg-muted border border-border"
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
          {/* Map with aerial imagery */}
          <div className="lg:col-span-2 rounded-2xl border overflow-hidden shadow-lg relative aspect-[10/7] bg-kic-dark">
            <Image
              src="/images/kigali-innovation-city.jpeg"
              alt="Kigali Innovation City aerial view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 bg-kic-dark/40" />

            <svg
              viewBox="0 0 1000 700"
              className="absolute inset-0 w-full h-full"
              role="img"
              aria-label="Interactive KIC master plan overlay"
              preserveAspectRatio="xMidYMid slice"
            >
              <rect x="60" y="70" width="880" height="560" fill="none" stroke="#F5D424" strokeWidth="2" strokeDasharray="8 4" rx="8" opacity="0.8" />

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
                      fillOpacity={isSelected ? 0.85 : 0.55}
                      stroke={isSelected ? "#F5D424" : "#ffffff"}
                      strokeWidth={isSelected ? 3 : 1.5}
                      rx="4"
                      className="cursor-pointer"
                      style={{ transition: "all 0.2s ease" }}
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
                      fill="white"
                      fontSize={plot.width > 60 ? 11 : 9}
                      fontWeight="700"
                      pointerEvents="none"
                      style={{ textShadow: "0 1px 3px rgba(0,0,0,0.8)" }}
                    >
                      {plot.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-kic-dark/80 backdrop-blur-sm border border-white/10">
              <p className="text-xs font-semibold text-kic-gold">KIC Master Plan</p>
              <p className="text-[10px] text-white/60">62 ha · Surbana Jurong</p>
            </div>
          </div>

          {/* Plot detail panel */}
          <div className="rounded-2xl border bg-card p-6 flex flex-col shadow-md">
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
                    className="w-4 h-4 rounded shrink-0 mt-1 ring-2 ring-white shadow"
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
                  <div className="flex justify-between text-sm items-center">
                    <span className="text-muted-foreground">Status</span>
                    <Badge variant={selectedPlot.status === "available" ? "green" : "gold"}>
                      {statusLabels[selectedPlot.status]}
                    </Badge>
                  </div>
                </div>

                {selectedPlot.opportunitySlug ? (
                  <Link
                    href={`/opportunities/${selectedPlot.opportunitySlug}`}
                    className="block w-full text-center py-3 rounded-xl bg-kic-gold text-kic-dark font-semibold text-sm hover:bg-kic-gold/90 transition-all hover:shadow-md"
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
                  className="mt-3 text-xs text-muted-foreground hover:text-foreground transition-colors text-center w-full"
                >
                  Clear selection
                </button>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center flex-1 text-center py-8">
                <div className="w-16 h-16 rounded-2xl bg-kic-gold/10 flex items-center justify-center mb-4 border border-kic-gold/20">
                  <MapPin className="h-8 w-8 text-kic-gold" />
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-[220px]">
                  Select a highlighted plot on the aerial map to explore investment opportunities.
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {categories.map(([key, label]) => (
            <div key={key} className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-3 h-3 rounded shadow-sm" style={{ backgroundColor: plotCategoryColors[key] }} />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
