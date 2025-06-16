import React from 'react';
import Link from 'next/link';
import { Code, Smartphone, Brain, TrendingUp, Users, Cloud } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Services, We Give You!</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-500 transition-colors duration-300">
              <Code className="w-12 h-12 text-blue-500 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Web Development</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Custom websites and web applications built with modern technologies and best practices.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
          {/* Mobile Apps */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-500 transition-colors duration-300">
              <Smartphone className="w-12 h-12 text-purple-500 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Apps</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Native and cross-platform mobile applications that deliver exceptional user experiences.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
          {/* AI Solutions */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-yellow-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-yellow-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
              <Brain className="w-12 h-12 text-yellow-400 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AI Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Cutting-edge AI tools and integrations that automate and enhance your business processes.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
          {/* Marketing Funnels */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-500 transition-colors duration-300">
              <TrendingUp className="w-12 h-12 text-green-500 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Funnels</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Strategic digital marketing funnels that convert visitors into loyal customers.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
          {/* CRM Solutions */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-pink-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-pink-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-pink-500 transition-colors duration-300">
              <Users className="w-12 h-12 text-pink-500 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">CRM Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive CRM implementations and customizations to streamline your business operations.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
          {/* Cloud Solutions */}
          <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-indigo-200 transform hover:-translate-y-2">
            <div className="w-24 h-24 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-indigo-500 transition-colors duration-300">
              <Cloud className="w-12 h-12 text-indigo-500 group-hover:animate-bounce group-hover:text-white transition-all duration-300" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Scalable cloud infrastructure and services for reliable application hosting and deployment.
            </p>
            <Link href="/contact" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors inline-flex items-center">
              → EXPLORE MORE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 