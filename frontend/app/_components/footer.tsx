import Link from 'next/link';

export function Footer() {
  return (
    <footer className="relative border-t bg-gradient-to-b from-background to-background/95 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 gradient-purple-soft opacity-30 pointer-events-none" />
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold font-brand text-primary mb-4">
              Shyara
            </h3>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Powering Modern Digital Experiences. Marketing, Digital Invitations & Restaurant POS
              — under one powerful ecosystem.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-muted-foreground hover:text-accent transition-colors duration-200 inline-block hover:translate-x-1 transform"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 text-foreground">Contact</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:contact@shyara.co.in"
                  className="hover:text-accent transition-colors duration-200 inline-block"
                >
                  contact@shyara.co.in
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/your-number"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors duration-200 inline-block"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Shyara (OPC) Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

