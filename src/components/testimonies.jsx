import React from "react";
import { Star, Quote } from "lucide-react";

function Testimonies() {
  const testimonies = [
    {
      id: 1,
      name: "Amarachi N.",
      role: "Interior Designer, Lagos",
      image: "/asset/images/testimonial-1.jpg",
      rating: 5,
      quote:
        "LuxFurnish completely redefined how I view luxury interiors. The attention to detail, finishing, and comfort level are simply unmatched. Every piece feels custom-made for my home.",
    },
    {
      id: 2,
      name: "David O.",
      role: "Architect & Homeowner, Abuja",
      image: "/asset/images/testimonial-2.jpg",
      rating: 4.5,
      quote:
        "I was blown away by the craftsmanship of the Oakwood Bedroom Set. It brought a serene yet royal vibe to my master bedroom. Their customer support was equally top-notch.",
    },
    {
      id: 3,
      name: "Fatima S.",
      role: "Hotel Owner, Kano",
      image: "/asset/images/testimonial-3.jpeg",
      rating: 5,
      quote:
        "LuxFurnish furnished our entire boutique hotel and every guest compliments the interiors! Their team was professional, creative, and delivered before schedule.",
    },
    {
      id: 4,
      name: "Michael A.",
      role: "Entrepreneur, Port Harcourt",
      image: "/asset/images/testimonial-4.jpeg",
      rating: 4,
      quote:
        "From my living room to my dining area, every LuxFurnish piece adds sophistication. The quality is exceptional, and their warranty gives me total peace of mind.",
    },
  ];

  // Function to render star ratings dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex gap-1 justify-center mt-2">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && <Star size={18} className="text-yellow-400 opacity-60" />}
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Real stories from people who chose LuxFurnish where craftsmanship meets
            trust, and design meets emotion.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonies.map((testimony) => (
            <div
              key={testimony.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-500 p-8 relative group"
            >
              {/* Floating quote icon */}
              <Quote
                size={42}
                className="absolute top-4 right-6 text-brand/20 group-hover:text-brand/40 transition-all duration-500"
              />

              <div className="flex flex-col items-center">
                <img
                  src={testimony.image}
                  alt={testimony.name}
                  className="w-20 h-20 rounded-full object-cover border-4 border-brand/10 shadow-sm mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-900">
                  {testimony.name}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{testimony.role}</p>
                {renderStars(testimony.rating)}
                <p className="text-gray-600 mt-5 text-sm leading-relaxed italic">
                  “{testimony.quote}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonies;
