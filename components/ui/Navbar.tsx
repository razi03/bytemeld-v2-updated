"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "Home", url: "#home" },
  { title: "Services", url: "#services" },
  { title: "About Us", url: "#about" },
  { title: "Why Us", url: "#why-us" },
];

// Helper to check if a section is at the top of the viewport
function isSectionAtTop(section: HTMLElement, navHeight: number) {
  const rect = section.getBoundingClientRect();
  return rect.top <= navHeight && rect.bottom > navHeight;
}

export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  const [invert, setInvert] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // IDs of sections with blue backgrounds
    const blueSections = [
      'about', // AboutUs
      'testimonials', // TestimonialsSection (add id if not present)
      'cta', // CallToAction (add id if not present)
    ];
    const sectionEls = blueSections
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    const handleScroll = () => {
      const nav = navRef.current;
      if (!nav) return;
      const navRect = nav.getBoundingClientRect();
      // Special logic for testimonials: invert as soon as its top reaches nav height
      const testimonials = document.getElementById('testimonials');
      if (testimonials && isSectionAtTop(testimonials, navRect.height)) {
        setInvert(true);
        return;
      }
      // Fallback: check if any other blue section is under the navbar
      const isOverBlue = sectionEls.some((section) => {
        if (section.id === 'testimonials') return false;
        const rect = section.getBoundingClientRect();
        return (
          rect.top < navRect.bottom &&
          rect.bottom > navRect.top
        );
      });
      setInvert(isOverBlue);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => setClicked((prev) => !prev);
  const closeMenu = () => setClicked(false);

  // Dynamic classes
  const navBg = invert ? 'bg-white' : 'bg-gradient-to-r from-blue-400 to-blue-500';
  const navText = invert ? 'text-gray-900' : 'text-white';
  const navLink = invert
    ? 'text-gray-900 hover:text-blue-500'
    : 'text-white hover:text-blue-100';
  const buttonBg = invert
    ? 'bg-blue-500 text-white border border-blue-500 hover:bg-blue-600'
    : 'bg-white text-blue-500 hover:bg-blue-100';

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 w-full flex justify-between items-center px-8 md:px-16 h-24 rounded-b-2xl shadow-lg z-50 transition-colors duration-500 overflow-hidden ${navBg}`}
    >
      {/* Radial gradient overlay for perfect match with About Us */}
      {!invert && (
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)] pointer-events-none"></div>
      )}
      {/* Logo and Name */}
      <div className={`flex items-center space-x-3 cursor-pointer select-none ${navText} relative z-10`}>
        <Image src="/assets/logo.png" alt="ByteMeld Logo" width={40} height={40} className="rounded" />
        <span className="text-2xl font-bold">ByteMeld</span>
      </div>
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8 relative z-10">
        {navLinks.map((item) => (
          <a
            key={item.title}
            href={item.url}
            className={`font-medium text-lg px-4 py-2 transition-colors duration-200 ${navLink}`}
          >
            {item.title}
          </a>
        ))}
        <Link href="/contact">
          <button className={`ml-4 px-6 py-2 rounded-full font-semibold text-base transition-all duration-300 border ${buttonBg}`}>
            Contact
          </button>
        </Link>
      </div>
      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center relative z-10">
        <button onClick={handleClick} className="focus:outline-none">
          {clicked ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Menu */}
      <ul
        style={{zIndex: 20}}
        className={`absolute left-0 top-[90%] w-full rounded-2xl shadow-lg flex flex-col items-center gap-2 py-8 transition-all duration-300 z-40
        ${clicked ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-2'}
        ${invert ? 'bg-white' : 'bg-blue-500'}
        md:hidden`}
      >
        {navLinks.map((item) => (
          <li key={item.title} className="w-full text-center">
            <a
              href={item.url}
              className={`block w-full font-semibold text-lg px-4 py-4 transition-colors duration-200 ${navLink}`}
              onClick={closeMenu}
            >
              {item.title}
            </a>
          </li>
        ))}
        <li className="w-full text-center mt-2">
          <Link href="/contact" className="block w-full">
            <button
              className={`w-4/5 mx-auto px-6 py-3 rounded-full font-semibold text-base transition-all duration-300 border ${buttonBg}`}
              onClick={closeMenu}
            >
              Contact
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  );
} 