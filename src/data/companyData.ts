export interface SectorInfo {
  id: string;
  number: number;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  capabilities: string[];
  inquiryCode: string;
}

export interface ValueItem {
  title: string;
  description: string;
  iconName: string;
}

export interface WhyChooseItem {
  id: number;
  title: string;
  description: string;
  iconName: string;
}

export const COMPANY_NAME = "OSMUT Construction and Investment";
export const COMPANY_TAGLINE = "Building Infrastructure. Connecting Markets. Creating Opportunities.";

export const ABOUT_TEXT = {
  heading: "A Diversified Business Partner",
  paragraph1:
    "OSMUT Construction and Investment is committed to delivering quality construction services, facilitating trade, supplying essential commodities, and developing strategic business relationships across multiple sectors.",
  paragraph2:
    "Our operations span construction, general merchandise import and export, agricultural products, farm inputs and equipment, cosmetics, food products, and other commercial goods.",
  paragraph3:
    "Through professionalism, integrity, quality, innovation, and long-term partnerships, we aim to respond to evolving market needs and create value for our customers, suppliers, partners, and communities.",
};

export const VISION_TEXT =
  "To become a trusted and respected diversified business group recognized for excellence in construction, international trade, agriculture, and strategic investments across Ghana and international markets.";

export const MISSION_TEXT =
  "To deliver quality construction services, provide dependable products, develop strategic commercial partnerships, and pursue sustainable investment opportunities that create value for our clients, partners, and communities.";

export const CORE_VALUES: ValueItem[] = [
  {
    title: "Integrity",
    description: "Honesty, transparency, and accountability in business dealings.",
    iconName: "ShieldCheck",
  },
  {
    title: "Quality",
    description: "Reliable products and professional services that meet appropriate standards.",
    iconName: "Award",
  },
  {
    title: "Professionalism",
    description: "Competence, discipline, and respect for clients and partners.",
    iconName: "Briefcase",
  },
  {
    title: "Innovation",
    description: "Practical solutions and new opportunities that improve our services.",
    iconName: "Lightbulb",
  },
  {
    title: "Customer Satisfaction",
    description: "Understanding customer needs and building lasting relationships.",
    iconName: "Users",
  },
  {
    title: "Sustainable Growth",
    description: "Responsible business practices that support long-term commercial success.",
    iconName: "TrendingUp",
  },
];

export const BUSINESS_SECTORS: SectorInfo[] = [
  {
    id: "construction",
    number: 1,
    title: "Construction and Infrastructure Development",
    shortDesc:
      "Residential and commercial building construction, civil engineering and infrastructure-related works, building renovation and maintenance, construction materials sourcing, project coordination, and general construction contracting.",
    fullDesc:
      "OSMUT Construction and Investment delivers dependable construction and engineering capabilities. We engage in residential housing developments, commercial facility construction, renovation and rehabilitation works, civil engineering projects, site coordination, and the procurement of durable construction supplies.",
    iconName: "Building2",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Residential building construction",
      "Commercial property development",
      "Civil engineering & infrastructure works",
      "Building renovation, maintenance & retrofitting",
      "Construction materials sourcing & logistics",
      "Project management & general contracting",
    ],
    inquiryCode: "Construction Services",
  },
  {
    id: "import-export",
    number: 2,
    title: "Import and Export of General Goods",
    shortDesc:
      "General merchandise trading, international sourcing and procurement, wholesale distribution, supplier and buyer relationship development, commercial trading, and domestic and international market opportunities.",
    fullDesc:
      "We bridge domestic and global supply channels through disciplined import and export operations. OSMUT connects reputable overseas manufacturers with Ghanaian markets, managing procurement logistics, distributor relationships, and cross-border commercial transactions.",
    iconName: "Ship",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "General merchandise trading",
      "International product sourcing & verification",
      "Wholesale distribution & warehousing channels",
      "Cross-border supplier and buyer matchmaking",
      "Customs liaison & commercial shipping coordination",
      "Domestic & regional market expansion",
    ],
    inquiryCode: "Import and Export",
  },
  {
    id: "agriculture",
    number: 3,
    title: "Agriculture and Agricultural Products",
    shortDesc:
      "Agricultural commodity trading, agricultural produce procurement and marketing, farm input distribution, agricultural partnerships, and opportunities across the agricultural value chain.",
    fullDesc:
      "Agriculture forms an essential pillar of Ghana's economy and our enterprise. OSMUT operates across the agricultural value chain by sourcing high-grade produce directly from local farming communities, facilitating commodity trade, and cultivating sustainable agribusiness ventures.",
    iconName: "Sprout",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Agricultural commodity procurement & trading",
      "Local farmer aggregate network partnerships",
      "Post-harvest storage & marketing distribution",
      "Regional crop trade and supply contracts",
      "Agribusiness value chain investment",
    ],
    inquiryCode: "Agricultural Products and Supplies",
  },
  {
    id: "farm-inputs",
    number: 4,
    title: "Farm Materials, Inputs and Equipment",
    shortDesc:
      "Farming tools, irrigation materials, agricultural implements, farm maintenance supplies, crop production materials, and other agricultural inputs and consumables.",
    fullDesc:
      "Equipping farmers and commercial growers with durable supplies, mechanization tools, and quality inputs is key to agricultural productivity. We distribute field implements, irrigation accessories, protective equipment, and essential cultivation materials.",
    iconName: "Tractor",
    image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Field tools and manual cultivation implements",
      "Irrigation pipes, pumps, and drip materials",
      "Protective agricultural gear and storage equipment",
      "Soil preparation and crop maintenance supplies",
      "Distribution to farm cooperatives and commercial growers",
    ],
    inquiryCode: "Agricultural Products and Supplies",
  },
  {
    id: "cosmetics",
    number: 5,
    title: "Cosmetics and Personal Care Products",
    shortDesc:
      "Beauty and skincare products, haircare, personal hygiene products, beauty accessories, and related cosmetic merchandise.",
    fullDesc:
      "Meeting the vibrant and expanding personal care consumer market in West Africa, OSMUT engages in the sourcing, distribution, and commercial trade of skincare essentials, hair treatments, daily hygiene lines, and aesthetic accessories.",
    iconName: "Sparkles",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Skincare products and dermatological essentials",
      "Haircare and scalp maintenance solutions",
      "Personal hygiene and daily bath commodities",
      "Beauty salon supplies and accessories",
      "Retailer and beauty chain wholesale supply",
    ],
    inquiryCode: "Cosmetics and Personal Care",
  },
  {
    id: "food-products",
    number: 6,
    title: "Food Products and Commodities",
    shortDesc:
      "Packaged and processed food products, staple foods, agricultural food commodities, wholesale food supplies, and other food-related commercial goods.",
    fullDesc:
      "Food security and efficient distribution are vital to market stability. OSMUT trades in wholesale packaged foods, staple grains, edible commodities, and processed foodstuffs, catering to retailers, institutions, and bulk buyers with consistent standards.",
    iconName: "UtensilsCrossed",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "Wholesale staple grain and food commodities",
      "Packaged and processed food merchandise",
      "Institutional food supply arrangements",
      "Temperature-appropriate storage & logistics",
      "Bulk retail distribution networks",
    ],
    inquiryCode: "Food Products and Commodities",
  },
  {
    id: "commercial-investments",
    number: 7,
    title: "General Trading and Commercial Investments",
    shortDesc:
      "Commercial procurement, merchandise supply, business-to-business arrangements, strategic partnerships, joint ventures, market development, and exploration of investment opportunities.",
    fullDesc:
      "Beyond sector-specific lines, OSMUT actively pursues diversified commercial ventures. We partner with local and international investors, participate in joint ventures, manage turnkey procurement tenders, and identify emerging growth vectors across Ghana and the broader region.",
    iconName: "Coins",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    capabilities: [
      "B2B commercial procurement tenders",
      "Strategic joint ventures & co-investment structures",
      "Market entry support for overseas manufacturers",
      "Private equity & commercial venture exploration",
      "Structured trade finance & merchant alliances",
    ],
    inquiryCode: "Commercial Investments and Partnerships",
  },
];

export const WHY_CHOOSE_US: WhyChooseItem[] = [
  {
    id: 1,
    title: "Diversified Business Expertise",
    description:
      "Our presence across multiple sectors helps us respond to a broad range of market needs with agility, resource sharing, and cross-industry intelligence.",
    iconName: "Layers",
  },
  {
    id: 2,
    title: "Commitment to Quality",
    description:
      "We aim to maintain appropriate standards in our services, products, and business relationships, ensuring durable value for all stakeholders.",
    iconName: "CheckCircle2",
  },
  {
    id: 3,
    title: "Reliable Business Partnerships",
    description:
      "We value long-term relationships with suppliers, customers, contractors, and distributors built on transparent communication and mutual trust.",
    iconName: "Handshake",
  },
  {
    id: 4,
    title: "Customer-Focused Solutions",
    description:
      "We work to understand specific client requirements and provide tailored services, reliable procurement schedules, and dependable products.",
    iconName: "Target",
  },
  {
    id: 5,
    title: "Growth and Investment Opportunities",
    description:
      "We explore emerging markets and strategic partnerships that support sustainable commercial growth and lasting socioeconomic impact.",
    iconName: "BarChart3",
  },
];

export const PARTNER_TYPES = [
  {
    category: "Government & Public Sector",
    desc: "Government institutions, regional assemblies, and public-sector procurement departments.",
    icon: "Landmark",
  },
  {
    category: "Corporate & Private Companies",
    desc: "Commercial enterprises seeking dependable procurement, logistics, and trading partners.",
    icon: "Building",
  },
  {
    category: "Construction & Developers",
    desc: "General contractors, real estate developers, and civil engineering project managers.",
    icon: "HardHat",
  },
  {
    category: "Farmers & Agri-Enterprises",
    desc: "Grower associations, agricultural cooperatives, farm owners, and produce aggregators.",
    icon: "Wheat",
  },
  {
    category: "Wholesalers & Distributors",
    desc: "Importers, wholesale stockists, national distributors, and bulk commodity traders.",
    icon: "Truck",
  },
  {
    category: "Retailers & Merchants",
    desc: "Store operators, commercial trade merchants, and retail convenience chains.",
    icon: "Store",
  },
  {
    category: "Institutional Food Providers",
    desc: "Schools, hospitals, industrial caterers, and bulk food purchasing programs.",
    icon: "Utensils",
  },
  {
    category: "International Manufacturers",
    desc: "Global manufacturers and exporters targeting distribution in Ghana and West Africa.",
    icon: "Globe2",
  },
  {
    category: "Investors & Venture Partners",
    desc: "Strategic investors, venture capital groups, and joint-venture commercial syndicates.",
    icon: "TrendingUp",
  },
];

export const COMMITMENT_TO_GROWTH = {
  heading: "Building Long-Term Business Opportunities",
  text:
    "At OSMUT Construction and Investment, we believe in the power of diversification, strategic partnerships, and responsible investment. Our business strategy focuses on expanding our commercial reach, strengthening supply networks, identifying emerging opportunities, and building lasting relationships with clients and partners.\n\nWe are committed to exploring opportunities that contribute to infrastructure development, agricultural growth, trade expansion, and economic progress.",
};

export const PARTNERSHIP_CTA = {
  heading: "Let's Build, Trade, Invest, and Grow Together.",
  text:
    "Whether you are seeking a construction partner, a supplier of commercial goods, an agricultural trading partner, or a business interested in exploring investment opportunities, OSMUT Construction and Investment welcomes the opportunity to connect with you.",
  buttonLabel: "Contact Our Team",
};

export const CONTACT_PLACEHOLDERS = {
  addressNotice: "[Official Head Office Address — Pending Verification, Accra / Ghana]",
  emailNotice: "[Official Corporate Email — Pending Domain Setup]",
  phoneNotice: "[Corporate Contact Number — Pending Verification]",
  socialNotice: "Official corporate social profiles will be published once verified.",
  formNotice:
    "Note: Official company phone numbers, email addresses, and physical locations are currently being verified and will be published upon regulatory finalization.",
};
