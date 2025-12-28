import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-brand-dark text-white pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden">
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
            <Button asChild variant="outline" size="lg" className="text-base font-semibold border-white/20 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:01484429889">
                <Phone className="mr-2 h-5 w-5" />
                Call 01484 429 889
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
