import { Clock, ShieldCheck, Droplets, Car, CalendarDays } from "lucide-react";

const features = [
  { icon: Clock, label: "7-Day Access" },
  { icon: ShieldCheck, label: "CCTV + Alarm" },
  { icon: Droplets, label: "Clean & Dry" },
  { icon: Car, label: "Easy Parking" },
  { icon: CalendarDays, label: "Flexible Terms" },
];

export function FeaturesStrip() {
  return (
    <section className="bg-brand-primary py-8 text-white relative z-20 -mt-12 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-6 md:gap-4 text-center md:text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center gap-3">
              <div className="p-2 bg-white/20 rounded-full">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <span className="font-semibold text-sm md:text-base tracking-wide">{feature.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
