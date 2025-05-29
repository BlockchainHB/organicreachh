import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { AnimatedCounter } from '../ui/AnimatedCounter';
import { Check, X } from 'lucide-react';

export function ComparisonSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <Section className="bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary-500/20 to-transparent opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-radial from-secondary-500/20 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            There's a <span className="text-primary-500">Better Way</span> to Promote Your Music
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how our organic marketing approach outperforms traditional playlist placements.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Old Way */}
          <motion.div 
            variants={itemVariants}
            className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-gray-300">The Old Way</h3>
              <p className="text-primary-500 font-semibold">Playlist Placements</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-red-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">High Cost, Low Return</h4>
                  <p className="text-gray-400 text-sm">
                    $500+ per placement with mostly bot streams and no real engagement
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Fake Engagement</h4>
                  <p className="text-gray-400 text-sm">
                    Inflated stream counts don't translate to real fans or revenue
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">No Targeting</h4>
                  <p className="text-gray-400 text-sm">
                    Generic playlists with random listeners who aren't your ideal fans
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-red-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <X className="h-4 w-4 text-red-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">No Long-Term Value</h4>
                  <p className="text-gray-400 text-sm">
                    Once your placement ends, all promotion stops completely
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-dark-700 pt-8">
              <div className="text-center">
                <p className="text-gray-400 mb-3">Average Cost Per Real Fan</p>
                <p className="text-3xl font-bold text-red-500">$8.45</p>
              </div>
            </div>
          </motion.div>
          
          {/* New Way */}
          <motion.div 
            variants={itemVariants}
            className="bg-gradient-to-br from-primary-900/40 to-secondary-900/40 backdrop-blur-md border border-primary-700/30 rounded-lg p-8 relative"
          >
            <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold py-1 px-3 rounded-full">
              RECOMMENDED
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2 text-white">The New Way</h3>
              <p className="text-primary-400 font-semibold">OrganicReach Platform</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Lower Cost, Higher Return</h4>
                  <p className="text-gray-300 text-sm">
                    Target only listeners who will love your music, for a fraction of the cost
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Real Human Engagement</h4>
                  <p className="text-gray-300 text-sm">
                    Genuine fans who follow you, save tracks, and attend shows
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">AI-Powered Targeting</h4>
                  <p className="text-gray-300 text-sm">
                    Our algorithm finds listeners who match your exact sound and style
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-500/20 p-1 rounded-full mr-4 mt-0.5">
                  <Check className="h-4 w-4 text-green-500" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Lasting Growth</h4>
                  <p className="text-gray-300 text-sm">
                    Build a fanbase that grows organically even after campaigns end
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 border-t border-primary-700/30 pt-8">
              <div className="text-center">
                <p className="text-gray-300 mb-3">Average Cost Per Real Fan</p>
                <p className="text-3xl font-bold text-green-500">$2.17</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center bg-dark-800/50 rounded-lg p-8 border border-dark-700/50"
        >
          <h3 className="text-2xl font-bold mb-8">Money Saved By Our Artists</h3>
          <div className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-400">
            <AnimatedCounter
              end={2453789}
              prefix="$"
              suffix="+"
              duration={3}
            />
          </div>
          <p className="mt-4 text-gray-400">
            Join hundreds of artists who've switched from playlist placements to OrganicReach
          </p>
        </motion.div>
      </motion.div>
    </Section>
  );
}