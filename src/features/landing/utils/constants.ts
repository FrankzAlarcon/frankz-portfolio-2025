import { Terminal, Server, Database, Cloud, Code, Cpu } from 'lucide-react';
import { Job, Project, SkillCategory } from './types';

export const SOCIAL_LINKS = {
  github: "https://github.com/FrankzAlarcon",
  linkedin: "https://ec.linkedin.com/in/frankz-lenin-alarc%C3%B3n-cando-591724268",
  email: "mailto:leninalarcon7@gmail.com"
};

export const SKILLS: SkillCategory[] = [
  {
    title: "Backend Core",
    icon: Server,
    skills: ["NestJS (Node.js)", "Spring Boot (Java)", "GraphQL", "REST APIs", "Apache Kafka", "Microservicios"]
  },
  {
    title: "Infraestructura & Cloud",
    icon: Cloud,
    skills: ["AWS (EC2, Lambda, S3, RDS)", "Certified AWS Cloud Practitioner", "Terraform", "Linux Administration"]
  },
  {
    title: "DevOps & CI/CD",
    icon: Terminal,
    skills: ["Docker", "Kubernetes"]
  },
  {
    title: "Bases de Datos",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    title: "Frontend",
    icon: Code,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"]
  },
  {
    title: "Metodologías/Frameworks",
    icon: Cpu,
    skills: ["Scrum", "Kanban", "XP"]
  }
];

export const EXPERIENCE: Job[] = [
  {
    id: "1",
    role: "Backend Engineer",
    company: "Zeyo",
    period: "2024 - Presente",
    description: "Desarrollo de microservicios en NestJS y Spring Boot, adopción del cloud (AWS), así como la implementación de arquitecturas orientadas a eventos con Apache Kafka.",
    technologies: ["NestJS (Node.js)", "Spring Boot (Java)", "REST APIs", "Apache Kafka", "Microservicios", "AWS"]
  },
  {
    id: "2",
    role: "Intern Backend Engineer",
    company: "Zeyo",
    period: "2023 - 2024",
    description: "Desarrollo de APIs Restful, desarrollo de lambdas en AWS e integración con sistemas externos.",
    technologies: ["Express.js (Node.js)", "REST APIs", "AWS Lambda", "Microservicios"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    title: " SAGA Orchestration con Spring Boot",
    description: "Este proyecto implementa un sistema de gestión de órdenes distribuido que utiliza el patrón Saga para coordinar transacciones entre múltiples microservicios, utiliza el patrón Saga Orchestration donde un orquestador central (OrderSaga) coordina los pasos de la transacción distribuida mediante eventos y comandos a través de Kafka.",
    tags: ["Spring Boot", "Kafka", "Docker", "Microservicios"],
    imageUrl: "/imgs/orchestration-pattern.webp",
    repoUrl: "https://github.com/FrankzAlarcon/orchestration-saga-pattern",
  },
  {
    id: "p2",
    title: "SaaS de LMS",
    description: "Este proyecto es una **plataforma completa de Learning Management System (LMS)** construida con tecnologías modernas de desarrollo web. Permite a los instructores crear, gestionar y vender cursos online, mientras que los estudiantes pueden explorar, comprar y consumir contenido educativo de manera interactiva.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5/CSS3"],
    imageUrl: "/imgs/courses.webp",
    repoUrl: "https://github.com/FrankzAlarcon/courses-platform"
  }
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://www.credly.com/badges/5a2b338c-c2c6-48cb-a553-f0f083ce10a0/linked_in_profile"
  },
  {
    name: "Apache Kafka for Event-Driven Spring Boot Microservices",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-c792a03a-d462-4e1c-b74e-739619eebcbf/"
  },
  {
    name: "AWS Databases - RDS, Aurora",
    issuer: "Udemy",
    url: "https://www.udemy.com/certificate/UC-611359bc-a7dd-46cd-bb49-1139167685d9/"
  }
];