'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../_components/ui/card';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Sparkles, UtensilsCrossed } from 'lucide-react';
import { fadeUpStagger, fadeUpItem, cardHover } from '../_lib/animations';

const services = [
  {
    id: 'marketing',
    title: 'Marketing Services',
    description: 'Comprehensive digital marketing solutions to grow your business.',
    features: ['Social Media Marketing', 'Website Development', 'Google Ads', 'Mobile Apps', 'Google My Business'],
    tags: ['SMM', 'Websites', 'Ads', 'Apps', 'GMB'],
    href: '/services#marketing',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-pink-500',
    accentColor: 'purple',
  },
  {
    id: 'digital',
    title: 'Digital Invitations',
    description: 'Beautiful, customizable digital invitations for your special events.',
    tags: ['Weddings', 'Events', 'Customizable', 'Interactive'],
    href: '/services#digital',
    icon: Sparkles,
    gradient: 'from-blue-500 to-purple-500',
    accentColor: 'blue',
  },
  {
    id: 'bitex',
    title: 'BiteX POS',
    description: 'Complete Restaurant POS solution with inventory, billing, and analytics.',
    tags: ['POS', 'Inventory', 'Billing', 'Analytics'],
    href: '/services#bitex',
    icon: UtensilsCrossed,
    gradient: 'from-orange-500 to-red-500',
    accentColor: 'orange',
  },
];

export function ServicesSection() {
  return (
    <section className="py-8 md:py-12 bg-background relative overflow-hidden">
      {/* Background pattern - lighter on mobile */}
      <div className="absolute inset-0 gradient-purple-soft opacity-3 md:opacity-5 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={fadeUpItem}
                whileHover={cardHover}
                className="h-full group"
              >
                <Card
                  variant="glass"
                  className="h-full relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 bg-white/80 backdrop-blur-md group-hover:bg-white/95"
                >
                  {/* Gradient border effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm`}
                  />
                  
                  <CardHeader className="pb-4 relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <CardTitle className="text-fluid-xl md:text-fluid-2xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-fluid-sm text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-200">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="space-y-6 relative z-10">
                    {/* Tag chips */}
                    {service.tags && (
                      <div className="flex flex-wrap gap-2">
                        {service.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${service.gradient} text-white shadow-sm group-hover:shadow-md transition-shadow duration-200`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {/* Features list */}
                    {service.features && (
                      <ul className="space-y-2 text-sm text-foreground/80 group-hover:text-foreground/90 transition-colors duration-200">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mt-2 mr-3 flex-shrink-0`} />
                            <span className="text-foreground/80 group-hover:text-foreground/90">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {/* CTA Link */}
                    <Link
                      href={`/coming-soon?service=${service.id}`}
                      className="inline-flex items-center text-accent font-semibold text-sm group/link hover:text-accent-deep transition-all duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-200" />
                    </Link>
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

