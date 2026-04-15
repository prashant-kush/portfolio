export const personal = {
  name: "Prashant Kushwaha",
  title: "Frontend-Focused Full-Stack Developer",
  subtitle: "Scalable UI Architect · Performance Enthusiast",
  location: "Bengaluru, India · Remote-friendly",
  email: "prashantk.tps@gmail.com",
  phone: "+91 8726647339",
  tagline:
    "I design and ship performant, scalable web products for teams moving fast.",
  availability: "Open to contract & full-time roles",
  github: "https://github.com/prashant-kush",
  linkedin: "https://www.linkedin.com/in/prashant-kushwaha",
  twitter: "https://x.com/Prashant__kush",
  resumeUrl: "/prashant_resume_updated.pdf",
  portrait: "/portrait.jpg",
};

export const stats = [
  { value: "3.5+", label: "Years shipping production" },
  { value: "5K+", label: "MAU on systems I've built" },
  { value: "100", label: "RPS messaging infra" },
  { value: "50%", label: "Avg. load-time improvements" },
];

export const experiences = [
  {
    company: "Atlassian",
    role: "Software Development Engineer 2",
    period: "Jun 2025 — Present",
    location: "Remote",
    highlights: [
      "Building UI components for Atlassian Assets — specifically the Data Manager module — to improve data handling, usability, and scalability.",
      "Driving platform reliability initiatives that uphold 99.95% uptime for Assets as a core Atlassian platform offering.",
    ],
    stack: ["React", "TypeScript", "Design Systems", "Reliability"],
    accent: "from-[#0052CC] to-[#2684FF]",
  },
  {
    company: "Blinkit",
    role: "Software Development Engineer 2",
    period: "Aug 2024 — May 2025",
    location: "Gurugram",
    highlights: [
      "Built a self-serve ad management dashboard used by Cadbury, P&G, HUL with 5K MAU — a dynamic JSON-config driven multi-stage form on React Hook Form + React Query + Zustand + Provider pattern.",
      "Reduced customer TAT from 5 days to 1 day by streamlining ad setup.",
      "Integrated Sentry for real-time error tracking — cut debugging effort 40% and lifted crash-free sessions by 25%.",
    ],
    stack: ["React", "React Hook Form", "React Query", "Zustand", "Sentry"],
    accent: "from-[#F8CB46] to-[#FFB629]",
  },
  {
    company: "Razorpay",
    role: "Software Development Engineer",
    period: "Jul 2022 — Jul 2024",
    location: "Bangalore",
    highlights: [
      "Led end-to-end rollout of the Pre-Processor feature on Razorpay's Templating Service — Mustache-JS integration powering 100 RPS of critical OTP/SMS/WhatsApp traffic.",
      "Integrated PWA into a Micro-Frontend module used by 500+ field sales personnel onboarding merchants onto Razorpay POS.",
      "Shipped omnichannel POS onboarding flow — multi-stage KYC form that drove 300+ organic merchant sign-ups in month one.",
      "Instrumented Prometheus + custom Grafana dashboards for Templating Service — cut incident resolution time 35%.",
      "Boosted Admin Dashboard performance — LCP, FCP, FID, CLS optimizations via tree-shaking, code-splitting, gzip, caching — 50% faster initial load.",
      "Deployed Templating Service on Kubernetes via Helm; ran K6 load/spike tests and tuned HPA to handle 800 RPS peaks.",
      "Cut Admin Dashboard build time 50% — migrated to TypeScript, added HMR, upgraded React/Webpack/ESLint/Node.",
    ],
    stack: [
      "React",
      "Node.js",
      "TypeScript",
      "Kubernetes",
      "Prometheus",
      "Grafana",
      "Webpack",
    ],
    accent: "from-[#0C2451] to-[#3395FF]",
  },
  {
    company: "Razorpay",
    role: "Software Development Engineer Intern",
    period: "Jan 2022 — Jul 2022",
    location: "Bangalore",
    highlights: [
      "Shipped React components and features for the templating service inside Razorpay's admin dashboard.",
    ],
    stack: ["React", "JavaScript"],
    accent: "from-[#0C2451] to-[#3395FF]",
  },
  {
    company: "Rakuten",
    role: "Technical Intern",
    period: "Jan 2021 — Dec 2021",
    location: "Bangalore",
    highlights: [
      "Led implementation of a flexible plugin architecture in Rakuten's TAP project, letting users tailor platform functionality to their needs.",
    ],
    stack: ["Plugin Architecture", "JavaScript"],
    accent: "from-[#BF0000] to-[#FF3E3E]",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Go", "Java", "C++"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "React Query",
      "React Hook Form",
      "Zustand",
      "Webpack",
      "Framer Motion",
    ],
  },
  {
    label: "Backend",
    items: ["Node.js", "GraphQL", "REST", "Mustache templating"],
  },
  {
    label: "Infra & Observability",
    items: [
      "Kubernetes",
      "Helm",
      "Docker",
      "Prometheus",
      "Grafana",
      "Sentry",
      "PagerDuty",
      "Grafana K6",
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "PostgreSQL"],
  },
  {
    label: "Practices",
    items: [
      "Performance optimization",
      "Web vitals",
      "Design systems",
      "Micro-frontends",
      "CI/CD",
    ],
  },
];

export const projects = [
  {
    name: "UltimateMock.com",
    summary:
      "AI-powered mock interview platform for MBA aspirants — live interviews with automated evaluation and structured feedback. Built solo, end-to-end: frontend, backend, infra.",
    tags: ["Next.js", "Node.js", "AI", "Solo build"],
    href: "https://ultimatemock.com",
    metric: "Founded 2025",
  },
  {
    name: "Aurorafest.org",
    summary:
      "Event platform for IIIT Gwalior's cultural fest — bookings and Razorpay payments for 10,000+ attendees.",
    tags: ["Next.js", "Razorpay", "Events"],
    metric: "10K+ attendees",
  },
  {
    name: "Blinkit · Self-Serve Ads",
    summary:
      "JSON-config driven multi-stage form powering ad campaigns for Cadbury, P&G, HUL. Cut customer TAT from 5 days to 1.",
    tags: ["React", "Zustand", "Forms"],
    metric: "5K MAU",
  },
  {
    name: "Razorpay · Templating Service",
    summary:
      "Mustache-JS Pre-Processor, Prometheus/Grafana observability, Kubernetes + Helm deploy tuned for 800 RPS peaks.",
    tags: ["Node.js", "K8s", "Observability"],
    metric: "100 RPS prod",
  },
  {
    name: "NurturX",
    summary:
      "Mentoring platform connecting undergraduates with seniors for internship guidance — structured sessions, profiles, and discovery.",
    tags: ["React", "Mentorship", "EdTech"],
    metric: "2020 · solo build",
  },
  {
    name: "Primal 6",
    summary:
      "Emergency response app that alerts nearby drivers when an ambulance is approaching — real-time location sharing and audio alerts.",
    tags: ["Mobile", "Realtime", "Civic tech"],
    metric: "2020 · solo build",
  },
];

export const achievements = [
  {
    title: "Smart India Hackathon 2020",
    description: "Selected for the Grand Finale.",
  },
  {
    title: "IIIT Gwalior",
    description: "Integrated PG — B.Tech IT + MBA (Grad. 2022).",
  },
];
