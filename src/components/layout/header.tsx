"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Storage Units", href: "/storage" },
  { name: "Archiving", href: "/archiving" },
  { name: "Sizes & Prices", href: "/prices" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-brand-dark/95 backdrop-blur supports-backdrop-filter:bg-brand-dark/80 text-white">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl md:text-2xl tracking-tight">
          <span className="text-white">Huddersfield</span>
          <span className="text-brand-primary">Self Storage</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-brand-primary",
                pathname === link.href ? "text-brand-primary" : "text-gray-300"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="hidden xl:flex flex-col items-end text-right">
             <span className="text-xs text-gray-400 uppercase tracking-wider">Call us now</span>
             <a href="tel:01484429889" className="font-bold text-lg hover:text-brand-primary transition-colors">
               01484 429 889
             </a>
          </div>
          <Button asChild className="font-semibold shadow-brand-primary/25">
            <Link href="/prices">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10 bg-brand-dark overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-lg font-medium py-2 border-b border-white/5",
                    pathname === link.href ? "text-brand-primary" : "text-gray-300"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-4">
                <Button asChild className="w-full justify-center">
                  <Link href="/prices">Get a Quote</Link>
                </Button>
                <Button asChild variant="outline" className="w-full justify-center border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white">
                  <a href="tel:01484429889">
                    <Phone className="mr-2 h-4 w-4" />
                    Call 01484 429 889
                  </a>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
