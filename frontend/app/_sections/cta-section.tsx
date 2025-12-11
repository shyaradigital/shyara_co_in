'use client';

import { motion } from 'framer-motion';
import { Button } from '../_components/ui/button';
import Link from 'next/link';
import { fadeUpStagger, fadeUpItem } from '../_lib/animations';

export function CTASection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-purple" />
      <div className="absolute inset-0 bg-gradient-to-br from-accent-deep/50 to-accent/50" />
      
      {/* Animated background elements - lighter on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-10 left-10 w-32 h-32 md:w-64 md:h-64 bg-white/5 md:bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-40 h-40 md:w-80 md:h-80 bg-white/5 md:bg-white/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <motion.div
          variants={fadeUpStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h2
            variants={fadeUpItem}
            className="text-fluid-3xl md:text-fluid-4xl font-display font-bold text-white mb-6"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>
          <motion.p
            variants={fadeUpItem}
            className="text-fluid-lg md:text-fluid-xl mb-10 text-white/90 max-w-2xl mx-auto"
          >
            Let's discuss how <span className="font-brand">Shyara</span> can help you achieve your goals.
          </motion.p>
          <motion.div
            variants={fadeUpItem}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              asChild
              size="lg"
              variant="default"
              className="w-full sm:w-auto bg-white text-accent hover:bg-white/90 shadow-xl hover:shadow-2xl"
            >
              <Link href="/contact">Get in Touch</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm"
            >
              <Link href="/services">Explore Services</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

