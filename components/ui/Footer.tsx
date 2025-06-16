import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-blue-400 to-blue-500 text-white pt-16 pb-0 overflow-hidden rounded-t-2xl">
      {/* Radial gradient overlay for perfect match with navbar/AboutUs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Image src="/assets/logo.png" alt="ByteMeld Logo" width={32} height={32} className="rounded" />
              <span className="text-xl font-bold text-white">ByteMeld</span>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-white" />
                <span className="text-white">+92 311 5769587</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-white" />
                <span className="text-white">info@bytemeld.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-white" />
                <span className="text-white">Block A, B-17, Islamabad</span>
              </div>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white hover:text-blue-200 transition-colors">Home</a></li>
              <li><a href="#services" className="text-white hover:text-blue-200 transition-colors">Services</a></li>
              <li><a href="#about" className="text-white hover:text-blue-200 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="text-white hover:text-blue-200 transition-colors">Why Us</a></li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Web Development</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">AI Solutions</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Marketing Funnels</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">CRM Solutions</a></li>
              <li><a href="#" className="text-white hover:text-blue-200 transition-colors">Cloud Solutions</a></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Get In Touch</h3>
            <p className="text-white mb-6 leading-relaxed">Ready to transform your business with cutting-edge technology solutions?</p>
            <Link href="/contact">
              <button className="bg-white text-blue-500 px-6 py-3 rounded-full hover:bg-blue-50 transition-all duration-300 font-semibold">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="border-t border-white/30 mt-6 pt-4 pb-0 text-center text-white text-sm" style={{marginBottom: '15px'}}>
          <p>&copy; 2025 ByteMeld. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 