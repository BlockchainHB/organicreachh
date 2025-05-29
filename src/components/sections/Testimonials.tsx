import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

type Testimonial = {
  id: number;
  name: string;
  role: string;
  quote: string;
  image: string;
  rating: number;
  stats: {
    followers: string;
    monthlyListeners: string;
    increase: string;
  };
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alex Rivers",
    role: "Electronic Producer",
    quote: "After 6 months of playlist promo with no real growth, I switched to OrganicReach. Within 3 months, my monthly listeners doubled and I actually started getting real messages from fans. The targeting is spot on.",
    image: "https://images.pexels.com/photos/3023967/pexels-photo-3023967.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    stats: {
      followers: "28,500",
      monthlyListeners: "74,230",
      increase: "143%"
    }
  },
  {
    id: 2,
    name: "Maria Sanchez",
    role: "Independent Singer-Songwriter",
    quote: "The ROI calculator wasn't lying. I was spending $600/month on playlist placements and getting fake streams. With OrganicReach, I'm spending half that and getting real fans who come to my shows. Game changer.",
    image: "https://images.pexels.com/photos/1165991/pexels-photo-1165991.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    stats: {
      followers: "12,740",
      monthlyListeners: "45,120",
      increase: "95%"
    }
  },
  {
    id: 3,
    name: "The Nightwalkers",
    role: "Indie Rock Band",
    quote: "Our band was stuck at the same numbers for years. Two months after joining OrganicReach, we started seeing actual growth in followers, saves, and most importantly, merch sales. The audience targeting is incredible.",
    image: "https://images.pexels.com/photos/2601215/pexels-photo-2601215.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
    stats: {
      followers: "35,210",
      monthlyListeners: "88,650",
      increase: "118%"
    }
  }
];

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const handleNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonials.length);
  };
  
  const handlePrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  // Auto-rotate testimonials
  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, [inView, active]);
  
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };
  
  return (
    <Section id="testimonials" className="bg-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full bg-hero-pattern opacity-5" />
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto relative"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-primary-500">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how artists like you are growing their audience with OrganicReach
          </p>
        </div>
        
        <div className="relative">
          <div className="relative overflow-hidden">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={active}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card variant="glass" className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="relative">
                      <div className="absolute -top-4 -left-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                        SUCCESS STORY
                      </div>
                      <div className="bg-dark-900/50 rounded-lg overflow-hidden h-full">
                        <img 
                          src={testimonials[active].image} 
                          alt={testimonials[active].name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-col justify-between">
                      <div>
                        <div className="flex mb-4">
                          {Array(5).fill(0).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-5 w-5 ${i < testimonials[active].rating ? 'text-yellow-400' : 'text-gray-600'}`}
                              fill={i < testimonials[active].rating ? 'currentColor' : 'none'}
                            />
                          ))}
                        </div>
                        
                        <blockquote className="text-xl italic text-gray-200 mb-6">
                          "{testimonials[active].quote}"
                        </blockquote>
                        
                        <div className="mb-8">
                          <p className="font-bold text-lg">{testimonials[active].name}</p>
                          <p className="text-gray-400">{testimonials[active].role}</p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 bg-dark-800/50 rounded-lg p-4">
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">Followers</p>
                          <p className="text-lg font-bold text-white">{testimonials[active].stats.followers}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">Monthly Listeners</p>
                          <p className="text-lg font-bold text-white">{testimonials[active].stats.monthlyListeners}</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-400 mb-1">Growth</p>
                          <p className="text-lg font-bold text-green-500">+{testimonials[active].stats.increase}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > active ? 1 : -1);
                  setActive(i);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-primary-500 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 md:-translate-x-0 bg-dark-800/80 hover:bg-dark-700/80 transition-colors text-white rounded-full p-2 z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-0 bg-dark-800/80 hover:bg-dark-700/80 transition-colors text-white rounded-full p-2 z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
              500+
            </h3>
            <p className="text-gray-400">Artists Using Platform</p>
          </div>
          
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
              3.2x
            </h3>
            <p className="text-gray-400">Average Growth Rate</p>
          </div>
          
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
              74%
            </h3>
            <p className="text-gray-400">Reduction in Cost</p>
          </div>
          
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-6 text-center">
            <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400 mb-2">
              12M+
            </h3>
            <p className="text-gray-400">Genuine Fans Reached</p>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}