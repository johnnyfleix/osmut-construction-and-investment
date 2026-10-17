import React, { useState } from "react";
import {
  Building2,
  Ship,
  Sprout,
  Tractor,
  Sparkles,
  UtensilsCrossed,
  Coins,
  ArrowRight,
  ExternalLink,
  Layers,
} from "lucide-react";
import { BUSINESS_SECTORS, SectorInfo } from "../data/companyData";

interface SectorsSectionProps {
  onOpenSectorModal: (sector: SectorInfo) => void;
  onSelectForInquiry: (inquiryType: string) => void;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Building2,
  Ship,
  Sprout,
  Tractor,
  Sparkles,
  UtensilsCrossed,
  Coins,
};

export const SectorsSection: React.FC<SectorsSectionProps> = ({
  onOpenSectorModal,
  onSelectForInquiry,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filterOptions = [
    { id: "all", label: "All 7 Sectors" },
    { id: "infrastructure", label: "Construction & Trade" },
    { id: "agriculture", label: "Agriculture & Inputs" },
    { id: "consumer", label: "Commodities & Consumer" },
  ];

  const filteredSectors = BUSINESS_SECTORS.filter((sector) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "infrastructure") return sector.id === "construction" || sector.id === "import-export" || sector.id === "commercial-investments";
    if (selectedFilter === "agriculture") return sector.id === "agriculture" || sector.id === "farm-inputs";
    if (selectedFilter === "consumer") return sector.id === "cosmetics" || sector.id === "food-products";
    return true;
  });

  // Grayscale Featured Sector 1 & 2
  const featuredSector1 = BUSINESS_SECTORS[0]; // Construction
  const featuredSector2 = BUSINESS_SECTORS[1]; // Import & Export

  return (
    <section id="sectors" className="bg-[#f8f9fa] text-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#50817e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Operations & Services
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-gray-900 font-heading mb-4">
            Our Business Sectors
          </h2>
          <div className="w-16 h-1 bg-[#64a19d] mx-auto mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
            OSMUT operates across seven synchronized sectors, integrating physical construction, global commodities procurement, agribusiness, and long-term commercial investments.
          </p>
        </div>

        {/* Grayscale Style Showcase - Featured Project Row */}
        <div className="mb-16 rounded-sm overflow-hidden bg-white shadow-xl border border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px]">
              <img
                src={featuredSector1.image}
                alt={featuredSector1.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15" />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 text-white text-[11px] font-bold uppercase tracking-wider rounded-sm">
                Primary Pillar 01
              </div>
            </div>
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center border-l-0 lg:border-l-4 lg:border-l-[#64a19d]">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-sm bg-[#64a19d]/15 text-[#50817e]">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#50817e]">
                  Infrastructure Development
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900 font-heading mb-4">
                {featuredSector1.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {featuredSector1.shortDesc}
              </p>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => onOpenSectorModal(featuredSector1)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white px-5 py-2.5 rounded-sm transition-all shadow-sm"
                >
                  <span>Explore Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href="#contact"
                  onClick={() => onSelectForInquiry(featuredSector1.inquiryCode)}
                  className="text-xs font-bold uppercase tracking-wider text-gray-700 hover:text-[#50817e] transition-colors"
                >
                  Request Consultation &rarr;
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grayscale Alternating Project Row - Import and Export */}
        <div className="mb-20 rounded-sm overflow-hidden bg-black text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-sm bg-[#64a19d]/20 text-[#64a19d]">
                  <Ship className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#64a19d]">
                  Global Sourcing & Trade
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-heading mb-4">
                {featuredSector2.title}
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {featuredSector2.shortDesc}
              </p>
              <div>
                <button
                  onClick={() => onOpenSectorModal(featuredSector2)}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white px-5 py-2.5 rounded-sm transition-all shadow-sm"
                >
                  <span>Explore Trade Operations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
            <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[420px] order-1 lg:order-2">
              <img
                src={featuredSector2.image}
                alt={featuredSector2.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/25" />
              <div className="absolute top-4 right-4 px-3 py-1 bg-black/75 text-white text-[11px] font-bold uppercase tracking-wider rounded-sm">
                Primary Pillar 02
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation for all 7 sectors */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-4 border-b border-gray-300">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider text-gray-900 font-heading">
              Complete Portfolio Breakdown
            </h3>
            <p className="text-xs text-gray-500">
              Browse all 7 distinct operating divisions and commercial activities
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                onClick={() => setSelectedFilter(opt.id)}
                className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm transition-all ${
                  selectedFilter === opt.id
                    ? "bg-[#64a19d] text-black shadow-sm"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 7 Business Sectors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSectors.map((sector) => {
            const IconComponent = iconMap[sector.iconName] || Layers;
            return (
              <div
                key={sector.id}
                className="group flex flex-col bg-white rounded-sm border border-gray-200 hover:border-[#64a19d] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Sector Card Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-900">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3 px-2 py-0.5 bg-black/75 text-white text-[10px] font-bold uppercase tracking-wider rounded-sm">
                    Sector 0{sector.number}
                  </div>
                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2">
                    <div className="p-1.5 rounded-xs bg-[#64a19d] text-black">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-wider truncate font-heading">
                      {sector.title}
                    </span>
                  </div>
                </div>

                {/* Sector Card Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 font-light flex-grow">
                    {sector.shortDesc}
                  </p>

                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                    <button
                      onClick={() => onOpenSectorModal(sector)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#50817e] group-hover:text-[#3c615e] transition-colors"
                    >
                      <span>View Scope</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <a
                      href="#contact"
                      onClick={() => onSelectForInquiry(sector.inquiryCode)}
                      className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 hover:text-black transition-colors"
                    >
                      Enquire &rarr;
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
