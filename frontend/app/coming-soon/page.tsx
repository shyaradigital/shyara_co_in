'use client';

import { motion } from 'framer-motion';
import { Button } from '../_components/ui/button';
import Link from 'next/link';
import { ArrowLeft, Clock } from 'lucide-react';
import { useSearchParams } from 'next/navigation';

export default function ComingSoonPage() {
  const searchParams = useSearchParams();
  const service = searchParams.get('service') || 'service';

  const serviceNames: Record<string, { prefix: string; brand: string; suffix: string }> = {
    marketing: { prefix: '', brand: 'Shyara', suffix: ' Marketing' },
    digital: { prefix: '', brand: 'Shyara', suffix: ' Digital' },
    bitex: { prefix: 'BiteX by ', brand: 'Shyara', suffix: '' },
  };

  const serviceNameParts = serviceNames[service.toLowerCase()] || null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8 inline-block"
          >
            <Clock className="h-24 w-24 text-accent mx-auto" />
          </motion.div>

          <h1 className="text-fluid-4xl font-display font-bold text-primary mb-6">
            Coming Soon
          </h1>

          <h2 className="text-fluid-2xl font-semibold text-primary mb-4">
            {serviceNameParts ? (
              <>
                {serviceNameParts.prefix}
                <span className="font-brand">{serviceNameParts.brand}</span>
                {serviceNameParts.suffix}
              </>
            ) : (
              'This Service'
            )}
          </h2>

          <p className="text-fluid-lg text-muted-foreground mb-8 leading-relaxed">
            We are working hard to bring you an amazing experience. This service will be available
            soon. Stay tuned for updates!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild variant="accent" size="lg">
              <Link href="/services">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Services
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Notified</Link>
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t">
            <p className="text-sm text-muted-foreground">
              In the meantime, explore our other services or get in touch with us.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

