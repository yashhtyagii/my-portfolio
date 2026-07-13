import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Sparkles, ArrowRight } from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
            Projects <Sparkles className="text-primary" size={32} />
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8"></div>
          
          <div className="glass-card p-6 md:p-8 rounded-2xl max-w-3xl mx-auto border-primary/20 bg-primary/5">
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              ✨ Something exciting is in the works. I'm currently learning, experimenting, and building meaningful projects. They'll be showcased here as soon as they're ready. Every project will represent a new milestone in my journey.
            </p>
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {[1, 2, 3].map((item) => (
            <motion.div 
              key={item}
              variants={cardVariants}
              className="glass-card rounded-2xl overflow-hidden group relative h-[350px] flex flex-col"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer z-10" />
              
              <div className="flex-1 bg-secondary/5 border-b border-border flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
                <Lock size={48} className="text-muted-foreground/30 relative z-10" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-3 h-3 rounded-full bg-primary/50 animate-pulse" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">In Progress</span>
                </div>
                <h3 className="text-xl font-bold text-muted-foreground mb-2">Project Milestone {item}</h3>
                <div className="w-full h-2 bg-secondary/20 rounded-full mb-2"></div>
                <div className="w-3/4 h-2 bg-secondary/20 rounded-full mb-6"></div>
                
                <button disabled className="text-sm font-medium flex items-center gap-2 text-muted-foreground opacity-50">
                  Coming Soon <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
