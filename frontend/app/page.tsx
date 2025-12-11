import { HeroSection } from './_sections/hero-section';
import { EcosystemSection } from './_sections/ecosystem-section';
import { AboutSection } from './_sections/about-section';
import { WhoIsThisForSection } from './_sections/who-is-this-for-section';
import { WhyChooseUsSection } from './_sections/why-choose-us-section';
import { CTASection } from './_sections/cta-section';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Shyara — Designing the Future of Digital Experiences. One umbrella brand, three powerful digital engines — Marketing, Digital Invitations, and Restaurant POS.',
  openGraph: {
    title: 'Shyara — Designing the Future of Digital Experiences',
    description:
      'One umbrella brand, three powerful digital engines — Marketing, Digital Invitations, and Restaurant POS.',
  },
};

export const revalidate = 3600; // ISR: Revalidate every hour

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <EcosystemSection />
      <AboutSection
        title="About Shyara"
        description="We are a digital execution company that blends services and product innovation. Our ecosystem combines marketing expertise, digital experiences, and restaurant technology to deliver comprehensive solutions that drive growth and success."
      />
      <WhoIsThisForSection />
      <WhyChooseUsSection />
      <CTASection />
    </>
  );
}

