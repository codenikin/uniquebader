'use client'
import React, { useState } from 'react'
const faqData = [
  {
    id: 1,
    question: 'Do you provide custom design and engineering for tensile membrane structures?',
    answer:
      'Yes. Our team specializes in creating custom design drawings, structural engineering, and fabrication plans tailored to your project requirements.',
  },
  {
    id: 2,
    question: 'Can you handle both fabrication and installation?',
    answer:
      'Absolutely. We manage the entire process—from material fabrication to on-site installation/erection, ensuring accuracy, safety, and high-quality workmanship.',
  },
  {
    id: 3,
    question: 'Do you offer maintenance services?',
    answer:
      'Yes. We provide civil maintenance services as well as machinery repair, ensuring your structures and equipment remain in excellent working condition.',
  },
  {
    id: 4,
    question: 'In which areas do you operate?',
    answer:
      'We offer our services across the UAE and can support projects in multiple sectors, including commercial, residential, industrial, and public infrastructure.',
  },
  {
    id: 5,
    question: 'Do you offer after-sales support?',
    answer:
      'Absolutely! We provide comprehensive after-sales support including technical assistance, maintenance services, and warranty claims. Our support team is available to help you with any questions or issues you may encounter.',
  },
]
export const FaqSection: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id)
  }
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full px-4 py-4 text-left bg-white hover:bg-gray-50 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(faq.id)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openFaq === faq.id ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                  openFaq === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
