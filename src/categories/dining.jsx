import React, { useState, useMemo } from "react";
import { Star, StarHalf, X, Filter } from "lucide-react";

// ✅ Sample Product Data (Dining Sets)
const diningProducts = [
  {
    id: 1,
    name: "Marble Dining Set",
    price: 1200000,
    rating: 4.5,
    stock: true,
    category: "Dining",
    material: "Italian Marble & Oakwood",
    description: `The Marble Dining Set blends modern sophistication with handcrafted excellence.
Built with pure Italian marble and polished oak, it’s the centerpiece your dining area deserves.
      
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
      "/asset/images/diningproduct3.jpg",
    ],
  },
  {
    id: 2,
    name: "Classic Round Oak Set",
    price: 950000,
    rating: 4.7,
    stock: false,
    category: "Dining",
    material: "Oakwood",
    description: `The Classic Round Oak Set brings warmth and tradition to every meal. 
Its handcrafted oak base and circular design create an inviting dining experience.
      
Features:
- Round oak table for 6 people
- Durable matte finish
- Termite resistant
- Smooth UV coating`,
    includes: ["1 Round Table", "6 Chairs"],
    images: [
      "/asset/images/diningproduct4.jpg",
      "/asset/images/diningproduct5.jpg",
      "/asset/images/diningproduct6.jpg",
    ],
  },
  {
    id: 3,
    name: "Modern Glass Dining Set",
    price: 780000,
    rating: 4.2,
    stock: true,
    category: "Dining",
    material: "Tempered Glass & Chrome Steel",
    description: `A minimalist masterpiece, the Modern Glass Dining Set fits perfectly in contemporary homes. 
Combining strength and elegance, it elevates every dining space.`,
    includes: ["1 Glass Table", "4 Cushioned Chairs"],
    images: [
      "/asset/images/diningproduct7.jpg",
      "/asset/images/diningproduct8.jpg",
      "/asset/images/diningproduct9.jpg",
    ],
  },
];

function Dining() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // Filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 2000000]);
  const [sortOption, setSortOption] = useState("");
  const [stockFilter, setStockFilter] = useState("all");

  // ⭐ Star Renderer
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

  // 🧮 Filtered + Sorted Products
  const filteredProducts = useMemo(() => {
    return diningProducts
      .filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) =>
        stockFilter === "all" ? true : stockFilter === "in" ? p.stock : !p.stock
      )
      .sort((a, b) => {
        if (sortOption === "low-high") return a.price - b.price;
        if (sortOption === "high-low") return b.price - a.price;
        if (sortOption === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [searchQuery, priceRange, sortOption, stockFilter]);

  return (
    <section className="bg-gray-50 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* 🏷 Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-900">
            Dining Sets Collection
          </h2>
          <p className="text-gray-600 text-lg mt-4 max-w-2xl mx-auto">
            Discover handcrafted dining sets built for elegance, comfort, and family gatherings.
          </p>
        </div>

        {/* 🔍 Filter Bar */}
        <div className="bg-white shadow-sm p-6 rounded-2xl mb-10 flex flex-wrap items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Filter className="text-brand" size={20} />
            <input
              type="text"
              placeholder="Search product..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border border-gray-300 rounded-xl px-4 py-2 w-56 focus:ring-2 focus:ring-brand focus:outline-none"
            />
          </div>

          <div className="flex items-center gap-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Price Range
              </label>
              <input
                type="range"
                min="0"
                max="2000000"
                step="50000"
                value={priceRange[1]}
                onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                className="w-48 accent-brand"
              />
              <p className="text-xs text-gray-500">₦0 - ₦{priceRange[1].toLocaleString()}</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Sort By
              </label>
              <select
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              >
                <option value="">Default</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Stock
              </label>
              <select
                onChange={(e) => setStockFilter(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2 focus:ring-2 focus:ring-brand focus:outline-none"
              >
                <option value="all">All</option>
                <option value="in">In Stock</option>
                <option value="out">Out of Stock</option>
              </select>
            </div>
          </div>
        </div>

        {/* 🪑 Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
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
                <span
                  className={`absolute top-4 left-4 px-3 py-1 text-xs font-semibold rounded-full ${
                    product.stock
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {product.stock ? "In Stock" : "Out of Stock"}
                </span>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-1 mt-2">{renderStars(product.rating)}</div>
                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                  {product.description.slice(0, 90)}...
                </p>
                <div className="flex items-center justify-between mt-5">
                  <span className="text-lg font-semibold text-gray-900">
                    ₦{product.price.toLocaleString()}
                  </span>
                  <span className="text-sm text-brand font-medium">View Details →</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🪟 Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
            <div className="bg-white w-full h-full overflow-auto relative flex flex-col lg:flex-row">
              {/* Close */}
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
                <div className="flex gap-4 overflow-x-auto">
                  {selectedProduct.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumbnail ${i + 1}`}
                      onClick={() => setActiveImage(i)}
                      className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 transition-all ${
                        activeImage === i
                          ? "border-gray-600 scale-105"
                          : "border-transparent hover:scale-105"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Details */}
              <div className="lg:w-1/2 w-full p-8">
                <h3 className="text-3xl font-semibold text-gray-900 mb-2">
                  {selectedProduct.name}
                </h3>
                <div className="flex items-center gap-1 mb-3">
                  {renderStars(selectedProduct.rating)}
                </div>
                <p className="text-lg font-semibold text-gray-800 mb-6">
                  ₦{selectedProduct.price.toLocaleString()}
                </p>

                <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {selectedProduct.description}
                </p>

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
                    <span className="font-semibold text-gray-800">Material:</span>{" "}
                    {selectedProduct.material}
                  </p>
                  <p
                    className={`text-sm font-semibold ${
                      selectedProduct.stock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {selectedProduct.stock ? "In Stock" : "Out of Stock"}
                  </p>
                </div>

                <button
                  disabled={!selectedProduct.stock}
                  className={`mt-10 py-3 px-10 rounded-full transition-all duration-300 ${
                    selectedProduct.stock
                      ? "bg-brand text-white hover:bg-brand-hover"
                      : "bg-gray-300 text-gray-600 cursor-not-allowed"
                  }`}
                >
                  {selectedProduct.stock ? "Add to Cart" : "Out of Stock"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Dining;
