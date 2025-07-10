export interface ServicePackage {
  name: string;
  subtitle: string;
  includes: string[];
  note?: string;
}

export interface ServiceData {
  id: number;
  title: string;
  description: string;
  startingPrice: number;
  image: string;
  category: "residential" | "commercial" | "maintenance";
  features: string[];
  seoKeywords: string[];
  popular?: boolean;
  duration?: string;
  frequency?: string;
  detailedDescription?: string;
  servicePackages?: ServicePackage[];
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Residential Window Cleaning",
    description:
      "Professional home window cleaning service with multiple package options. From basic exterior cleaning to complete interior/exterior solutions, we have the perfect service for your needs.",
    detailedDescription:
      "Choose from our comprehensive residential cleaning packages designed to meet every homeowner's needs and budget. All services use reverse osmosis and deionized water for crystal-clear, streak-free results.",
    startingPrice: 75,
    image: "/service1.jpg",
    category: "residential",
    popular: true,
    features: [
      "Multiple service package options available",
      "Exterior and interior cleaning services",
      "Specialized sunroom and gazebo cleaning",
      "Premium screen cleaning included",
      "Glass, frames, and sills included",
      "Reverse osmosis & deionized water technology",
      "No soaps, chemicals, or streaks guaranteed",
      "Professional residential specialists",
    ],
    servicePackages: [
      {
        name: "Exterior Window Cleaning",
        subtitle: "Our Signature Shine",
        includes: [
          "Glass, frames, and sills—most companies skip these, but we don't",
          "Exterior basement windows included (if not screen-covered)",
          "Reverse osmosis and deionized water for crystal clear results",
          "No soaps, chemicals, or streaks",
        ],
      },
      {
        name: "Inside & Out with Screen Cleaning",
        subtitle: "Complete Interior & Exterior Service",
        includes: [
          "Full exterior and interior window cleaning",
          "Free screen cleaning included (promo item with interior service)",
          "Glass, frames, and sills—inside and out",
          "Interior basement windows not included unless walkout or accessible",
        ],
      },
      {
        name: "Dominion Deluxe Detail",
        subtitle: "The Ultimate Package",
        includes: [
          "Full exterior & interior window cleaning",
          "Free screen cleaning",
          "Bottom tracks of opening windows cleaned",
          "Glass, frames, and sills—inside and out",
          "Perfect for seasonal deep cleans or move-in/move-out prep",
        ],
        note: "Interior basement windows not included unless walkout or accessible by request",
      },
      {
        name: "Sunrooms, Gazebos & Weather Walls",
        subtitle: "Give your favorite space the treatment it deserves!",
        includes: [
          "Ultra-clear view with our gloss-finish method",
          "Perfect before winter hits for natural Vitamin D rays",
          "Specialized cleaning for glass structures",
          "Priced separately depending on structure and size",
        ],
      },
    ],
    seoKeywords: [
      "residential window cleaning",
      "home window washing",
      "house window service",
      "apartment window cleaning",
      "condo window cleaning",
      "residential window maintenance",
    ],
  },
  {
    id: 2,
    title: "Commercial Window Cleaning",
    description:
      "Professional commercial window cleaning in Winnipeg for storefronts, apartments, and offices up to 3 stories. Best rates with reliable results.",
    detailedDescription:
      "Dominion Window Shine provides professional commercial window cleaning services in Winnipeg for businesses, apartment buildings, and storefronts up to 3 stories.",
    startingPrice: 150,
    image: "/service2.jpg",
    category: "commercial",
    popular: true,
    features: [
      "Best rates in Winnipeg for commercial cleaning",
      "Top-quality, streak-free results guaranteed",
      "Flexible scheduling for minimal disruption",
      "Full cleaning: glass, frames, and sills included",
      "Fully insured and reliable crew",
      "Chemical-free water technology",
      "Up to 3-story building service",
      "Professional business references",
    ],
    servicePackages: [
      {
        name: "Storefront & Retail Spaces",
        subtitle: "Professional Image Maintenance",
        includes: [
          "Complete storefront window cleaning",
          "Display window specialist service",
          "Glass, frames, and sills included",
          "Flexible scheduling around business hours",
        ],
      },
      {
        name: "Apartment & Condo Buildings",
        subtitle: "Multi-Unit Property Service",
        includes: [
          "Exterior window cleaning for all units",
          "Common area glass cleaning",
          "Bulk pricing for multiple units",
          "Up to 3-story building access",
        ],
      },
      {
        name: "Offices & Commercial Units",
        subtitle: "Professional Workspace Solutions",
        includes: [
          "Interior and exterior office windows",
          "Conference room and lobby glass",
          "Professional crew with business references",
          "Contract pricing for regular service",
          "After-hours cleaning to minimize business disruption",
        ],
        note: "Emergency and rush service available upon request",
      },
      {
        name: "Property-Managed Buildings",
        subtitle: "Comprehensive Building Maintenance",
        includes: [
          "Full building exterior window service",
          "Volume discounts for large properties",
          "Detailed service reports provided",
          "Reliable, insured professional service",
          "Coordinated scheduling with property management",
        ],
      },
    ],
    seoKeywords: [
      "commercial window cleaning winnipeg",
      "storefront window cleaning",
      "apartment building window service",
      "office window washing",
      "retail window cleaning",
      "commercial building maintenance",
    ],
  },
  {
    id: 3,
    title: "Snow Removal Services",
    description:
      "Professional snow removal services for residential and commercial properties in Winnipeg. From driveways and walkways to rooftops and building maintenance.",
    detailedDescription:
      "Keep your property safe and accessible with our comprehensive snow removal services. We provide reliable, efficient snow clearing for all types of properties throughout Winnipeg's winter season.",
    startingPrice: 45,
    image: "/service3.jpg",
    category: "maintenance",
    features: [
      "Residential driveway and walkway clearing",
      "Commercial parking lot snow removal",
      "Professional rooftop snow clearing",
      "Emergency snow removal service",
      "Seasonal contracts and one-time service",
      "Ice management and de-icing solutions",
      "Fully insured and reliable crew",
      "Modern snow removal equipment",
    ],
    servicePackages: [
      {
        name: "Residential Snow Removal",
        subtitle: "Keep Your Home Accessible",
        includes: [
          "Driveway and walkway snow clearing",
          "Front entrance and porch areas",
          "Pathway to garage and side entrances",
          "Light ice management included",
        ],
      },
      {
        name: "Commercial Snow Removal",
        subtitle: "Business Property Maintenance",
        includes: [
          "Parking lot and roadway clearing",
          "Building entrance and walkway service",
          "Loading dock and delivery areas",
          "Emergency response for urgent needs",
        ],
      },
      {
        name: "Rooftop Snow Removal",
        subtitle: "Professional Safety Service",
        includes: [
          "Safe rooftop snow clearing techniques",
          "Prevention of ice dam formation",
          "Structural load reduction service",
          "Emergency rooftop snow removal",
          "Professional safety equipment used",
        ],
        note: "Available for buildings up to 3 stories in height",
      },
      {
        name: "Seasonal Snow Contracts",
        subtitle: "Complete Winter Solutions",
        includes: [
          "Full winter season coverage",
          "Priority response during snowstorms",
          "Contract pricing with locked rates",
          "Ice management and salt application",
          "Equipment maintenance and reliability guarantee",
        ],
        note: "Seasonal contracts available with flexible payment options",
      },
    ],
    seoKeywords: [
      "snow removal winnipeg",
      "residential snow clearing",
      "commercial snow removal",
      "rooftop snow removal",
      "winter property maintenance",
      "snow plowing services",
    ],
  },
];

export const getServicesByCategory = (
  category: "residential" | "commercial" | "maintenance"
) => {
  return servicesData.filter((service) => service.category === category);
};

export const getFeaturedServices = () => {
  return servicesData.slice(0, 3);
};

export const getPopularServices = () => {
  return servicesData.filter((service) => service.popular);
};

export const getAllServices = () => {
  return servicesData;
};

export const getServiceById = (id: number) => {
  return servicesData.find((service) => service.id === id);
};
