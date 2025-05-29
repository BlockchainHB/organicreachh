import React from 'react';
import { Layout } from './components/layout/Layout';
import { Hero } from './components/sections/Hero';
import { ComparisonSection } from './components/sections/ComparisonSection';
import { RoiCalculator } from './components/sections/RoiCalculator';
import { HowItWorks } from './components/sections/HowItWorks';
import { Features } from './components/sections/Features';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { Faq } from './components/sections/Faq';
import { CtaSection } from './components/sections/CtaSection';

function App() {
  return (
    <Layout>
      <Hero />
      <ComparisonSection />
      <RoiCalculator />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <Faq />
      <CtaSection />
    </Layout>
  );
}

export default App;