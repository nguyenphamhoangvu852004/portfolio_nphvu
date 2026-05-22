export const personalDetails = {
  name: "Nguyen Pham Hoang Vu",
  // tagline: "Backend Engineer",
  about:
    "Strong fundamentals in software engineering with a focus on backend development. Passionate about building scalable and maintainable systems, with long-term goals of growing into a Senior Backend Engineer and eventually pursuing Solution Architecture.",
  avatar: "/avatar.jpg",
};

export const socialMediaUrl = {
  github: "https://github.com/nguyenphamhoangvu852004",
  linkedin: "https://www.linkedin.com/",
  // twitter: "https://twitter.com/",
};

export const contactDetails = {
  email: "nphvu.dev@gmail.com",
  phone: "+84 388 280 340",
};

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Experience", path: "/experience" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
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
    major: "Bachelor of Software Engineering",
    university: "Gia Dinh University",
    location: "Vietnam",
    universityUrl: "https://giadinh.edu.vn/",
    description: "GPA: 3.22/4.0 - Very Good",
    type: "Graduated",
    duration: "09/2022 — 11/2025",
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
  "Redis",
  "Kafka",
  "Clean Architecture",
  "Microservices",
  "AWS EC2 (deployment)",
  "Unit Testing (using Jest)",
];

export const techStackEducated = [
  "C, C++",
  "C#",
  ".Net",
  "Winform",
  "CI/CD",
  "DDD (Domain-Driven Design)",
  "SOLID Principles",
  "Design Patterns",
];

export const tools = ["Git", "GitHub", "Docker"];

export const projectDetails = [
  {
    id: "lopet",
    title: "Social Media — Lopet",
    tagline: "Backend system for a social pet-community platform.",
    description:
      "A social media platform with user auth, posts, comments, likes, photos, real-time messaging, and advertising.",
    longDescription: `<strong>Lopet</strong> was my capstone project. Developed under the guidance of mentors and capstone project supervisors. Our team consisted of <strong>six members</strong>: one Business Analyst, four Front-end Developers, and one Back-end Developer — <strong><em>me</em></strong>.
    </br> </br> Although this was not my first hands-on project, it was the <u>largest and most challenging project</u> I had ever worked on, with many responsibilities that I had to handle on my own. 
    </br> </br>After completing the project, I realized there were many areas where I still needed improvement, especially in software architecture, database design mindset, domain entity organization, communication skills, and teamwork skills.
</br> </br>
<p>
  I would like to sincerely thank to two acedemic supervisor 
  <strong>Lê Huỳnh Phước</strong>, <strong>Châu Trần Trúc Ly</strong>
  and two senior mentors <strong>Diệp Trí Thành</strong>, <strong>Đoàn Hữu Trung</strong>
  for their continuous guidance, valuable feedback, and support throughout the development of this capstone project.
</p>`,
    features: [
      "Robust security using JWT with slide-window refresh tokens and secure hashing.",
      "First time face to intergrate third party storage (Cloudinary) platform in storage media",
      "Real-time instant messaging using SocketIO provide smooth and responsive chat experience.",
      "Introduced to the concept of Redis ram-based cache in OTP authentication.",
      "Completed the core social media platform's feature in a short timeframe of around 25 days.",
      "Learned how to work in Agile environment, communication skill, problem-solving, Git workflow practices, and AWS EC2 deployment.",
    ],
    challenges: [
      {
        title: "System Architecture & Project Scope",
        content:
          "As the sole backend developer, one of the biggest challenges was designing and maintaining the entire backend architecture within a limited development timeframe. At the beginning of the project, I lacked experience in organizing scalable modules, defining clear domain boundaries, and maintaining consistency across the codebase. Over time, I gradually improved the structure by research more about OOP, design patterns, architechture specific hard-diving into Clean Architecture theory and practices, read more blogs about architechtures. This not only helped me broaden my mindset, but also improved my English.",
      },
      {
        title: "Database Design Mindset",
        content:
          "One difficulty I faced was designing relational data models that could support future scalability while still remaining simple enough for rapid development. I realized that my initial schema designs contained several inconsistencies and tightly coupled relationships. Through this project, I became more aware of normalization, relationship management, indexing strategies, and transaction management",
      },
      {
        title: "Real-time Messaging",
        content:
          "Implementing real-time messaging using Socket.IO was one of the most technically challenging parts of the project. I had to learn about event-based communication, connection lifecycle management, online presence handling (this feature is helped by the leader of Frontend team, I really appreciate that)",
      },
      {
        title: "Team Communication & Collaboration",
        content:
          "Beyond technical challenges, communication and collaboration were also areas where I realized I needed improvement. Since the backend system directly affected frontend integration, unclear API contracts or delayed communication sometimes caused integration issues. This experience taught me the importance of proactive communication, documentation, and teamwork in software engineering projects.",
      },
      // {
      //   title: "Things I Still Need to Improve",
      //   content:
      // },
    ],
    learnings: `
  <p>
    This project helped me better understand the importance of scalable software architecture,
    maintainable code organization, and effective communication in a real development environment.
  </p>

  <p>
    I also gained hands-on experience with Redis, Socket.IO, Cloudinary integration,
    and backend deployment on AWS EC2.
  </p>

  <p>
    Beyond technical knowledge, this experience broadened my mindset,
    improved my English communication skills,
    and motivated me to continuously improve as a backend engineer.
  </p>
`,
    role: "Sole Backend Developer (Internship)",
    timeline: "April 2025 — June 2025",
    techstack: "TypeScript, ExpressJS, MySQL, Redis",
    previewLink: "#",
    supervisors: ["Lê Huỳnh Phước", "Châu Trần Trúc Ly"],
    mentors: [
      { name: "Diệp Trí Thành", role: "Senior Backend Developer" },
      { name: "Đoàn Hữu Trung", role: "Senior Frontend Developer" },
    ],
    githubLink: "https://github.com/nguyenphamhoangvu852004/lopet-be",
    image: "/logoPetGram.png",
  },
  {
    id: "ticket4u",
    title: "Ticket Concert Booking — TICKET4U",
    tagline:
      "Event-driven microservices architecture for high-demand concert ticket booking.",
    description:
      "A personal project for learning and applying modern technologies across microservices and event-driven architecture.",
    longDescription: "...",
    // "TICKET4U is an enterprise-grade seat booking and ticketing platform designed to manage high-volume transactional spikes during popular concert flash sales. Emphasizing resilience and fault tolerance, the platform operates via a decoupled microservices setup. Each service is fully isolated with its own dedicated datastore, communicating asynchronously using event streams to maintain consistency and highly responsive purchase pipelines.",
    features: [
      "...",
      // "Modular microservices using Java Spring Boot (Booking), NestJS (Payments), and Go/Gin (Concerts/Inventory).",
      // "Asynchronous messaging orchestration powered by Apache Kafka for reliable, transaction-safe booking streams.",
      // "Distributed locks with Redisson to prevent duplicate seat assignments during sub-millisecond checkout spikes.",
      // "Integrated search engine featuring composite index lookups for immediate event catalog exploration.",
      // "Comprehensive test coverage including Unit, Integration, and Mock-API integration tests.",
    ],
    // challenges:
    //   "Preventing double-booking of exact seats during flash sales under high concurrent purchase requests. Using database table/row locks caused catastrophic query bottlenecks and transaction timeouts. The solution was designing a robust distributed lock system using Redis. Requests must acquire a transient TTL-backed seat lock token prior to transaction processing, successfully isolating concurrent seat captures at scale with zero overhead.",
    learnings:
      // "Deepened technical experience in Kafka event-stream orchestration, distributed transaction management (Saga pattern), lock synchronization principles, and containerized microservice deployment structures.",
      "...",
    role: "Backend Engineer",
    timeline: "July 2025 — Present",
    techstack:
      "TypeScript, NestJS, Go, Gin, Java, Spring Boot, MySQL, Redis, Kafka",
    previewLink: "#",
    githubLink: "https://github.com/nguyenphamhoangvu852004/ticket4u",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "apparel-store-erp",
    title: "Apparel Store ERP (Coming Soon)",
    tagline:
      "Enterprise resource planning backend system for automated apparel business logistics.",
    description:
      "Backend RESTful API system that serves as the central ERP core for the entire business. Production-grade, scalable, highly reliable, and capable of handling real-world operational complexity.",
    // longDescription:
    //   "The Apparel Store ERP represents a production-grade backend suite built using Domain-Driven Design (DDD) to automate corporate retail, inventory tracking, multi-warehouse shipping logistics, and finance ledgers. Moving beyond basic CRUD models, the system implements complex real-world workflows, strict validation boundaries, dynamic SKU generation, and comprehensive auditability across all storage warehouses.",
    // features: [
    //   "Strict Domain-Driven Design architecture separating Core, Supporting, and Generic subdomains.",
    //   "Auditable transaction ledger tracking every stock fluctuation with full developer and user attribution.",
    //   "Multi-warehouse synchronization with dynamic stock reorder threshold notifications.",
    //   "State-machine design patterns managing orders through structured, irreversible shipping processes.",
    //   "Flexible aggregate reporting APIs for calculation of wholesale margins, turnover rates, and supplier efficiency.",
    // ],
    // challenges:
    //   "Managing inventory sync conflicts between multiple concurrent stock update requests across physical warehouses. Implemented an Optimistic Concurrency Control (OCC) mechanism using record version checks. If a conflict occurs, the system triggers a lightweight automated retry mechanism, eliminating database locking issues and ensuring absolute consistency in ledger counts.",
    // learnings:
    //   "Learned the depth of modeling intricate business systems using DDD, mapping real-world business constraints directly into clean code architecture, and database isolation levels (Serializable vs Repeatable Read).",
    // role: "Lead Backend Architect",
    // timeline: "October 2025 — Present",
    techstack: "TypeScript, NestJS, MySQL ,...",
    // previewLink: "#",
    // githubLink: "https://github.com/nguyenphamhoangvu852004/ApparelStoreERP",
    image:
      "https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
