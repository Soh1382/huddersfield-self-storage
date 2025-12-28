import { Button } from "@/components/ui/button";
import { Package, Phone } from "lucide-react";

export const metadata = {
  title: "Packaging & Supplies | Huddersfield Self Storage",
  description: "Cardboard boxes, bubble wrap, and packing tape available in-store. Protect your belongings with high-quality packaging materials.",
};

const products = [
  {
    name: "Cardboard Boxes",
    description: "Various sizes including small, medium, and large double-walled boxes for extra strength.",
    price: "From £2.50"
  },
  {
    name: "Bubble Wrap",
    description: "Protect fragile items with our rolls of high-quality bubble wrap.",
    price: "Ask in store"
  },
  {
    name: "Packing Tape",
    description: "Strong adhesive tape to secure your boxes.",
    price: "Ask in store"
  },
  {
    name: "Marker Pens",
    description: "Permanent markers for labeling your boxes clearly.",
    price: "Ask in store"
  }
];

export default function PackagingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Packaging & Supplies</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to pack and protect your belongings.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {products.map((product, index) => (
              <div key={index} className="border border-gray-200 rounded-2xl p-6 bg-gray-50 flex flex-col text-center hover:shadow-lg transition-all group">
                <div className="bg-white mx-auto w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-brand-primary border border-gray-100">
                  <Package className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{product.description}</p>
                <div className="font-bold text-brand-primary">{product.price}</div>
              </div>
            ))}
          </div>

          <div className="bg-brand-primary/5 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
             <h2 className="text-2xl font-bold text-brand-dark mb-4">Check Stock Availability</h2>
             <p className="text-gray-600 mb-8">
               We keep a good stock of packaging materials at our Leeds Road facility. 
               Feel free to call ahead to reserve larger quantities.
             </p>
             <Button asChild size="lg" className="items-center gap-2">
               <a href="tel:01484429889">
                 <Phone className="h-4 w-4" /> Call 01484 429 889
               </a>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
