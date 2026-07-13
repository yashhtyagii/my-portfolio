import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 rounded-2xl text-center border-dashed border-2 border-border/50 hover:border-primary/30 transition-colors"
        >
          <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
            <Award size={32} className="text-secondary" />
          </div>
          <h3 className="text-xl font-bold mb-2">Certifications</h3>
          <p className="text-muted-foreground">
            Currently pursuing certifications in relevant technologies. New certifications will be added here soon to validate my learning journey.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
