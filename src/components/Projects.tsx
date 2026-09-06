import React from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  CloudSun,
  Thermometer,
  Wind,
  MapPin,
  BarChart3,
  Code2,
} from 'lucide-react';

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  const features = [
    {
      icon: Thermometer,
      title: 'Live Weather',
      description: 'Real-time temperature and weather conditions',
    },
    {
      icon: Wind,
      title: 'Weather Details',
      description: 'Humidity, wind, pressure and air quality',
    },
    {
      icon: BarChart3,
      title: 'Forecast & Charts',
      description: 'Interactive weather forecasts and data',
    },
    {
      icon: MapPin,
      title: 'City Search',
      description: 'Search cities and use location support',
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 flex items-center justify-center gap-3">
            Projects
            <Sparkles
              className="text-primary"
              size={32}
            />
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mx-auto mb-8" />

          <div className="glass-card p-6 md:p-8 rounded-2xl max-w-3xl mx-auto border-primary/20 bg-primary/5">
            <p className="text-lg text-foreground/90 leading-relaxed font-medium">
              🚀 Here are some of the projects I've built while
              learning, experimenting, and exploring modern web
              development. Each project represents a new milestone
              in my development journey.
            </p>
          </div>
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 gap-8"
        >

          {/* SkyCast Pro */}
          <motion.div
            variants={cardVariants}
            className="glass-card rounded-3xl overflow-hidden group relative border-primary/20"
          >

            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-shimmer z-20 pointer-events-none" />

            {/* Project Screenshot */}
            <div className="relative overflow-hidden bg-secondary/5 border-b border-border">

              <img
                src={`${import.meta.env.BASE_URL}skycast-pro.png`}
                alt="SkyCast Pro Weather Dashboard"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />

              {/* Featured badge */}
              <div className="absolute top-5 left-5">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border shadow-lg">
                  <CloudSun
                    size={18}
                    className="text-primary"
                  />
                  <span className="text-sm font-semibold">
                    Featured Project
                  </span>
                </div>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 md:p-10">

              {/* Title */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 mb-6">

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <CloudSun
                        size={24}
                        className="text-primary"
                      />
                    </div>

                    <h3 className="text-2xl md:text-4xl font-bold">
                      SkyCast{' '}
                      <span className="text-primary">
                        Pro
                      </span>
                    </h3>
                  </div>

                  <p className="text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
                    A modern weather dashboard that provides
                    real-time weather information through a clean,
                    interactive and responsive interface. Users can
                    search cities, check current conditions, explore
                    forecasts and view detailed weather information.
                  </p>
                </div>

                {/* Project Type */}
                <div className="flex-shrink-0">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-border text-sm font-medium text-foreground/70">
                    <Code2 size={16} />
                    Web Application
                  </span>
                </div>

              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">

                {features.map((feature, index) => {
                  const Icon = feature.icon;

                  return (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08,
                      }}
                      className="p-4 rounded-xl bg-secondary/5 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <Icon
                          size={18}
                          className="text-primary"
                        />
                      </div>

                      <h4 className="font-semibold text-sm mb-1">
                        {feature.title}
                      </h4>

                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  );
                })}

              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                  Built With
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    'HTML5',
                    'CSS3',
                    'JavaScript',
                    'Chart.js',
                    'Weather API',
                    'Geoapify',
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-lg bg-secondary/10 border border-border text-sm text-foreground/70 hover:border-primary/30 hover:text-primary transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom */}
              <div className="pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Currently showcased in portfolio
                </div>

                <div className="flex items-center gap-2 text-primary text-sm font-semibold">
                  <span>SkyCast Pro</span>

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>

              </div>

            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}