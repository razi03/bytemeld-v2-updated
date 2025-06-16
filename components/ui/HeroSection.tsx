import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">
                Blending Code, Creativity & Strategy
              </span> to Power Your Business
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              We transform your ideas into powerful digital solutions. From web applications to AI integrations, we build the future of technology.
            </p>
            <Link href="/contact">
              <button className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Let's Talk
              </button>
            </Link>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-400 rounded-3xl transform rotate-6 opacity-10"></div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional woman with laptop"
                className="relative w-full max-w-md lg:max-w-lg rounded-3xl shadow-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 