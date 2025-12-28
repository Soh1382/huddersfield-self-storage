import { Maximize, Clock, CreditCard, Thermometer } from "lucide-react";

const benefits = [
  {
    icon: Maximize,
    title: "Various Sizes",
    description: "From small lockers (10 sq ft) to large warehouse spaces (200 sq ft+)."
  },
  {
    icon: Thermometer, // Need to import
    title: "Clean & Dry",
    description: "Purpose-built units suitable for furniture, electronics, and archives."
  },
  {
    icon: Clock,
    title: "Flexible Terms",
    description: "Store for a week, a month, or a year. No long-term contracts required."
  },
  {
    icon: CreditCard,
    title: "Unbeatable Prices",
    description: "Lowest prices guaranteed in Huddersfield. Discounts for students and OAPs."
  }
];

// Re-import Thermometer fully if missed
// import { Thermometer } from "lucide-react"; 
// It was in the list above but I shadowed it. I'll clean up imports.

export function StorageBenefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Why store with us?</h2>
          <p className="text-gray-600 text-lg">
            Our modern facility offers the best environment for your belongings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-white p-4 rounded-full shadow-sm mb-4 text-brand-primary">
                <benefit.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-brand-dark">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
