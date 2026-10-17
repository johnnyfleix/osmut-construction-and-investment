import React from "react";
import { X, Check, ArrowRight, Building2, Ship, Sprout, Tractor, Sparkles, UtensilsCrossed, Coins } from "lucide-react";
import { SectorInfo } from "../data/companyData";

interface SectorModalProps {
  sector: SectorInfo | null;
  onClose: () => void;
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

export const SectorModal: React.FC<SectorModalProps> = ({
  sector,
  onClose,
  onSelectForInquiry,
}) => {
  if (!sector) return null;

  const IconComp = iconMap[sector.iconName] || Building2;

  const handleInquire = () => {
    onSelectForInquiry(sector.inquiryCode);
    onClose();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop click handler */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative w-full max-w-2xl bg-[#0f1416] border border-gray-700 text-gray-200 rounded-sm shadow-2xl overflow-hidden z-10 flex flex-col max-h-[90vh]">
        {/* Header Image */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden shrink-0">
          <img
            src={sector.image}
            alt={sector.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f1416] via-[#0f1416]/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-gray-300 hover:text-white hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-[#64a19d]"
            aria-label="Close sector details modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Number */}
          <div className="absolute bottom-4 left-6 flex items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider bg-[#64a19d] text-black rounded-sm">
              Sector 0{sector.number}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-sm bg-[#64a19d]/15 text-[#64a19d] border border-[#64a19d]/30">
              <IconComp className="w-6 h-6" />
            </div>
            <h3 id="modal-title" className="text-xl sm:text-2xl font-bold uppercase tracking-wide text-white font-heading">
              {sector.title}
            </h3>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#64a19d] font-bold mb-2">
              Overview & Scope
            </h4>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
              {sector.fullDesc}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#64a19d] font-bold mb-3">
              Core Capabilities & Operations
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sector.capabilities.map((cap, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-xs sm:text-sm text-gray-300 bg-black/40 p-2.5 rounded-sm border border-gray-800"
                >
                  <Check className="w-4 h-4 text-[#64a19d] shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-black border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-gray-400 hover:text-white transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={handleInquire}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all rounded-sm shadow-md"
          >
            <span>Inquire About This Sector</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
