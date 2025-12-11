'use client';

import { motion } from 'framer-motion';
import { Card } from '../_components/ui/card';
import { Zap, Palette, Code, TrendingUp, Sparkles, QrCode } from 'lucide-react';
import { fadeUpStagger, fadeUpItem } from '../_lib/animations';

interface AboutSectionProps {
  title?: string;
  description?: string;
}

const pillars = [
  {
    icon: Zap,
    title: 'Execution-first mindset',
    description: 'We don\'t just plan—we deliver results with precision and dedication.',
  },
  {
    icon: Palette,
    title: 'Design-driven outputs',
    description: 'Every solution is crafted with attention to aesthetics and user experience.',
  },
  {
    icon: Code,
    title: 'Tech-enabled workflows',
    description: 'Leveraging cutting-edge technology to streamline processes and maximize efficiency.',
  },
];

const subBrands = [
  {
    icon: TrendingUp,
    name: 'Shyara Marketing',
    description: 'Social Media Management, Websites, Ads, Apps, GMB Optimization',
    color: 'from-cyan-400 to-purple-500',
  },
  {
    icon: Sparkles,
    name: 'Shyara Digital',
    description: 'Digital invitations and e-invites for events and functions',
    color: 'from-pink-400 to-purple-500',
  },
  {
    icon: QrCode,
    name: 'BiteX by Shyara',
    description: 'Restaurant POS with QR ordering, live orders, and analytics',
    color: 'from-yellow-400 to-purple-500',
  },
];

export function AboutSection({ title, description }: AboutSectionProps) {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="max-w-6xl mx-auto"
        >
          <Card variant="elevated" className="p-8 md:p-12">
            {title && (
              <motion.h2
                variants={fadeUpItem}
                className="text-fluid-3xl md:text-fluid-4xl font-display font-bold text-primary mb-8 text-center"
              >
                {title}
              </motion.h2>
            )}

            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
              {/* Left Side - Mission/Approach */}
              <motion.div variants={fadeUpItem} className="space-y-6">
                {description && (
                  <p className="text-fluid-base md:text-fluid-lg text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                )}
                <p className="text-fluid-base text-muted-foreground leading-relaxed">
                  <span className="font-brand">Shyara</span> is a digital execution company that blends services and product innovation. We combine marketing expertise, digital experiences, and restaurant technology to deliver comprehensive solutions that drive growth and success.
                </p>

                {/* Pillars */}
                <div className="space-y-4 pt-6">
                  {pillars.map((pillar, index) => {
                    const Icon = pillar.icon;
                    return (
                      <div key={pillar.title} className="flex gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-purple/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="text-fluid-base font-semibold text-primary mb-1">
                            {pillar.title}
                          </h3>
                          <p className="text-fluid-sm text-muted-foreground">
                            {pillar.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Side - Sub-brands Timeline/List */}
              <motion.div variants={fadeUpItem} className="space-y-6">
                <h3 className="text-fluid-xl md:text-fluid-2xl font-display font-bold text-primary mb-6">
                  Our Ecosystem
                </h3>
                <div className="space-y-6">
                  {subBrands.map((brand, index) => {
                    const Icon = brand.icon;
                    return (
                      <div key={brand.name} className="relative pl-8">
                        {/* Timeline line */}
                        {index < subBrands.length - 1 && (
                          <div className="absolute left-3 top-12 bottom-0 w-0.5 bg-gradient-to-b from-accent/30 to-transparent" />
                        )}
                        {/* Timeline dot */}
                        <div className={`absolute left-0 top-1.5 w-6 h-6 rounded-full bg-gradient-to-br ${brand.color} flex items-center justify-center shadow-md`}>
                          <Icon className="w-3.5 h-3.5 text-white" />
                        </div>
                        <div>
                          <h4 className="text-fluid-base md:text-fluid-lg font-semibold text-primary mb-1">
                            {brand.name.includes('Shyara') ? (
                              <>
                                {brand.name.split('Shyara')[0]}
                                <span className="font-brand">Shyara</span>
                                {brand.name.split('Shyara')[1]}
                              </>
                            ) : (
                              brand.name
                            )}
                          </h4>
                          <p className="text-fluid-sm text-muted-foreground leading-relaxed">
                            {brand.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

