"use client";

import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectCategories } from "@/config/site";
import type { Project, ProjectFilterCategory } from "@/types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="space-y-12 py-8">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">My Projects</h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          A showcase of my work in innovation, research, and development. Explore projects that demonstrate my skills and passion.
        </p>
      </section>

      <section>
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {projectCategories.map((category: ProjectFilterCategory) => {
            const Icon = category.icon;
            return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "transition-all duration-200 ease-in-out shadow-sm hover:shadow-md",
                selectedCategory === category.id && "shadow-lg ring-2 ring-primary ring-offset-2"
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              {category.name}
            </Button>
          )})}
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">No projects found for this category.</p>
        )}
      </section>
    </div>
  );
}
