'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../_components/ui/card';
import { Lightbulb, Users, Zap } from 'lucide-react';
import { fadeUpStagger, fadeUpItem, cardHover } from '../_lib/animations';

const pillars = [
  {
    title: 'Innovation First',
    description: 'We stay ahead of the curve with cutting-edge technology and creative solutions.',
    icon: Lightbulb,
    gradient: 'from-yellow-400 to-orange-500',
  },
  {
    title: 'Client-Centric',
    description: 'Your success is our priority. We build solutions tailored to your unique needs.',
    icon: Users,
    gradient: 'from-blue-400 to-purple-500',
  },
  {
    title: 'Execution Excellence',
    description: 'We don\'t just plan—we deliver results with precision and dedication.',
    icon: Zap,
    gradient: 'from-purple-400 to-pink-500',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-16 md:py-24 bg-background/50 relative overflow-hidden">
      {/* Subtle background texture - lighter on mobile */}
      <div className="absolute inset-0 gradient-purple-soft opacity-5 md:opacity-10 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeUpItem}
            className="text-fluid-3xl md:text-fluid-4xl font-display font-bold text-primary mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-base text-muted-foreground max-w-2xl mx-auto"
          >
            Three pillars that define our approach to delivering exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUpItem}
                whileHover={cardHover}
                className="h-full"
              >
                <Card variant="elevated" className="h-full text-center p-8 hover:shadow-glow-purple-sm transition-all duration-300">
                  <CardHeader className="pb-4">
                    {/* Icon with duotone gradient styling */}
                    <div className="flex justify-center mb-6">
                      <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${pillar.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-fluid-xl md:text-fluid-2xl font-bold text-primary mb-4">
                      {pillar.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-fluid-base text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

