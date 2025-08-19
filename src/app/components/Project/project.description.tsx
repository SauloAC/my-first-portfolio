import type { Project } from "../../types/project";
import { Badge } from "../ui/badge";

interface ProjectDescriptionProps {
  project: Project;
}

export function ProjectDescription({ project }: ProjectDescriptionProps) {
  return (
    <>
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
    </>
  );
}
