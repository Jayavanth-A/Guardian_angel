import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah',
    text: "Safety Alert gives me peace of mind knowing I can reach out for help anytime. It's easy to use and reliable.",
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Michael',
    text: 'This app is a game-changer for personal safety. The location sharing feature is incredibly accurate and fast.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
  {
    name: 'Emily',
    text: 'I feel much safer knowing my family can track my location when I travel alone. Highly recommended!',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-16">
          What Users Say
        </h2>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700/50 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 rounded-full object-cover border-4 border-blue-500 mb-6"
              />

              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              <p className="text-xl font-semibold text-white">
                {testimonials[currentIndex].name}
              </p>
            </div>
          </div>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-lg"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-500 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
