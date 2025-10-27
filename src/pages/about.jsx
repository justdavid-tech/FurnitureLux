import React from "react";
import { CheckCircle, Heart, Leaf, Star, Award } from "lucide-react";

function About() {
  return (
    <section className="bg-white text-gray-800">
      <div className="relative w-full h-[80vh] overflow-hidden">
        <img
          src="/asset/images/about-bg.jpg"
          alt="LuxFurnish Showroom"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 md:px-12">
          <h1 className="text-gray-700 text-4xl md:text-6xl font-semibold tracking-tight">
            Crafting <span className="text-brand">Luxury</span> That Feels Like Home
          </h1>
          <p className="text-gray-800 mt-5 text-lg max-w-3xl">
            At LuxFurnish, we don’t just build furniture — we create experiences that
            redefine comfort, elegance, and authenticity.
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/asset/images/workshop.jpg"
              alt="LuxFurnish workshop"
              className="rounded-3xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-6">
              The Art of Craftsmanship
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Every LuxFurnish creation tells a story — one of craftsmanship, dedication,
              and timeless design. From the hands of our artisans to your living space,
              every stitch, curve, and texture is made with precision and love.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We partner with global design houses and local craftsmen to deliver
              world-class furniture that celebrates Nigerian artistry and modern luxury.
              With sustainability at our core, every piece is made to last for
              generations.
            </p>
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <div className="bg-gray-50 py-20">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h3 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-10">
            Our Core Values
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Heart className="mx-auto text-brand mb-4" size={40} />
              <h4 className="text-lg font-semibold mb-2">Passion</h4>
              <p className="text-gray-600">
                We pour heart and soul into everything we create — because true luxury
                starts with passion.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <CheckCircle className="mx-auto text-brand mb-4" size={40} />
              <h4 className="text-lg font-semibold mb-2">Integrity</h4>
              <p className="text-gray-600">
                Our promise is simple — authenticity and honesty in every product and
                interaction.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Leaf className="mx-auto text-brand mb-4" size={40} />
              <h4 className="text-lg font-semibold mb-2">Sustainability</h4>
              <p className="text-gray-600">
                From eco-friendly materials to conscious production, we protect what
                matters — our planet.
              </p>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all">
              <Star className="mx-auto text-brand mb-4" size={40} />
              <h4 className="text-lg font-semibold mb-2">Excellence</h4>
              <p className="text-gray-600">
                Attention to detail, quality finishes, and masterful design define the
                LuxFurnish experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SIGNATURE SECTION */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-semibold mb-6">
              A Signature of Trust & Timeless Design
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Since our founding, LuxFurnish has stood for exceptional quality,
              world-class comfort, and artistic design. From royal lounges to cozy
              bedrooms, our creations bring an aura of grace and sophistication to every
              home.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Whether you’re curating a minimalist haven or a grand interior masterpiece,
              LuxFurnish ensures your space tells a story of elegance, authenticity, and
              personality.
            </p>
          </div>
          <div className="relative">
            <img
              src="/asset/images/signature.jpg"
              alt="LuxFurnish showroom"
              className="rounded-3xl shadow-lg object-cover"
            />
            <Award
              size={64}
              className="absolute bottom-[-25px] right-[-25px] bg-brand text-white p-4 rounded-full shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="bg-brand text-white text-center py-20">
        <h3 className="text-3xl md:text-4xl font-semibold mb-6">
          Experience the Art of Fine Living
        </h3>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Visit our showroom or shop online to explore collections that bring warmth,
          beauty, and authenticity into every home.
        </p>
        <button className="bg-white text-brand font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300">
          Explore Our Collection
        </button>
      </div>
    </section>
  );
}

export default About;
