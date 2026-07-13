import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

export default function Resume() {
  return (
    <section className="py-12 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 border-primary/20 bg-gradient-to-r from-primary/5 to-transparent"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
              <FileText size={32} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Resume</h3>
              <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
                I'm currently updating my resume with new skills, certifications, and projects. Check back soon for the latest version!
              </p>
            </div>
          </div>
          
          <Tooltip>
            <TooltipTrigger asChild>
              <button 
                disabled
                className="px-6 py-3 rounded-full bg-muted text-muted-foreground flex items-center gap-2 font-medium opacity-60 cursor-not-allowed shrink-0 border border-border"
              >
                <Download size={18} />
                <span>Download PDF</span>
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Coming soon</p>
            </TooltipContent>
          </Tooltip>
        </motion.div>
      </div>
    </section>
  );
}
