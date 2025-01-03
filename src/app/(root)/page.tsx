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
      <section className='lg:pt-12 pt-24 relative '>
        <div className='absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,transparent_40%,rgba(120,119,198,0.3)_80%,rgba(255,255,255,0)_100%)]' />
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
