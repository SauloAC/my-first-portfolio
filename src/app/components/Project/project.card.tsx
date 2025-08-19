import type { Project } from "../../types/project";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { ProjectActions } from "./project.actions";
import { ProjectDescription } from "./project.description";
import { ProjectImage } from "./project.image";
import { ProjectInfo } from "./project.info";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
      <ProjectImage project={project} />

      <CardHeader>
        <ProjectInfo project={project} />
      </CardHeader>

      <CardContent>
        <ProjectDescription project={project} />
      </CardContent>

      <CardFooter>
        <ProjectActions project={project} />
      </CardFooter>
    </Card>
  );
}
