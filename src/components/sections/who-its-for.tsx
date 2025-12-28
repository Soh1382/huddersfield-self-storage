import { Home, Briefcase, GraduationCap, Truck } from "lucide-react";
import Image from "next/image";

const audiences = [
  {
    icon: Home,
    title: "Moving House",
    description: "Store your furniture while you wait for completion or renovate your new home."
  },
  {
    icon: Truck,
    title: "Renovating",
    description: "Clear a room or the whole house to keep your items safe from dust and damage."
  },
  {
    icon: GraduationCap,
    title: "Students",
    description: "Perfect for storing belongings over the holidays. Special student discounts available."
  },
  {
    icon: Briefcase,
    title: "Business Stock",
    description: "Free up office space or store excess stock. Packages receipt service available."
  }
];

export function WhoItsFor() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-dark">Storage for everyone</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you need space for a few boxes or a full house move, we have a solution.
              Our flexible units are ideal for both personal and commercial use.
            </p>
            <ul className="space-y-4 pt-4">
              {audiences.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="bg-brand-primary/10 p-2 rounded-lg text-brand-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-dark">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="flex-1 w-full max-w-lg">
             <div className="aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl">
               <Image 
                 src="/images/moving_boxes.png" 
                 alt="Family moving boxes into storage" 
                 fill
                 className="object-cover"
               />
               <div className="absolute inset-0 bg-linear-to-t from-brand-dark/50 to-transparent" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
