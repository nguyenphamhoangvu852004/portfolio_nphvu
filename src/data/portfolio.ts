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
  { label: "Technical", path: "/technical" },
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
    role: "Backend Engineer (Intern)",
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
    tagline: "Microservices architecture for concert ticket booking workflow.",
    description:
      "A personal project focused on exploring distributed systems, concurrency handling, and scalable backend architecture through a real-world ticket booking scenario.",

    longDescription: `
<strong>Ticket4U</strong> was a backend-focused personal project inspired by real-world ticket booking platforms such as Ticketbox and Ticketmaster. The project was built primarily for self-study and experimentation with distributed systems, microservices architecture, and high-concurrency backend workflows.

</br></br>

Rather than focusing only on feature implementation, I wanted to better understand the engineering challenges behind large-scale booking systems, especially problems related to concurrent seat reservations, transactional consistency, distributed communication, and temporary reservation management.

</br></br>

One of the most technically challenging parts of the project was designing a reliable seat booking workflow. Initially, I underestimated how difficult it would be to prevent duplicate seat reservations during concurrent purchase requests. Through researching and experimenting with multiple approaches, I gradually became more familiar with concepts such as pessimistic locking, optimistic locking, distributed locking, transactional boundaries, and race condition prevention.

</br></br>

This project also gave me the opportunity to explore asynchronous communication using Apache Kafka between microservices. While implementing event-driven workflows, I realized how important message reliability, eventual consistency, retry mechanisms, and failure handling are in distributed systems.

</br></br>

In addition, I experimented with Redis caching strategies to reduce unnecessary database access and improve response performance across multiple services. Although the system was still relatively small compared to production-scale architectures, it significantly expanded my understanding of scalability, maintainability, and backend system design.

</br></br>

One important realization from this project was that building distributed systems involves much more than simply splitting services apart. Service boundaries, inter-service communication, data consistency, observability, and deployment complexity all introduced challenges that I had never encountered in traditional monolithic applications.

</br></br>

Beyond technical implementation, Ticket4U strengthened my problem-solving mindset and encouraged me to think more critically about engineering <strong>trade-offs</strong>, system reliability, and long-term maintainability. It also motivated me to continue learning more deeply about distributed architecture, event-driven systems, and high-availability backend engineering.
`,

    features: [
      "Designed modular microservices using Java Spring Boot (Order Service), NestJS (Authentication & User Management), and Go/Gin (Concert Ticket Management).",

      "Implemented asynchronous event-driven communication using Apache Kafka between distributed services.",

      "Applied Redis caching strategies to improve performance and reduce repetitive database queries across multiple services.",

      "Explored concurrency control techniques for seat reservation workflows, including transactional consistency and distributed locking concepts.",

      "Designed scalable RESTful APIs with clear service boundaries and independent business responsibilities.",

      "Containerized services using Docker to simplify development and deployment workflows.",

      "Learned how distributed systems introduce challenges related to eventual consistency, inter-service communication, and fault tolerance.",
    ],

    challenges: [
      {
        title: "Consistency Boundaries Context",
        content: `Im meaning to <mark>DDD</mark> (Domain-Driven Design). The point of DDD is to model the domain as a set of entities and their relationships, and to enforce business rules and invariants at the boundaries of these entities. However, I realized that I did not apply DDD consistently across the system, especially within the concert ticket service. This inconsistency occasionally caused unclear domain boundaries, confusing business logic organization, and misunderstandings during implementation. It became an important lesson for me regarding the importance of domain modeling and architectural consistency in large-scale backend systems.`,
      },
      {
        title: "Concurrency & Overselling Product in Stock ",
        content: `One of the biggest challenges was preventing the overselling problem during high-concurrency ticket purchases. This problem introduced me to transactional isolation, pessimistic locking, optimistic locking, and distributed locking strategies. <mark>Trade-offs</mark> between Monolithic and Microservices architectures also became apparent.`,
      },

      {
        title: "Microservices Communication Complexity",
        content: `Separating the system into multiple services significantly increased architectural complexity. I had to think more carefully about service boundaries, asynchronous communication, message reliability, and eventual between distributed services.`,
      },

      {
        title: "Distributed System Thinking",
        content: `This project changed the way I think about backend systems. I realized that scalability is not only about performance, but also about maintainability, observability, fault tolerance, and operational complexity.`,
      },

      // {
      //   title: "Areas I Still Need to Improve",
      //   content: `Although the project helped me explore many advanced backend concepts, I still lacked practical experience in production-grade distributed systems, monitoring, CI/CD pipelines, advanced testing strategies, and large-scale infrastructure management.`,
      // },
    ],

    learnings: `
<p>
  Through this project, I gained deeper exposure to distributed systems concepts such as asynchronous messaging, transactional consistency, concurrency control, and microservices architechture .
</p>

</br>

<p>
  I also became more familiar with Apache Kafka, Redis caching strategies, Docker-based service containerization, and the architectural trade-offs between monolithic and distributed systems.
</p>

</br>

<p>
  Beyond technical knowledge, this project significantly improved my problem-solving mindset and taught me how to approach backend engineering problems from a scalability and reliability perspective rather than focusing only on feature implementation.
</p>

</br>

<p>
  At the same time, I realized that I still lacked practical experience in several important areas, including production-grade distributed systems, monitoring and observability, CI/CD pipelines, advanced testing strategies, and large-scale infrastructure management. This awareness motivated me to continue learning more deeply about scalable backend engineering and system reliability.
</p>

</br>

<p>
  I strongly believe that this project became an important milestone in my backend engineering journey and significantly broadened the way I think about modern backend architectures.
</p>
`,

    role: "Backend Engineer",
    timeline: "July 2025 — Present",

    techstack:
      "TypeScript, NestJS, Go, Gin, Java, Spring Boot, MySQL, Redis, Kafka, Docker",

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
    githubLink: "https://github.com/nguyenphamhoangvu852004/ApparelStoreERP",
    image:
      "https://images.unsplash.com/photo-1616156027751-fc9a850fdc9b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
