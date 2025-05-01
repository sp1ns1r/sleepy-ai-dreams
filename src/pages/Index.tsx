
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KeyValueProps from '@/components/KeyValueProps';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <KeyValueProps />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
