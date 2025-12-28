import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Package, FileText, ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Flexible Storage Solutions</h2>
          <p className="text-gray-600">Whether you are moving house, decluttering, or need business archives, we have the perfect space for you.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Storage Units Card */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
             {/* Background Image Fade */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
               <img src="/images/unit.png" alt="" className="w-full h-full object-cover" />
             </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
            
            <div className="relative z-10">
              <div className="bg-brand-primary/10 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-primary">
                <Package className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Personal & Business Storage</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Secure units in various sizes for household furniture, business stock, or student items. 
                Clean, dry, and accessible 7 days a week.
              </p>
              
              <ul className="space-y-3 mb-8 text-sm text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Units from 10 to 200 sq ft</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Free use of trolleys</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-primary" /> Short or long term hire</li>
              </ul>

              <Button asChild className="w-full sm:w-auto">
                <Link href="/storage">
                  View Storage Units <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Archiving Card */}
          <div className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden">
             {/* Background Image Fade */}
             <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
               <img src="/images/interior.png" alt="" className="w-full h-full object-cover" />
             </div>

            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500" />
            
            <div className="relative z-10">
              <div className="bg-brand-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-brand-dark">
                <FileText className="h-7 w-7" />
              </div>
              
              <h3 className="text-2xl font-bold text-brand-dark mb-3">Archiving & Document Storage</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Secure, compliant document storage for businesses. Save office space and keep your
                records organized with our shelving systems.
              </p>

              <ul className="space-y-3 mb-8 text-sm text-gray-500">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Compliant & secure</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Retrieval options available</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-brand-accent" /> Shelving systems provided</li>
              </ul>

              <Button asChild variant="outline" className="w-full sm:w-auto hover:border-brand-accent hover:bg-brand-accent/10 hover:text-brand-dark">
                <Link href="/archiving">
                  Archiving Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
