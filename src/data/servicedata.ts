export interface ServiceData {
  id: number;
  title: string;
  description: string;
  startingPrice: number;
  image: string;
  category: "residential" | "commercial" | "specialized";
  features: string[];
  seoKeywords: string[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Residential Window Cleaning",
    description:
      "Professional window cleaning for homes and apartments. Crystal clear windows that let natural light shine through beautifully.",
    startingPrice: 50,
    image: "/service1.jpg",
    category: "residential",
    features: [
      "Interior & Exterior Cleaning",
      "Screen Cleaning Included",
      "Frame & Sill Cleaning",
      "Eco-Friendly Solutions",
    ],
    seoKeywords: [
      "residential window cleaning",
      "home window washing",
      "apartment window service",
    ],
  },
  {
    id: 2,
    title: "Commercial Window Cleaning",
    description:
      "Regular window maintenance for offices, retail stores, and commercial buildings. Keep your business looking professional.",
    startingPrice: 100,
    image: "/service2.jpg",
    category: "commercial",
    features: [
      "Scheduled Maintenance",
      "High-Rise Access Equipment",
      "Insurance & Bonding",
      "Flexible Timing",
    ],
    seoKeywords: [
      "commercial window cleaning",
      "office window washing",
      "business window service",
    ],
  },
  {
    id: 3,
    title: "High-Rise Window Cleaning",
    description:
      "Specialized equipment and certified technicians for multi-story buildings and skyscrapers. Safety is our top priority.",
    startingPrice: 250,
    image: "/service3.jpg",
    category: "specialized",
    features: [
      "Certified Rope Access",
      "Safety Equipment Included",
      "Licensed & Insured",
      "Weather Monitoring",
    ],
    seoKeywords: [
      "high-rise window cleaning",
      "skyscraper window washing",
      "rope access window cleaning",
    ],
  },
  {
    id: 4,
    title: "Post-Construction Cleanup",
    description:
      "Thorough window cleaning after construction or renovation projects. Remove all debris, paint, and construction residue.",
    startingPrice: 150,
    image: "/service4.jpg",
    category: "specialized",
    features: [
      "Construction Debris Removal",
      "Paint & Adhesive Removal",
      "Detail Frame Cleaning",
      "Final Quality Inspection",
    ],
    seoKeywords: [
      "post construction window cleaning",
      "renovation window cleanup",
      "construction window washing",
    ],
  },
  {
    id: 5,
    title: "Solar Panel Window Cleaning",
    description:
      "Specialized cleaning for solar panel installations and adjacent windows. Maximize efficiency and maintain clarity.",
    startingPrice: 120,
    image: "/service6.jpg",
    category: "specialized",
    features: [
      "Solar Panel Safe Solutions",
      "Efficiency Optimization",
      "Electrical Safety Protocols",
      "Regular Maintenance Plans",
    ],
    seoKeywords: [
      "solar panel window cleaning",
      "solar window washing",
      "renewable energy window service",
    ],
  },
  {
    id: 6,
    title: "Pressure Washing Windows",
    description:
      "Deep cleaning service using professional pressure washing equipment for heavily soiled exterior windows and frames.",
    startingPrice: 80,
    image: "/service5.jpg",
    category: "residential",
    features: [
      "High-Pressure Equipment",
      "Deep Stain Removal",
      "Frame & Trim Cleaning",
      "Gutter Edge Cleaning",
    ],
    seoKeywords: [
      "pressure washing windows",
      "deep window cleaning",
      "exterior window pressure wash",
    ],
  },
];

export const getServicesByCategory = (
  category: "residential" | "commercial" | "specialized"
) => {
  return servicesData.filter((service) => service.category === category);
};

export const getFeaturedServices = () => {
  return servicesData.slice(0, 6);
};
