import React from 'react';
import { Award, Clock, Layout } from 'lucide-react';

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us!</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {/* Modern Design */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <Layout className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Design</h3>
            <p className="text-gray-600 leading-relaxed">
              We make sure our designs are modern, sleek, and provide the best user experience with modern design principles.
            </p>
          </div>
          {/* Recognized for Excellence */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <Award className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Recognized for Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Our attention to detail and excellent results have made us a top choice of professionals.
            </p>
          </div>
          {/* Deliver on time */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-blue-100 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-400 transition-colors duration-300">
              <Clock className="w-10 h-10 text-blue-400 group-hover:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Deliver on time</h3>
            <p className="text-gray-600 leading-relaxed">
              We believe time is money and we make sure our 24/7 service team is always at your disposition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 