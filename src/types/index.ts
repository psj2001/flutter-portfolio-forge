// Portfolio Data Types

export interface ProfileData {
  name: string;
  title: string;
  subtitle: string;
  profilePhoto: string;
  bio?: string;
}

export interface Skill {
  id?: string;
  icon?: string; // Icon name or identifier
  title: string;
  description: string;
}

export interface Experience {
  id?: string;
  title: string;
  company: string;
  period: string;
  description: string;
  companyImage?: string;
}

export interface Project {
  id?: string;
  name: string;
  description: string;
  stack: string[];
  role: string;
  image: string;
  playStore?: string;
  appStore?: string;
  github?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  date: string;
  readTime: string;
  tags: string[];
  content?: string; // Full blog post content
  published?: boolean;
}

export interface SocialLink {
  email?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  website?: string;
}

export interface AboutData {
  introduction: string[];
  experience: Experience[];
  skills: string[];
  socialLinks: SocialLink;
}

export interface HomeData {
  profile: ProfileData;
  skills: Skill[];
  ctaTitle?: string;
  ctaDescription?: string;
}

export interface PortfolioData {
  profile: ProfileData;
  home: HomeData;
  about: AboutData;
  projects: Project[];
  blog: BlogPost[];
}




