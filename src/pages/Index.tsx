import Hero from "@/components/Hero";
import ProblemsSection from "@/components/ProblemsSection"; 
import FeaturesSection from "@/components/FeaturesSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowItWorks from "@/components/HowItWorks";
import IndustriesSection from "@/components/IndustriesSection";
import TestimonialSection from "@/components/TestimonialSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <ProblemsSection />
      <FeaturesSection />
      <BenefitsSection />
      <HowItWorks />
      <IndustriesSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Index;
