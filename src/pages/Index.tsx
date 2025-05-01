
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import Comparison from '@/components/Comparison';
import Testimonials from '@/components/Testimonials';
import TrustBuilders from '@/components/TrustBuilders';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PainPoints />
      <HowItWorks />
      <Features />
      <Comparison />
      <Testimonials />
      <TrustBuilders />
      <Pricing />
      <FAQ />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
