import React from 'react';
import { motion } from 'framer-motion';
import { User, MapPin, GraduationCap, Code } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
        >
          <motion.div variants={itemVariants} className="md:col-span-5 relative">
            <div className="aspect-square rounded-2xl overflow-hidden glass-card p-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10" />
              <div className="w-full h-full bg-secondary/10 dark:bg-white/5 rounded-xl flex items-center justify-center relative overflow-hidden">
                <User size={120} className="text-muted-foreground/30" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_100%)] pointer-events-none" />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-2xl -z-10" />
          </motion.div>
          
          <motion.div variants={itemVariants} className="md:col-span-7 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Hi, I'm <strong className="text-foreground font-semibold">Yash Tyagi</strong>. I am a passionate Computer Science student specializing in Artificial Intelligence and Machine Learning.
                I love writing Python, solving logical problems, and continuously expanding my technical horizon. 
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                As an aspiring Software Engineer, I am driven by the desire to build meaningful, intelligent applications. 
                I believe in honest, consistent learning rather than just chasing hype. Right now, my focus is on building a strong foundation and transitioning from an enthusiastic learner to a capable builder.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Education</h4>
                  <p className="font-semibold">B.Tech CSE (AI & ML)</p>
                </div>
              </div>
              
              <div className="glass-card p-4 rounded-xl flex items-center gap-4">
                <div className="p-3 bg-secondary/10 text-secondary rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">College</h4>
                  <p className="font-semibold text-sm">PIET, Panipat</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
