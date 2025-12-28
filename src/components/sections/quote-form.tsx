"use client";

import { Button } from "@/components/ui/button";

export function QuoteForm() {
  return (
    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
      <h3 className="text-2xl font-bold text-brand-dark mb-6">Get a Quick Quote</h3>
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
            <input 
              type="tel" 
              id="phone" 
              placeholder="Your phone number"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
          <input 
            type="email" 
            id="email" 
            placeholder="your@email.com"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="type" className="text-sm font-medium text-gray-700">Storage Type</label>
            <select 
              id="type"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all bg-white"
            >
              <option value="personal">Personal Storage</option>
              <option value="business">Business Storage</option>
              <option value="archiving">Archiving</option>
              <option value="student">Student Storage</option>
            </select>
          </div>
          <div className="space-y-2">
            <label htmlFor="size" className="text-sm font-medium text-gray-700">Approx. Duration</label>
             <select 
              id="duration"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all bg-white"
            >
              <option value="1month">1 Month</option>
              <option value="few_months">A few months</option>
              <option value="6months">6+ Months</option>
              <option value="1year">1 Year+</option>
              <option value="unsure">Unsure</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-gray-700">Additional Details (Optional)</label>
          <textarea 
            id="message" 
            rows={3}
            placeholder="Any specific requirements or unit size preference?"
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all resize-none"
          />
        </div>

        <Button type="submit" size="lg" className="w-full text-base font-bold shadow-lg shadow-brand-primary/20">
          Request Quote
        </Button>
        <p className="text-xs text-center text-gray-500 pt-2">
          We'll get back to you within 24 hours. No obligation.
        </p>
      </form>
    </div>
  );
}
