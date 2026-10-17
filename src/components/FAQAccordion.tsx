"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/lib/services-data";

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
}

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-trigger"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            data-open={openIndex === index ? "true" : "false"}
            aria-expanded={openIndex === index}
          >
            {faq.question}
            <ChevronDown size={18} />
          </button>
          {openIndex === index && (
            <div className="faq-content animate-fade-in">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
