import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { SecuritySection } from "@/components/sections/security";
import { FileText, Database, Shield, CheckCircle } from "lucide-react";

export const metadata = {
  title: "Archiving & Document Storage | Huddersfield Self Storage",
  description: "Secure, compliant document archiving for businesses in Huddersfield. Shelving systems available. Free up your office space today.",
};

const archivingFeatures = [
  {
    icon: Database,
    title: "Space Saving",
    description: "Free up valuable office space by storing old records and files off-site in our secure facility."
  },
  {
    icon: Shield,
    title: "Secure & Compliant",
    description: "Keep confidential documents safe with 24/7 monitoring, meeting your data protection obligations."
  },
  {
    icon: FileText,
    title: "Organized Shelving",
    description: "We can provide shelving systems to keep your archive boxes organized and easily accessible."
  },
  {
    icon: CheckCircle,
    title: "Easy Access",
    description: "Access your archives 7 days a week whenever you need to retrieve a file."
  }
];

export default function ArchivingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Header */}
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" /> Business Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Document Archiving</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Secure, organized, and cost-effective document storage for businesses in Huddersfield.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-brand-dark">Complete Records Management</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Managing years of business records can be a challenge. Our archiving service 
                provides a secure extension to your office, allowing you to retain necessary 
                documents without cluttering your workspace.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {archivingFeatures.map((feature, index) => (
                  <div key={index} className="flex flex-col gap-2">
                    <feature.icon className="h-6 w-6 text-brand-primary" />
                    <h3 className="font-bold text-brand-dark">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Button asChild size="lg" className="bg-brand-dark text-white hover:bg-brand-dark/90">
                  <Link href="/contact">Request Archiving Quote</Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/images/archive_shelves.png" 
                alt="Organized Archive Shelves" 
                fill
                className="object-cover"
              />
               <div className="absolute inset-0 bg-linear-to-t from-brand-dark/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Security Section Reuse */}
      <SecuritySection />
    </div>
  );
}
