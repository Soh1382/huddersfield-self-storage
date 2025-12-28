"use client";

import { Button } from "@/components/ui/button";

export function ContactForm() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-gray-700">Name</label>
          <input 
            type="text" 
            id="contact-name" 
            placeholder="Your name"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="contact-email" className="text-sm font-medium text-gray-700">Email</label>
            <input 
              type="email" 
              id="contact-email" 
              placeholder="email@example.com"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-phone" className="text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="tel" 
              id="contact-phone" 
              placeholder="01234 567890"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="contact-message" className="text-sm font-medium text-gray-700">Message</label>
          <textarea 
            id="contact-message" 
            rows={4}
            placeholder="How can we help you?"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="w-full text-base font-bold">
          Send Message
        </Button>
      </form>
    </div>
  );
}
