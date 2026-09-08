import { Hero } from "@/components/home/Hero";
import { BeliefQuote } from "@/components/home/BeliefQuote";
import { Values } from "@/components/home/Values";
import { Destinations } from "@/components/home/Destinations";
import { FeaturedPackages } from "@/components/home/FeaturedPackages";
import { Steps } from "@/components/home/Steps";
import { Testimonials } from "@/components/Testimonials";
import { CtaBand } from "@/components/CtaBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BeliefQuote />
      <Values />
      <Destinations />
      <FeaturedPackages />
      <Steps />
      <Testimonials />
      <CtaBand />
    </>
  );
}
