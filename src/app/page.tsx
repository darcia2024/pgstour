import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { MomentsStrip } from "@/components/home/MomentsStrip";
import { Stats } from "@/components/home/Stats";
import { ServicesDark } from "@/components/home/ServicesDark";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <MomentsStrip />
      <Stats />
      <ServicesDark />
      <FeaturedPackages />
      <Steps />
      <Testimonials />
      <CtaBand />
    </>
  );
}
