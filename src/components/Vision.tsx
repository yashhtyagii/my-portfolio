import React from 'react';
import { motion } from 'framer-motion';
import { Target } from 'lucide-react';

export default function Vision() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Abstract geometric background */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-10 md:p-16 relative overflow-hidden"
        >
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white mb-8 shadow-lg shadow-primary/20 rotate-3">
              <Target size={32} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-8">My <span className="text-gradient">Vision</span></h2>
            
            <blockquote className="text-xl md:text-2xl text-foreground/90 font-medium leading-relaxed max-w-3xl">
              "My goal is to become a highly skilled AI Engineer by continuously learning, building impactful projects, and mastering modern technologies. I believe consistency, curiosity, and discipline are the foundation of long-term success."
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
