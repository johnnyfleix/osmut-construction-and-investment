import React from "react";
import {
  Landmark,
  Building,
  HardHat,
  Wheat,
  Truck,
  Store,
  Utensils,
  Globe2,
  TrendingUp,
  ArrowRight,
  Handshake,
} from "lucide-react";
import {
  PARTNER_TYPES,
  COMMITMENT_TO_GROWTH,
  PARTNERSHIP_CTA,
} from "../data/companyData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Landmark,
  Building,
  HardHat,
  Wheat,
  Truck,
  Store,
  Utensils,
  Globe2,
  TrendingUp,
};

export const PartnersSection: React.FC = () => {
  return (
    <section id="partners" className="bg-[#f8f9fa] text-gray-900 py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#50817e] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Collaboration & Alliances
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-gray-900 font-heading mb-4">
            Clients & Business Partners
          </h2>
          <div className="w-16 h-1 bg-[#64a19d] mx-auto mb-6" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light">
            OSMUT Construction and Investment actively welcomes opportunities to establish strategic commercial relationships, supply agreements, and co-investment models across Ghana and international markets.
          </p>
        </div>

        {/* 9 Partner Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {PARTNER_TYPES.map((partner, idx) => {
            const IconComp = iconMap[partner.icon] || Building;
            return (
              <div
                key={partner.category}
                className="p-6 bg-white rounded-sm border border-gray-200 hover:border-[#64a19d] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-sm bg-[#e0eceb] text-[#3c615e] flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-gray-900 font-heading">
                      {partner.category}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                    {partner.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#50817e] font-semibold uppercase tracking-wider">
                  <span>Open for Enquiries</span>
                  <span>#0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commitment to Growth Banner */}
        <div className="mb-20 rounded-sm bg-black text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#64a19d]/10 to-transparent pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[#64a19d] text-xs font-bold uppercase tracking-widest mb-4">
              <TrendingUp className="w-4 h-4" />
              <span>Strategic Outlook</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-white font-heading mb-6">
              {COMMITMENT_TO_GROWTH.heading}
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light whitespace-pre-line mb-8">
              {COMMITMENT_TO_GROWTH.text}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-800 text-xs uppercase tracking-wider text-gray-400 font-semibold">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64a19d]" />
                Infrastructure
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64a19d]" />
                Agricultural Value
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64a19d]" />
                Trade Expansion
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#64a19d]" />
                Economic Progress
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Call to Action */}
        <div className="text-center max-w-3xl mx-auto p-8 sm:p-12 bg-white rounded-sm border border-gray-300 shadow-lg">
          <div className="w-12 h-12 rounded-full bg-[#e0eceb] text-[#3c615e] flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wide text-gray-900 font-heading mb-4">
            {PARTNERSHIP_CTA.heading}
          </h3>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed font-light mb-8 max-w-2xl mx-auto">
            {PARTNERSHIP_CTA.text}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all rounded-sm shadow-md"
          >
            <span>{PARTNERSHIP_CTA.buttonLabel}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
