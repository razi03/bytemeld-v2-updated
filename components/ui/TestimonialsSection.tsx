'use client';

import Image from 'next/image';
import { Building2, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  country: string;
  avatar: string;
  text: string;
  platform: string;
  company: string;
}

const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lesley P.",
      username: "nill",
      country: "🇨🇦",
      avatar: "https://images.unsplash.com/photo-1603415526960-f7e0328fddb5?w=40&h=40&fit=crop&crop=face",
      text: "Thanks for going above and beyond!!",
      platform: "upwork.",
      company: "ROCA Inc."
    },
    {
      id: 2,
      name: "Edward R.",
      username: "nill",
      country: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=40&h=40&fit=crop&crop=face",
      text: "His knowledge and expertise made the collaboration seamless and enjoyable, ultimately leading us to a successful outcome that exceeded our expectations. Given this outstanding experience, we are absolutely committed to hiring him for future projects, knowing that he will consistently deliver high-quality results.",
      platform: "upwork.",
      company: "Method21"
    },
    {
      id: 3,
      name: "Karl M.",
      username: "nill",
      country: "🇦🇺",
      avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=40&h=40&fit=crop&crop=face",
      text: "If you’re looking for help with GHL Razi is your guy. Super responsive and he ensures that the best outcome is implemented. Highly recommend Razi.",
      platform: "upwork.",
      company: "OneLife Water Filteration"
    },
    {
      id: 4,
      name: "Gordon A.",
      username: "nill",
      country: "🇬🇧",
      avatar: "https://images.unsplash.com/photo-1589156280159-bc027db5812d?w=40&h=40&fit=crop&crop=face",
      text: "Razi is an amazing developer and freelancer. One of the best I've ever worked with. He is so helpful but what really stands out and which is rare is his initiative and being able to really understand what is needed and develop a great solution in a fast time. He is also a really nice person. He has just completed our second project perfectly and now moving onto the third. I can't recommend him highly enough.",
      platform: "upwork.",
      company: "MindFlourish"
    },
    {
      id: 5,
      name: "Amos D.",
      username: "nill",
      country: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=40&h=40&fit=crop&crop=face",
      text: "Excellent work with attention to detail and proactive engagement.",
      platform: "upwork.",
      company: "JustHurt"
    },
    {
      id: 6,
      name: "Enrique B.",
      username: "nill",
      country: "🇪🇸",
      avatar: "https://images.unsplash.com/photo-1603415527125-28d24c6f3f2d?w=40&h=40&fit=crop&crop=face",
      text: "Razi has helped us implement their Voice AI system, achieving a smooth and effective integration. Their technology has improved our interaction with users, providing quick and accurate responses. Additionally, the setup process was clear and well-managed.  We are very satisfied with the results and would definitely recommend their solution to anyone looking to optimize communication through artificial intelligence.",
      platform: "upwork.",
      company: "Go Agents"
    },
    {
      id: 7,
      name: "Jhonny M.",
      username: "nill",
      country: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?w=40&h=40&fit=crop&crop=face",
      text: "Razi was very professional and responded in. a timely manner. He completed my requests ahead of schedule as well as made suggestions for improvements which was great!",
      platform: "upwork.",
      company: "JMF"
    },
    {
      id: 8,
      name: "Hammad A.",
      username: "nill",
      country: "🇵🇰",
      avatar: "https://images.unsplash.com/photo-1502767089025-6572583495b4?w=40&h=40&fit=crop&crop=face",
      text: "Razi is a GHL genius! He delivered TOP-NOTCH solution to my complex GHL problem which no other freelancer could provide. Anyone who wants a GHL expert must hire him. Will Surely re-hire him in future!",
      platform: "upwork.",
      company: "Buzz Solutions"
    },
    {
      id: 9,
      name: "Lesley P.",
      username: "nill",
      country: "🇨🇦",
      avatar: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?w=40&h=40&fit=crop&crop=face",
      text: "100% Recommended, Razi has passion and it shows !!",
      platform: "upwork.",
      company: "ROCA Inc."
    },
    {
      id: 10,
      name: "Karl M.",
      username: "nill",
      country: "🇦🇺",
      avatar: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=40&h=40&fit=crop&crop=face",
      text: "If you’re a GHL user and need some help or just don’t have the time to do it yourself, then I encourage you to meet with Razi. He has a good understanding of the functionality of GHL and will deliver what you’re wanting without any problems. Great work and highly recommend.",
      platform: "upwork.",
      company: "OneLife"
    },
    {
      id: 11,
      name: "Sabrina J.",
      username: "nill",
      country: "🇺🇸",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face",
      text: "Razi is a genius with GHL! Thank you so much - so glad I found you! Will use again and again!",
      platform: "upwork.",
      company: "CozyNest Creators"
    },
    {
      id: 12,
      name: "Enrique B.",
      username: "nill",
      country: "🇪🇸",
      avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=40&h=40&fit=crop&crop=face",
      text: "Outstanding work! The freelancer built a chatbot using OpenAI Assistants integrated with GoHighLevel, exceeding our expectations. Highly professional, quick, and maintained excellent communication throughout. The result is functional, intuitive, and flawlessly executed. Highly recommended!",
      platform: "upwork.",
      company: "Go Reviews"
    },
    {
      id: 13,
      name: "Amir H.",
      username: "nill",
      country: "🇦🇪",
      avatar: "https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=40&h=40&fit=crop&crop=face",
      text: "Razi´s expertise and proficiency with GHL and Make.com were evident from the start, making the entire process smooth and efficient.  Razi not only provided clear and effective solutions but also showed great patience and willingness to address my questions and explain the process in detail, which was incredibly helpful. His commitment and professionalism truly made a difference in the success of this project.  I wholeheartedly recommend Razi. His knowledge, attention to detail, and collaborative attitude are truly exceptional. Thank you for your hard work and dedication!",
      platform: "upwork.",
      company: "Botfla"
    }
  ];
  
  

  const avatarStack = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=32&h=32&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=32&h=32&fit=crop&crop=face"
  ];

  return (
    <section id="testimonials" className="min-h-screen bg-gradient-to-r from-blue-400 to-blue-500 py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.3)_100%)]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 md:mb-16">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-2">
              OVER 20+ POSITIVE TALKS,
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold text-blue-200">
              SEE WHAT OUR CLIENTS SAY!
            </h3>
          </div>
          
          {/* Avatar Stack */}
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {avatarStack.map((avatar, index) => (
                <Image
                  key={index}
                  src={avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-gray-700 hover:border-blue-200 transition-colors duration-300"
                />
              ))}
            </div>
            <div className="text-gray-400 text-sm">
              <a
                href="https://www.upwork.com/freelancers/~018c67365497750d73"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-200 transition-colors cursor-pointer"
              >
                See all reviews
              </a>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-gray-800/60 backdrop-blur-sm border border-gray-700/50 rounded-xl p-4 sm:p-6 hover:bg-gray-800/80 hover:border-blue-500/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="flex items-center space-x-2">
                      <h4 className="text-white font-semibold text-sm">
                        {testimonial.name}
                      </h4>
                      <span className="text-lg">{testimonial.country}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <Building2 className="w-3 h-3" />
                      <span>{testimonial.company}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <a
                    href="https://www.upwork.com/freelancers/~018c67365497750d73"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white underline hover:text-blue-200 transition-colors"
                  >
                    {testimonial.platform}
                  </a>
                </div>
              </div>

              {/* Content */}
              <p className="text-gray-300 text-sm leading-relaxed">
                {testimonial.text}
              </p>

              {/* Rating Stars */}
              <div className="flex mb-4 gap-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
