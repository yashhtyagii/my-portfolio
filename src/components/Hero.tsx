import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, ChevronRight, Download } from 'lucide-react';
import Particles from './Particles';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  
  const titles = [
    "AI & ML Enthusiast",
    "Python Developer",
    "B.Tech CSE (AI & ML) Student",
    "Future AI Engineer",
    "Problem Solver",
    "Tech Explorer",
    "Building Intelligent Solutions",
    "Always Learning, Always Growing 🚀"
  ];
  
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  // Typing effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = titles[currentTitleIndex];
      
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 30 : 80);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTitleIndex]);

  // Mouse tracking for glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', () => setIsHovering(true));
      container.addEventListener('mouseleave', () => setIsHovering(false));
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', () => setIsHovering(true));
        container.removeEventListener('mouseleave', () => setIsHovering(false));
      }
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Dynamic Background Glow */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.08), transparent 40%)`
        }}
      />
      
      {/* Static Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
      <Particles />

      <motion.div 
        style={{ y, opacity }}
        className="container mx-auto px-6 max-w-5xl z-10"
      >
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full glass-card text-sm font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-4"
          >
            YASH TYAGI
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-8 md:h-12 mb-8"
          >
            <span className="text-xl md:text-3xl font-medium text-gradient">
              {currentText}
              <span className="animate-pulse inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"></span>
            </span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-2xl text-base md:text-lg text-muted-foreground mb-12 leading-relaxed"
          >
            "Every expert was once a beginner. I'm building my journey—one project, one skill, and one challenge at a time."
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a 
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 hover:scale-105 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]"
            >
              Contact Me
            </a>
            
            <a 
              href="https://github.com/yashhtyagii"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass-card flex items-center gap-2 font-medium hover:bg-white/10 dark:hover:bg-white/5 transition-all group"
            >
              <Github size={18} className="group-hover:text-primary transition-colors" />
              <span>GitHub</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/yash-tyagi-375a7033b"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full glass-card flex items-center gap-2 font-medium hover:bg-white/10 dark:hover:bg-white/5 transition-all group"
            >
              <Linkedin size={18} className="group-hover:text-[#0077b5] transition-colors" />
              <span>LinkedIn</span>
            </a>
            
            <div className="relative group">
              <button 
                disabled
                className="px-6 py-3 rounded-full glass-card flex items-center gap-2 font-medium opacity-50 cursor-not-allowed"
              >
                <Download size={18} />
                <span>Resume</span>
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-popover text-popover-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Coming Soon
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-muted-foreground font-medium uppercase tracking-widest">Scroll</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-8 h-12 rounded-full border border-border flex justify-center p-2 glass-card"
        >
          <motion.div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
