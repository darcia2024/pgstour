import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { JamaahGallery } from "@/components/home/JamaahGallery";
import { MomentsStrip } from "@/components/home/MomentsStrip";
import { Stats } from "@/components/home/Stats";
import { ServicesDark } from "@/components/home/ServicesDark";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <FeaturedPackages />
      <JamaahGallery />
      <MomentsStrip />
      <Stats />
      <ServicesDark />
      <Steps />
      <Testimonials />
      <CtaBand />
    </>
  );
}
