'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../_components/ui/card';
import { Button } from '../_components/ui/button';
import { Mail, Briefcase, Users, TrendingUp } from 'lucide-react';
import { fadeUp, fadeUpStagger, fadeUpItem } from '../_lib/animations';

export default function CareersPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient - lighter on mobile */}
      <div className="absolute inset-0 gradient-purple-soft opacity-10 md:opacity-20 pointer-events-none" />
      
      {/* Hero Section */}
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h1 className="text-fluid-4xl md:text-fluid-5xl font-display font-bold text-primary mb-6">
              Careers
            </h1>
            <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
              Join our team and help shape the future of digital experiences.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpStagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="max-w-2xl mx-auto"
          >
            <Card variant="elevated" className="p-8 md:p-12">
              <CardHeader className="pb-6">
                <CardTitle className="text-fluid-2xl md:text-fluid-3xl">Interested in Joining Us?</CardTitle>
                <CardDescription className="text-fluid-base">
                  We're always looking for talented individuals to join our growing team.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <motion.div variants={fadeUpItem}>
                  <p className="text-muted-foreground mb-6 text-fluid-base">
                    To apply, please email your resume to:
                  </p>
                  <div className="flex items-center space-x-4 p-4 rounded-lg bg-gradient-purple/5 border border-accent/20 hover:bg-gradient-purple/10 transition-colors duration-200">
                    <div className="w-12 h-12 rounded-xl bg-gradient-purple flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <a
                      href="mailto:careers@shyara.co.in"
                      className="text-accent hover:text-accent-deep text-lg font-semibold transition-colors duration-200"
                    >
                      careers@shyara.co.in
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUpItem} className="pt-6 border-t border-border/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We review all applications and will reach out to candidates whose skills and
                    experience align with our current openings.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpItem}>
                  <Button asChild variant="gradient" className="w-full shadow-glow-purple">
                    <a href="mailto:careers@shyara.co.in">Send Your Resume</a>
                  </Button>
                </motion.div>
              </CardContent>
            </Card>

            {/* Benefits/Values Section */}
            <motion.div
              variants={fadeUpStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
            >
              {[
                { icon: Briefcase, title: 'Growth Opportunities', description: 'Advance your career with us' },
                { icon: Users, title: 'Great Team', description: 'Work with talented professionals' },
                { icon: TrendingUp, title: 'Innovation', description: 'Build cutting-edge solutions' },
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div key={item.title} variants={fadeUpItem}>
                    <Card variant="elevated" className="text-center p-6 h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

