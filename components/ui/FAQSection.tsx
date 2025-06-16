import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './accordion';

const faqs = [
  {
    question: 'What is your development process?',
    answer:
      'Our process includes requirements gathering, planning, design, development, testing, deployment, and ongoing support. We keep you informed at every stage.'
  },
  {
    question: 'How long does it take to build a React application?',
    answer:
      'The timeline depends on the complexity and scope of the project. Typically, a basic React application can take 4-6 weeks, while more complex projects may take several months.'
  },
  {
    question: 'Do you offer post-launch support and maintenance?',
    answer:
      'Yes, we provide ongoing support and maintenance to ensure your application remains up-to-date and secure.'
  },
  {
    question: 'Can you help with both frontend and backend development?',
    answer:
      'Absolutely! Our team is skilled in both frontend and backend technologies to deliver complete solutions.'
  },
  {
    question: 'What technologies do you use for backend development?',
    answer:
      'We use Node.js, Express, Next.js, and other modern technologies tailored to your project\'s needs.'
  },
  {
    question: 'Do you provide custom solutions tailored to our business needs?',
    answer:
      'Yes, we specialize in building custom solutions that align with your unique business requirements.'
  },
  {
    question: 'How do you ensure the quality of the code?',
    answer:
      'We follow best practices, code reviews, automated testing, and continuous integration to ensure high-quality code.'
  },
  {
    question: 'What are your rates for React development services?',
    answer:
      'Our rates depend on the project scope and requirements. Contact us for a tailored quote.'
  },
];

export default function FAQSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">
        {/* Left: Heading and subheading */}
        <div className="md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left">
          <h2 className="text-4xl font-extrabold text-blue-500 mb-2">
            <span className="text-black">FREQUENTLY</span> ASKED<br />
            <span className="text-white bg-blue-500 px-2">QUESTIONS!</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Can't find the answer you're looking for?{' '}
            <Link href="/contact" className="text-black hover:underline font-medium">Reach out</Link> to us and we will get in touch with you
          </p>
        </div>
        {/* Right: Accordion */}
        <div className="md:w-1/2 flex justify-center">
          <div className="w-full">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`faq-${idx}`}
                  className={`bg-white border-x border-t border-gray-200 
                    ${idx === 0 ? 'rounded-t-lg' : ''}
                    ${idx === faqs.length - 1 ? 'rounded-b-lg border-b' : ''}
                    ${idx !== faqs.length - 1 ? 'border-b-0' : ''}
                  `}
                >
                  <AccordionTrigger className="text-lg text-gray-900 px-6 py-5 font-semibold focus:outline-none transition-all duration-200 text-left
                    hover:bg-blue-50 hover:border-l-4 hover:border-blue-400 hover:font-bold hover:no-underline
                    data-[state=open]:bg-blue-50 data-[state=open]:border-l-4 data-[state=open]:border-blue-400 data-[state=open]:font-bold
                    border-l-4 border-transparent no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 px-6 pb-5 pt-3 text-base md:text-lg">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
} 