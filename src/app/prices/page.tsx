import { QuoteForm } from "@/components/sections/quote-form";
import { SizeGuide } from "@/components/sections/size-guide";
import { Check } from "lucide-react";

export const metadata = {
  title: "Sizes & Prices | Huddersfield Self Storage",
  description: "View our storage unit sizes and get a competitive quote. Prices vary by size. Lowest price guarantee in Huddersfield.",
};

export default function PricesPage() {
  return (
    <div className="flex flex-col min-h-screen">
       <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sizes & Prices</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent pricing options for every budget. Get a quote today.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid xl:grid-cols-2 gap-16 items-start">
            
            {/* Left Column: Size Guide */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Unit Size Assist</h2>
                <p className="text-gray-600 mb-8">
                  Not sure how much space you need? Use our guide below to estimate the right unit 
                  size for your belongings.
                </p>
                <SizeGuide />
              </div>

              <div className="bg-brand-primary/5 p-8 rounded-2xl border border-brand-primary/10">
                 <h3 className="text-xl font-bold text-brand-dark mb-4">Pricing Promise</h3>
                 <ul className="space-y-3">
                   {[
                     "Lowest prices guaranteed in Huddersfield",
                     "Discounts for students and OAPs",
                     "Short & long term flexible contracts",
                     "No hidden fees or admin charges"
                   ].map((item, i) => (
                     <li key={i} className="flex items-center gap-3 text-gray-700">
                       <div className="bg-brand-primary text-white rounded-full p-0.5">
                         <Check className="h-3 w-3" />
                       </div>
                       {item}
                     </li>
                   ))}
                 </ul>
              </div>
            </div>

            {/* Right Column: Quote Form */}
            <div>
               <div className="sticky top-28">
                 <QuoteForm />
                 <p className="text-center text-sm text-gray-500 mt-6">
                   Prefer to talk? Call us on <a href="tel:01484429889" className="text-brand-primary font-bold hover:underline">01484 429 889</a>
                 </p>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
