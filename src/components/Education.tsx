import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Code2, BrainCircuit } from 'lucide-react';

export default function Education() {
  const timeline = [
    {
      year: "Currently",
      title: "B.Tech CSE (AI & ML) — Second Year",
      institution: "PIET, Panipat",
      description: "Deepening my understanding of core computer science subjects, algorithms, and focusing extensively on AI fundamentals.",
      icon: <GraduationCap size={20} className="text-primary" />
    },
    {
      year: "2026 Focus",
      title: "Technical Expansion",
      institution: "Self-Learning & Academics",
      description: "Learning Python, Git, NumPy, Pandas, and Data Visualization. Improving problem-solving skills through daily practice and building small tools.",
      icon: <Code2 size={20} className="text-secondary" />
    },
    {
      year: "2025",
      title: "Started B.Tech Journey",
      institution: "PIET, Panipat",
      description: "Began my undergraduate studies with a specialization in Artificial Intelligence and Machine Learning. Developed a passion for programming.",
      icon: <Calendar size={20} className="text-muted-foreground" />
    },
    {
      year: "Future Vision",
      title: "AI Engineering & Open Source",
      institution: "The Road Ahead",
      description: "Mastering Machine Learning, Deep Learning, contributing to open source, and building impactful real-world software solutions.",
      icon: <BrainCircuit size={20} className="text-accent" />
    }
  ];

  return (
    <section id="education" className="py-24 relative bg-black/5 dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Education & <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2"></div>

          <div className="flex flex-col gap-12">
            {timeline.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col gap-8 md:gap-16`}
              >
                {/* Node */}
                <div className="absolute left-8 md:left-1/2 w-10 h-10 rounded-full glass-card border-2 border-primary flex items-center justify-center -translate-x-1/2 z-10 bg-background">
                  {item.icon}
                </div>

                {/* Content Area */}
                <div className={`w-full md:w-1/2 pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                  <div className="glass-card p-6 rounded-2xl hover:-translate-y-1 transition-transform duration-300">
                    <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary font-medium text-xs rounded-full mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                    <h4 className="text-sm font-medium text-primary mb-4">{item.institution}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
