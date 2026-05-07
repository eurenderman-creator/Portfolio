// ============================================
// ANDREAS PORTFOLIO - CONTENT DATA
// ============================================
// Edit this file to update all website content
// Easy to modify from any device

export const siteConfig = {
  name: "Andreas",
  title: "3D Visualizer & Spatial Designer",
  email: "eu.renderman@gmail.com",
  social: {
    x: "https://twitter.com/andreas_visual",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/eu.renderman",
  },
  experience: "16+",
};

// ============================================
// HERO SECTION
// ============================================
export const heroData = {
  headline: "ANDREAS",
  subtitle: "3D VISUALIZER & SPATIAL DESIGNER",
  description: "Transforming architectural visions into photorealistic reality",
  backgroundImage: "/images/hero-bg.jpg",
};

// ============================================
// ABOUT SECTION
// ============================================
export const aboutData = {
  portrait: "/images/andreas-portrait.jpg",
  heading: "ABOUT",
  bio: [
    "With over 16 years of experience in architectural visualization, I have dedicated my career to bridging the gap between imagination and reality. Every pixel is crafted with precision, every shadow tells a story.",
    "My work spans across luxury residential, commercial spaces, and iconic landmarks worldwide. I believe that great visualization is not just about rendering — it is about evoking emotion and capturing the soul of a space before it exists.",
  ],
  stats: [
    { number: "16+", label: "Years Experience" },
    { number: "500+", label: "Projects Completed" },
    { number: "50+", label: "Awards Won" },
    { number: "40+", label: "Countries Served" },
  ],
};

// ============================================
// ROTATING QUOTES - Auto-rotating daily quotes
// ============================================
export const quotesData = [
  "DESIGN IS INTELLIGENCE MADE VISIBLE.",
  "LIGHT CREATES MOOD. MOOD CREATES SPACE.",
  "EVERY DETAIL MATTERS. EVERY PIXEL COUNTS.",
  "VISUALIZATION IS ARCHITECTURE BEFORE BRICKS.",
  "SPACES SPEAK. WE JUST HELP THEM BE HEARD.",
  "GREAT DESIGN IS INVISIBLE. GREAT RENDERS ARE UNFORGETTABLE.",
];

// ============================================
// INTERIOR GALLERY
// ============================================
export const interiorData = {
  heading: "INTERIOR",
  description: "Bringing indoor spaces to life with light, texture, and atmosphere",
  images: [
    { src: "/images/interior-1.jpg", alt: "Modern luxury kitchen with marble island and city views", title: "Skyline Kitchen" },
    { src: "/images/interior-2.jpg", alt: "Serene minimalist bedroom with mountain panorama", title: "Mountain Retreat Bedroom" },
    { src: "/images/interior-3.jpg", alt: "Spa-like marble bathroom with golden fixtures", title: "Golden Hour Bath" },
    { src: "/images/interior-4.jpg", alt: "Double-height living room with abstract art and fireplace", title: "Artisan Living" },
    { src: "/images/interior-5.jpg", alt: "Minimalist home office with panoramic nature view", title: "Nature Workspace" },
    { src: "/images/interior-6.jpg", alt: "Luxury walk-in closet with LED display cabinets", title: "Dressing Sanctuary" },
  ],
};

// ============================================
// EXTERIOR GALLERY
// ============================================
export const exteriorData = {
  heading: "EXTERIOR",
  description: "Architectural visions realized in their natural context",
  images: [
    { src: "/images/exterior-1.jpg", alt: "Modern luxury villa with infinity pool at golden hour", title: "Tropical Villa" },
    { src: "/images/exterior-2.jpg", alt: "Glass skyscraper reflecting clouds in urban setting", title: "Cloud Tower" },
    { src: "/images/exterior-3.jpg", alt: "Contemporary beach house with ocean deck", title: "Coastal Haven" },
    { src: "/images/exterior-4.jpg", alt: "Mountain cabin retreat with dramatic landscape", title: "Alpine Escape" },
    { src: "/images/exterior-5.jpg", alt: "Futuristic white museum building with reflecting pool", title: "Art Museum" },
    { src: "/images/exterior-6.jpg", alt: "Luxury penthouse terrace with city skyline at night", title: "Skyline Terrace" },
  ],
};

// ============================================
// PROJECTS SECTION
// ============================================
export const projectsData = {
  heading: "PROJECTS",
  description: "Selected works from 16 years of architectural visualization",
  projects: [
    {
      id: 1,
      name: "Aurora Grand Hotel",
      year: "2024",
      location: "Dubai, UAE",
      client: "Emirates Development Group",
      software: "3ds Max, Corona, Photoshop",
      description: "A 5-star luxury hotel featuring 200+ rooms, rooftop infinity pool, and grand lobby visualization. The project required over 80 unique renderings for marketing and investor presentations.",
      thumbnail: "/images/project-1.jpg",
      images: [
        "/images/project-1.jpg",
        "/images/interior-1.jpg",
        "/images/interior-3.jpg",
        "/images/exterior-1.jpg",
      ],
    },
    {
      id: 2,
      name: "Nexus Office Tower",
      year: "2023",
      location: "Singapore",
      client: "Pacific Commercial Holdings",
      software: "3ds Max, V-Ray, After Effects",
      description: "Commercial office complex with sustainable design features. Included full exterior visualization, lobby renders, and a 3-minute animated walkthrough for pre-leasing campaign.",
      thumbnail: "/images/project-2.jpg",
      images: [
        "/images/project-2.jpg",
        "/images/exterior-2.jpg",
        "/images/exterior-6.jpg",
        "/images/interior-5.jpg",
      ],
    },
    {
      id: 3,
      name: "Verdant Residences",
      year: "2023",
      location: "Copenhagen, Denmark",
      client: "Nordic Living Architects",
      software: "Blender, Cycles, Photoshop",
      description: "Sustainable residential complex with green rooftops and communal gardens. 45 individual apartment visualizations plus exterior drone-view renders.",
      thumbnail: "/images/project-3.jpg",
      images: [
        "/images/project-3.jpg",
        "/images/exterior-4.jpg",
        "/images/interior-4.jpg",
        "/images/exterior-3.jpg",
      ],
    },
    {
      id: 4,
      name: "Maison de Luxe Boutique",
      year: "2022",
      location: "Paris, France",
      client: "LVMH Properties",
      software: "3ds Max, Corona, Lightroom",
      description: "High-end retail space visualization for a flagship fashion boutique. Focused on material accuracy, lighting design, and atmospheric mood to match brand identity.",
      thumbnail: "/images/project-4.jpg",
      images: [
        "/images/project-4.jpg",
        "/images/interior-6.jpg",
        "/images/interior-2.jpg",
        "/images/exterior-5.jpg",
      ],
    },
  ],
};

// ============================================
// FREE RENDER REQUEST
// ============================================
export const freeRenderData = {
  heading: "REQUEST A FREE RENDER",
  description: "Have a specific project category in mind? We offer one complimentary high-quality render for qualifying architectural projects. Perfect for developers, architects, and designers looking to elevate their presentations.",
  eligibleCategories: [
    "Residential Interiors",
    "Luxury Hotels",
    "Commercial Spaces",
    "Cultural Buildings",
  ],
  note: "Limited to one render per studio. Turnaround time: 5-7 business days. Portfolio usage rights reserved.",
};

// ============================================
// FREE MUSIC / SOUND
// ============================================
export const freeMusicData = {
  heading: "ARCHITECTURAL SOUNDSCAPES",
  description: "Free original background music crafted for architectural visualization walkthroughs. Elevate your renders with immersive audio landscapes.",
  tracks: [
    {
      id: 1,
      title: "Ambient Minimalist",
      duration: "3:24",
      description: "Soft piano and ethereal pads for contemplative spaces",
      src: "/audio/ambient-1.mp3",
      category: "Ambient",
    },
    {
      id: 2,
      title: "Cinematic Luxury",
      duration: "4:12",
      description: "Gentle strings and soft percussion for high-end properties",
      src: "/audio/cinematic-1.mp3",
      category: "Cinematic",
    },
    {
      id: 3,
      title: "Lo-Fi Creative",
      duration: "2:45",
      description: "Warm synth textures for modern interior presentations",
      src: "/audio/lofi-1.mp3",
      category: "Lo-Fi",
    },
  ],
  terms: "All tracks are royalty-free for personal and commercial visualization projects. Attribution appreciated but not required.",
};

// ============================================
// CONTACT SECTION
// ============================================
export const contactData = {
  heading: "LET'S BUILD SOMETHING.",
  email: "eu.renderman@gmail.com",
  phone: "+1 (555) 234-5678",
  location: "Global / Remote",
  availability: "Currently accepting projects for Q3 2025",
  socialHeading: "CONNECT",
  ctaText: "Ready to bring your vision to life? Let's discuss your next project.",
};
