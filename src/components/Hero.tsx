import React from "react";
import { ArrowDown, ChevronRight, Building, Globe, Sprout } from "lucide-react";
import { COMPANY_NAME, COMPANY_TAGLINE } from "../data/companyData";

export const Hero: React.FC = () => {
  return (
    <header
      id="page-top"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24 pb-16"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.75) 70%, #000000 100%), url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85')`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "scroll",
      }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30 pointer-events-none" />

      {/* Subtle grid accent */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(#64a19d 1px, transparent 1px), linear-gradient(90deg, #64a19d 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Company Identity Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-black/60 border border-gray-700/60 mb-6 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#64a19d] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.2em] text-gray-300">
            {COMPANY_NAME}
          </span>
        </div>

        {/* Tagline / Headline */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-wider text-white font-heading leading-tight mb-6 max-w-4xl text-balance">
          <span className="masthead-title block">
            {COMPANY_TAGLINE}
          </span>
        </h1>

        {/* Supporting text */}
        <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-light mb-10 text-balance">
          OSMUT Construction and Investment is a diversified business enterprise delivering construction services,
          facilitating international trade, supplying essential commodities, and exploring sustainable commercial
          investment opportunities across Ghana and international markets.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-16">
          <a
            href="#sectors"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all duration-200 rounded-sm shadow-lg hover:shadow-[#64a19d]/20 active:translate-y-0.5"
          >
            <span>Explore Our Business</span>
            <ChevronRight className="w-4 h-4 ml-1.5" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-widest text-white bg-transparent hover:bg-white/10 border border-gray-600 hover:border-gray-400 transition-all duration-200 rounded-sm"
          >
            <span>Partner With Us</span>
          </a>
        </div>

        {/* Quick Highlights Bar */}
        <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-800/80 text-left">
          <div className="flex items-start gap-3 p-3 rounded-sm bg-gray-900/40 backdrop-blur-xs border border-gray-800/50">
            <Building className="w-5 h-5 text-[#64a19d] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Infrastructure & Works</div>
              <div className="text-[12px] text-gray-400 font-light">Residential, commercial & civil projects</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-sm bg-gray-900/40 backdrop-blur-xs border border-gray-800/50">
            <Globe className="w-5 h-5 text-[#64a19d] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">International Trade</div>
              <div className="text-[12px] text-gray-400 font-light">Cross-border procurement & goods distribution</div>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-sm bg-gray-900/40 backdrop-blur-xs border border-gray-800/50">
            <Sprout className="w-5 h-5 text-[#64a19d] shrink-0 mt-0.5" />
            <div>
              <div className="text-xs uppercase tracking-wider font-bold text-white">Agri & Commercial Value</div>
              <div className="text-[12px] text-gray-400 font-light">Agricultural supplies, food & investments</div>
            </div>
          </div>
        </div>

        {/* Scroll down indicator */}
        <a
          href="#about"
          className="mt-12 text-gray-400 hover:text-[#64a19d] transition-colors p-2 inline-flex flex-col items-center gap-1 group focus:outline-none"
          aria-label="Scroll to about section"
        >
          <span className="text-[10px] uppercase tracking-widest font-semibold opacity-70 group-hover:opacity-100">
            Discover OSMUT
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-[#64a19d]" />
        </a>
      </div>
    </header>
  );
};
