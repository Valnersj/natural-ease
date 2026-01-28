import Hero from "@/components/landing/Hero";
import Benefits from "@/components/landing/Benefits";
import SocialProof from "@/components/landing/SocialProof";
import HowItWorks from "@/components/landing/HowItWorks";
import Differentials from "@/components/landing/Differentials";
import Pricing from "@/components/landing/Pricing";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";
import StickyCTA from "@/components/landing/StickyCTA";

const Index = () => {
  return (
    <>
      <main>
        <Hero />
        <Benefits />
        <SocialProof />
        <HowItWorks />
        <Differentials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTA />
    </>
  );
};

export default Index;
