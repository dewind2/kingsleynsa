
import React from 'react';
import { Project, TechItem } from './types';

export const TECH_STACK: TechItem[] = [
  { name: 'HTML5', icon: '🌐', color: 'text-orange-500' },
  { name: 'CSS3', icon: '🎨', color: 'text-blue-500' },
  { name: 'Tailwind', icon: '🌊', color: 'text-cyan-400' },
  { name: 'JavaScript', icon: 'JS', color: 'text-yellow-400' },
  { name: 'React', icon: '⚛️', color: 'text-sky-400' },
  { name: 'Node.js', icon: '🟢', color: 'text-emerald-500' },
  { name: 'PHP', icon: '🐘', color: 'text-indigo-400' },
  { name: 'Python', icon: '🐍', color: 'text-blue-400' },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Automated CRM Sync',
    category: 'AI Solutions',
    description: 'Autonomous AI agent that synchronizes customer data across 5+ platforms in real-time.',
    tags: ['Python', 'n8n', 'OpenAI'],
    imageUrl: 'https://picsum.photos/seed/ai1/600/400'
  },
  {
    id: '2',
    title: 'FinTech Dashboard',
    category: 'Web Development',
    description: 'A high-performance trading dashboard built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Chart.js'],
    imageUrl: 'https://picsum.photos/seed/web1/600/400'
  },
  {
    id: '3',
    title: 'Vision AI Bot',
    category: 'AI Solutions',
    description: 'Image recognition system for automated quality control in manufacturing.',
    tags: ['TensorFlow', 'Python', 'FastAPI'],
    imageUrl: 'https://picsum.photos/seed/ai2/600/400'
  },
  {
    id: '4',
    title: 'Global E-Commerce',
    category: 'Web Development',
    description: 'Multilingual storefront with complex inventory management and PHP backend.',
    tags: ['PHP', 'MySQL', 'React'],
    imageUrl: 'https://picsum.photos/seed/web2/600/400'
  },
  {
    id: '5',
    title: 'Workflow Orchestrator',
    category: 'AI Solutions',
    description: 'Enterprise-grade automation tool connecting legacy systems via LLMs.',
    tags: ['Node.js', 'LangChain', 'OpenAI'],
    imageUrl: 'https://picsum.photos/seed/ai3/600/400'
  },
  {
    id: '6',
    title: 'Real Estate Portal',
    category: 'Web Development',
    description: 'Full-stack property listing platform with interactive maps and VR tours.',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    imageUrl: 'https://picsum.photos/seed/web3/600/400'
  }
];
