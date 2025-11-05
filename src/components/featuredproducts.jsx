// src/components/DiningShowcase.jsx
import React, { useState } from "react";
import { Star, StarHalf, X, ShoppingCart } from "lucide-react";

// Sample Product Data (first 6 products)
const diningProducts = [
  {
    id: 1,
    name: "Imperial Grandeur Collection",
    price: 2850000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Solid Brazilian Mahogany & Italian Carrara Marble",
    description: "An absolutely monumental dining set that commands attention in any space it occupies. Crafted from centuries-old Brazilian mahogany trees and topped with a single slab of premium Italian Carrara marble weighing over 450 kilograms, this collection represents the pinnacle of luxury furniture craftsmanship. The table measures an impressive 3.2 meters in length and 1.4 meters in width, supported by four hand-carved pedestal legs that feature intricate floral motifs taking master artisans over 300 hours to complete.",
    includes: ["1 Massive Dining Table (320cm x 140cm)", "8 Throne-Style Armchairs", "Custom-Fitted Table Protector", "Premium Care Kit", "Certificate of Authenticity", "Professional Assembly Service"],
    images: ["/asset/images/b1.jpg", "/asset/images/diningproduct2.jpg", "/asset/images/diningproduct3.jpg"],
  },
  {
    id: 2,
    name: "Titanic Oak Fortress Dining Ensemble",
    price: 1950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Dining",
    material: "Century-Old European Oak & Wrought Iron",
    description: "This colossal dining ensemble represents the ultimate fusion of rustic strength and timeless elegance, constructed from specially selected century-old European oak trees that were carefully harvested and aged for seven years to achieve perfect stability. The massive tabletop measures a commanding 3.5 meters in length and features a breathtaking 10-centimeter thickness that showcases the wood's magnificent grain patterns in their most dramatic presentation.",
    includes: ["1 Colossal Oak Table (350cm x 120cm)", "12 Heavy-Duty Dining Chairs", "Iron Leg Stabilizers", "Premium Wood Care Kit", "Lifetime Structural Warranty"],
    images: ["/asset/images/d2.jpg", "/asset/images/diningproduct5.jpg", "/asset/images/diningproduct6.jpg"],
  },
  {
    id: 3,
    name: "Celestial Granite Monarch Set",
    price: 3650000,
    rating: 5.0,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Black Galaxy Granite & Bronze Framework",
    description: "Prepare to be awestruck by the sheer magnitude and brilliance of the Celestial Granite Monarch Set, featuring a single-piece granite tabletop sourced from the deepest quarries of India that measures an earth-shattering 4 meters in length and weighs nearly 700 kilograms. This isn't merely a dining table—it's a geological masterpiece showcasing the natural sparkle of embedded crystal formations that catch light from every angle.",
    includes: ["1 Monumental Granite Table (400cm x 150cm)", "10 Royal Dining Chairs", "Granite Sealing Kit", "Bronze Maintenance Set", "White Glove Delivery & Installation", "Investment Grade Certificate"],
    images: ["/asset/images/d3.jpg", "/asset/images/diningproduct8.jpg", "/asset/images/diningproduct9.jpg"],
  },
  {
    id: 4,
    name: "Regal Walnut Dynasty Collection",
    price: 2250000,
    rating: 4.9,
    stock: false,
    type: "classic",
    category: "Dining",
    material: "Black American Walnut & Brass Inlays",
    description: "The Regal Walnut Dynasty Collection stands as a testament to what happens when master woodworkers are given unlimited resources and the finest materials available on the planet. The centerpiece is a breathtaking dining table crafted from twelve individual boards of premium black American walnut, each selected for their identical grain patterns and rich chocolate hues.",
    includes: ["1 Extended Walnut Table (380cm x 130cm)", "14 Dynasty Dining Chairs", "Custom Table Pad", "Specialized Cleaning Kit", "Digital Care Guide", "Heritage Warranty Documentation"],
    images: ["/asset/images/s4.jpg", "/asset/images/diningproduct11.jpg", "/asset/images/diningproduct12.jpg"],
  },
  {
    id: 5,
    name: "Olympian Stone Colossus Set",
    price: 3150000,
    rating: 4.7,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Fossil Stone & Stainless Steel Reinforcement",
    description: "Behold the Olympian Stone Colossus Set, a dining ensemble of such monumental proportions and breathtaking presence that it redefines the very concept of luxury furniture. The table features a solid slab of natural fossil stone containing actual prehistoric ammonites and sea creatures preserved for millions of years, now transformed into a functional work of art measuring 3.6 meters long.",
    includes: ["1 Fossil Stone Table (360cm x 140cm)", "8 Colossal Dining Chairs", "Structural Assessment Service", "Stone Preservation Treatment", "Historical Documentation", "Lifetime Support Guarantee"],
    images: ["/asset/images/b5.jpg", "/asset/images/diningproduct14.jpg", "/asset/images/diningproduct15.jpg"],
  },
  {
    id: 6,
    name: "Victorian Empire Banquet Hall Set",
    price: 2750000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Dining",
    material: "Cherry Wood & Gold Leaf Accents",
    description: "The Victorian Empire Banquet Hall Set transports you to an era of unparalleled opulence and grandeur, meticulously crafted to replicate the dining sets found in European palaces while incorporating modern structural engineering for unprecedented durability. The magnificent table stretches an impressive 4.2 meters in length, featuring a book-matched cherry wood top with elaborate marquetry borders.",
    includes: ["1 Elongated Banquet Table (420cm x 160cm)", "16 Empire Dining Chairs", "Gold Leaf Touch-Up Kit", "Velvet Cleaning Solution", "Historical Style Guide", "Professional Staging Consultation"],
    images: ["/asset/images/d6.jpg", "/asset/images/diningproduct17.jpg", "/asset/images/diningproduct18.jpg"],
  },
];

function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Star renderer
  const renderStars = (rating) => {
    const full = Math.floor(rating);
    const half = rating % 1 !== 0;
    return (
      <>
        {[...Array(full)].map((_, i) => (
          <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
        ))}
        {half && <StarHalf size={16} className="text-yellow-400 fill-yellow-400" />}
      </>
    );
  };

  // WhatsApp contact
  const openWhatsApp = (product) => {
    const phone = "2348100000000"; // Replace with actual phone number
    const msg = encodeURIComponent(
      `Hello! I'm interested in the ${product.name} (₦${product.price.toLocaleString()}). Please I want details.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-gray-50 py-16 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Featured Collections</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Discover our handcrafted luxury dining sets that transform meals into memorable experiences
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {diningProducts.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-sm overflow-hidden group relative hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={p.images[0]}
                  alt={p.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer"
                  onClick={() => {
                    setSelectedProduct(p);
                    setActiveImage(0);
                  }}
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      p.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {p.stock ? "In Stock" : "Out of Stock"}
                  </span>
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      p.type === "new" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {p.type === "new" ? "New Collection" : "Classic Collection"}
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                <div className="flex items-center gap-2 mt-2">{renderStars(p.rating)}</div>
                <p className="text-sm text-gray-600 mt-3 line-clamp-3">{p.description.slice(0, 90)}...</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-lg font-semibold">₦{p.price.toLocaleString()}</span>
                  <button
                    onClick={() => openWhatsApp(p)}
                    className="px-4 py-2 border border-brand text-brand rounded-full text-sm font-medium hover:bg-brand hover:text-white transition-colors"
                  >
                    Chat Designer
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/dining"
            className="bg-brand text-white px-8 py-3 rounded-full font-medium hover:bg-brand-hover transition-colors inline-flex items-center gap-2"
          >
            View All Dining Collections
            <ShoppingCart size={18} />
          </a>
        </div>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-white w-full h-full md:h-[85vh] max-w-6xl overflow-auto relative rounded-xl flex flex-col lg:flex-row">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 bg-gray-100 hover:bg-gray-200 p-3 rounded-full z-10 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Left: Images */}
            <div className="lg:w-1/2 w-full bg-gray-100 p-6 flex flex-col items-center">
              <img
                src={selectedProduct.images[activeImage]}
                alt={selectedProduct.name}
                className="rounded-xl w-full max-w-xl h-[360px] object-cover mb-4"
              />
              <div className="flex gap-3 overflow-x-auto">
                {selectedProduct.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`thumb-${i}`}
                    onClick={() => setActiveImage(i)}
                    className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                      activeImage === i ? "border-gray-600 scale-105" : "border-transparent hover:scale-105"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:w-1/2 w-full p-6 overflow-y-auto">
              <h2 className="text-2xl font-semibold text-gray-900">{selectedProduct.name}</h2>
              <div className="flex items-center gap-2 mt-2">{renderStars(selectedProduct.rating)}</div>
              <div className="text-xl font-bold text-gray-900 mt-3">₦{selectedProduct.price.toLocaleString()}</div>

              <p className="text-gray-700 mt-4 whitespace-pre-line">{selectedProduct.description}</p>

              <div className="mt-5">
                <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold mr-2 bg-gray-100 text-gray-800">
                  {selectedProduct.type === "new" ? "New Collection" : "Classic Collection"}
                </div>
                <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${selectedProduct.stock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {selectedProduct.stock ? "In Stock" : "Out of Stock"}
                </div>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900">Includes</h4>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  {selectedProduct.includes.map((it, idx) => (
                    <li key={idx}>{it}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 flex flex-wrap gap-3 items-center">
                <button
                  onClick={() => openWhatsApp(selectedProduct)}
                  className="px-5 py-3 bg-brand text-white rounded-full text-sm font-medium hover:bg-brand-hover transition-colors"
                >
                  Contact Designer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default FeaturedProducts;