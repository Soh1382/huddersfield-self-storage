import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AccordionItem } from "@/components/ui/accordion-native";

export const metadata = {
  title: "Frequently Asked Questions | Huddersfield Self Storage",
  description: "Answers to common questions about self storage, access, security, and insurance.",
};

const faqs = [
  {
    question: "What can I store?",
    answer: "You can store almost anything: household furniture, boxes, business stock, archives, and equipment. We do not allow storage of perishable goods (food), flammable materials, explosives, or illegal items."
  },
  {
    question: "Do you offer 7-day access?",
    answer: "Yes, our facility is accessible 7 days a week. Mon-Fri 8:30am-5:00pm, Sat 9:30am-4:30pm, and Sun 11:00am-4:00pm."
  },
  {
    question: "How secure is the facility?",
    answer: "Very secure. We have 24-hour CCTV monitoring, a monitored alarm system, strict access control, and staff onsite during opening hours. The compound is also well-lit and gated."
  },
  {
    question: "Do I need insurance?",
    answer: "Yes, goods stored in our facility must be insured. We offer low-cost insurance cover that can be set up immediately when you move in."
  },
  {
    question: "Are there minimum storage terms?",
    answer: "We are very flexible. You can store for as little as one week. There are no long-term contracts unless you prefer one."
  },
  {
    question: "Do you offer discounts?",
    answer: "Yes, we offer special discounts for students and senior citizens (OAPs). We also have excellent rates for long-term prepayments."
  },
  {
    question: "Can businesses store stock?",
    answer: "Absolutely. Many local businesses use our units for stock, tools, and archiving. We can even accept deliveries on your behalf."
  },
  {
    question: "How do I choose a unit size?",
    answer: "Our 'Sizes & Prices' page has a handy guide, or you can call us. We are happy to show you different unit sizes in person so you can decide."
  }
];

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="bg-brand-dark text-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Find answers to common questions about our storage services.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-brand-dark mb-2">Still have questions?</h3>
            <p className="text-gray-600 mb-6">Our friendly team is happy to help.</p>
            <div className="flex justify-center gap-4">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="tel:01484429889">Call 01484 429 889</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
