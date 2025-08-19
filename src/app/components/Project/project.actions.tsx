import { ExternalLink, Github } from "lucide-react";
import type { Project } from "../../types/project";
import { Button } from "../ui/button";

interface ProjectActionsProps {
  project: Project;
}

export function ProjectActions({ project }: ProjectActionsProps) {
  return (
    <div className="flex gap-2 pt-4">
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
          <Button variant="outline" size="sm" className="w-full">
            <Github className="w-4 h-4 mr-2" />
            Code
          </Button>
        </a>
      )}
    </div>
  );
}
