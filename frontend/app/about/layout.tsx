import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Shyara - our mission, vision, and execution-first philosophy. We are a forward-thinking digital solutions company dedicated to transforming businesses through innovative technology.',
  openGraph: {
    title: 'About | Shyara',
    description:
      'Learn about Shyara - our mission, vision, and execution-first philosophy that drives everything we do.',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

