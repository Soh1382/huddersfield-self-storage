import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StorageBenefits } from "@/components/sections/storage-benefits";
import { WhoItsFor } from "@/components/sections/who-its-for";
import { SecuritySection } from "@/components/sections/security";

export const metadata = {
  title: "Storage Units | Huddersfield Self Storage",
  description: "Secure, clean and dry storage units in various sizes. Ideal for home moves, business stock, and students. Get a quote today.",
};

export default function StoragePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Storage Units</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Clean, secure, and affordable personal & business storage solutions.
          </p>
        </div>
      </section>

      <StorageBenefits />
      <WhoItsFor />
      
      {/* Reuse generic security section */}
      <SecuritySection />

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Not sure what size you need?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our size guide can help you calculate exactly how much space you need, 
            so you don't pay for more than you use.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button asChild size="lg" variant="secondary" className="font-semibold">
               <Link href="/prices">Check Size Guide</Link>
             </Button>
             <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-brand-primary font-semibold">
               <Link href="/contact">Contact Us</Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
