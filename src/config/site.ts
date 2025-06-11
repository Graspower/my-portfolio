import type { NavItem, Project, Skill } from '@/types';
import { Home, User, Briefcase, Eye, Sparkles, Lightbulb, FlaskConical, Code2, Brain, Cloud, Database, GitMerge, Users, ShieldCheck, Zap, Cpu } from 'lucide-react';

export const siteConfig = {
  name: "Oscar Portfolio",
  description: "A technology innovator portfolio showcasing my potential.",
  url: "https://example.com", // Replace with your actual domain
  ogImage: "/images/star.png", // Replace with your actual OG image
  links: {
    github: "https://github.com/Graspower", // Replace with your GitHub
    linkedin: "https://www.linkedin.com/in/oscar-munene-76ab4829a/", // Replace with your LinkedIn
  },
};

export const navItems: NavItem[] = [
  { title: "Home", href: "/", icon: Home },
  { title: "About", href: "/about", icon: User },
  { title: "Projects", href: "/projects", icon: Briefcase },
  { title: "Vision", href: "/vision", icon: Eye },
  { title: "Skills Match", href: "/skills-match", icon: Sparkles },
];

export const projects: Project[] = [
  {
    id: "proj1",
    title: "Matthew an AI-Powered bible reader",
    description: "Developing Good News.ai",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "abstract technology",
    category: "Innovation",
    tags: ["AI/ML", "typescript", "Data Science"],
    projectUrl: "#",
  },
  {
    id: "proj2",
    title: "Face recognition gate attendance system",
    description: "Led research into simulating quantum algorithms on classical hardware, contributing to a novel framework for quantum experimentation.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "futuristic circuit",
    category: "Research",
    tags: ["Quantum Computing", "Python", "Simulation"],
    projectUrl: "#",
  },
  {
    id: "proj3",
    title: "Decentralized Identity Platform",
    description: "Engineered a blockchain-based identity management solution, enhancing security and user control over personal data.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "digital network",
    category: "Development",
    tags: ["Blockchain", "TypeScript", "Cryptography"],
    projectUrl: "#",
  },
  {
    id: "proj4",
    title: "IoT Smart City Initiative",
    description: "Designed and implemented an IoT network for real-time environmental monitoring in urban areas, providing valuable data for city planning.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "smart city",
    category: "Innovation",
    tags: ["IoT", "Embedded Systems", "Cloud"],
    projectUrl: "#",
  },
   {
    id: "proj5",
    title: "Bio-Inspired Robotics Control",
    description: "Researched and developed novel control algorithms for robotic systems inspired by biological swarm intelligence.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "robotic arm",
    category: "Research",
    tags: ["Robotics", "AI", "Control Systems"],
  },
  {
    id: "proj6",
    title: "Scalable Microservices Architecture",
    description: "Architected and deployed a highly scalable e-commerce platform using microservices, improving performance and resilience.",
    imageUrl: "https://placehold.co/600x400.png",
    dataAiHint: "cloud architecture",
    category: "Development",
    tags: ["Microservices", "Kubernetes", "Go"],
  },
];

export const projectCategories = [
  { id: "all", name: "All", icon: Briefcase },
  { id: "Innovation", name: "Innovation", icon: Lightbulb },
  { id: "Research", name: "Research", icon: FlaskConical },
  { id: "Development", name: "Development", icon: Code2 },
];


export const skills: Skill[] = [
  { name: "Artificial Intelligence", icon: Brain, description: "Expertise in ML models, NLP, and computer vision." },
  { name: "Machine Learning", icon: Zap, description: "Developing predictive models and data-driven solutions." },
  { name: "Quantum Computing", icon: Cpu, description: "Exploring next-gen computational paradigms." },
  { name: "Blockchain Technology", icon: GitMerge, description: "Building decentralized applications and systems." },
  { name: "Cloud Architecture", icon: Cloud, description: "Designing scalable and resilient cloud infrastructure." },
  { name: "Data Science & Analytics", icon: Database, description: "Extracting insights from complex datasets." },
  { name: "Software Development", icon: Code2, description: "Proficient in Python, TypeScript, Go, and Rust." },
  { name: "Cybersecurity", icon: ShieldCheck, description: "Implementing robust security protocols and threat mitigation." },
  { name: "Project Management", icon: Users, description: "Leading technical teams and delivering complex projects." },
  { name: "IoT Solutions", icon: Lightbulb, description: "Innovating with connected devices and smart systems." },
];

// This is the list of skills that will be passed to the AI model.
// It should be a simple array of strings.
export const userSkillsForAI: string[] = skills.map(skill => skill.name);
