export type Locale = "en" | "es";

export interface NavItem {
  key: string;
  href: string;
}

export interface HeroDict {
  greeting: string;
  name: string;
  title: string;
  subtitle: string;
  cta: string;
}

export interface AboutDict {
  title: string;
  description: string[];
  stats: { label: string; value: string }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface ExperienceDict {
  title: string;
  items: ExperienceItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface ProjectsDict {
  title: string;
  items: ProjectItem[];
}

export interface TechCategory {
  name: string;
  items: string[];
}

export interface TechStackDict {
  title: string;
  categories: TechCategory[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description: string;
}

export interface EducationDict {
  title: string;
  items: EducationItem[];
}

export interface ContactDict {
  title: string;
  subtitle: string;
  emailLabel: string;
  email: string;
  phone: string;
  linkedin: string;
  linkedinLabel: string;
}

export interface FooterDict {
  rights: string;
}

export interface Dictionary {
  nav: Record<string, string>;
  hero: HeroDict;
  about: AboutDict;
  experience: ExperienceDict;
  projects: ProjectsDict;
  techStack: TechStackDict;
  education: EducationDict;
  contact: ContactDict;
  footer: FooterDict;
}
