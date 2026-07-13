import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border/50 relative bg-black/10 dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col items-center">
        <div className="flex gap-6 mb-8">
          <a 
            href="https://github.com/yashhtyagii" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-white/10 transition-all"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/yash-tyagi-375a7033b" 
            target="_blank" 
            rel="noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-[#0077b5] hover:bg-white/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="mailto:yashtyagi38963@gmail.com" 
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-white/10 transition-all"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <p className="text-muted-foreground flex items-center gap-2 mb-2 text-sm font-medium">
          Made with <Heart size={16} className="text-destructive fill-destructive" /> by Yash Tyagi
        </p>
        
        <p className="text-muted-foreground/60 text-xs">
          © {currentYear} All Rights Reserved
        </p>

        <button 
          onClick={scrollToTop}
          className="absolute right-6 bottom-12 w-12 h-12 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors group"
          aria-label="Back to top"
        >
          <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>
    </footer>
  );
}
