
export interface Project {
  id: string;
  title: string;
  category: 'Web Development' | 'AI Solutions';
  description: string;
  tags: string[];
  imageUrl: string;
}

export interface TechItem {
  name: string;
  icon: string;
  color: string;
}
