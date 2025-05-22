import type { LucideIcon } from 'lucide-react';

export type NavItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  disabled?: boolean;
};

export type ProjectCategory = "Innovation" | "Research" | "Development";

export type Project = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  dataAiHint?: string;
  category: ProjectCategory;
  tags: string[];
  projectUrl?: string;
};

export type Skill = {
  name: string;
  icon: LucideIcon;
  description: string;
};

export type ProjectFilterCategory = {
  id: string;
  name: string;
  icon: LucideIcon;
}
