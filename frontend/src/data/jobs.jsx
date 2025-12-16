export const jobs = [
  {
    id: 1,
    title: "Construction Worker - Spain",
    location: "Barcelona, Spain",
    salary: "35,000 - 42,000 SEK/month",
    description: "Join our construction team in sunny Barcelona. Experience required in construction.",
    requirements: ["Construction experience", "EU work permit", "Swedish citizenship"],
    benefits: ["Accommodation provided", "Flight covered", "Health insurance"],
    image: "/images/spain-job.jpg",
    category: "construction",
    featured: true,
    duration: "12 months",
    applicationDeadline: "2024-03-15"
  },
  {
    id: 2,
    title: "Hotel Staff - Greece",
    location: "Crete, Greece",
    salary: "28,000 - 32,000 SEK/month",
    description: "Work at a luxury hotel in beautiful Crete. Various positions available.",
    requirements: ["Hospitality experience", "English speaking", "Friendly personality"],
    benefits: ["Free accommodation", "Meals included", "Beach access"],
    image: "/images/greece-job.jpg",
    category: "hospitality",
    featured: true,
    duration: "6-12 months",
    applicationDeadline: "2024-04-01"
  },
  {
    id: 3,
    title: "Agricultural Worker - Italy",
    location: "Sicily, Italy",
    salary: "30,000 - 36,000 SEK/month",
    description: "Work in organic farming in Sicily. Enjoy Mediterranean lifestyle.",
    requirements: ["Farming experience", "Physical fitness", "Driver's license"],
    benefits: ["Farm accommodation", "Fresh produce", "Cultural experience"],
    image: "/images/italy-job.jpg",
    category: "agriculture",
    featured: false,
    duration: "Seasonal",
    applicationDeadline: "2024-02-28"
  },
  {
    id: 4,
    title: "Tour Guide - Portugal",
    location: "Algarve, Portugal",
    salary: "32,000 - 38,000 SEK/month",
    description: "Guide tourists through beautiful Portuguese landscapes.",
    requirements: ["Tourism diploma", "Portuguese/Spanish", "Guiding experience"],
    benefits: ["Commission bonuses", "Training provided", "Flexible hours"],
    image: "/images/portugal-job.jpg",
    category: "tourism",
    featured: false,
    duration: "8 months",
    applicationDeadline: "2024-03-30"
  }
];

// Helper functions
export const getJobsByCategory = (category) => {
  return jobs.filter(job => job.category === category);
};

export const getFeaturedJobs = () => {
  return jobs.filter(job => job.featured);
};

export const searchJobs = (query) => {
  const lowerQuery = query.toLowerCase();
  return jobs.filter(job =>
    job.title.toLowerCase().includes(lowerQuery) ||
    job.location.toLowerCase().includes(lowerQuery) ||
    job.description.toLowerCase().includes(lowerQuery)
  );
};