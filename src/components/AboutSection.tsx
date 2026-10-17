import React from "react";
import {
  ShieldCheck,
  Award,
  Briefcase,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
  Eye,
  CheckCircle,
} from "lucide-react";
import {
  ABOUT_TEXT,
  VISION_TEXT,
  MISSION_TEXT,
  CORE_VALUES,
} from "../data/companyData";

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  ShieldCheck,
  Award,
  Briefcase,
  Lightbulb,
  Users,
  TrendingUp,
};

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-black text-gray-200 py-24 sm:py-32 border-b border-gray-900">
      {/* Background ambient lighting */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-block text-[#64a19d] text-xs font-bold uppercase tracking-[0.2em] mb-3">
            About OSMUT
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-wide text-white font-heading mb-6">
            {ABOUT_TEXT.heading}
          </h2>
          <div className="w-16 h-1 bg-[#64a19d] mx-auto mb-8" />

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light mb-6">
            {ABOUT_TEXT.paragraph1}
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-6">
            {ABOUT_TEXT.paragraph2}
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            {ABOUT_TEXT.paragraph3}
          </p>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-sm bg-[#0c1113] border-t-4 border-[#64a19d] border-x border-b border-gray-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-sm bg-[#64a19d]/15 border border-[#64a19d]/30 flex items-center justify-center text-[#64a19d]">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white font-heading">
                Our Vision
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light flex-grow">
              "{VISION_TEXT}"
            </p>
            <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center gap-2 text-xs text-[#64a19d] font-semibold tracking-wider uppercase">
              <CheckCircle className="w-4 h-4" />
              <span>Pan-African & Global Benchmark</span>
            </div>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-sm bg-[#0c1113] border-t-4 border-[#7464a1] border-x border-b border-gray-800 shadow-xl flex flex-col">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-sm bg-[#7464a1]/15 border border-[#7464a1]/30 flex items-center justify-center text-[#a89dd4]">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold uppercase tracking-wider text-white font-heading">
                Our Mission
              </h3>
            </div>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light flex-grow">
              "{MISSION_TEXT}"
            </p>
            <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center gap-2 text-xs text-[#a89dd4] font-semibold tracking-wider uppercase">
              <CheckCircle className="w-4 h-4" />
              <span>Multi-Sector Value Creation</span>
            </div>
          </div>
        </div>

        {/* Core Values Section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-white font-heading mb-2">
              Our Core Values
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm">
              The foundational principles guiding every engagement, contract, and commercial endeavor.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_VALUES.map((val) => {
              const IconComponent = iconMap[val.iconName] || ShieldCheck;
              return (
                <div
                  key={val.title}
                  className="group p-6 rounded-sm bg-[#0a0e10] border border-gray-800 hover:border-[#64a19d]/60 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-sm bg-gray-900 border border-gray-800 group-hover:bg-[#64a19d] group-hover:border-[#64a19d] group-hover:text-black text-[#64a19d] flex items-center justify-center transition-colors duration-200">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h4 className="text-base font-bold uppercase tracking-wider text-white font-heading">
                      {val.title}
                    </h4>
                  </div>
                  <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
