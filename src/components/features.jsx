import React from "react";
import { ShieldCheck, Award, Hammer, CreditCard } from "lucide-react";

function Features() {
  const features = [
    {
      icon: <ShieldCheck className="text-brand w-8 h-8" />,
      title: "Authenticity Guaranteed",
      text: "These are authentic pieces, made to the designers’ original specifications.",
    },
    {
      icon: <Award className="text-brand w-8 h-8" />,
      title: "Up to 12-Year Warranty",
      text: "Buy with confidence. We’ve got you covered.",
    },
    {
      icon: <Hammer className="text-brand w-8 h-8" />,
      title: "Made for You",
      text: "Many of our furniture pieces are made to order, in your choice of material or finish.",
    },
    {
      icon: <CreditCard className="text-brand w-8 h-8" />,
      title: "Affirm Financing",
      text: "Buy now, pay over time — enjoy flexible payment options.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-center text-gray-900 mb-12">
          Why Choose Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4 flex items-center justify-center bg-white w-16 h-16 rounded-full shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
