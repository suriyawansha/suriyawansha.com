export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface Skill {
  name: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  socialLinks: SocialLink[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  description?: string;
}
