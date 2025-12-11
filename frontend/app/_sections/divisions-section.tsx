'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../_components/ui/card';
import { Badge } from '../_components/ui/badge';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Sparkles, QrCode, Instagram, Twitter } from 'lucide-react';
import { fadeUpStagger, fadeUpItem, cardHover } from '../_lib/animations';

const divisions = [
  {
    title: 'Shyara Marketing',
    titleParts: { prefix: '', brand: 'Shyara', suffix: ' Marketing' },
    description: 'Social Media Management, Website Development, Ads Management, App Development, and GMB Optimization.',
    href: '/coming-soon?service=marketing',
    icon: TrendingUp,
    gradient: 'from-purple-500 to-cyan-400',
    borderGradient: 'from-purple-500 via-cyan-400 to-purple-500',
    tags: ['Social Media', 'Websites', 'Paid Ads', 'Apps', 'GMB'],
    tagVariants: ['cyan', 'purple', 'cyan', 'purple', 'cyan'] as const,
    ornament: 'social',
  },
  {
    title: 'Shyara Digital',
    titleParts: { prefix: '', brand: 'Shyara', suffix: ' Digital' },
    description: 'Digital invitations, e-invites, and digitally shareable content for events and functions.',
    href: '/coming-soon?service=digital',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-400',
    borderGradient: 'from-purple-500 via-pink-400 to-purple-500',
    tags: ['Wedding Invites', 'Event Microsites', 'Custom E-Invites'],
    tagVariants: ['pink', 'purple', 'pink'] as const,
    ornament: 'sparkles',
  },
  {
    title: 'BiteX by Shyara',
    titleParts: { prefix: 'BiteX by ', brand: 'Shyara', suffix: '' },
    description: 'Restaurant-focused POS with QR code ordering, live order flow, analytics and insights for admins.',
    href: '/coming-soon?service=bitex',
    icon: QrCode,
    gradient: 'from-purple-500 to-yellow-400',
    borderGradient: 'from-purple-500 via-yellow-400 to-purple-500',
    tags: ['QR Menu', 'Live Orders', 'Analytics', 'Multi-Device'],
    tagVariants: ['yellow', 'purple', 'yellow', 'purple'] as const,
    ornament: 'qr',
  },
];

export function DivisionsSection() {
  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Subtle background pattern - lighter on mobile */}
      <div className="absolute inset-0 gradient-purple-soft opacity-10 md:opacity-20 pointer-events-none" />
      
      {/* Geometric decorative shapes - hidden on mobile */}
      <div className="absolute top-10 right-20 w-20 h-20 border border-accent/10 rounded-lg rotate-45 hidden lg:block" />
      <div className="absolute bottom-10 left-20 w-16 h-16 border border-accent/10 rounded-full hidden lg:block" />
      
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
            Our Divisions
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-base text-muted-foreground max-w-2xl mx-auto"
          >
            Three powerful divisions working together to deliver exceptional digital experiences.
          </motion.p>
        </motion.div>

        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10"
        >
          {divisions.map((division, index) => {
            const Icon = division.icon;
            return (
              <motion.div
                key={division.title}
                variants={fadeUpItem}
                whileHover={cardHover}
                className="group"
              >
                <Card
                  variant="glass"
                  className="h-full relative overflow-hidden border-2 border-transparent hover:border-accent/30 transition-all duration-300 bg-white/80 backdrop-blur-md group-hover:bg-white/95"
                >
                  {/* Gradient border effect on hover */}
                  <div
                    className={`absolute inset-0 rounded-lg bg-gradient-to-r ${division.borderGradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-sm`}
                  />
                  
                  {/* Visual ornaments */}
                  {division.ornament === 'sparkles' && (
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Sparkles className="w-6 h-6 text-pink-400" />
                    </div>
                  )}
                  {division.ornament === 'qr' && (
                    <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <QrCode className="w-6 h-6 text-yellow-400" />
                    </div>
                  )}
                  {division.ornament === 'social' && (
                    <div className="absolute top-4 right-4 flex gap-1 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Instagram className="w-4 h-4 text-cyan-400" />
                      <Twitter className="w-4 h-4 text-cyan-400" />
                    </div>
                  )}
                  
                  <CardHeader className="pb-4 relative z-10">
                    {/* Icon with gradient background */}
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${division.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-fluid-xl md:text-fluid-2xl font-bold text-primary mb-3 group-hover:text-primary transition-colors duration-200">
                      {division.titleParts ? (
                        <>
                          {division.titleParts.prefix}
                          <span className="font-brand">{division.titleParts.brand}</span>
                          {division.titleParts.suffix}
                        </>
                      ) : (
                        division.title
                      )}
                    </CardTitle>
                    <CardDescription className="text-fluid-sm text-foreground/80 leading-relaxed mb-4 group-hover:text-foreground/90 transition-colors duration-200">
                      {division.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    {/* Tag chips */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {division.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tag}
                          variant={division.tagVariants[tagIndex] || 'outline'}
                          className="text-xs bg-white/90 backdrop-blur-sm group-hover:bg-white transition-colors duration-200"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link
                      href={division.href}
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

