import React, { useEffect, useState } from 'react';

export default function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    // Generate 15 particles
    const newParticles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 3 + 1, // 1-4px
      delay: Math.random() * 5, // 0-5s delay
      duration: Math.random() * 10 + 10 // 10-20s duration
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/40 dark:bg-primary/60 blur-[1px]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite alternate`
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.3; }
          50% { opacity: 0.8; }
          100% { transform: translateY(-100px) translateX(20px) scale(1.5); opacity: 0.1; }
        }
      `}} />
    </div>
  );
}
