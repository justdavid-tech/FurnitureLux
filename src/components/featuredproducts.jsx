import React, { useState } from "react";
import { Star, StarHalf, X,  } from "lucide-react";

function FeaturedProducts() {
  // 🌟 Simulated Product API
  const products = [
    {
      id: 1,
      name: "Royal Velvet Sofa",
      price: "₦850,000",
      rating: 5,
      category: "Living Room",
      material: "Premium Velvet & Mahogany",
      description: `This Royal Velvet Sofa represents luxury, craftsmanship, and comfort in perfect harmony.
      Hand-upholstered in premium Italian velvet, it features deep cushioning, solid mahogany legs, and elegant curves designed to elevate your interior space.
      
       Features:
      - Ultra-soft velvet with premium foam padding
      - Solid mahogany wooden base
      - Customizable colors (emerald, beige, black)
      - Resistant to wear and fading
      - Free home delivery within Lagos`,
      includes: ["3-Seater Sofa", "2 Throw Pillows", "Free Cleaning Kit"],
      images: [
        "/asset/images/sofaproduct1.jpg",
        "/asset/images/sofaproduct2.jpg",
        "/asset/images/sofaproduct3.jpg"
      ],
    },
    {
      id: 2,
      name: "Marble Dining Set",
      price: "₦1,200,000",
      rating: 4.5,
      category: "Dining",
      material: "Italian Marble & Oakwood",
      description: `The Marble Dining Set blends modern sophistication with handcrafted excellence.
      Built with pure Italian marble and polished oak, it’s the centerpiece your dining area deserves. Designed for elegant dining and long-lasting performance.
      
       Features:
      - Six ergonomic oak chairs
      - Glossy Italian marble tabletop
      - Anti-scratch coating
      - Easy assembly & lifetime durability
      - Free nationwide delivery`,
      includes: ["1 Dining Table", "6 Oak Chairs", "Assembly Manual"],
      images: [
        "/asset/images/diningproduct1.jpg",
        "/asset/images/diningproduct2.jpg",
        "/asset/images/diningproduct3.jpg"
      ],
    },
    {
      id: 3,
      name: "Oakwood Bedroom Set",
      price: "₦1,050,000",
      rating: 4.8,
      category: "Bedroom",
      material: "Pure Oakwood",
      description: `This Oakwood Bedroom Set is designed for royalty. Combining classic craftsmanship and contemporary minimalism, it transforms your room into a sanctuary of peace.
      Every detail — from its curved headboard to the smooth matte finish — reflects timeless elegance.
      
       Features:
      - Queen-sized oak bed frame
      - Premium finishing with UV coating
      - Spacious side drawers
      - Moisture and termite resistant
      - 12-year structural warranty`,
      includes: ["Bed Frame", "Side Drawers (x2)", "Dressing Mirror", "Vanity Stool"],
      images: [
        "/asset/images/bedroomproduct1.jpg",
        "/asset/images/bedroomproduct2.jpg",
        "/asset/images/bedroomproduct3.jpg"
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // ⭐ Star Rating Renderer
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
        ))}
        {hasHalfStar && <StarHalf size={18} className="text-yellow-400 fill-yellow-400" />}
      </>
    );
  };

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">Featured Products</h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Experience true craftsmanship with our exclusive collection of furniture designed for elegance, built for life.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSelectedProduct(product);
                setActiveImage(0);
              }}
              className="cursor-pointer bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden"
            >
              <div className="relative">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition-all duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-1 mt-2">{renderStars(product.rating)}</div>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                  {product.description.slice(0, 90)}...
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-semibold text-gray-900">{product.price}</span>
                  <span className="text-sm text-brand font-medium">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Modal (Full Screen) */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="bg-white rounded-none w-full h-full overflow-auto relative flex flex-col lg:flex-row">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-6 right-6 bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition"
              >
                <X size={24} />
              </button>

              {/* Left: Images */}
              <div className="lg:w-1/2 w-full bg-gray-100 flex flex-col items-center justify-center p-6">
                <img
                  src={selectedProduct.images[activeImage]}
                  alt={selectedProduct.name}
                  className="rounded-xl w-full max-w-lg h-[400px] object-cover mb-6"
                />

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto">
                  {selectedProduct.images.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      onClick={() => setActiveImage(index)}
                      className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all duration-300 ${
                        activeImage === index
                          ? "border-gray-600 scale-105"
                          : "border-transparent hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Product Info */}
              <div className="lg:w-1/2 w-full p-8 lg:overflow-y-auto">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(selectedProduct.rating)}
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                  {selectedProduct.price}
                </p>

                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedProduct.description}
                </p>

                {/* Includes Section */}
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Includes:</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedProduct.includes.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-8">
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Category:</span>{" "}
                    {selectedProduct.category}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-800">Material:</span>{" "}
                    {selectedProduct.material}
                  </p>
                </div>

                <button className="mt-10 bg-brand text-white py-3 px-10 rounded-full hover:bg-brand transition-all duration-300">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-center mt-12">
      <button className="py-5 px-16 bg-brand rounded-3xl text-base text-white cursor-pointer hover:bg-brand-hover">Explore</button>
      </div>
     
    </section>
  );
}

export default FeaturedProducts;
