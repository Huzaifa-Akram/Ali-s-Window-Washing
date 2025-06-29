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
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Residential Window Cleaning",
    description:
      "Professional home window cleaning service for houses, condos, and apartments. Get crystal-clear views and enhanced curb appeal with our meticulous attention to detail.",
    detailedDescription:
      "Transform your home's appearance with our comprehensive residential window cleaning service. We clean both interior and exterior surfaces, ensuring every window sparkles. Our service includes screen cleaning, window sill detailing, and frame cleaning using eco-friendly solutions that are safe for your family and pets.",
    startingPrice: 75,
    image: "/service1.jpg",
    category: "residential",
    popular: true,
    duration: "2-4 hours",
    frequency: "Monthly, Bi-monthly, Quarterly",
    features: [
      "Interior & Exterior Window Cleaning",
      "Screen Cleaning & Minor Repairs",
      "Window Sill & Frame Detailing",
      "Eco-Friendly Cleaning Solutions",
      "Free Re-cleaning Guarantee",
      "Flexible Scheduling Options",
      "Post-Service Quality Inspection",
      "Insured & Bonded Service",
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
      "Professional window cleaning for offices, retail stores, restaurants, and commercial buildings. Maintain a pristine business image with our reliable commercial services.",
    detailedDescription:
      "Enhance your business's professional appearance with our commercial window cleaning services. We understand the importance of maintaining a spotless storefront and clean office windows. Our team works around your business schedule, offering flexible timing and comprehensive cleaning solutions for all commercial properties.",
    startingPrice: 150,
    image: "/service2.jpg",
    category: "commercial",
    popular: true,
    duration: "4-8 hours",
    frequency: "Weekly, Bi-weekly, Monthly",
    features: [
      "Scheduled Regular Maintenance Plans",
      "High-Rise Window Access Equipment",
      "Fully Licensed & Insured Service",
      "Flexible Business Hours Scheduling",
      "Storefront & Display Window Specialist",
      "Contract Pricing & Volume Discounts",
      "Emergency & Rush Service Available",
      "Professional Business References",
    ],
    seoKeywords: [
      "commercial window cleaning",
      "office window washing",
      "business window service",
      "retail window cleaning",
      "storefront cleaning",
      "commercial building maintenance",
    ],
  },
  {
    id: 3,
    title: "Window Maintenance Packages",
    description:
      "Regular window cleaning maintenance plans designed to keep your windows spotless year-round. Choose from monthly, bi-monthly, or seasonal cleaning schedules with significant savings.",
    detailedDescription:
      "Save money and maintain consistently clean windows with our maintenance package plans. These comprehensive packages include regular scheduled cleanings, priority booking, and special rates. Perfect for both residential and commercial clients who want to ensure their windows always look their best throughout the year.",
    startingPrice: 60,
    image: "/service3.jpg",
    category: "maintenance",
    duration: "Varies by property",
    frequency: "Customizable schedule",
    features: [
      "Monthly, Bi-monthly, or Seasonal Plans",
      "Priority Booking & Scheduling",
      "Significant Package Rate Discounts",
      "Weather Protection & Rescheduling",
      "Emergency Clean-Up Service Included",
      "Annual Window Health Assessment",
      "Flexible Payment Options",
      "Performance Tracking & Reports",
    ],
    seoKeywords: [
      "window maintenance plans",
      "regular window cleaning",
      "window cleaning packages",
      "seasonal window service",
      "window cleaning contracts",
      "maintenance agreements",
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
