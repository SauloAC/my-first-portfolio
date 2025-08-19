export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
  category: string;
  date: string;
  status: "completed" | "in-progress" | "planned";
}

export type BadgeVariant = "default" | "secondary" | "outline";
export type ButtonVariant = "default" | "outline";
export type ButtonSize = "default" | "sm" | "lg";
