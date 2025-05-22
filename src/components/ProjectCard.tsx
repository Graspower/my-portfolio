import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg">
      <CardHeader className="p-0">
        <div className="relative w-full h-48">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
            data-ai-hint={project.dataAiHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
        <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="outline">{tag}</Badge>
          ))}
        </div>
      </CardContent>
      {project.projectUrl && project.projectUrl !== "#" && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" size="sm" className="w-full">
            <Link href={project.projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
