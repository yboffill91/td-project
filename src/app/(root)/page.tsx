import {
  HeroSection,
  Benefits,
  Services,
  CTALanding,
  FreeTools,
  GrowthJourney,
  SocialProof,
  NewsLetter,
} from '@/features/landing';
export default function Home() {
  return (
    <>
      <section className='lg:pt-14 pt-24'>
        <HeroSection />
      </section>
      <Benefits />
      <Services />
      <CTALanding />
      <FreeTools />
      <GrowthJourney />
      <SocialProof />
      <NewsLetter />
    </>
  );
}
