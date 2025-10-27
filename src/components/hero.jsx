import React from "react";
import "../App.css";
import { MoveUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="px-6 py-20 md:px-16 lg:p-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="hero-left flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold header-text leading-tight">
            Your Comfort Zone Begins With Us
          </h2>
          <p className="text-gray-700 text-lg pt-3 md:pt-5 lg:pt-8">
            At LuxFurnish, we believe true luxury starts with comfort. From handcrafted dining sets to elegantly upholstered sofas and serene bedroom pieces, every design is thoughtfully created to blend timeless sophistication with everyday relaxation.
          </p>
          <div className="buttons flex flex-col sm:flex-row gap-4 mt-6 md:mt-8">
            <button className="shop-now-btn text-sm bg-brand hover:bg-brand-hover py-3 px-8 text-white rounded-4xl flex items-center justify-center gap-2">
              Shop Now <MoveUpRight size={16} />
            </button>
            <button className="explore-collection-btn text-sm bg-black hover:bg-brand text-white py-3 px-8 rounded-4xl">
              Explore Collection
            </button>
          </div>
        </div>

        <div className="right-content flex-1">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="object-cover rounded-4xl w-full h-64 md:h-full"
          >
            <source src="/asset/videos/furniture-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
