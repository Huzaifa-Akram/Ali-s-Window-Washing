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
}

export const servicesData: ServiceData[] = [
  {
    id: 1,
    title: "Residential Window Cleaning",
    description:
      "Professional home window cleaning service for houses, condos, and apartments. Get crystal-clear views and enhanced curb appeal with our meticulous attention to detail.",
    startingPrice: 75,
    image: "/service1.jpg",
    category: "residential",
    popular: true,
    features: [
      "Interior & Exterior Cleaning",
      "Screen Cleaning & Repair",
      "Window Sill & Frame Detailing",
      "Eco-Friendly Solutions",
      "Free Re-cleaning Guarantee",
      "Flexible Scheduling",
    ],
    seoKeywords: [
      "residential window cleaning",
      "home window washing",
      "house window service",
      "apartment window cleaning",
    ],
  },
  {
    id: 2,
    title: "Commercial Window Cleaning",
    description:
      "Professional window cleaning for offices, retail stores, restaurants, and commercial buildings. Maintain a pristine business image with our reliable commercial services.",
    startingPrice: 150,
    image: "/service2.jpg",
    category: "commercial",
    popular: true,
    features: [
      "Scheduled Regular Maintenance",
      "High-Rise Access Equipment",
      "Fully Licensed & Insured",
      "Flexible Business Hours",
      "Storefront Specialist",
      "Contract Pricing Available",
    ],
    seoKeywords: [
      "commercial window cleaning",
      "office window washing",
      "business window service",
      "retail window cleaning",
    ],
  },
  {
    id: 3,
    title: "Maintenance Package Plans",
    description:
      "Regular window cleaning maintenance plans designed to keep your windows spotless year-round. Choose from monthly, bi-monthly, or seasonal cleaning schedules.",
    startingPrice: 60,
    image: "/service3.jpg",
    category: "maintenance",
    features: [
      "Monthly or Seasonal Plans",
      "Priority Booking & Scheduling",
      "Discounted Package Rates",
      "Weather Protection Guarantee",
      "Emergency Clean-Up Service",
      "Annual Window Health Check",
    ],
    seoKeywords: [
      "window maintenance plans",
      "regular window cleaning",
      "window cleaning packages",
      "seasonal window service",
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
