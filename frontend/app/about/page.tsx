'use client';

import { motion } from 'framer-motion';
import { Card } from '../_components/ui/card';
import { Target, Eye, Rocket, BookOpen } from 'lucide-react';
import { WhyChooseUsSection } from '../_sections/why-choose-us-section';
import { CTASection } from '../_sections/cta-section';
import { fadeUpStagger, fadeUpItem } from '../_lib/animations';

const sections = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower businesses with cutting-edge digital solutions that drive growth, enhance customer experiences, and transform industries through innovation and technology.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To become the leading digital ecosystem provider, recognized for excellence in marketing, digital experiences, and restaurant technology across India and beyond.',
    gradient: 'from-blue-500 to-purple-500',
  },
  {
    icon: Rocket,
    title: 'Execution-First Philosophy',
    description:
      'At Shyara, we believe in action over words. Our execution-first approach means we do not just plan—we deliver. Every project is handled with precision, dedication, and a commitment to exceeding expectations. We combine strategic thinking with hands-on implementation to ensure your vision becomes reality.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: BookOpen,
    title: 'Our Story',
    description:
      'Founded with a vision to bridge the gap between businesses and digital transformation, Shyara has grown into a comprehensive digital solutions provider. Through our three core divisions—Marketing, Digital Invitations, and BiteX POS—we serve clients across various industries, helping them navigate the digital landscape with confidence and success.',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background to-background/50 relative overflow-hidden">
        <div className="absolute inset-0 gradient-purple-soft opacity-5 md:opacity-10 pointer-events-none" />
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-fluid-4xl md:text-fluid-5xl font-display font-bold text-primary mb-6">
              About <span className="font-brand">Shyara</span>
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              Learn about our mission, vision, and execution-first philosophy that drives everything we do.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-5xl mx-auto space-y-8"
          >
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <motion.div key={section.title} variants={fadeUpItem}>
                  <Card variant="elevated" className="p-8 md:p-10 hover:shadow-glow-purple-sm transition-all duration-300">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <div
                          className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center shadow-lg`}
                        >
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-fluid-2xl md:text-fluid-3xl font-display font-bold text-primary mb-4">
                          {section.title}
                        </h2>
                        <p className="text-fluid-base text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <WhyChooseUsSection />
      <CTASection />
    </div>
  );
}

