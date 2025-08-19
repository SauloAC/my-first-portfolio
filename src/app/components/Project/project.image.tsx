import Image from "next/image";
import type { Project } from "../../types/project";
import { getStatusColor, getStatusText } from "../../utils/project.utils";
import { Badge } from "../ui/badge";

interface ProjectImageProps {
  project: Project;
}

export function ProjectImage({ project }: ProjectImageProps) {
  return (
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
  );
}
