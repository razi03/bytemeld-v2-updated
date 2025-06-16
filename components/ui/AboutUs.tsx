import React from 'react';
import Link from 'next/link';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-blue-400 to-blue-500 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-3xl transform -rotate-3 opacity-10"></div>
                <img
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Team collaboration"
                  className="relative w-full rounded-3xl shadow-2xl object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
              <p className="text-blue-50 mb-6 leading-relaxed text-lg">
                ByteMeld provides you the ultimate technology opportunity and a comprehensive range of 
                IT services. We pride ourselves on delivering innovative solutions through cutting-edge 
                technologies and expert consultation.
              </p>
              <p className="text-blue-50 mb-8 leading-relaxed text-lg">
                Our customer satisfaction is our priority. Building trust and maintaining long-term 
                relationships with our clients has always been our core values. We are committed to 
                excellence and put us in a position of strength and prominence with its clientele 
                and innovative methodologies in the software development industry.
              </p>
              <Link href="/contact">
                <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Explore More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 