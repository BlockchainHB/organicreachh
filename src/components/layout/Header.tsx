import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, X, Music } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-900/80 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-primary-500 mr-2" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
              OrganicReach
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-sm text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
              Success Stories
            </a>
            <Button variant="outline" size="sm">
              Log In
            </Button>
            <Button variant="primary" size="sm">
              Start Free Trial
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden focus:outline-none" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-200" />
            ) : (
              <MenuIcon className="h-6 w-6 text-gray-200" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-dark-900/95 backdrop-blur-lg"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#how-it-works" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>
              <a 
                href="#features" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              <a 
                href="#testimonials" 
                className="text-gray-300 hover:text-white py-2 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Success Stories
              </a>
              <div className="pt-2 flex flex-col space-y-3">
                <Button variant="outline" fullWidth>
                  Log In
                </Button>
                <Button variant="primary" fullWidth>
                  Start Free Trial
                </Button>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}