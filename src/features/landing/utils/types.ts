import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  repoUrl?: string;
  demoUrl?: string;
}

export interface Job {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
  icon: LucideIcon;
}

export interface MetricData {
  name: string;
  value: number;
  date: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}