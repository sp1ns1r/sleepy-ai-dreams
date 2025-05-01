
import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="font-display font-bold text-2xl text-dreamy-purple">DreamyBaby</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-4">
              <a href="#how-it-works" className="text-gray-600 hover:text-dreamy-purple px-3 py-2 rounded-md text-sm font-medium">
                How It Works
              </a>
              <a href="#features" className="text-gray-600 hover:text-dreamy-purple px-3 py-2 rounded-md text-sm font-medium">
                Features
              </a>
              <a href="#comparison" className="text-gray-600 hover:text-dreamy-purple px-3 py-2 rounded-md text-sm font-medium">
                Why Choose Us
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-dreamy-purple px-3 py-2 rounded-md text-sm font-medium">
                Pricing
              </a>
              <a href="#faq" className="text-gray-600 hover:text-dreamy-purple px-3 py-2 rounded-md text-sm font-medium">
                FAQ
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <Button className="bg-dreamy-purple hover:bg-dreamy-purple/90">
              Get Started
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-gray-600 hover:text-dreamy-purple">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
