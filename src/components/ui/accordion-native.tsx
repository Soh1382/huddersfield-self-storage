export function AccordionItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group border-b border-gray-200 last:border-0">
      <summary className="flex cursor-pointer items-center justify-between py-6 text-lg font-medium text-brand-dark hover:text-brand-primary transition-colors focus:outline-none focus:text-brand-primary">
        {question}
        <span className="relative ml-4 h-5 w-5 shrink-0">
          <svg
            className="absolute inset-0 h-5 w-5 transform transition-transform duration-300 group-open:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="pb-6 text-gray-600 leading-relaxed text-base animate-in slide-in-from-top-2 fade-in duration-200">
        {answer}
      </div>
    </details>
  );
}
