import React from 'react';
import { motion } from 'framer-motion';

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Python", level: "Intermediate" },
        { name: "C", level: "Familiar" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" },
        { name: "AI-assisted Web Dev", level: "Learning" }
      ]
    },
    {
      title: "Tools & Version Control",
      skills: [
        { name: "Git", level: "Intermediate" },
        { name: "GitHub", level: "Intermediate" }
      ]
    },
    {
      title: "Libraries & Data",
      skills: [
        { name: "NumPy", level: "Learning" },
        { name: "Pandas", level: "Basic" },
        { name: "Data Visualization", level: "Basic" }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const }
    }
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-primary rounded-full"></div>
          <p className="mt-6 text-muted-foreground max-w-2xl">
            A transparent look at my technical toolkit. I'm actively learning and expanding these every day.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={category.title} 
              variants={cardVariants}
              className="glass-card p-8 rounded-2xl flex flex-col h-full group hover:border-primary/50 transition-colors"
            >
              <h3 className="text-xl font-bold mb-6 text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </h3>
              
              <div className="flex flex-col gap-5 mt-auto">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground/90">{skill.name}</span>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary/20 text-secondary-foreground">
                        {skill.level}
                      </span>
                    </div>
                    {/* Visual representation of level without fake % */}
                    <div className="h-1.5 w-full bg-secondary/20 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ 
                          width: skill.level === 'Intermediate' ? '65%' : 
                                 skill.level === 'Familiar' ? '45%' : 
                                 skill.level === 'Learning' ? '30%' : '20%' 
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
