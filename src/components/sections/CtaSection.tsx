import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Lock, ShieldCheck, Award } from 'lucide-react';

type EmailFormData = {
  email: string;
};

export function CtaSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<EmailFormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  
  const onSubmit = (data: EmailFormData) => {
    // Simulate form submission
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setIsSuccess(true);
        resolve();
      }, 1500);
    });
  };
  
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
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-primary-500/20 to-transparent opacity-10 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-secondary-500/20 to-transparent opacity-10 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl mx-auto relative"
      >
        <motion.div 
          variants={itemVariants}
          className="bg-gradient-to-br from-primary-900/30 to-secondary-900/30 backdrop-blur-md border border-primary-700/30 rounded-lg p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Build <span className="text-primary-500">Real Fans</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of artists who've switched from playlist placements to genuine fan engagement with OrganicReach.
          </p>
          
          {!isSuccess ? (
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`w-full px-4 py-3 bg-dark-800 border ${
                      errors.email ? 'border-red-500' : 'border-dark-700'
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 text-white`}
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {errors.email && (
                    <p className="absolute -bottom-6 left-0 text-sm text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Start Free Trial'}
                </Button>
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-dark-800/50 border border-primary-700/30 rounded-lg p-6 max-w-md mx-auto mb-8"
            >
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Thank You!</h3>
              <p className="text-gray-300">
                Check your email for instructions on how to get started with your free trial.
              </p>
            </motion.div>
          )}
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center">
              <ShieldCheck className="h-5 w-5 text-primary-500 mr-2" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center">
              <Lock className="h-5 w-5 text-primary-500 mr-2" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center">
              <Award className="h-5 w-5 text-primary-500 mr-2" />
              <span>100% satisfaction guarantee</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 text-center"
        >
          <p className="text-2xl font-bold mb-6">
            Trusted by <span className="text-primary-500">500+</span> artists worldwide
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-gray-400 font-bold">ARTIST 1</div>
            </div>
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-gray-400 font-bold">ARTIST 2</div>
            </div>
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-gray-400 font-bold">ARTIST 3</div>
            </div>
            <div className="bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-4 h-16 flex items-center justify-center">
              <div className="text-gray-400 font-bold">ARTIST 4</div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}