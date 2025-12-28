import { Quote, Truck, Key } from "lucide-react";

const steps = [
  {
    icon: Quote,
    title: "1. Choose & Quote",
    description: "Select the size you need (or ask our team) and get a competitive quote instantly."
  },
  {
    icon: Truck,
    title: "2. Move In",
    description: "Bring your items to our loading bay. Trolleys are free to use to make moving easy."
  },
  {
    icon: Key,
    title: "3. Access Anytime",
    description: "Visit your unit 7 days a week during our extensive opening hours."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Storage made simple</h2>
          <p className="text-gray-600">Get started in three easy steps.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-white border-4 border-gray-50 shadow-lg w-24 h-24 rounded-full flex items-center justify-center mb-6 text-brand-brand-dark">
                <div className="bg-brand-accent/20 w-16 h-16 rounded-full flex items-center justify-center text-brand-dark font-bold">
                   <step.icon className="h-7 w-7" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
