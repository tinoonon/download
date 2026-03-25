import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BriefGenerator } from "@/components/sections/BriefGenerator";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <WhyChooseUs />
      <Services />
      <BriefGenerator />
      <Testimonials />
      <div className="bg-black/20">
        <FAQ />
      </div>
      <CTA />
    </>
  );
}
