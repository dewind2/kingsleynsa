
import React, { useState, useEffect } from 'react';
import { TECH_STACK, PROJECTS } from './constants';
import { Project, TechItem } from './types';

// Icons using standard SVG paths (simulated Lucide components)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="text-slate-400 max-w-2xl text-lg leading-relaxed">{subtitle}</p>}
    <div className={`h-1.5 w-20 bg-indigo-500 rounded-full mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-indigo-500 selection:text-white">
      {/* Header */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-panel py-3' : 'py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">
            <span className="gradient-text">Kingsley Nsa</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-slate-300">
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#automation" className="hover:text-emerald-400 transition-colors">Automation</a>
            <a href="#stack" className="hover:text-indigo-400 transition-colors">Stack</a>
            <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
            <a href="#contact" className="px-5 py-2 glass-panel rounded-full hover:bg-white/10 transition-all">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full glass-card text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Innovation
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Crafting Digital <br />
              <span className="gradient-text">Excellence</span> with Code <br />
              & Intelligence.
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-lg leading-relaxed mb-8">
              Full-Stack Developer and Prompt Engineer dedicated to building high-performance web applications and autonomous AI workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/40">
                Work With Me
              </a>
              <a href="#projects" className="px-8 py-4 glass-card text-white font-bold rounded-xl">
                View Projects
              </a>
            </div>
          </div>

          <div className="relative group">
            {/* ID Style Vertical Text */}
            <div className="absolute -left-12 top-1/2 -translate-y-1/2 [writing-mode:vertical-rl] rotate-180 text-slate-500 text-xs tracking-widest uppercase font-mono hidden lg:block opacity-50 group-hover:opacity-100 transition-opacity">
              KN-0124-CRS-NGA // 4.8118° N, 8.3297° E
            </div>
            
            <div className="relative aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2">
              <img 
                src="./king.PNG" 
                alt="Kingsley Nsa" 
                className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              {/* Floating Tag Style */}
              <div className="absolute bottom-6 right-6 p-4 glass-panel rounded-2xl border border-white/20 shadow-2xl">
                <p className="text-xs text-indigo-400 font-bold uppercase tracking-widest mb-1">Lead Developer</p>
                <h4 className="text-white font-bold text-lg">Kingsley Nsa</h4>
                <p className="text-slate-400 text-xs">Proudly Nigerian | Based in Cross River State</p>
              </div>
            </div>

            {/* Decorative Background Elements */}
            <div className="absolute -z-10 -top-10 -right-10 w-64 h-64 bg-indigo-600/20 blur-[100px] rounded-full"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-64 h-64 bg-cyan-600/20 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Automation & AI Section */}
      <section id="automation" className="py-24 px-6 relative bg-slate-900/30">
        <div className="container mx-auto">
          <div className="glass-card p-8 md:p-16 rounded-[2.5rem] border-emerald-500/20 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 text-emerald-500/10">
              <svg width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>
              </svg>
            </div>
            
            <div className="max-w-3xl">
              <div className="text-emerald-400 font-bold uppercase tracking-widest text-sm mb-4">Business Efficiency</div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-8">Future-Proof Your Workflow.</h2>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 italic">
                "In a world where time is the most valuable currency, manual repetitive tasks are a liability. I build custom AI agents and automated workflows that eliminate bottlenecks, reduce human error, and allow your business to scale 24/7 without increasing overhead. Let’s turn your complex problems into autonomous solutions."
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel rounded-lg text-emerald-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Instant Scaling</h4>
                    <p className="text-slate-400 text-sm">Scale your output without hiring more staff.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel rounded-lg text-indigo-400">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Zero Error Rate</h4>
                    <p className="text-slate-400 text-sm">Eliminate the risk of human fatigue.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="stack" className="py-24 px-6">
        <div className="container mx-auto">
          <SectionHeading 
            title="Modern Tech Stack" 
            subtitle="I leverage a cutting-edge arsenal of technologies to build robust, scalable, and future-proof digital products."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {TECH_STACK.map((tech) => (
              <div key={tech.name} className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center group">
                <div className={`text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 ${tech.color}`}>
                  {tech.name === 'JS' ? <span className="text-2xl font-black">JS</span> : tech.icon}
                </div>
                <h3 className="text-white font-bold tracking-tight">{tech.name}</h3>
                <div className="mt-2 text-[10px] text-slate-500 uppercase tracking-widest font-bold">Verified Expertise</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 bg-slate-900/10">
        <div className="container mx-auto">
          <SectionHeading 
            title="Featured Projects" 
            subtitle="A showcase of recent work ranging from full-stack web applications to complex AI automation systems."
            align="center"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="glass-card rounded-[2rem] overflow-hidden flex flex-col group">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                      project.category === 'AI Solutions' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-indigo-500/20 text-indigo-400'
                    } glass-panel`}>
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] text-slate-300 px-2 py-1 rounded-md glass-panel uppercase font-mono">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto glass-card rounded-[3rem] p-8 md:p-16 border-indigo-500/30 overflow-hidden relative">
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full"></div>
            
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black text-white mb-4">Let's Connect</h2>
              <p className="text-slate-400">Ready to transform your business workflow or build your next big idea?</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <a href="mailto:kingnsao1@gmail.com" className="flex items-center p-6 glass-card rounded-2xl group hover:border-indigo-500/50 transition-all">
                  <div className="p-4 glass-panel rounded-xl text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                    <MailIcon />
                  </div>
                  <div className="ml-5">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Email Address</p>
                    <p className="text-white font-medium">kingnsao1@gmail.com</p>
                  </div>
                </a>

                <a href="tel:09124693400" className="flex items-center p-6 glass-card rounded-2xl group hover:border-emerald-500/50 transition-all">
                  <div className="p-4 glass-panel rounded-xl text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all">
                    <PhoneIcon />
                  </div>
                  <div className="ml-5">
                    <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Call / WhatsApp</p>
                    <p className="text-white font-medium">09124693400</p>
                  </div>
                </a>
              </div>

              <div className="glass-panel p-8 rounded-3xl border border-white/5">
                <h4 className="text-white font-bold mb-6 flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Professional Socials
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <a href="#" className="flex items-center px-6 py-4 glass-card rounded-xl hover:bg-white/10 transition-all">
                    <LinkedinIcon />
                    <span className="ml-4 font-medium">LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center px-6 py-4 glass-card rounded-xl hover:bg-white/10 transition-all">
                    <GithubIcon />
                    <span className="ml-4 font-medium">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 bg-slate-950/50">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <span className="gradient-text font-black text-xl tracking-tighter">Kingsley Nsa</span>
            <p className="text-slate-500 text-xs mt-1 uppercase tracking-[0.2em]">Full Stack & AI Architect</p>
          </div>
          
          <div className="text-slate-500 text-xs uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Kingsley Nsa. All rights reserved. 🇳🇬
          </div>

          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-indigo-400 transition-colors"><GithubIcon /></a>
            <a href="#" className="hover:text-indigo-400 transition-colors"><LinkedinIcon /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
