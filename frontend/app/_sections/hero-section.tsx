'use client';

import { motion } from 'framer-motion';
import { Badge } from '../_components/ui/badge';
import Link from 'next/link';
import { Megaphone, Sparkles, QrCode, BarChart } from 'lucide-react';
import { fadeUpStagger, fadeUpItem, breathe, float } from '../_lib/animations';

export function HeroSection() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden grain-texture">
      {/* Enhanced mesh gradient background */}
      <div className="absolute inset-0 gradient-mesh-hero" />
      
      {/* Radial spotlight glow behind headline */}
      <div className="absolute inset-0 spotlight-glow pointer-events-none" />
      
      {/* Animated decorative blobs with breathing effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-accent/8 md:bg-accent/12 rounded-full blur-3xl"
          animate={breathe}
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, rgba(110, 58, 255, 0.2) 50%, transparent 100%)',
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent-deep/8 md:bg-accent-deep/12 rounded-full blur-3xl"
          animate={{
            ...breathe,
            transition: {
              ...breathe.transition,
              delay: 2,
            },
          }}
          style={{
            background: 'radial-gradient(circle, rgba(82, 40, 217, 0.5) 0%, rgba(110, 58, 255, 0.25) 50%, transparent 100%)',
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/5 md:bg-accent/8 rounded-full blur-3xl"
          animate={{
            ...breathe,
            transition: {
              ...breathe.transition,
              delay: 4,
            },
          }}
          style={{
            background: 'radial-gradient(circle, rgba(110, 58, 255, 0.3) 0%, rgba(167, 139, 250, 0.15) 50%, transparent 100%)',
          }}
        />
      </div>

      {/* 4-Icon Orbit/Cluster - Representing the divisions and analytics */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
        {/* Marketing Icon - Top Left */}
        <motion.div
          className="absolute top-16 left-10 md:top-24 md:left-16"
          animate={{
            y: [0, -15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-full blur-xl" />
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center shadow-lg">
              <Megaphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Digital Icon - Top Right */}
        <motion.div
          className="absolute top-20 right-12 md:top-28 md:right-20"
          animate={{
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-pink-400/20 rounded-full blur-xl" />
            <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-400 flex items-center justify-center shadow-lg">
              <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
        </motion.div>

        {/* BiteX Icon - Bottom Left (positioned to avoid text overlap) */}
        <motion.div
          className="absolute bottom-16 left-8 md:bottom-24 md:left-12 lg:bottom-28 lg:left-16"
          animate={{
            y: [0, 10, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 rounded-full blur-xl" />
            <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-yellow-400 flex items-center justify-center shadow-lg">
              <QrCode className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
        </motion.div>

        {/* Analytics/Chart Icon - Bottom Right (for symmetry) */}
        <motion.div
          className="absolute bottom-16 right-8 md:bottom-24 md:right-12 lg:bottom-28 lg:right-16"
          animate={{
            y: [0, 10, 0],
            rotate: [0, -3, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.5,
          }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-orange-400/20 rounded-full blur-xl" />
            <div className="relative w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br from-purple-500 to-orange-400 flex items-center justify-center shadow-lg">
              <BarChart className="w-5 h-5 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3D Purple Orb - Supporting Visual Element */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-30 md:opacity-40 pointer-events-none hidden lg:block"
        animate={float}
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(167, 139, 250, 0.6), rgba(110, 58, 255, 0.4), rgba(82, 40, 217, 0.3))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          transform: 'translateX(20%)',
        }}
      />
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 opacity-20 md:opacity-30 pointer-events-none hidden lg:block"
        animate={{
          ...float,
          transition: {
            ...float.transition,
            delay: 1,
          },
        }}
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(110, 58, 255, 0.5), rgba(82, 40, 217, 0.3), transparent)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          transform: 'translateX(30%) translateY(10%)',
        }}
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 z-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          animate="visible"
          className="text-center max-w-5xl mx-auto relative"
        >
          {/* Main headline with Tan Pardiso font for "Shyara" */}
          <motion.div
            variants={fadeUpItem}
            className="relative mb-6 md:mb-8"
          >
            {/* Radial glow backdrop for headline */}
            <div className="absolute inset-0 -top-10 -bottom-10 blur-3xl bg-gradient-to-b from-accent/20 via-accent/10 to-transparent -z-10" />
            
            <h1 className="relative text-fluid-4xl md:text-fluid-5xl font-display font-bold text-primary mb-4 md:mb-6 text-balance leading-tight tracking-tight">
              <span className="relative inline-block font-brand text-fluid-4xl md:text-fluid-5xl">
                Shyara
                <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 shimmer -z-0 rounded-full" />
              </span>
              {' '}— Designing the Future of{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Digital</span>
                <span className="absolute bottom-0 left-0 w-full h-2 md:h-3 bg-gradient-purple opacity-20 -z-0" />
              </span>{' '}
              Experiences
            </h1>
          </motion.div>

          {/* Sub-heading */}
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-base md:text-fluid-xl text-muted-foreground mb-4 md:mb-6 max-w-4xl mx-auto text-balance leading-relaxed font-sans"
          >
            One umbrella brand, three powerful digital engines — Marketing, Digital Invitations, and Restaurant POS.
          </motion.p>

          {/* Chip Row - Division Labels (Clickable) */}
          <motion.div
            variants={fadeUpItem}
            className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 px-2 relative z-10"
          >
            <Link href="/coming-soon?service=marketing" className="inline-block">
              <Badge variant="outline" className="text-fluid-xs md:text-fluid-sm px-2.5 md:px-3 py-1 border-accent/30 hover:border-accent/50 transition-colors whitespace-nowrap cursor-pointer">
                <span className="font-brand">Shyara</span> Marketing
              </Badge>
            </Link>
            <span className="text-muted-foreground/40 text-fluid-xs md:text-fluid-sm hidden sm:inline">·</span>
            <Link href="/coming-soon?service=digital" className="inline-block">
              <Badge variant="outline" className="text-fluid-xs md:text-fluid-sm px-2.5 md:px-3 py-1 border-accent/30 hover:border-accent/50 transition-colors whitespace-nowrap cursor-pointer">
                <span className="font-brand">Shyara</span> Digital
              </Badge>
            </Link>
            <span className="text-muted-foreground/40 text-fluid-xs md:text-fluid-sm hidden sm:inline">·</span>
            <Link href="/coming-soon?service=bitex" className="inline-block">
              <Badge variant="outline" className="text-fluid-xs md:text-fluid-sm px-2.5 md:px-3 py-1 border-accent/30 hover:border-accent/50 transition-colors whitespace-nowrap cursor-pointer">
                BiteX by <span className="font-brand">Shyara</span>
              </Badge>
            </Link>
          </motion.div>

          {/* Micro-copy */}
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-sm md:text-fluid-base text-muted-foreground/70 italic mb-8 md:mb-12 max-w-2xl mx-auto relative z-10"
          >
            Where creativity meets engineering.
          </motion.p>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-0" />
    </section>
  );
}
