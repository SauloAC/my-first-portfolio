import type { Project } from "../types/project";

export const projectsData: Project[] = [
  {
    id: 1,
    title: "UpImigration Static Website",
    description:
      "Modern immigration consultation website with multilingual support",
    longDescription:
      "Redeveloped a static website using Next.js, TypeScript, and Tailwind CSS, improving user experience by 50%. Implemented localization for Spanish and Portuguese using next-intl.",
    image: "/immigration-website-homepage.png",
    demoUrl: "https://migration-crew-website.vercel.app/",
    githubUrl: "https://github.com/migration-crew/immigration-website",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "next-intl",
    ],
    category: "Web Development",
    date: "2024",
    status: "completed",
  },
  {
    id: 2,
    title: "Immigration Dashboard",
    description:
      "Dynamic web application for immigration consultation management",
    longDescription:
      "Full-stack application with authentication, RESTful APIs, and MongoDB database. Features modern UI/UX design and scalable architecture.",
    image: "/generic-dashboard-interface.png",
    demoUrl: "https://immigration-dashboard.vercel.app/sign-in",
    githubUrl: "https://github.com/migration-crew/immigration-dashboard",
    technologies: ["Next.js", "TypeScript", "Clerk", "MongoDB", "shadcn/ui"],
    category: "Full Stack",
    date: "2024",
    status: "completed",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description: "Modern e-commerce solution with payment integration",
    longDescription:
      "Built a scalable e-commerce platform with Stripe integration, inventory management, and admin dashboard.",
    image: "/ecommerce-website.png",
    demoUrl: "https://your-ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/ecommerce-platform",
    technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "E-commerce",
    date: "2024",
    status: "in-progress",
  },
  {
    id: 4,
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates",
    longDescription:
      "Real-time task management application with team collaboration features, drag-and-drop functionality, and progress tracking.",
    image: "/kanban-task-management.png",
    demoUrl: "https://task-manager-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/task-manager",
    technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    category: "Productivity",
    date: "2023",
    status: "completed",
  },
];
