import Navbar from '../components/ui/Navbar';
import HeroSection from '../components/ui/HeroSection';
import Services from '../components/ui/Services';
import AboutUs from '../components/ui/AboutUs';
import WhyChooseUs from '../components/ui/WhyChooseUs';
import TestimonialsSection from '../components/ui/TestimonialsSection';
import ClientLogos from '../components/ui/ExpertiseSection';
import CallToAction from '../components/ui/CallToAction';
import FAQSection from '../components/ui/FAQSection';
import Footer from '../components/ui/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <HeroSection />
      <Services />
      <AboutUs />
      <WhyChooseUs />
      <TestimonialsSection />
      <ClientLogos />
      <CallToAction />
      <FAQSection />
      <Footer />
    </div>
  );
}