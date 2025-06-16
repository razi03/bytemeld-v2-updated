import React from 'react';
import Link from 'next/link';

export default function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-gradient-to-r from-blue-400 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Get Professional Services Today!</h2>
          <Link href="/contact">
            <button className="bg-white text-blue-500 px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Contact Us Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 