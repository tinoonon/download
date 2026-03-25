import { HostingPlans } from "@/components/sections/HostingPlans";
import { HostingFAQ } from "@/components/sections/HostingFAQ";
import { CTA } from "@/components/sections/CTA";

export default function HospedagemPage() {
  return (
    <div className="pt-24">
      <HostingPlans />
      <HostingFAQ />
      <CTA />
    </div>
  );
}
