import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
    }> = [];
    
    const createParticles = () => {
      const particleCount = Math.min(50, Math.floor(window.innerWidth / 20));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          color: `rgba(${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 100 + 100)}, ${Math.floor(Math.random() * 155 + 100)}, ${Math.random() * 0.5 + 0.1})`,
        });
      }
    };
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      // Draw connections
      ctx.strokeStyle = 'rgba(120, 109, 240, 0.1)';
      ctx.lineWidth = 0.3;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      
      requestAnimationFrame(animate);
    };
    
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      createParticles();
    };
    
    createParticles();
    animate();
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return (
    <div className="relative min-h-screen flex items-center">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-dark-950/70 via-dark-950/80 to-dark-950 z-10" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-20 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 via-white to-secondary-400">
              Stop Wasting Money on Fake Playlist Plays. <br />
              Start Building Real Fans.
            </h1>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We help underground artists get discovered through data-driven organic advertising that 
              costs less than playlist placements and builds genuine fan engagement.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button variant="primary" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              See How It Works
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto px-4"
          >
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 md:p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">500+ Artists Growing</h3>
              <p className="text-sm text-gray-400">Join hundreds of artists already building real fans</p>
            </div>
            
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 md:p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">Average 3x ROI</h3>
              <p className="text-sm text-gray-400">Our artists see 3x better results than playlist placements</p>
            </div>
            
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 md:p-6">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-primary-400" />
                </div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2">14-Day Free Trial</h3>
              <p className="text-sm text-gray-400">Try risk-free with our 100% satisfaction guarantee</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}