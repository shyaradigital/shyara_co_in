'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../_components/ui/button';
import { Input } from '../_components/ui/input';
import { Textarea } from '../_components/ui/textarea';
import { Label } from '../_components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../_components/ui/card';
import { submitContactForm, contactSchema, type ContactFormData } from '../_services/contact';
import { Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import { fadeUp, slideUp, scaleIn } from '../_lib/animations';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus('idle');

    try {
      const validatedData = contactSchema.parse(formData);
      setIsSubmitting(true);
      const result = await submitContactForm(validatedData);

      if (result.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error: any) {
      if (error.errors) {
        const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
        error.errors.forEach((err: any) => {
          if (err.path) {
            fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        setSubmitStatus('error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with gradient and blur effects - lighter on mobile */}
      <div className="absolute inset-0 gradient-purple-soft opacity-15 md:opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-accent/5 md:bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-accent-deep/5 md:bg-accent-deep/10 rounded-full blur-3xl pointer-events-none" />
      
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-center mb-16"
            >
              <h1 className="text-fluid-4xl md:text-fluid-5xl font-display font-bold text-primary mb-6">
                Get in Touch
              </h1>
              <p className="text-fluid-lg text-muted-foreground max-w-2xl mx-auto">
                Have a question or want to discuss your project? We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Contact Form with Glassmorphism */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
              >
                <Card variant="glass" className="backdrop-blur-xl bg-white/90 border-2 border-border shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-fluid-2xl">Send us a Message</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll get back to you as soon as possible.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-foreground">Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                          className="bg-white border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500"
                          >
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold text-foreground">Email *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="your.email@example.com"
                          required
                          className="bg-white border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500"
                          >
                            {errors.email}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 1234567890"
                          className="bg-white border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
                        />
                        {errors.phone && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500"
                          >
                            {errors.phone}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-semibold text-foreground">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                          className="bg-white border-2 border-border focus:border-accent focus:ring-2 focus:ring-accent/20 resize-none transition-colors"
                        />
                        {errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-500"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      <AnimatePresence mode="wait">
                        {submitStatus === 'success' && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm flex items-center gap-3"
                          >
                            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                          </motion.div>
                        )}

                        {submitStatus === 'error' && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm"
                          >
                            Something went wrong. Please try again later.
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <Button
                        type="submit"
                        variant="gradient"
                        className="w-full shadow-glow-purple"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <Card variant="elevated" className="p-8 border-2 border-border bg-white/90">
                  <CardHeader className="pb-6">
                    <CardTitle className="text-fluid-2xl">Contact Information</CardTitle>
                    <CardDescription>Reach out to us through any of these channels.</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple transition-colors duration-200">
                        <Mail className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">Email</h3>
                        <a
                          href="mailto:contact@shyara.co.in"
                          className="text-accent hover:text-accent-deep transition-colors duration-200 font-medium"
                        >
                          contact@shyara.co.in
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple transition-colors duration-200">
                        <Phone className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">WhatsApp</h3>
                        <a
                          href="https://wa.me/your-number"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-accent hover:text-accent-deep transition-colors duration-200 font-medium"
                        >
                          Chat with us on WhatsApp
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4 group">
                      <div className="w-12 h-12 rounded-xl bg-gradient-purple/10 flex items-center justify-center group-hover:bg-gradient-purple transition-colors duration-200">
                        <MapPin className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-200" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2 text-foreground">Location</h3>
                        <p className="text-muted-foreground">India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map placeholder with gradient overlay */}
                <Card variant="elevated" className="overflow-hidden border-2 border-border bg-white/90">
                  <CardContent className="p-0 relative">
                    <div className="aspect-video w-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden border-t-2 border-border">
                      <div className="absolute inset-0 gradient-purple-soft opacity-20" />
                      <p className="text-sm text-muted-foreground relative z-10">Map embed placeholder</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

