import Link from "next/link";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/10 text-gray-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white tracking-tight">
              Huddersfield<span className="text-brand-primary">Self Storage</span>
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Secure, clean, and flexible storage solutions in the heart of Huddersfield. 
              Personal and business storage with 7-day access.
            </p>
            <div className="flex items-center gap-4 pt-2">
               {/* Placeholder social icon */}
               <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-brand-primary hover:text-white transition-colors" aria-label="Facebook">
                 <Facebook className="h-5 w-5" />
               </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
              <li><Link href="/storage" className="hover:text-brand-primary transition-colors">Storage Units</Link></li>
              <li><Link href="/archiving" className="hover:text-brand-primary transition-colors">Archiving</Link></li>
              <li><Link href="/prices" className="hover:text-brand-primary transition-colors">Sizes & Prices</Link></li>
              <li><Link href="/packaging" className="hover:text-brand-primary transition-colors">Packaging Supplies</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
                <span>Deighton Mills, Leeds Road,<br />Huddersfield, HD2 1TY</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                <a href="tel:01484429889" className="hover:text-brand-primary transition-colors">01484 429 889</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-brand-primary shrink-0" />
                <a href="tel:01484420445" className="hover:text-brand-primary transition-colors">01484 420 445</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-brand-primary shrink-0" />
                <a href="mailto:info@huddersfieldselfstore.co.uk" className="hover:text-brand-primary transition-colors break-all">info@huddersfieldselfstore.co.uk</a>
              </li>
            </ul>
          </div>

          {/* Opening Times */}
          <div>
            <h4 className="text-white font-semibold mb-6">Opening Times</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Mon – Fri</span>
                <span className="text-white">8:30am – 5:00pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Saturday</span>
                <span className="text-white">9:30am – 4:30pm</span>
              </li>
              <li className="flex justify-between border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-white">11:00am – 4:00pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Huddersfield Self Storage. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-300">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
