'use client';

import { motion } from 'framer-motion';
import { UtensilsCrossed, Building2, Calendar, Sparkles, Store } from 'lucide-react';
import { fadeUpStagger, fadeUpItem } from '../_lib/animations';

const audiences = [
  {
    label: 'Restaurants',
    icon: UtensilsCrossed,
    color: 'text-yellow-500',
  },
  {
    label: 'Brands',
    icon: Building2,
    color: 'text-purple-500',
  },
  {
    label: 'Event Hosts',
    icon: Calendar,
    color: 'text-pink-500',
  },
  {
    label: 'Creators',
    icon: Sparkles,
    color: 'text-cyan-500',
  },
  {
    label: 'Local Businesses',
    icon: Store,
    color: 'text-accent',
  },
];

export function WhoIsThisForSection() {
  return (
    <section className="py-12 md:py-16 bg-background/50 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 gradient-purple-soft opacity-5 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="text-center mb-8"
        >
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-base md:text-fluid-lg text-muted-foreground mb-6"
          >
            Built for:
          </motion.p>
        </motion.div>

        {/* Horizontal scrolling on mobile, evenly spaced on desktop */}
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-8 lg:gap-12 overflow-x-auto pb-4 md:pb-0 scrollbar-hide"
        >
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <motion.div
                key={audience.label}
                variants={fadeUpItem}
                whileHover={{ scale: 1.05, y: -4 }}
                className="flex flex-col items-center gap-3 min-w-fit group cursor-default"
              >
                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple/20 transition-colors duration-200 ${audience.color}`}>
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <span className="text-fluid-sm md:text-fluid-base font-medium text-primary whitespace-nowrap">
                  {audience.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

