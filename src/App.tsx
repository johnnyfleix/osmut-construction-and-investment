import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutSection } from "./components/AboutSection";
import { SectorsSection } from "./components/SectorsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { PartnersSection } from "./components/PartnersSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { SectorModal } from "./components/SectorModal";
import { SectorInfo } from "./data/companyData";

export default function App() {
  const [activeSectorModal, setActiveSectorModal] = useState<SectorInfo | null>(null);
  const [selectedInquiryType, setSelectedInquiryType] = useState<string>("General Enquiry");

  const handleOpenSectorModal = (sector: SectorInfo) => {
    setActiveSectorModal(sector);
  };

  const handleCloseSectorModal = () => {
    setActiveSectorModal(null);
  };

  const handleSelectForInquiry = (inquiryType: string) => {
    setSelectedInquiryType(inquiryType);
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-200 flex flex-col font-sans selection:bg-[#64a19d] selection:text-white">
      {/* Navigation Bar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Masthead / Hero Section */}
        <Hero />

        {/* About Section (A Diversified Business Partner, Vision, Mission, Core Values) */}
        <AboutSection />

        {/* Business Sectors Grid (7 Sectors, Featured Showcase, Scope Modal) */}
        <SectorsSection
          onOpenSectorModal={handleOpenSectorModal}
          onSelectForInquiry={handleSelectForInquiry}
        />

        {/* Why Choose OSMUT (5 Reasons) */}
        <WhyChooseUs />

        {/* Clients, Business Partners & Commitment to Growth */}
        <PartnersSection />

        {/* Contact Us, Information Verification Notice & Business Enquiry Form */}
        <ContactSection initialInquiryType={selectedInquiryType} />
      </main>

      {/* Sector Deep Dive Modal */}
      <SectorModal
        sector={activeSectorModal}
        onClose={handleCloseSectorModal}
        onSelectForInquiry={handleSelectForInquiry}
      />

      {/* Corporate Footer */}
      <Footer
        onOpenSectorModal={handleOpenSectorModal}
        onSelectForInquiry={handleSelectForInquiry}
      />
    </div>
  );
}
