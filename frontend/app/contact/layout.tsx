import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Shyara. Send us a message or reach out through email or WhatsApp.',
  openGraph: {
    title: 'Contact | Shyara',
    description: 'Get in touch with Shyara.',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

