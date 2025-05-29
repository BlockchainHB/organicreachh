import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm } from 'react-hook-form';
import { Section } from '../ui/Section';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { DollarSign, Users, TrendingUp } from 'lucide-react';

type CalculatorFormData = {
  currentSpend: number;
  monthlyStreams: number;
  genre: string;
};

export function RoiCalculator() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm<CalculatorFormData>({
    defaultValues: {
      currentSpend: 500,
      monthlyStreams: 10000,
      genre: 'pop',
    },
  });
  
  const currentSpend = watch('currentSpend');
  const monthlyStreams = watch('monthlyStreams');
  const genre = watch('genre');
  
  const [results, setResults] = useState({
    realFans: 0,
    botPlays: 0,
    organicPerformance: 0,
    savings: 0,
    roi: 0,
  });
  
  const [showResults, setShowResults] = useState(false);
  const [isCalculating, setIsCalculating] = useState(false);
  
  useEffect(() => {
    // Recalculate whenever inputs change
    const realFanPercentage = getRealFanPercentage(genre);
    const realFans = Math.round(monthlyStreams * (realFanPercentage / 100));
    const botPlays = monthlyStreams - realFans;
    
    // OrganicReach performance estimation
    const monthlyPlatformCost = 299; // Growth plan cost
    const estimatedRealFans = Math.round(realFans * 3.2); // 3.2x better performance
    const organicPerformance = estimatedRealFans;
    
    // Financial calculations
    const savings = currentSpend - monthlyPlatformCost;
    const roi = savings > 0 ? ((estimatedRealFans - realFans) / currentSpend) * 100 : 0;
    
    setResults({
      realFans,
      botPlays,
      organicPerformance,
      savings,
      roi,
    });
  }, [currentSpend, monthlyStreams, genre]);
  
  const onSubmit = (data: CalculatorFormData) => {
    setIsCalculating(true);
    
    // Simulate calculation time
    setTimeout(() => {
      setIsCalculating(false);
      setShowResults(true);
    }, 1500);
  };
  
  // Helper function to get real fan percentage based on genre
  const getRealFanPercentage = (genre: string): number => {
    const percentages: Record<string, number> = {
      'pop': 12,
      'hip-hop': 14,
      'electronic': 16,
      'rock': 18,
      'indie': 22,
      'other': 15,
    };
    
    return percentages[genre] || 15;
  };
  
  return (
    <Section id="roi-calculator" className="bg-dark-950 relative">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-500/10 to-transparent opacity-20 blur-3xl" />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="text-primary-500">Real ROI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how much more effective OrganicReach can be compared to your current playlist promotion strategy.
          </p>
        </div>
        
        <Card variant="glass" className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-6">Your Current Strategy</h3>
              
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Playlist Placement Spend ($)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <DollarSign className="h-5 w-5 text-gray-500" />
                    </div>
                    <input
                      type="number"
                      {...register('currentSpend', { required: true, min: 100 })}
                      className="block w-full pl-10 pr-3 py-2 rounded-md bg-dark-800 border border-dark-700 focus:ring-primary-500 focus:border-primary-500 text-white"
                    />
                  </div>
                  {errors.currentSpend && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter a valid amount (minimum $100)
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Monthly Streams from Placements
                  </label>
                  <input
                    type="number"
                    {...register('monthlyStreams', { required: true, min: 1000 })}
                    className="block w-full px-3 py-2 rounded-md bg-dark-800 border border-dark-700 focus:ring-primary-500 focus:border-primary-500 text-white"
                  />
                  {errors.monthlyStreams && (
                    <p className="mt-1 text-sm text-red-500">
                      Please enter a valid number of streams (minimum 1,000)
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Primary Genre
                  </label>
                  <select
                    {...register('genre', { required: true })}
                    className="block w-full px-3 py-2 rounded-md bg-dark-800 border border-dark-700 focus:ring-primary-500 focus:border-primary-500 text-white"
                  >
                    <option value="pop">Pop</option>
                    <option value="hip-hop">Hip-Hop/Rap</option>
                    <option value="electronic">Electronic/EDM</option>
                    <option value="rock">Rock</option>
                    <option value="indie">Indie</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={isCalculating}
                >
                  {isCalculating ? 'Calculating...' : 'Calculate My ROI'}
                </Button>
              </form>
            </div>
            
            <div className="lg:col-span-3 flex items-center">
              {!showResults ? (
                <div className="text-center w-full p-8">
                  <TrendingUp className="h-16 w-16 text-primary-500 mx-auto mb-4 opacity-50" />
                  <p className="text-xl text-gray-400">
                    Fill out the form and calculate your potential ROI with OrganicReach
                  </p>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-full"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Your Results</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div className="bg-dark-800/50 rounded-lg p-5 border border-dark-700/50">
                      <h4 className="font-medium mb-2 text-gray-300">Current Playlist Strategy</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-400">Real Fans Generated</p>
                          <p className="text-2xl font-bold text-white">{results.realFans.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Bot Plays (No Value)</p>
                          <p className="text-2xl font-bold text-red-500">{results.botPlays.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-400">Cost Per Real Fan</p>
                          <p className="text-2xl font-bold text-white">
                            ${(currentSpend / results.realFans).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-primary-900/30 to-secondary-900/30 rounded-lg p-5 border border-primary-700/30">
                      <h4 className="font-medium mb-2 text-white">OrganicReach Strategy</h4>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm text-gray-300">Projected Real Fans</p>
                          <p className="text-2xl font-bold text-primary-400">{results.organicPerformance.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">Monthly Savings</p>
                          <p className="text-2xl font-bold text-green-500">${results.savings.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-300">Cost Per Real Fan</p>
                          <p className="text-2xl font-bold text-white">
                            ${(299 / results.organicPerformance).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-800/70 rounded-lg p-6 border border-primary-700/30">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-medium text-white">Overall ROI Improvement</h4>
                      <p className="text-3xl font-bold text-primary-500">{Math.round(results.roi)}%</p>
                    </div>
                    
                    <div className="w-full bg-dark-700 rounded-full h-4 mb-6">
                      <div 
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-4 rounded-full"
                        style={{ width: `${Math.min(100, results.roi)}%` }}
                      ></div>
                    </div>
                    
                    <div className="text-center">
                      <Button variant="primary">Get My Full Analysis</Button>
                      <p className="mt-3 text-sm text-gray-400">
                        We'll send you a detailed breakdown of your potential results
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    </Section>
  );
}