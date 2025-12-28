import { Button } from "@/components/ui/button";
import { MapPin, Navigation } from "lucide-react";

export function LocationTeaser() {
  return (
    <section className="py-20 bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 text-brand-primary font-semibold">
            <MapPin className="h-5 w-5" /> Easy to find
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">
            Located on Leeds Road
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our facility at Deighton Mills is conveniently located on the main Leeds Road (A62), 
            providing easy access from Huddersfield town center and the M62.
          </p>
          <div className="space-y-2 text-gray-700 font-medium">
            <p>Deighton Mills, Leeds Road</p>
            <p>Huddersfield, HD2 1TY</p>
          </div>
          <Button asChild className="gap-2">
            <a href="https://maps.google.com/?q=Deighton+Mills,+Leeds+Road,+Huddersfield,+HD2+1TY" target="_blank" rel="noopener noreferrer">
              <Navigation className="h-4 w-4" /> Get Directions
            </a>
          </Button>
        </div>

        <div className="flex-1 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
           <img 
             src="/images/map.png"
             alt="Map showing location on Leeds Road"
             className="w-full h-full object-cover"
           />
           <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
