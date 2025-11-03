// src/pages/Dining.jsx
import React, { useState, useMemo } from "react";
import { Star, StarHalf, X, Filter, ShoppingCart } from "lucide-react";

// ---------------------- Sample Product Data ----------------------
const diningProducts = [
  {
    id: 1,
    name: "Imperial Grandeur Dining Collection",
    price: 2850000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Solid Brazilian Mahogany & Italian Carrara Marble",
    description: "An absolutely monumental dining set that commands attention in any space it occupies. Crafted from centuries-old Brazilian mahogany trees and topped with a single slab of premium Italian Carrara marble weighing over 450 kilograms, this collection represents the pinnacle of luxury furniture craftsmanship. The table measures an impressive 3.2 meters in length and 1.4 meters in width, supported by four hand-carved pedestal legs that feature intricate floral motifs taking master artisans over 300 hours to complete. Each of the eight accompanying throne-style chairs stands as a masterpiece itself, upholstered in genuine Italian leather and featuring double-reinforced frames capable of supporting substantial weight without compromising on elegance. The entire set undergoes a 17-step finishing process that includes hand-rubbed oil treatments and multiple layers of protective lacquer, ensuring it will remain a family heirloom for generations to come.",
    includes: ["1 Massive Dining Table (320cm x 140cm)", "8 Throne-Style Armchairs", "Custom-Fitted Table Protector", "Premium Care Kit", "Certificate of Authenticity", "Professional Assembly Service"],
    images: ["/asset/images/d1.jpg", "/asset/images/diningproduct2.jpg", "/asset/images/diningproduct3.jpg"],
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
    description: "This colossal dining ensemble represents the ultimate fusion of rustic strength and timeless elegance, constructed from specially selected century-old European oak trees that were carefully harvested and aged for seven years to achieve perfect stability. The massive tabletop measures a commanding 3.5 meters in length and features a breathtaking 10-centimeter thickness that showcases the wood's magnificent grain patterns in their most dramatic presentation. The base consists of four enormous forged iron legs, each weighing 85 kilograms and featuring medieval-inspired scrollwork that adds both visual weight and structural integrity. The twelve matching chairs are built with double-width frames and extra-deep seating, each capable of supporting over 300 kilograms while providing exceptional comfort through their hand-tied spring systems and triple-layer cushioning. This set isn't just furniture—it's a fortress of dining luxury designed to withstand generations of use while maintaining its majestic presence.",
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
    description: "Prepare to be awestruck by the sheer magnitude and brilliance of the Celestial Granite Monarch Set, featuring a single-piece granite tabletop sourced from the deepest quarries of India that measures an earth-shattering 4 meters in length and weighs nearly 700 kilograms. This isn't merely a dining table—it's a geological masterpiece showcasing the natural sparkle of embedded crystal formations that catch light from every angle. The supporting framework consists of solid bronze castings that required specialized foundry techniques to create, with each of the six main supports weighing 120 kilograms and featuring artisanal hammered textures. The ten accompanying chairs represent the height of luxury seating, with frames carved from single blocks of walnut and upholstered in velvet woven with actual silver threads. The set's installation requires a team of six specialists and specialized equipment, reflecting the monumental scale of this investment-grade furniture piece that transforms any dining room into a palatial hall of grandeur.",
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
    description: "The Regal Walnut Dynasty Collection stands as a testament to what happens when master woodworkers are given unlimited resources and the finest materials available on the planet. The centerpiece is a breathtaking dining table crafted from twelve individual boards of premium black American walnut, each selected for their identical grain patterns and rich chocolate hues, then joined together to create a massive surface measuring 3.8 meters long that appears as a single continuous piece of wood. The table's substructure features a revolutionary engineering design using aircraft-grade aluminum hidden within traditional joinery, allowing it to support unimaginable weight while maintaining elegant proportions. Each of the fourteen dining chairs represents a month of dedicated craftsmanship, with hand-carved crest rails, waterfall-style legs, and upholstery filled with a custom blend of goose down and memory foam that molds to the user's body while providing unparalleled support. This collection doesn't just fill a room—it defines an entire era of dining excellence.",
    includes: ["1 Extended Walnut Table (380cm x 130cm)", "14 Dynasty Dining Chairs", "Custom Table Pad", "Specialized Cleaning Kit", "Digital Care Guide", "Heritage Warranty Documentation"],
    images: ["/asset/images/d4.jpg", "/asset/images/diningproduct11.jpg", "/asset/images/diningproduct12.jpg"],
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
    description: "Behold the Olympian Stone Colossus Set, a dining ensemble of such monumental proportions and breathtaking presence that it redefines the very concept of luxury furniture. The table features a solid slab of natural fossil stone containing actual prehistoric ammonites and sea creatures preserved for millions of years, now transformed into a functional work of art measuring 3.6 meters long and requiring a custom-built steel frame capable of supporting its 850-kilogram weight. The stone's unique characteristics mean no two sets are identical, with each table telling a geological story through its embedded fossils and mineral deposits. The eight massive chairs feature frames cut from solid blocks of teak, with backs shaped to mimic ancient Greek architectural elements and seats padded with revolutionary gel-infused memory foam that distributes weight perfectly. This set represents the ultimate conversation piece, combining natural history with cutting-edge comfort in a package so substantial it requires structural assessment of your flooring before installation.",
    includes: ["1 Fossil Stone Table (360cm x 140cm)", "8 Colossal Dining Chairs", "Structural Assessment Service", "Stone Preservation Treatment", "Historical Documentation", "Lifetime Support Guarantee"],
    images: ["/asset/images/d5.jpg", "/asset/images/diningproduct14.jpg", "/asset/images/diningproduct15.jpg"],
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
    description: "The Victorian Empire Banquet Hall Set transports you to an era of unparalleled opulence and grandeur, meticulously crafted to replicate the dining sets found in European palaces while incorporating modern structural engineering for unprecedented durability. The magnificent table stretches an impressive 4.2 meters in length, featuring a book-matched cherry wood top with elaborate marquetry borders and hand-applied gold leaf detailing that shimmers in ambient lighting. The sixteen turned legs feature elaborate carvings inspired by Victorian architecture, each requiring over 80 hours of handwork by master carvers trained in traditional techniques. The matching sixteen chairs represent the height of period furniture reproduction, with balloon-style backs, deeply tufted velvet seats, and frames reinforced with steel cores to ensure they can accommodate users of all sizes comfortably. This set doesn't just provide seating—it creates an experience, transforming everyday meals into royal banquets and making every gathering feel like a state occasion of historical significance.",
    includes: ["1 Elongated Banquet Table (420cm x 160cm)", "16 Empire Dining Chairs", "Gold Leaf Touch-Up Kit", "Velvet Cleaning Solution", "Historical Style Guide", "Professional Staging Consultation"],
    images: ["/asset/images/d6.jpg", "/asset/images/diningproduct17.jpg", "/asset/images/diningproduct18.jpg"],
  },
  {
    id: 7,
    name: "Modern Titan Glass Fortress",
    price: 1950000,
    rating: 4.6,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Triple-Laminated Glass & Carbon Fiber",
    description: "The Modern Titan Glass Fortress represents the ultimate achievement in contemporary furniture engineering, featuring a tabletop constructed from three layers of industrial-strength glass laminated together to create a surface of unbelievable strength and crystal clarity measuring 3.3 meters long. This technological marvel can support over 900 kilograms distributed weight while maintaining its elegant, floating appearance thanks to a revolutionary carbon fiber substructure that remains virtually invisible. The twelve accompanying chairs feature aerospace-grade aluminum frames with carbon fiber reinforcement, creating seats that weigh only 15 kilograms each yet can support over 400 kilograms through advanced engineering principles. The set's transparent aesthetic creates an illusion of space while its substantial construction provides undeniable presence, making it perfect for modern interiors where both style and substance are equally valued. This is furniture that pushes the boundaries of what's possible with modern materials while delivering uncompromising performance.",
    includes: ["1 Laminated Glass Table (330cm x 110cm)", "12 Architectural Chairs", "Glass Cleaning System", "Frame Adjustment Tools", "Engineering Specifications", "10-Year Performance Warranty"],
    images: ["/asset/images/d7.jpg", "/asset/images/diningproduct20.jpg", "/asset/images/diningproduct21.jpg"],
  },
  {
    id: 8,
    name: "Rustic Mountain King Collection",
    price: 1850000,
    rating: 4.7,
    stock: false,
    type: "classic",
    category: "Dining",
    material: "Reclaimed Barn Wood & Iron Hardware",
    description: "The Rustic Mountain King Collection channels the raw power and untamed beauty of nature through furniture of truly epic proportions and character. The massive table is constructed from reclaimed barn wood beams that are over 200 years old, each bearing the marks of time and history that tell stories of agricultural heritage. Measuring a substantial 3.7 meters in length, the table features a live-edge design that preserves the natural contours of the original trees, with a thickness of 12 centimeters that emphasizes its substantial presence. The base consists of four industrial-sized iron trestles weighing 95 kilograms each, forged using traditional blacksmithing techniques and featuring custom scrollwork that complements the wood's rustic character. The ten matching chairs continue the theme of substantial comfort, with seats carved from single slabs of walnut and backs shaped from bent wood that required steam treatment in custom-built chambers. This collection brings the soul of the forest into your home with furniture built to last centuries.",
    includes: ["1 Live-Edge Table (370cm x 130cm)", "10 Rustic Dining Chairs", "Wood Preservation Treatment", "Iron Care Products", "Historical Documentation", "Custom Sizing Options"],
    images: ["/asset/images/diningproduct22.jpg", "/asset/images/diningproduct23.jpg", "/asset/images/diningproduct24.jpg"],
  },
  {
    id: 9,
    name: "Art Deco Titanium Majesty Set",
    price: 3250000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Dining",
    material: "Macassar Ebony & Titanium Framework",
    description: "The Art Deco Titanium Majesty Set represents a bold fusion of rare materials and architectural design that creates furniture of museum-quality significance and substantial physical presence. The table features a top crafted from consecutive cuts of Macassar ebony, arranged in a dramatic sunburst pattern that radiates from the center and showcases the wood's striking natural stripes across its 3.4-meter length. Beneath this exquisite surface lies a framework of aerospace-grade titanium that provides incredible strength while allowing for surprisingly slender profiles that defy conventional engineering expectations. The eight accompanying chairs are sculptural masterpieces, with frames carved from solid blocks of zebrawood and backs featuring geometric patterns inspired by 1920s architecture. Each chair incorporates a hidden suspension system that provides dynamic support based on the user's position, creating unparalleled comfort without compromising the clean visual lines. This set represents the pinnacle of both art and function, with each piece requiring over 400 hours of skilled labor to complete.",
    includes: ["1 Geometric Table (340cm x 120cm)", "8 Sculptural Chairs", "Specialized Wood Care", "Titanium Maintenance Guide", "Artisan Documentation", "Museum-Quality Certification"],
    images: ["/asset/images/diningproduct25.jpg", "/asset/images/diningproduct26.jpg", "/asset/images/diningproduct27.jpg"],
  },
  {
    id: 10,
    name: "Gothic Cathedral Dining Throne Set",
    price: 2950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Dining",
    material: "Oak & Leaded Glass Inserts",
    description: "The Gothic Cathedral Dining Throne Set draws inspiration from medieval ecclesiastical furniture, scaled to magnificent proportions and built with techniques that haven't changed in centuries. The monumental table stretches an awe-inspiring 4.5 meters in length, featuring a top constructed from twelve individual oak planks joined with traditional mortise and tenon techniques that create a surface of incredible strength and visual warmth. The table's base consists of eight carved pillars reminiscent of cathedral architecture, each standing 85 centimeters tall and featuring intricate tracery patterns that cast dramatic shadows in ambient lighting. The fourteen throne-style chairs feature backs reaching 1.6 meters high, with carved spires, leaded glass inserts, and seats upholstered in ecclesiastical purple velvet. The sheer scale and presence of this set transforms any dining room into a hall worthy of royalty, with each piece serving as both functional furniture and standalone artwork that celebrates centuries of woodworking tradition.",
    includes: ["1 Cathedral Table (450cm x 140cm)", "14 Throne Chairs", "Velvet Care Kit", "Wood Preservation Products", "Historical Reference Materials", "Custom Lighting Recommendations"],
    images: ["/asset/images/diningproduct28.jpg", "/asset/images/diningproduct29.jpg", "/asset/images/diningproduct30.jpg"],
  },
];

// ---------------------- Helper: Pagination page list (max 5 visible) ----------------------
function getVisiblePageNumbers(totalPages, currentPage, maxVisible = 5) {
  // If totalPages <= maxVisible just return all
  if (totalPages <= maxVisible) return Array.from({ length: totalPages }, (_, i) => i + 1);

  const half = Math.floor(maxVisible / 2);
  let start = Math.max(1, currentPage - half);
  let end = start + maxVisible - 1;

  if (end > totalPages) {
    end = totalPages;
    start = end - maxVisible + 1;
  }

  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

// ---------------------- Main Component ----------------------
export default function Dining() {
  // UI states
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);

  // cart & checkout
  const [cart, setCart] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);

  // filters
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000000]); // [min, max] with only controlling the upper for simplicity
  const [sortOption, setSortOption] = useState("");
  const [stockFilter, setStockFilter] = useState("all"); // all | in | out
  const [typeFilter, setTypeFilter] = useState("all"); // all | new | classic

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // change this to show more/less per page

  // ----- Star renderer -----
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

  // ----- Filtered + sorted products -----
  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const filtered = diningProducts
      .filter((p) => (q ? p.name.toLowerCase().includes(q) : true))
      .filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1])
      .filter((p) => (stockFilter === "all" ? true : stockFilter === "in" ? p.stock : !p.stock))
      .filter((p) => (typeFilter === "all" ? true : p.type === typeFilter));

    if (sortOption === "low-high") return filtered.sort((a, b) => a.price - b.price);
    if (sortOption === "high-low") return filtered.sort((a, b) => b.price - a.price);
    if (sortOption === "rating") return filtered.sort((a, b) => b.rating - a.rating);
    return filtered;
  }, [searchQuery, priceRange, stockFilter, typeFilter, sortOption]);

  const totalPages = Math.max(1, Math.ceil(filteredProducts.length / itemsPerPage));

  const paginatedProducts = useMemo(() => {
    // Ensure currentPage is valid after filters change
    const safePage = Math.min(currentPage, totalPages);
    if (safePage !== currentPage) setCurrentPage(safePage);

    const startIndex = (safePage - 1) * itemsPerPage;
    return filteredProducts.slice(startIndex, startIndex + itemsPerPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filteredProducts, currentPage, itemsPerPage, totalPages]);

  // ----- Cart operations -----
  const addToCart = (product) => {
    if (!product.stock) return;
    setCart((prev) => {
      if (prev.find((it) => it.id === product.id)) return prev; // prevent duplicates
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((it) => it.id !== id));

  const clearCart = () => setCart([]);

  const updateQty = (id, qty) =>
    setCart((prev) => prev.map((it) => (it.id === id ? { ...it, qty: Math.max(1, qty) } : it)));

  const totalPrice = cart.reduce((sum, p) => sum + p.price * (p.qty || 1), 0);

  // ----- WhatsApp contact -----
  const openWhatsApp = (product) => {
    // Replace with your real designer phone number (international format, no plus)
    const phone = "2348100000000"; // example: Nigeria +2348100000000 -> use 234810...
    const msg = encodeURIComponent(
      `Hello! I'm interested in the ${product.name} (₦${product.price.toLocaleString()}). Please I want details.`
    );
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  // ----- Pagination UI helper: show numbers with "more" indicator -----
  const visiblePages = getVisiblePageNumbers(totalPages, currentPage, 5);

  // ----- Render -----
  return (
    <section className="bg-gray-50 py-28 px-4 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Dining Sets Collection</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore handcrafted dining sets — filter, browse, and speak with the designer directly.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white shadow-sm p-5 rounded-2xl mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-3">
            <Filter size={18} className="text-brand" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search product..."
              className="border border-gray-300 rounded-xl px-4 py-2 w-64 focus:ring-2 focus:ring-brand"
            />
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div>
              <label className="block text-xs text-gray-700 mb-1">Price (max)</label>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min="0"
                  max="3000000"
                  step="50000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="w-48 accent-brand"
                />
                <div className="text-sm text-gray-500">₦{priceRange[1].toLocaleString()}</div>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-1">Sort</label>
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2"
              >
                <option value="">Default</option>
                <option value="low-high">Price: Low → High</option>
                <option value="high-low">Price: High → Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-1">Stock</label>
              <select
                value={stockFilter}
                onChange={(e) => setStockFilter(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2"
              >
                <option value="all">All</option>
                <option value="in">In Stock</option>
                <option value="out">Out of Stock</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-gray-700 mb-1">Collection</label>
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="border border-gray-300 rounded-xl px-3 py-2"
              >
                <option value="all">All</option>
                <option value="new">New Collection</option>
                <option value="classic">Classic Collection</option>
              </select>
            </div>

            <button
              onClick={() => setShowCheckout(true)}
              className="ml-2 bg-brand text-white px-4 py-2 rounded-xl flex items-center gap-2 hover:bg-brand-hover"
            >
              <ShoppingCart size={16} /> Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedProducts.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-20">No products found.</div>
          ) : (
            paginatedProducts.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl shadow-sm overflow-hidden group relative"
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
                    <div className="flex gap-2">
                      <button
                        onClick={() => addToCart(p)}
                        disabled={!p.stock}
                        className={`px-4 py-2 rounded-full text-sm font-medium ${
                          p.stock ? "bg-brand text-white hover:bg-brand-hover" : "bg-gray-300 text-gray-500 cursor-not-allowed"
                        }`}
                      >
                        Add to Cart
                      </button>

                      <button
                        onClick={() => openWhatsApp(p)}
                        className="px-4 py-2 border border-brand text-brand rounded-full text-sm font-medium hover:bg-brand hover:text-white"
                      >
                        Chat Designer
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mt-8">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="px-3 py-2 rounded-md border disabled:opacity-50 hover:bg-gray-100"
          >
            Prev
          </button>

          {/* Show page numbers (max 5 at a time), show '...' when there are more */}
          {visiblePages[0] > 1 && (
            <>
              <button onClick={() => setCurrentPage(1)} className="px-3 py-2 rounded-md border hover:bg-gray-100">
                1
              </button>
              {visiblePages[0] > 2 && <div className="px-2">...</div>}
            </>
          )}

          {visiblePages.map((num) => (
            <button
              key={num}
              onClick={() => setCurrentPage(num)}
              className={`px-3 py-2 rounded-md border ${currentPage === num ? "bg-brand text-white" : "hover:bg-gray-100"}`}
            >
              {num}
            </button>
          ))}

          {visiblePages[visiblePages.length - 1] < totalPages && (
            <>
              {visiblePages[visiblePages.length - 1] < totalPages - 1 && <div className="px-2">...</div>}
              <button onClick={() => setCurrentPage(totalPages)} className="px-3 py-2 rounded-md border hover:bg-gray-100">
                {totalPages}
              </button>
            </>
          )}

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="px-3 py-2 rounded-md border disabled:opacity-50 hover:bg-gray-100"
          >
            Next
          </button>
        </div>

        {/* Checkout button CTA (if you want a persistent footer) */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowCheckout(true)}
            className="bg-brand text-white px-6 py-3 rounded-2xl font-medium hover:bg-brand-hover"
          >
            Proceed to Checkout ({cart.length})
          </button>
        </div>
      </div>

      {/* ---------------- Product Modal ---------------- */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-white w-full h-full md:h-[85vh] max-w-6xl overflow-auto relative rounded-xl flex flex-col lg:flex-row">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 bg-gray-100 hover:bg-gray-200 p-3 rounded-full z-10"
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
                    className={`w-24 h-20 object-cover rounded-lg cursor-pointer border-2 ${activeImage === i ? "border-gray-600 scale-105" : "border-transparent hover:scale-105"}`}
                  />
                ))}
              </div>
            </div>

            {/* Right: Details */}
            <div className="lg:w-1/2 w-full p-6">
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

              <div className="mt-6 flex gap-3 items-center">
                <button
                  onClick={() => addToCart(selectedProduct)}
                  disabled={!selectedProduct.stock}
                  className={`px-5 py-3 rounded-full text-sm font-medium ${selectedProduct.stock ? "bg-brand text-white hover:bg-brand-hover" : "bg-gray-300 text-gray-500 cursor-not-allowed"}`}
                >
                  {selectedProduct.stock ? "Add to Cart" : "Out of Stock"}
                </button>

                <button
                  onClick={() => openWhatsApp(selectedProduct)}
                  className="px-5 py-3 border border-brand text-brand rounded-full text-sm font-medium hover:bg-brand hover:text-white"
                >
                  Reach Designer
                </button>

                <button
                  onClick={() => setShowCheckout(true)}
                  className="ml-auto px-4 py-2 bg-gray-100 rounded-xl text-sm hover:bg-gray-200"
                >
                  Checkout Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------------- Checkout Modal ---------------- */}
      {showCheckout && (
        <div className="fixed inset-0 z-60 bg-black/70 flex items-center justify-center p-6">
          <div className="bg-white w-full max-w-3xl rounded-xl overflow-auto p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold">Checkout Preview</h3>
              <div className="flex items-center gap-2">
                <button onClick={() => setShowCheckout(false)} className="px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200">
                  Close
                </button>
                <button onClick={() => { clearCart(); setShowCheckout(false); }} className="px-3 py-2 rounded-md bg-red-100 text-red-700 hover:bg-red-200">
                  Clear Cart
                </button>
              </div>
            </div>

            {cart.length === 0 ? (
              <div className="text-center text-gray-600 py-10">Your cart is empty.</div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 border-b pb-4">
                      <img src={item.images[0]} alt={item.name} className="w-20 h-16 object-cover rounded-md" />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold">{item.name}</h4>
                          <div className="font-medium">₦{(item.price * (item.qty || 1)).toLocaleString()}</div>
                        </div>
                        <div className="text-sm text-gray-600">{item.material}</div>

                        <div className="mt-2 flex items-center gap-2">
                          <label className="text-sm">Qty</label>
                          <input
                            type="number"
                            value={item.qty || 1}
                            min={1}
                            onChange={(e) => updateQty(item.id, Number(e.target.value))}
                            className="w-20 border rounded-md px-2 py-1"
                          />
                          <button onClick={() => removeFromCart(item.id)} className="ml-4 text-sm text-red-600">Remove</button>
                          <button onClick={() => openWhatsApp(item)} className="ml-auto text-sm text-brand border border-brand px-3 py-1 rounded-md hover:bg-brand hover:text-white">Contact Designer</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Subtotal</p>
                    <div className="text-2xl font-semibold">₦{totalPrice.toLocaleString()}</div>
                  </div>

                  <div className="flex items-center gap-3">
                    <button onClick={() => setShowCheckout(false)} className="px-4 py-2 rounded-md border hover:bg-gray-100">Continue Shopping</button>
                    <button
                      onClick={() => {
                        // placeholder for integration (payment or order)
                        const orderSummary = encodeURIComponent(
                          `Order request:\nItems: ${cart.map((c) => `${c.name} (₦${c.price.toLocaleString()}) x${c.qty || 1}`).join(", ")}\nTotal: ₦${totalPrice.toLocaleString()}`
                        );
                        // open whatsapp to place order
                        const phone = "2348100000000";
                        window.open(`https://wa.me/${phone}?text=${orderSummary}`, "_blank");
                      }}
                      className="px-5 py-2 rounded-md bg-brand text-white hover:bg-brand-hover"
                    >
                      Place Order via WhatsApp
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
