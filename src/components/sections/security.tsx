import { ShieldCheck, Video, Users, Lock } from "lucide-react";

const securityFeatures = [
  {
    icon: Video,
    title: "24/7 CCTV Monitoring",
    description: "Our facility is monitored round-the-clock by high-definition CCTV cameras covering all access points and corridors."
  },
  {
    icon: ShieldCheck,
    title: "Monitored Alarm System",
    description: "Advanced alarm systems ensure instant response to any unauthorized access attempts."
  },
  {
    icon: Users,
    title: "Staff Onsite",
    description: "Friendly and professional staff are present during office hours to assist you and maintain security."
  },
  {
    icon: Lock,
    title: "Secure Access Control",
    description: "Strict locked-door policy with personalized access ensuring only authorized customers can enter."
  }
];

import Image from "next/image";

export function SecuritySection() {
  return (
    <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
         <Image 
           src="/images/security.png" 
           alt="Secure facility entrance" 
           fill
           className="object-cover opacity-20 mix-blend-overlay"
         />
         <div className="absolute inset-0 bg-brand-dark/80" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 text-brand-primary text-sm font-semibold mb-6 border border-brand-primary/20">
             <ShieldCheck className="h-4 w-4" /> Maximum Security
           </div>
           <h2 className="text-3xl md:text-4xl font-bold mb-6">Your belongings, safe and sound</h2>
           <p className="text-gray-400 text-lg">
             We take security seriously. Our facility is designed to provide total peace of mind 
             for both personal and business customers.
           </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
              <div className="bg-brand-primary w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
