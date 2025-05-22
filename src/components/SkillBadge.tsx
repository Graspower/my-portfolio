import type { Skill } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  const Icon = skill.icon;
  return (
    <Card className="text-center p-4 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-lg">
      <CardHeader className="p-2 flex flex-col items-center">
        <Icon className="h-10 w-10 mb-2 text-primary" />
        <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
      </CardHeader>
      <CardContent className="p-2">
        <CardDescription className="text-xs text-muted-foreground">{skill.description}</CardDescription>
      </CardContent>
    </Card>
  );
}
