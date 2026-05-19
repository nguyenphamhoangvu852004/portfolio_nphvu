export const personalDetails = {
  name: "Nguyen Pham Hoang Vu",
  tagline: "Backend Engineer from Vietnam",
  about:
    "Strong fundamentals in software engineering with a focus on backend development. Passionate about building scalable and maintainable systems, with long-term goals of growing into a Senior Backend Engineer and eventually pursuing Solution Architecture.",
  avatar: "/avatar.jpg",
};

export const socialMediaUrl = {
  github: "https://github.com/nguyenphamhoangvu852004",
  linkedin: "https://www.linkedin.com/",
  twitter: "https://twitter.com/",
};

export const contactDetails = {
  email: "nphvu.dev@gmail.com",
  phone: "+84 388 280 340",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const workDetails = [
  {
    position: "Backend Developer",
    company: "Sea Dragon Technology",
    companyUrl: "https://sdtc.vn/",
    location: "Vietnam",
    type: "Internship",
    duration: "April 2025 — June 2025",
    description:
      "Served as a sole Backend Developer. Work closely with Frontend Developers and Bussiness Analysts to build serveral projects: backend for a social media platform, backend for a company consult website clone, and backend for a core chat system.",
  },
];

export const eduDetails = [
  {
    major: "Software Engineering",
    university: "Gia Dinh University",
    location: "Vietnam",
    universityUrl: "https://giadinh.edu.vn/",
    description: "GPA: 3.22/4.0 - Very Good",
    type: "Graduated",
    duration: "2022 — 2025",
  },
];

export const techStackExperienced = [
  "TypeScript",
  "JavaScript",
  "NestJS",
  "ExpressJS",
  "Go",
  "Gin",
  "Java",
  "Spring Boot",
  "MySQL",
  "Clean Architecture",
];

export const techStackEducated = [
  "C, C++",
  "C#",
  ".Net",
  "Winform",
  "Redis",
  "Kafka",
  "Unit Testing (using Jest)",
  "CI/CD",
  "DDD (Domain-Driven Design)",
  "SOLID Principles",
  "Design Patterns",
  "Microservices",
  "AWS EC2 (deployment)",
];

export const tools = ["Git", "GitHub", "Docker"];

export const projectDetails = [
  {
    title: "Social Media — Lopet",
    description:
      "A social media platform with user auth, posts, comments, likes, photos, real-time messaging, and advertising.",
    techstack: "TypeScript, ExpressJS, MySQL, Redis",
    previewLink: "#",
    githubLink: "https://github.com/nguyenphamhoangvu852004/lopet-be",
    image:
      // "https://images.unsplash.com/photo-1611162617474-5b21e939e966?w=800&auto=format&fit=crop&q=80",
      "https://placehold.co/600x400",
  },
  {
    title: "Ticket Concert Booking — TICKET4U",
    description:
      "A personal project for learning and applying modern technologies across microservices and event-driven architecture.",
    techstack:
      "TypeScript, NestJS, Go, Gin, Java, Spring Boot, MySQL, Redis, Kafka",
    previewLink: "#",
    githubLink: "https://github.com/nguyenphamhoangvu852004",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=80",
  },
];
