export interface Project {
  slug: string;
  title: string;
  description?: string;
  tags?: string[];
  image?: string;
  url?: string;
}

export const projects: Project[] = [];
