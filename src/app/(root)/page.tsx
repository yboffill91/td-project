import {
  HeroSection,
  Benefits,
  Services,
  CTALanding,
  FreeTools,
  GrowthJourney,
  SocialProof,
} from '@/features/landing';
export default function Home() {
  return (
    <>
      <section className=''>
        <HeroSection />
      </section>
      <Benefits />
      <Services />
      <CTALanding />
      <FreeTools />
      <GrowthJourney />
      <SocialProof />
    </>
  );
}
