import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { Navigation } from './_components/navigation';
import { Footer } from './_components/footer';
import { getOrganizationSchema, getWebsiteSchema } from './_lib/structured-data';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Shyara — Powering Modern Digital Experiences',
    template: '%s | Shyara',
  },
  description:
    'Marketing, Digital Invitations & Restaurant POS — under one powerful ecosystem. Shyara (OPC) Pvt. Ltd.',
  keywords: ['Shyara', 'Digital Marketing', 'POS', 'Restaurant Technology', 'Digital Invitations'],
  authors: [{ name: 'Shyara (OPC) Pvt. Ltd.' }],
  creator: 'Shyara (OPC) Pvt. Ltd.',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://shyara.co.in',
    siteName: 'Shyara',
    title: 'Shyara — Powering Modern Digital Experiences',
    description:
      'Marketing, Digital Invitations & Restaurant POS — under one powerful ecosystem.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shyara — Powering Modern Digital Experiences',
    description:
      'Marketing, Digital Invitations & Restaurant POS — under one powerful ecosystem.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema();

  return (
    <html lang="en" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

