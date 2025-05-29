import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Accordion } from '../ui/Accordion';
import { Button } from '../ui/Button';

export function Faq() {
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
  
  const faqItems = [
    {
      question: "How is OrganicReach different from playlist placements?",
      answer: "Unlike playlist placements that focus on temporary streams (often from bots), OrganicReach builds genuine fan connections through targeted organic advertising. We identify listeners who are most likely to enjoy your music based on their listening habits and preferences, then deliver your music to them through engaging ads across platforms they already use. This results in real fans who follow you, save tracks, and engage with your music long-term."
    },
    {
      question: "What platforms do you advertise on?",
      answer: "Our platform runs campaigns across all major social and music discovery platforms including Instagram, Facebook, TikTok, YouTube, Snapchat, and more. We automatically optimize your budget allocation across platforms based on performance data to ensure you're getting the best ROI possible."
    },
    {
      question: "How quickly will I see results?",
      answer: "Most artists see initial results within the first 2 weeks as campaigns optimize. Meaningful growth typically begins around the 30-day mark as our AI refines your audience targeting. Unlike playlist placements that provide a temporary spike, OrganicReach builds sustainable growth that continues even after campaigns end as real fans continue to engage with your music."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time with no long-term commitments or cancellation fees. We're confident in our results and don't believe in locking artists into contracts. Our subscription model is month-to-month with the option to pause campaigns if needed."
    },
    {
      question: "How much budget should I allocate for ads?",
      answer: "While our platform fee covers campaign management, strategy, and analytics, you'll need a separate ad budget for the platforms. We recommend a minimum ad budget of $300/month for meaningful results, though many artists start with $500-1000/month. Our ROI calculator can help estimate optimal budgets based on your goals."
    },
    {
      question: "Do I need to have music on streaming platforms already?",
      answer: "Yes, your music should be available on at least one major streaming platform (Spotify, Apple Music, etc.) before starting with OrganicReach. Our system connects to your streaming profiles to analyze performance data and optimize campaigns accordingly."
    }
  ];
  
  return (
    <Section id="faq" className="bg-dark-950 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary-500">Questions</span>
          </h2>
          <p className="text-xl text-gray-300">
            Everything you need to know about our platform
          </p>
        </motion.div>
        
        <motion.div variants={itemVariants}>
          <Accordion items={faqItems} />
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-12 text-center"
        >
          <p className="text-gray-300 mb-6">
            Still have questions? Our team is here to help.
          </p>
          <Button variant="outline">
            Contact Support
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}