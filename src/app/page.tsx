import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { BriefGenerator } from "@/components/sections/BriefGenerator";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

// Aumenta o tempo limite para o Vercel (máximo de 60s no plano Pro, 10s no Hobby)
export const maxDuration = 60;

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
