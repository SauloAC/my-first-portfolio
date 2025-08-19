import { ExternalLink } from "lucide-react";
import { Button } from "../ui/button";

export function ProjectsCTA() {
  return (
    <div className="text-center mt-12">
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        Interested in working together or want to see more projects?
      </p>
      <a href="#contact">
        <Button size="lg" className="inline-flex items-center gap-2">
          Get In Touch
          <ExternalLink className="w-4 h-4" />
        </Button>
      </a>
    </div>
  );
}
