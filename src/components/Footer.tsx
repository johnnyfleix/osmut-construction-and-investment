import React from "react";
import { ArrowUp, Building2, ShieldAlert } from "lucide-react";
import {
  COMPANY_NAME,
  COMPANY_TAGLINE,
  BUSINESS_SECTORS,
  SectorInfo,
} from "../data/companyData";

interface FooterProps {
  onOpenSectorModal: (sector: SectorInfo) => void;
  onSelectForInquiry: (inquiryType: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenSectorModal,
  onSelectForInquiry,
}) => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: "Home", href: "#page-top" },
    { label: "About Us", href: "#about" },
    { label: "Our Business Sectors", href: "#sectors" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Our Partners", href: "#partners" },
    { label: "Contact Us", href: "#contact" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-400 text-xs border-t border-gray-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-gray-800">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm bg-[#64a19d] flex items-center justify-center text-black font-extrabold text-sm">
                OS
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold tracking-widest text-sm font-heading uppercase">
                  {COMPANY_NAME}
                </span>
                <span className="text-[10px] text-gray-400 uppercase tracking-wider">
                  Accra, Ghana
                </span>
              </div>
            </div>

            <p className="text-gray-300 font-medium italic text-xs leading-relaxed">
              "{COMPANY_TAGLINE}"
            </p>

            <p className="text-gray-400 text-xs leading-relaxed font-light">
              A Ghanaian diversified business enterprise delivering construction works, international procurement, agricultural commodity trade, farm inputs, and strategic commercial investments.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading mb-4 border-l-2 border-[#64a19d] pl-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 font-medium">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-[#64a19d] transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-gray-600">&rsaquo;</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: The 7 Business Sectors */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest font-heading mb-4 border-l-2 border-[#64a19d] pl-2">
              Our 7 Business Sectors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
              {BUSINESS_SECTORS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => onOpenSectorModal(sector)}
                  className="text-left text-xs text-gray-400 hover:text-[#64a19d] transition-colors truncate flex items-center gap-1.5 cursor-pointer"
                >
                  <span className="text-gray-600 text-[10px]">0{sector.number}.</span>
                  <span className="truncate">{sector.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-4 mt-4 border-t border-gray-800/80">
              <a
                href="#contact"
                onClick={() => onSelectForInquiry("Commercial Investments and Partnerships")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#64a19d] hover:text-white transition-colors"
              >
                <span>Explore Strategic Partnership Opportunities</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Verification Status & Legal Disclaimer */}
        <div className="py-6 border-b border-gray-900 text-gray-400 text-[11px] leading-relaxed">
          <p className="text-center max-w-4xl mx-auto">
            <span className="font-semibold text-gray-400">Notice on Contact Information:</span> Company physical premises, telephone lines, and digital communication channels are undergoing formal statutory verification. All commercial enquiries submitted through this website are structured and recorded for review by designated corporate representatives.
          </p>
        </div>

        {/* Bottom Bar: Copyright, Attribution & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-gray-400">
          <div>
            <p>
              &copy; {currentYear} <span className="text-gray-300 font-semibold">{COMPANY_NAME}</span>. All rights reserved.
            </p>
            <p className="mt-1 text-[10px] text-gray-400">
              Template foundation adapted from <a href="https://startbootstrap.com/theme/grayscale/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:underline">Start Bootstrap Grayscale</a> under the MIT license.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-900 hover:bg-gray-800 text-gray-300 hover:text-white rounded-sm transition-colors text-[11px] uppercase tracking-wider cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#64a19d]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
