import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { Check, X } from 'lucide-react';

type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: Array<{
    name: string;
    included: boolean;
  }>;
  cta: string;
  recommended?: boolean;
};

export function Pricing() {
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
  
  const tiers: PricingTier[] = [
    {
      name: 'Starter',
      price: '$99',
      description: 'For artists just starting to grow their audience.',
      features: [
        { name: 'Basic audience targeting', included: true },
        { name: 'Campaign management', included: true },
        { name: 'Performance analytics', included: true },
        { name: 'Multi-platform ads', included: true },
        { name: 'A/B testing', included: false },
        { name: 'Dedicated success manager', included: false },
        { name: 'Advanced audience insights', included: false },
      ],
      cta: 'Start Free Trial',
    },
    {
      name: 'Growth',
      price: '$299',
      description: 'Our most popular plan for artists ready to scale.',
      features: [
        { name: 'Advanced audience targeting', included: true },
        { name: 'Campaign management', included: true },
        { name: 'Detailed performance analytics', included: true },
        { name: 'Multi-platform ads', included: true },
        { name: 'A/B testing', included: true },
        { name: 'Dedicated success manager', included: true },
        { name: 'Advanced audience insights', included: false },
      ],
      cta: 'Start Free Trial',
      recommended: true,
    },
    {
      name: 'Label',
      price: 'Custom',
      description: 'For labels with multiple artists to promote.',
      features: [
        { name: 'Premium audience targeting', included: true },
        { name: 'Campaign management', included: true },
        { name: 'Comprehensive analytics suite', included: true },
        { name: 'Multi-platform ads', included: true },
        { name: 'Advanced A/B testing', included: true },
        { name: 'Dedicated account manager', included: true },
        { name: 'Advanced audience insights', included: true },
      ],
      cta: 'Contact Sales',
    },
  ];
  
  return (
    <Section id="pricing" className="bg-dark-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-secondary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-6xl mx-auto"
      >
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, <span className="text-primary-500">Transparent</span> Pricing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            All plans include a 14-day free trial with no credit card required
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`relative ${
                tier.recommended 
                  ? 'md:-mt-4 md:mb-4 z-10' 
                  : ''
              }`}
            >
              <div 
                className={`h-full flex flex-col rounded-lg overflow-hidden border ${
                  tier.recommended 
                    ? 'bg-gradient-to-br from-primary-900/40 to-secondary-900/40 backdrop-blur-md border-primary-700/30' 
                    : 'bg-dark-800/30 backdrop-blur-md border-dark-700/50'
                }`}
              >
                {tier.recommended && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-xs font-bold py-1 px-3 rounded-full">
                    RECOMMENDED
                  </div>
                )}
                
                <div className="p-8 text-center border-b border-dark-700/50">
                  <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.name !== 'Label' && <span className="text-gray-400 ml-1">/month</span>}
                  </div>
                  <p className="text-gray-400">{tier.description}</p>
                </div>
                
                <div className="p-8 flex-grow">
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className={`p-1 rounded-full mr-3 mt-0.5 ${
                          feature.included 
                            ? 'bg-green-500/20' 
                            : 'bg-red-500/20'
                        }`}>
                          {feature.included ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <X className="h-4 w-4 text-red-500" />
                          )}
                        </div>
                        <span className={feature.included ? 'text-gray-200' : 'text-gray-500'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-8 pt-0">
                  <Button 
                    variant={tier.recommended ? 'primary' : 'outline'} 
                    fullWidth
                  >
                    {tier.cta}
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={itemVariants}
          className="mt-16 bg-dark-800/30 backdrop-blur-md border border-dark-700/50 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Enterprise Solutions</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Need a custom solution for a larger roster or specialized needs?
            Our enterprise plans include personalized onboarding, custom analytics,
            and priority support.
          </p>
          <Button variant="outline">
            Contact Our Team
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}