import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { 
  Target, 
  BarChart2, 
  TestTube2, 
  DollarSign, 
  Globe, 
  UserCheck 
} from 'lucide-react';

export function Features() {
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
  
  const features = [
    {
      title: 'AI Audience Targeting',
      description: 'Our algorithm identifies listeners who match your exact sound profile and are most likely to become fans.',
      icon: Target,
      delay: 0,
    },
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Track performance, conversions, and engagement metrics across all platforms in one place.',
      icon: BarChart2,
      delay: 0.1,
    },
    {
      title: 'A/B Testing for Ad Creatives',
      description: 'Test different visuals, copy, and targeting to maximize your campaign effectiveness.',
      icon: TestTube2,
      delay: 0.2,
    },
    {
      title: 'Budget Optimization',
      description: 'Smart allocation of your budget to the platforms and audiences that deliver the best results.',
      icon: DollarSign,
      delay: 0.3,
    },
    {
      title: 'Multi-platform Campaigns',
      description: 'Run coordinated campaigns across Instagram, TikTok, YouTube, Facebook, and more.',
      icon: Globe,
      delay: 0.4,
    },
    {
      title: 'Dedicated Success Manager',
      description: 'Get personalized support from an expert who understands your music and goals.',
      icon: UserCheck,
      delay: 0.5,
    },
  ];
  
  return (
    <Section id="features" className="bg-dark-950 relative">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-500/10 to-transparent opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful <span className="text-primary-500">Features</span> for Music Marketing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to grow your audience and convert listeners into fans
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              custom={index}
              className="h-full"
            >
              <Card 
                variant="glass" 
                className="p-6 h-full transition-all duration-300 hover:border-primary-500/50 hover:shadow-lg group"
                animate={true}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="mb-4 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 w-14 h-14 rounded-lg flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-secondary-500/30 transition-all duration-300">
                  <feature.icon className="h-7 w-7 text-primary-400" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={itemVariants} 
          className="mt-16 bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
            <div>
              <h3 className="text-2xl font-bold mb-4">Platform Preview</h3>
              <p className="text-gray-300 mb-6">
                Get a sneak peek at the OrganicReach dashboard where you'll manage campaigns, 
                track performance, and grow your audience.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-primary-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Intuitive campaign setup wizard</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Detailed performance metrics and analytics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Audience insights and listener demographics</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-500/20 p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary-500" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">Creative templates and campaign recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-dark-900/50 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/5935794/pexels-photo-5935794.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="OrganicReach Dashboard Preview"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}