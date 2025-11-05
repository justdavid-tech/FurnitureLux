import React from "react";
import { Link } from "react-router-dom";
import { MoveRight } from "lucide-react";

function Categories() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto px-6 py-16 md:px-12 lg:px-24">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-gray-900">
            Categories
          </h3>
          <p className="text-gray-600 text-base md:text-lg mt-4">
            Explore our curated furniture categories and find timeless pieces
            that bring comfort, sophistication, and warmth to your home.
          </p>
        </div>

        {/* --- Category Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {/* Card 1 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              src="/asset/images/dinning-set.jpg"
              alt="Dining set"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-semibold mb-1">
                Dining Sets
              </h4>
              <p className="text-gray-200 text-sm mb-3">
                Elegant dining solutions for every occasion.
              </p>
              <Link to = "/categories/dining">
              <button className="flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                Explore <MoveRight size={16} />
              </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              src="/asset/images/sofa-set.jpg"
              alt="Sofa set"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-semibold mb-1">
                Sofa Sets
              </h4>
              <p className="text-gray-200 text-sm mb-3">
                Cozy and stylish sofa sets for your living room.
              </p>
              <Link to = "/categories/sofa">
              <button className="flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                Explore <MoveRight size={16} />
              </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
            <img
              className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
              src="/asset/images/bedroom-set.jpg"
              alt="Bedroom set"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-500 flex flex-col justify-end p-6">
              <h4 className="text-white text-xl font-semibold mb-1">
                Bedroom Sets
              </h4>
              <p className="text-gray-200 text-sm mb-3">
                Modern and functional bedroom sets for your home.
              </p>
              <Link to="/categories/bedroom">
              <button className="flex items-center gap-2 text-sm text-white font-medium group-hover:translate-x-1 transition-transform duration-300 cursor-pointer">
                Explore <MoveRight size={16} />
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
