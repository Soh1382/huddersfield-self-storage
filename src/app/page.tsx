import { Hero } from "@/components/sections/hero";
import { FeaturesStrip } from "@/components/sections/features";
import { Services } from "@/components/sections/services";
import { SecuritySection } from "@/components/sections/security";
import { HowItWorks } from "@/components/sections/how-it-works";
import { LocationTeaser } from "@/components/sections/location";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <FeaturesStrip />
      <Services />
      <SecuritySection />
      <HowItWorks />
      <LocationTeaser />
    </div>
  );
}
