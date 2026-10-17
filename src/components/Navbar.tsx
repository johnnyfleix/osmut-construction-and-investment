import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Compass } from "lucide-react";
import { COMPANY_NAME } from "../data/companyData";

interface NavbarProps {
  onSelectSector?: (sectorId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("page-top");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Simple active section detection
      const sections = ["page-top", "about", "sectors", "why-choose-us", "partners", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "#page-top", id: "page-top" },
    { label: "About Us", href: "#about", id: "about" },
    { label: "Our Business Sectors", href: "#sectors", id: "sectors" },
    { label: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
    { label: "Our Partners", href: "#partners", id: "partners" },
    { label: "Contact Us", href: "#contact", id: "contact" },
  ];

  return (
    <nav
      id="mainNav"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md border-b border-gray-800 shadow-xl py-3"
          : "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5"
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#page-top"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#64a19d] rounded"
          >
            <div className="w-10 h-10 rounded-sm bg-[#64a19d] flex items-center justify-center text-black font-extrabold tracking-tighter text-lg shadow-sm transition-transform duration-200 group-hover:scale-105">
              <span>OS</span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold tracking-widest text-sm sm:text-base font-heading uppercase group-hover:text-[#64a19d] transition-colors">
                OSMUT
              </span>
              <span className="text-[10px] tracking-wider text-gray-400 uppercase font-light">
                Construction & Investment
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-xs uppercase tracking-wider font-semibold transition-all relative ${
                    isActive
                      ? "text-[#64a19d]"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#64a19d]" />
                  )}
                </a>
              );
            })}
          </div>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all duration-200 rounded-sm shadow-md"
            >
              <span>Partner With Us</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-sm text-gray-300 hover:text-white hover:bg-gray-800/60 focus:outline-none focus:ring-2 focus:ring-[#64a19d]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-black/95 backdrop-blur-xl border-b border-gray-800 px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3 py-2.5 text-sm uppercase tracking-wider font-semibold rounded-sm transition-colors ${
                  activeSection === link.id
                    ? "bg-[#64a19d]/10 text-[#64a19d] border-l-2 border-[#64a19d]"
                    : "text-gray-300 hover:bg-gray-900 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-gray-800 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold uppercase tracking-wider text-black bg-[#64a19d] hover:bg-[#50817e] hover:text-white transition-all rounded-sm shadow"
              >
                <span>Partner With Us</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
