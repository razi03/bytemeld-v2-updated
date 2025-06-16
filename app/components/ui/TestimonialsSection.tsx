import React from 'react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content: "Working with this team has been an absolute pleasure. Their attention to detail and commitment to excellence is unmatched.",
    author: "Sarah Johnson",
    role: "CEO, TechStart",
    image: "/testimonials/sarah.jpg"
  },
  {
    id: 2,
    content: "The level of professionalism and expertise they bring to every project is remarkable. They've transformed our digital presence.",
    author: "Michael Chen",
    role: "Marketing Director, InnovateCo",
    image: "/testimonials/michael.jpg"
  },
  {
    id: 3,
    content: "Their innovative solutions have helped us achieve our business goals faster than we ever imagined possible.",
    author: "Emily Rodriguez",
    role: "Founder, GrowthLabs",
    image: "/testimonials/emily.jpg"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Clients Say About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from some of our amazing clients
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden">
                  {/* Add actual images when available */}
                  <div className="h-full w-full bg-gray-300" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimonial.author}
                  </h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 