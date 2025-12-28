import { ContactForm } from "@/components/sections/contact-form";
import { MapPin, Phone, Mail, Clock, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Contact Us | Huddersfield Self Storage",
  description: "Get in touch with Huddersfield Self Storage. Call 01484 429 889 or visit us at Deighton Mills, Leeds Road, Huddersfield.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We are here to help. Call, email, or visit us in store.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Left Column: Contact Info */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-brand-dark mb-6">Get in touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg">Phone</h4>
                      <p className="text-gray-600 mb-1">Main: <a href="tel:01484429889" className="text-brand-primary hover:underline">01484 429 889</a></p>
                      <p className="text-gray-600">Alt: <a href="tel:01484420445" className="text-brand-primary hover:underline">01484 420 445</a></p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg">Email</h4>
                      <a href="mailto:info@huddersfieldselfstore.co.uk" className="text-brand-primary hover:underline">info@huddersfieldselfstore.co.uk</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg">Address</h4>
                      <p className="text-gray-600">Deighton Mills, Leeds Road</p>
                      <p className="text-gray-600">Huddersfield, HD2 1TY</p>
                      <div className="mt-2">
                        <Button asChild variant="outline" size="sm" className="gap-2">
                          <a href="https://maps.google.com/?q=Deighton+Mills,+Leeds+Road,+Huddersfield,+HD2+1TY" target="_blank" rel="noopener noreferrer">
                             <Navigation className="h-3 w-3" /> Get Directions
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                     <div className="bg-brand-primary/10 p-3 rounded-lg text-brand-primary">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-dark text-lg">Opening Hours</h4>
                      <div className="grid grid-cols-[auto_1fr] gap-x-8 text-gray-600 gap-y-1">
                        <span className="font-medium">Mon – Fri</span> <span>8:30am – 5:00pm</span>
                        <span className="font-medium">Saturday</span> <span>9:30am – 4:30pm</span>
                        <span className="font-medium">Sunday</span> <span>11:00am – 4:00pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

               <div className="bg-white p-6 rounded-2xl border border-gray-200">
                 <h3 className="font-bold text-brand-dark mb-2">Parking & Access</h3>
                 <p className="text-gray-600">
                   We have ample free parking on-site and a large loading bay suitable for vans 
                   and lorries. Trolleys are available at no charge to help you move your goods.
                 </p>
               </div>
            </div>

            {/* Right Column: Contact Form */}
            <div>
               <ContactForm />
               
               {/* Map Mockup */}
               <div className="mt-8 h-64 bg-gray-200 rounded-2xl overflow-hidden relative shadow-inner">
                 <div className="absolute inset-0 flex items-center justify-center text-gray-400 bg-gray-300">
                    <div className="text-center">
                       <MapPin className="h-10 w-10 mx-auto mb-2 opacity-50" />
                       <p className="text-sm font-medium">Interactive Map Loading...</p>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
