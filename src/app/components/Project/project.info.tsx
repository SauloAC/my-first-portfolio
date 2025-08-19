import { Calendar } from "lucide-react";
import type { Project } from "../../types/project";
import { Badge } from "../ui/badge";
import { CardDescription, CardTitle } from "../ui/card";

interface ProjectInfoProps {
  project: Project;
}

export function ProjectInfo({ project }: ProjectInfoProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        <CardTitle className="mb-2">{project.title}</CardTitle>
        <CardDescription className="mb-2">
          {project.description}
        </CardDescription>

        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>{project.date}</span>
          <Badge variant="outline" className="ml-2">
            {project.category}
          </Badge>
        </div>
      </div>
    </div>
  );
}
