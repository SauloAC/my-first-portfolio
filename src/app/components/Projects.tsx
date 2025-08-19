import Dashboard from "@/public/assets/images/dashboard.jpeg";
import StaticWebSite from "@/public/assets/images/StaticWebPage.jpeg";
import { Calendar, ExternalLink, Github } from "lucide-react";
import Image, { StaticImageData } from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: StaticImageData | string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

// Custom Badge Component
function Badge({
  children,
  variant = "default",
  className = "",
}: {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "outline";
  className?: string;
}) {
  const baseClasses =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variantClasses = {
    default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    secondary: "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300",
    outline:
      "border border-gray-300 text-gray-700 dark:border-gray-600 dark:text-gray-300",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}

// Custom Button Component
function Button({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}: {
  children: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50";

  const variantClasses = {
    default:
      "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800",
    outline:
      "border border-gray-300 bg-transparent hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-800",
  };

  const sizeClasses = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

// Custom Card Components
function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`p-6 pb-4 ${className}`}>{children}</div>;
}

function CardContent({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-6 pb-4 ${className}`}>{children}</div>;
}

function CardFooter({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`px-6 pb-6 ${className}`}>{children}</div>;
}

function CardTitle({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`text-lg font-semibold leading-none tracking-tight text-gray-900 dark:text-gray-100 ${className}`}
    >
      {children}
    </h3>
  );
}

function CardDescription({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-sm text-gray-600 dark:text-gray-400 ${className}`}>
      {children}
    </p>
  );
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: 1,
      title: "UpImigration Static Website",
      description:
        "Modern immigration consultation website with multilingual support",
      longDescription:
        "Redeveloped a static website using Next.js, TypeScript, and Tailwind CSS, improving user experience by 50%. Implemented localization for Spanish and Portuguese using next-intl.",
      image: StaticWebSite,
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
      image: Dashboard,
      demoUrl: "https://immigration-dashboard.vercel.app/sign-in",
      githubUrl: "https://github.com/migration-crew/immigration-dashboard",
      technologies: ["Next.js", "TypeScript", "Clerk", "MongoDB", "shadcn/ui"],
      category: "Full Stack",
      date: "2024",
      status: "completed",
    },
    // {
    //   id: 3,
    //   title: "E-commerce Platform",
    //   description: "Modern e-commerce solution with payment integration",
    //   longDescription:
    //     "Built a scalable e-commerce platform with Stripe integration, inventory management, and admin dashboard.",
    //   image: "/ecommerce-website.png",
    //   demoUrl: "https://your-ecommerce-demo.vercel.app",
    //   githubUrl: "https://github.com/yourusername/ecommerce-platform",
    //   technologies: [
    //     "Next.js",
    //     "Stripe",
    //     "Prisma",
    //     "PostgreSQL",
    //     "Tailwind CSS",
    //   ],
    //   category: "E-commerce",
    //   date: "2024",
    //   status: "in-progress",
    // },
    // {
    //   id: 4,
    //   title: "Task Management App",
    //   description:
    //     "Collaborative project management tool with real-time updates",
    //   longDescription:
    //     "Real-time task management application with team collaboration features, drag-and-drop functionality, and progress tracking.",
    //   image: "/kanban-task-management.png",
    //   demoUrl: "https://task-manager-demo.vercel.app",
    //   githubUrl: "https://github.com/yourusername/task-manager",
    //   technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
    //   category: "Productivity",
    //   date: "2023",
    //   status: "completed",
    // },
  ];

  const getStatusColor = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "planned":
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300";
    }
  };

  const getStatusText = (status: Project["status"]) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Unknown";
    }
  };

  return (
    <section id="projects" className="py-16 px-4 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">
            Featured Projects
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            A collection of projects I&apos;ve worked on, showcasing my skills
            in web development, full-stack applications, and modern
            technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={
                    project.image ||
                    "/placeholder.svg?height=300&width=500&query=project screenshot"
                  }
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={getStatusColor(project.status)}>
                    {getStatusText(project.status)}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="mb-2">{project.title}</CardTitle>
                    <CardDescription className="mb-2">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                  <Badge variant="outline" className="ml-2">
                    {project.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.longDescription}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-2 pt-4">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button size="sm" className="w-full">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full text-white"
                    >
                      <Github className="w-4 h-4 mr-2 text-white" />
                      Code
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-primary mb-4">
            Interested in working together or want to see more projects?
          </p>
          <a
            href="https://portfolio-saulo.vercel.app/contact"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="inline-flex items-center gap-2">
              Get In Touch
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
