import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Comprehensive digital solutions from Shyara. Explore our Marketing, Digital Invitations, and Restaurant POS services tailored to your business needs.',
  openGraph: {
    title: 'Services | Shyara',
    description:
      'Comprehensive digital solutions tailored to your business needs. From marketing to restaurant technology, we have got you covered.',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

