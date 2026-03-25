import { Plans } from "@/components/sections/Plans";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export default function PlanosPage() {
  return (
    <div className="pt-24">
      <Plans />
      <FAQ />
      <CTA />
    </div>
  );
}
