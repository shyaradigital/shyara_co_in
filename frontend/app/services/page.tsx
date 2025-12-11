'use client';

import { motion } from 'framer-motion';
import { ServicesSection } from '../_sections/services-section';
import { CTASection } from '../_sections/cta-section';
import { fadeUp } from '../_lib/animations';

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
        {/* Gradient background - lighter on mobile */}
        <div className="absolute inset-0 gradient-purple-soft opacity-10 md:opacity-20 pointer-events-none" />
        
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-fluid-4xl md:text-fluid-5xl font-display font-bold text-primary mb-6">
              Our Services
            </h1>
            <p className="text-fluid-lg md:text-fluid-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions tailored to your business needs. From marketing to
              restaurant technology, we have got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      <ServicesSection />
      <CTASection />
    </div>
  );
}

