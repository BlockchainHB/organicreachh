import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Network, Brain, BarChart3 } from 'lucide-react';

export function HowItWorks() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  
  return (
    <Section id="how-it-works" className="bg-dark-900 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="text-primary-500">OrganicReach</span> Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A simple 3-step process to transform your music promotion strategy
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Step 1 */}
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8 relative">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
              1
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Network className="h-8 w-8 text-primary-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Connect Your Music</h3>
            <p className="text-gray-400 text-center mb-5">
              Link your Spotify, Apple Music, and other streaming platforms to give us access to your data.
            </p>
            <div className="bg-dark-900/50 rounded-lg p-5 border border-dark-800">
              <img 
                src="https://images.pexels.com/photos/7149165/pexels-photo-7149165.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Connect your music platforms"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <p className="text-xs text-gray-500 text-center">
                Securely connect all your music platforms with a few clicks
              </p>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8 relative md:mt-8">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
              2
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">AI Finds Your Audience</h3>
            <p className="text-gray-400 text-center mb-5">
              Our proprietary algorithm analyzes your music and identifies your ideal listeners.
            </p>
            <div className="bg-dark-900/50 rounded-lg p-5 border border-dark-800">
              <img 
                src="https://images.pexels.com/photos/7788009/pexels-photo-7788009.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="AI audience analysis"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <p className="text-xs text-gray-500 text-center">
                AI-powered audience matching based on genre, style, and listener behavior
              </p>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8 relative md:mt-16">
            <div className="absolute -top-5 -left-5 w-10 h-10 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold">
              3
            </div>
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary-500/20 flex items-center justify-center">
                <BarChart3 className="h-8 w-8 text-primary-400" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-3 text-center">Launch Targeted Campaigns</h3>
            <p className="text-gray-400 text-center mb-5">
              We create and manage organic advertising campaigns to reach your ideal fans.
            </p>
            <div className="bg-dark-900/50 rounded-lg p-5 border border-dark-800">
              <img 
                src="https://images.pexels.com/photos/6476783/pexels-photo-6476783.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Campaign dashboard"
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <p className="text-xs text-gray-500 text-center">
                Monitor performance in real-time and optimize for maximum ROI
              </p>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-r from-primary-900/20 to-secondary-900/20 backdrop-blur-md border border-primary-700/30 rounded-lg p-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Ready to See It in Action?</h3>
              <p className="text-gray-300">
                Watch our 3-minute demo video to see the platform in detail
              </p>
            </div>
            <button className="bg-dark-800/70 hover:bg-dark-700/70 transition-colors text-white py-3 px-6 rounded-full flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Watch Demo Video</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}