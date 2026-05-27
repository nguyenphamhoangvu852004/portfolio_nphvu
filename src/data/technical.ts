export type TechDiscussion = {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  tagColor: string;
  context: string;
  approach: string;
  tradeoffs: { option: string; pro: string; con: string }[];
  conclusion: string;
  relatedProjects: string[];
  keywords: string[];
};

export const technicalDiscussions: TechDiscussion[] = [
  // {

  //   id: "concurrency-locking",
  //   title: "Concurrency Control & Race Conditions",
  //   subtitle: "Preventing overselling in high-traffic ticket booking systems",
  //   tag: "Distributed Systems",
  //   tagColor: "purple",
  //   context:
  //     "In TICKET4U, users can simultaneously purchase the same concert seat. Without proper concurrency control, two users could both read a seat as 'available', both complete payment, and the seat would be oversold — a critical business failure. This forced me to deeply research concurrency models and locking strategies in relational databases and distributed environments.",
  //   approach:
  //     "I explored three main strategies: <mark>Pessimistic Locking</mark> (SELECT FOR UPDATE), <mark>Optimistic Locking</mark> (version-based conflict detection), and <mark>Distributed Locking</mark> via Redis (Redlock algorithm). Each has a distinct use case depending on contention level, system topology, and acceptable latency.",
  //   tradeoffs: [
  //     {
  //       option: "Pessimistic Locking",
  //       pro: "Strong consistency guarantee. Safe for high-contention scenarios. Simple mental model.",
  //       con: "Deadlock risk under improper ordering. Reduces throughput by blocking concurrent reads. Not suitable in distributed multi-DB setups.",
  //     },
  //     {
  //       option: "Optimistic Locking",
  //       pro: "No lock held during read. High throughput for low-contention flows. Works well across services.",
  //       con: "Requires retry logic on conflicts. Poor performance if contention is actually high — retry storms emerge.",
  //     },
  //     {
  //       option: "Distributed Locking (Redis Redlock)",
  //       pro: "Works across microservices boundaries. Sub-millisecond lock acquisition. Supports TTL-based auto-release.",
  //       con: "Not truly atomic under network partition (CAP trade-off). Adds Redis as a critical dependency. Edge cases with clock drift in Redlock.",
  //     },
  //   ],
  //   conclusion:
  //     "For a real production concert booking system, I would combine approaches: use a Redis distributed lock as a fast guard at the API gateway layer to prevent duplicate concurrent requests for the same seat, then use database-level pessimistic locking inside the transaction for the final write. Optimistic locking is better suited for lower-contention entities like user profile updates.",
  //   relatedProjects: ["ticket4u"],
  //   keywords: [
  //     "Concurrency",
  //     "Race Condition",
  //     "Pessimistic Lock",
  //     "Optimistic Lock",
  //     "Redis",
  //     "Distributed Systems",
  //   ],
  // },
  {
    id: "microservices-vs-monolith",
    title: "Microservices vs. Monolith: When NOT to Split",
    subtitle: "Architectural decision-making from my real experience",
    tag: "Architecture",
    tagColor: "sky",
    context: `
<h1>From Monolith → “Fake” Microservices → Real Engineering Lessons</h1>

<p>
Every engineer starts with a monolith at some point.
</p>

<p>
<b>I did too.</b>
</p>

<br/>

<hr/>

<h2>🏗️ The Monolith Phase</h2>

<p>
Most of my university and academic projects were built as <mark>monolith applications</mark>, including my Capstone project.
</p>

<p>
At that time, monolith architecture felt completely fine because the systems were still relatively simple:
</p>

<ul>
<li>CRUD operations</li>
<li>Straightforward business flows</li>
<li>Single database</li>
<li>Simple deployment</li>
</ul>

<p>
Honestly... everything felt manageable.
</p>

<br/>

<hr/>

<h2>🚀 Then I Started Building TICKET4U</h2>

<p>
After graduating, I started building <b>TICKET4U</b> using:
</p>

<pre>
- NestJS
- Go/Gin
- Spring Boot
</pre>

<p>
And in my head, I thought:
</p>

<blockquote>
<i>“Okay, this is microservices now.”</i>
</blockquote>

<p>
And honestly...
</p>

<h3>It worked at first 🤣</h3>

<br/>

<hr/>

<h2>⚠️ The Complexity Explosion</h2>

<p>
As the application grew, things started becoming messy.
</p>

<p>
Each service had its own:
</p>

<ul>
<li>Database access layer</li>
<li>Caching mechanism</li>
<li>Logging flow</li>
<li>REST communication logic</li>
<li>Error handling strategy</li>
</ul>

<p>
And more workflows were introduced around:
</p>

<ul>
<li><b>Order Processing</b></li>
<li><b>Concert Management</b></li>
<li><b>User Authentication</b></li>
</ul>

<br/>

<div style="padding:16px;border-left:5px solid #f59e0b;background:#fff7ed;">
<h3>💡 That was the moment I realized something important:</h3>

<p>
I didn’t actually understand the <b>microservices mindset</b> yet.
</p>
</div>

<br/>

<p>
I was only:
</p>

<ul>
<li>Splitting responsibilities into multiple services</li>
<li>Creating more APIs</li>
<li>Adding more repositories</li>
<li>Running more containers</li>
</ul>

<p align="center">
<b>...and calling it “Microservices Architecture”.</b>
</p>

<br/>

<p>
Looking back, that version of myself kinda sucked 😅
</p>

<p>
But I accept that because:
</p>

<blockquote>
Every engineer goes through this phase.
</blockquote>

<br/>

<hr/>

<h2>🔐 My Biggest Mistake: Authentication & Service Communication</h2>

<p>
I split the system into:
</p>

<pre>
Order Service
Concert Ticket Service
User/Auth Service
</pre>

<p>
Sounds clean on paper.
</p>

<p>
But then every service started implementing its own JWT verification mechanism.
</p>

<p>
Whenever:
</p>

<ul>
<li>Order Service processed a workflow</li>
<li>An organizer created a concert</li>
<li>Services communicated internally</li>
</ul>

<p>
The authentication logic got duplicated everywhere.
</p>

<br/>

<div style="padding:18px;border-radius:10px;background:#f3f4f6;">
<h3>🚫 That was when I finally understood:</h3>

<p>
<b>Simply splitting services does NOT automatically give you a good microservices architecture.</b>
</p>
</div>

<br/>

<hr/>

<h2>🧠 What I Understand Now</h2>

<p>
Microservices are not just:
</p>

<ul>
<li>More repositories</li>
<li>More APIs</li>
<li>More Docker containers</li>
</ul>

<p>
They require:
</p>

<ul>
<li><b>Clear domain boundaries</b></li>
<li><b>Distributed system thinking</b></li>
<li><b>Communication strategies</b></li>
<li><b>Data consistency planning</b></li>
<li><b>Operational maturity</b></li>
</ul>

<br/>

<p align="center">
<mark>
Sometimes a well-structured monolith is far better than premature microservices.
</mark>
</p>

<br/>

<hr/>

<h2>📚 Final Thought</h2>

<p>
I’m still learning this every day while building systems.
</p>

<p>
But honestly, making these architectural mistakes early helped me understand software engineering much deeper than tutorials ever could.
</p>
`,
    approach: `The real question is not 'monolith or microservices?' but <mark>'what is my team's operational maturity and what problems am I actually solving?'</mark>. Microservices solve org-level problems (independent deploys, team autonomy) more than technical ones. A well-structured modular monolith can achieve most scalability goals with far less operational overhead.
      </br>
      </br>
      Microservices dont make you become a senior backend engineer. Its a matter of maturity and maturity is not a binary. You can be a senior backend engineer but not a microservices architect. 🤣
      `,
    tradeoffs: [
      {
        option: "Microservices",
        pro: "Split when the ecosystem have become larger. Work with super team is perfect. Technology heterogeneity (Go - really high performance and fast to develop).",
        con: "Distributed tracing complexity. Use a lot of computer hardware resource such as Memmory and CPU (containerization by Docker make my laptop slower). More complex of managing those microservice. When you work alone, you have to jump into multiple projects to observe the logs and I dont think you like to do that 🤣",
      },
      {
        option: "Monolith",
        pro: "Simpler debugging (single process, simple log observation). Transactional consistency is free. One deployment pipeline. Easier developer onboarding.",
        con: "Once the Order Service die, the customer even cannot see the Product list 😊. It need a good Architechture applied to developer coding experience. Pretty much tight coupling of domain model and business logic. Sometimes, you will see that the business logic is not well designed and you need to refactor it. You need to be very careful when you are working on the monolith.",
      },
    ],
    conclusion:
      "My conclustion for you is ''DON'T CHOOSE''. Each of Architechture is good for different situation. You need to choose the architecture that fits your team and your business. There is no one architecture fits all. 🤣. But if I work alone, if I own the whole codebase, if I am the only developer of the project, I will choose the monolith architecture. I think it is the best architecture for lonely developer. 😊. Hey, don't chaos about asynchronous architecture, or event-driven architecture. It is not the problem of architecture. It can be applied in both Monolith and Microservices projects. The only thing is, you need to be very careful when you are working with dependency. You need to be very careful when you are working on the monolith ❤️ ",
    relatedProjects: ["ticket4u", "lopet"],
    keywords: [
      "Microservices",
      "Monolith",
      "Architecture",
      "Scalability",
      "Trade-offs",
      "System Design",
    ],
  },
  // {
  //   id: "clean-architecture-ddd",
  //   title: "Clean Architecture & DDD in Practice",
  //   subtitle: "Lessons from applying layered architecture across real projects",
  //   tag: "Software Design",
  //   tagColor: "emerald",
  //   context:
  //     "In Lopet (my capstone), I built the backend without a clear architectural philosophy. The result: business logic leaked into controllers, database schemas drove domain design, and changing one feature broke three others. This pain motivated me to deeply study Clean Architecture and Domain-Driven Design (DDD), and I applied them in TICKET4U and the Apparel Store ERP.",
  //   approach:
  //     "Clean Architecture separates software into concentric dependency rings: <mark>Domain → Application → Infrastructure → Interface</mark>. The key rule: inner rings never depend on outer rings. DDD adds semantic richness — Entities, Value Objects, Aggregates, and Repositories model real business concepts rather than database tables. The boundary between bounded contexts is the most difficult part to get right.",
  //   tradeoffs: [
  //     {
  //       option: "Clean Architecture",
  //       pro: "Business logic is framework-independent. Easy to unit-test use cases in isolation. Swapping infrastructure (e.g., MySQL → PostgreSQL) requires minimal changes.",
  //       con: "More boilerplate upfront. Steeper learning curve for teams. Risk of over-engineering for simple CRUD services where the overhead outweighs benefits.",
  //     },
  //     {
  //       option: "Domain-Driven Design",
  //       pro: "Ubiquitous language bridges gap between devs and business. Aggregates enforce invariants at the boundary. Bounded contexts prevent 'big ball of mud' as system grows.",
  //       con: "Requires deep understanding of the domain first — rushing DDD produces incorrect models. High upfront modeling cost. Bounded context boundaries are hard to get right the first time.",
  //     },
  //   ],
  //   conclusion:
  //     "I now treat Clean Architecture as a structural default for any non-trivial backend. DDD is reserved for domains with genuine business complexity. The most important lesson: <mark>don't let the database drive your domain model</mark>. Start from the business problem, model entities around behavior, then map to persistence — not the other way around.",
  //   relatedProjects: ["ticket4u", "lopet", "apparel-store-erp"],
  //   keywords: [
  //     "Clean Architecture",
  //     "DDD",
  //     "SOLID",
  //     "Domain Modeling",
  //     "Bounded Context",
  //     "Design Patterns",
  //   ],
  // },
  // {
  //   id: "event-driven-kafka",
  //   title: "Event-Driven Architecture with Apache Kafka",
  //   subtitle: "Async messaging, eventual consistency, and failure handling",
  //   tag: "Distributed Systems",
  //   tagColor: "amber",
  //   context:
  //     "In TICKET4U, the Order Service (Spring Boot) needs to notify the Concert Service (Go/Gin) when a booking is confirmed, and the Auth Service (NestJS) when a user registers. Synchronous REST calls between services would create tight coupling and cascading failures. This pushed me to explore event-driven communication using Apache Kafka.",
  //   approach:
  //     "Kafka acts as a durable message log — producers publish events, consumers process them independently. Key design decisions included: choosing the right <mark>partition strategy</mark> (partition by userId to guarantee order per user), setting <mark>consumer group IDs</mark> correctly to avoid duplicate processing, and designing for <mark>idempotent consumers</mark> to handle at-least-once delivery safely.",
  //   tradeoffs: [
  //     {
  //       option: "Synchronous REST (Point-to-Point)",
  //       pro: "Simple to implement and debug. Immediate feedback on failure. No additional infrastructure needed.",
  //       con: "Tight coupling between services. Cascading failures — if downstream is down, upstream fails. Hard to scale independently.",
  //     },
  //     {
  //       option: "Async Messaging via Kafka",
  //       pro: "Services are fully decoupled. Messages are durable — consumers catch up after downtime. High throughput. Natural audit log of all events.",
  //       con: "Eventual consistency — data may be stale briefly. Harder to debug (no direct request-response). Requires careful design for idempotency and duplicate handling.",
  //     },
  //   ],
  //   conclusion:
  //     "Kafka is powerful but introduces real operational complexity. For inter-service workflows that can tolerate eventual consistency (e.g., sending confirmation emails, updating statistics), async messaging is the right tool. For flows requiring immediate consistency (e.g., payment transactions), synchronous calls with saga compensation are safer. The key insight: <mark>design your consumers to be idempotent by default</mark>.",
  //   relatedProjects: ["ticket4u"],
  //   keywords: [
  //     "Kafka",
  //     "Event-Driven",
  //     "Async Messaging",
  //     "Eventual Consistency",
  //     "Pub/Sub",
  //     "Microservices",
  //   ],
  // },
  // {
  //   id: "redis-caching-strategy",
  //   title: "Redis Caching Strategies",
  //   subtitle:
  //     "When, what, and how to cache — and why cache invalidation is hard",
  //   tag: "Performance",
  //   tagColor: "rose",
  //   context:
  //     "In both Lopet and TICKET4U, I integrated Redis for different purposes: OTP storage with TTL in Lopet, and query result caching + session management in TICKET4U. These experiences taught me that caching is not just a performance trick — it's a consistency contract that must be carefully managed.",
  //   approach:
  //     "I explored three main caching patterns: <mark>Cache-Aside (Lazy Loading)</mark> — application checks cache first, fetches from DB on miss; <mark>Write-Through</mark> — write to cache and DB simultaneously; and <mark>Write-Behind (Write-Back)</mark> — write to cache first, flush to DB asynchronously. Each has different consistency and performance characteristics.",
  //   tradeoffs: [
  //     {
  //       option: "Cache-Aside",
  //       pro: "Only requested data is cached (no wasted memory). Cache failures don't block writes. Simple to implement.",
  //       con: "Cache miss penalty on first load. Risk of stale data if TTL is too long. Cache stampede on popular cache misses (many simultaneous DB hits).",
  //     },
  //     {
  //       option: "Write-Through",
  //       pro: "Cache is always fresh. No cold-start penalty after writes. Good for read-heavy workloads.",
  //       con: "Write latency increases (must write both cache and DB). Caches data that may never be read. Requires cache-DB transaction coordination.",
  //     },
  //     {
  //       option: "Write-Behind",
  //       pro: "Lowest write latency. DB absorbs writes in batches — great for high-write workloads.",
  //       con: "Risk of data loss if cache crashes before flush. Complex failure recovery. Harder to reason about consistency.",
  //     },
  //   ],
  //   conclusion:
  //     "Cache-Aside is my default choice for most read-heavy APIs. For OTP and session tokens, Redis with strict TTL is natural. The hardest part of caching is <mark>cache invalidation</mark> — deciding when to evict stale data. My rule: cache only what you can afford to be briefly stale, and always design your system to fall back gracefully on cache miss rather than treating cache as a source of truth.",
  //   relatedProjects: ["lopet", "ticket4u"],
  //   keywords: [
  //     "Redis",
  //     "Caching",
  //     "Cache-Aside",
  //     "Write-Through",
  //     "Performance",
  //     "TTL",
  //   ],
  // },
];
