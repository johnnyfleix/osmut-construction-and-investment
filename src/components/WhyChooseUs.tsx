import React from "react";
import { Layers, CheckCircle2, Handshake, Target, BarChart3, ArrowRight } from "lucide-react";
import { WHY_CHOOSE_US } from "../data/companyData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Layers,
  CheckCircle2,
  Handshake,
  Target,
  BarChart3,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="bg-[#0a0e10] text-gray-200 py-24 sm:py-32 border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block text-[#64a19d] text-xs font-bold uppercase tracking-[0.2em] mb-2">
            Competitive Edge & Approach
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white font-heading mb-4">
            Why Choose OSMUT?
          </h2>
          <div className="w-16 h-1 bg-[#64a19d] mx-auto mb-6" />
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            We combine multi-sector agility, transparent commercial ethics, and long-term commitment to deliver value across every transaction and infrastructure project.
          </p>
        </div>

        {/* 5 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.iconName] || Layers;
            const isLarge = idx === 0 || idx === 1; // Give primary emphasis to first two
            return (
              <div
                key={item.id}
                className={`p-8 rounded-sm bg-[#0f1416] border border-gray-800/90 hover:border-[#64a19d]/70 transition-all duration-300 flex flex-col justify-between group ${
                  idx === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-black border border-gray-800 group-hover:border-[#64a19d]/50 group-hover:text-[#64a19d] text-gray-300 flex items-center justify-center transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-extrabold text-gray-700 font-heading group-hover:text-[#64a19d]/40 transition-colors">
                      0{item.id}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold uppercase tracking-wider text-white font-heading mb-3">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-gray-800/50 flex items-center text-[11px] text-[#64a19d] font-semibold uppercase tracking-wider">
                  <span>Guiding Principle</span>
                </div>
              </div>
            );
          })}

          {/* Quick Partnership Callout in the 6th slot */}
          <div className="p-8 rounded-sm bg-gradient-to-br from-[#121c1d] to-[#0d1617] border border-[#64a19d]/30 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-sm bg-[#64a19d]/15 text-[#64a19d] border border-[#64a19d]/30 flex items-center justify-center mb-6">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wider text-white font-heading mb-3">
                Built on Trust & Integrity
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light">
                We prioritize transparent agreements, clear deliverables, and reliable communication across local Ghanaian operations and cross-border partnerships.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-800/50">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64a19d] hover:text-white transition-colors"
              >
                <span>Initiate Business Dialogue</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
