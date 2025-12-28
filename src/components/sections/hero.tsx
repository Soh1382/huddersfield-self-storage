import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Clock, ShieldCheck, Droplets, Car, CalendarDays } from "lucide-react";

const features = [
  { icon: Clock, label: "7-Day Access" },
  { icon: ShieldCheck, label: "CCTV + Alarm" },
  { icon: Droplets, label: "Clean & Dry" },
  { icon: Car, label: "Easy Parking" },
  { icon: CalendarDays, label: "Flexible Terms" },
];

export function Hero() {
  return (
    <section className="relative bg-brand-dark text-white pt-20 pb-48 md:pt-32 md:pb-64 overflow-hidden">
      {/* Background with gradient overlay - Image will go here */}
      <div className="absolute inset-0 bg-brand-dark/90 z-0">
         <img 
           src="/images/hero.png" 
           alt="Modern Self Storage Facility" 
           className="w-full h-full object-cover opacity-50 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
            Secure, clean <br className="hidden md:block" />
            <span className="text-brand-primary">self storage</span> in Huddersfield
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
            Personal and business storage with 7-day access, 24/7 CCTV monitoring, and flexible terms. 
            The safest place for your belongings.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-base font-semibold shadow-lg shadow-brand-primary/25">
              <Link href="/prices">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-base font-semibold border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
              <a href="tel:01484429889">
                <Phone className="mr-2 h-5 w-5" />
                Call 01484 429 889
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Features Strip (moved inside Hero) */}
      <div className="container relative z-20 mx-auto px-4 mt-16 md:mt-24">
        <div className="bg-brand-primary py-8 text-white rounded-2xl shadow-xl mx-auto md:max-w-6xl">
           <div className="px-4">
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
        </div>
      </div>
    </section>
  );
}
