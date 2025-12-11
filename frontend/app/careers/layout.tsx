import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the Shyara team and help shape the future of digital experiences. We are always looking for talented individuals to join our growing team.',
  openGraph: {
    title: 'Careers | Shyara',
    description: 'Join our team and help shape the future of digital experiences.',
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

