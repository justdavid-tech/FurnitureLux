// src/pages/sofa.jsx
import React, { useState, useMemo } from "react";
import { Star, StarHalf, X, Filter, ShoppingCart } from "lucide-react";

// ---------------------- Sample Product Data ----------------------
const sofaProducts = [
  {
    id: 1,
    name: "Monarch Sectional",
    price: 2850000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Sofa",
    material: "Solid Brazilian Mahogany & Italian Top-Grain Leather",
    description: "The Imperial Monarch Sectional Throne represents the absolute zenith of luxury seating, a monumental sofa collection that transforms any living space into a palatial lounge worthy of royalty. This colossal U-shaped sectional measures an astonishing 4.8 meters in width and 3.2 meters in depth, featuring a frame constructed from centuries-old Brazilian mahogany trees that were specially selected for their unparalleled density and grain patterns. The seating area is upholstered in full-grain Italian leather that underwent a 28-day tanning process, creating a surface that grows more beautiful with age while providing exceptional durability. Each of the twelve individual seat cushions is filled with a proprietary blend of goose down, memory foam, and responsive latex that creates a cloud-like sitting experience while maintaining perfect support for hours of comfortable lounging. The back cushions stand an impressive 90 centimeters tall and feature hand-tied spring systems that provide customized support based on seating position. This isn't merely a sofa—it's a fortress of comfort capable of seating twelve adults in absolute luxury, with a total weight exceeding 450 kilograms that speaks to its substantial construction and investment-grade quality.",
    includes: ["1 Main Sectional Unit (480cm x 320cm)", "4 Ottoman Pieces", "2 Armrest Covers", "Leather Care Kit", "Certificate of Authenticity", "Professional Assembly"],
    images: ["/asset/images/s1.jpg", "/asset/images/sofa2.jpg", "/asset/images/sofa3.jpg"],
  },
  {
    id: 2,
    name: "Chesterfield Fortress",
    price: 1950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Sofa",
    material: "Century-Old European Oak & Button-Tufted Leather",
    description: "Prepare to be overwhelmed by the sheer magnitude and timeless elegance of the Titanic Oak Chesterfield Fortress, a sofa of such substantial proportions and masterful craftsmanship that it serves as the centerpiece of any room it occupies. This massive three-seater measures an impressive 2.8 meters in width with a seat depth of 1.1 meters, constructed from specially harvested European oak that was aged for nine years to achieve perfect stability and resistance to warping. The iconic chesterfield design features over 480 individual hand-tufted buttons that required 120 hours of skilled artisan work to complete, each button precisely spaced and tensioned to create the perfect diamond pattern across the entire surface. The frame incorporates sixteen individual support springs made from tempered steel, each capable of supporting 150 kilograms independently while working in harmony to provide unparalleled seating comfort. The arms stand 75 centimeters tall and are reinforced with steel cores, making them substantial enough to serve as auxiliary seating during large gatherings. Weighing in at 380 kilograms, this sofa doesn't just provide seating—it makes a permanent statement of quality, comfort, and uncompromising luxury that will be admired for generations.",
    includes: ["1 Chesterfield Sofa (280cm x 110cm)", "2 Matching Throw Pillows", "Leather Maintenance Kit", "Frame Warranty Certificate", "Custom Cover Options"],
    images: ["/asset/images/s2.jpg", "/asset/images/sofa5.jpg", "/asset/images/sofa6.jpg"],
  },
  {
    id: 3,
    name: "Celestial Granite Recliner Sanctuary",
    price: 3650000,
    rating: 5.0,
    stock: true,
    type: "new",
    category: "Sofa",
    material: "Black Galaxy Granite Bases & Premium Suede Upholstery",
    description: "The Celestial Granite Recliner Sanctuary represents a revolutionary advancement in luxury seating technology, featuring a massive modular recliner system that combines geological magnificence with space-age comfort in a package of truly epic proportions. The centerpiece is a seven-piece sectional that measures 5.2 meters in its extended configuration, featuring individual recliner seats that incorporate medical-grade articulation mechanisms capable of assuming eighteen different positions from upright reading to fully flat sleeping. Each seat base is crafted from solid Black Galaxy granite slabs weighing 85 kilograms apiece, providing unprecedented stability while showcasing the stone's natural crystal formations that sparkle like a starry night sky. The upholstery consists of a revolutionary suede material woven with silver threads for temperature regulation and stain resistance, over cushions filled with a NASA-developed memory foam that contours perfectly to each user's body shape. The integrated technology includes heating elements, massage systems with twelve different programs, USB charging ports, and individual climate control zones. Weighing over 600 kilograms in total, this sanctuary doesn't just provide seating—it creates a personalized comfort environment that adapts to every user's needs while making a breathtaking visual statement.",
    includes: ["7-Piece Modular Sectional", "4 Granite Base Units", "Remote Control System", "Premium Suede Cleaner", "Technology Manual", "White Glove Installation"],
    images: ["/asset/images/s3.jpg", "/asset/images/sofa8.jpg", "/asset/images/sofa9.jpg"],
  },
  {
    id: 4,
    name: "Regal Walnut Dynasty Chaise Lounge",
    price: 2250000,
    rating: 4.9,
    stock: false,
    type: "classic",
    category: "Sofa",
    material: "Black American Walnut & Velvet Upholstery",
    description: "The Regal Walnut Dynasty Chaise Lounge stands as a testament to what happens when unlimited resources meet uncompromising craftsmanship in the pursuit of creating the world's most magnificent reclining furniture. This enormous chaise measures 2.4 meters in length and 1.2 meters in width, featuring a frame constructed from sixteen individual boards of premium black American walnut that were book-matched to create a continuous grain pattern across the entire visible surface. The reclining mechanism incorporates a revolutionary hydraulic system that allows for infinite positioning between upright and fully flat, with silent operation and smooth motion that feels weightless regardless of the user's size. The upholstery consists of triple-woven velvet that changes color depending on viewing angle, over cushions filled with a proprietary blend of goose down, memory foam, and responsive latex that creates the perfect balance of softness and support. The arms feature hand-carved floral motifs that required over 80 hours of master craftsmanship to complete, while the legs are reinforced with titanium cores hidden within the traditional woodworking. Weighing 320 kilograms, this chaise doesn't just provide a place to recline—it offers an experience of absolute luxury and comfort that transforms simple relaxation into a royal indulgence.",
    includes: ["1 Dynasty Chaise Lounge (240cm x 120cm)", "2 Velvet Throw Pillows", "Hydraulic System Manual", "Velvet Care Kit", "Custom Positioning Guide"],
    images: ["/asset/images/s4.jpg", "/asset/images/sofa11.jpg", "/asset/images/sofa12.jpg"],
  },
  {
    id: 5,
    name: "Olympian Stone Modular Colossus",
    price: 3150000,
    rating: 4.7,
    stock: true,
    type: "new",
    category: "Sofa",
    material: "Fossil Stone Accents & Performance Fabric",
    description: "Behold the Olympian Stone Modular Colossus, a sofa system of such monumental proportions and innovative design that it redefines the very concept of modular seating for the modern luxury home. This massive collection consists of eleven individual pieces that can be configured in over forty different arrangements, with the largest configuration measuring an earth-shattering 6.8 meters in length. Each module features accent panels crafted from natural fossil stone containing actual prehistoric ammonites and sea creatures preserved for millions of years, now transformed into functional art pieces that tell geological stories across their polished surfaces. The seating areas are upholstered in a revolutionary performance fabric that is waterproof, stain-resistant, and temperature-regulating while maintaining the soft hand-feel of premium velvet. The frames are constructed from aircraft-grade aluminum hidden within traditional profiles, providing incredible strength while keeping each module manageable during reconfiguration. With a total weight exceeding 850 kilograms when fully assembled, this colossus doesn't just provide flexible seating—it offers a transformative furniture system that adapts to any occasion while making a breathtaking statement of natural beauty and engineering excellence.",
    includes: ["11 Modular Pieces", "6 Fossil Stone Panels", "Configuration Guide", "Fabric Protection Kit", "Assembly Tools", "Layout Planning Service"],
    images: ["/asset/images/s5.jpg", "/asset/images/sofa14.jpg", "/asset/images/sofa15.jpg"],
  },
  {
    id: 6,
    name: "Victorian Empire Tufted Symphony",
    price: 2750000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Sofa",
    material: "Cherry Wood & Silk Blend Upholstery",
    description: "The Victorian Empire Tufted Symphony transports you to an era of unparalleled opulence and grandeur through a sofa collection that replicates the seating furniture found in European royal palaces while incorporating modern comfort technology for unprecedented luxury. This massive three-piece set includes a 3.2-meter wide main sofa and two matching armchairs, all featuring frames constructed from specially selected cherry wood that was hand-carved with architectural elements inspired by Victorian design principles. The tufted backs feature over 650 individual buttons arranged in elaborate floral patterns that required 180 hours of skilled artisan work to complete, each button precisely tensioned to create the perfect diamond pattern across the silk blend upholstery. The seat cushions are filled with a revolutionary combination of hand-tied springs, horsehair, and memory foam that provides both traditional support and modern comfort. The arms stand 80 centimeters tall and are wide enough to serve as occasional tables, with reinforced structures capable of supporting significant weight. Weighing 420 kilograms for the complete set, this symphony doesn't just provide seating—it creates an environment of historical elegance and uncompromising comfort that makes every sitting experience feel like a royal audience.",
    includes: ["1 Main Sofa (320cm x 100cm)", "2 Matching Armchairs", "6 Silk Throw Pillows", "Wood Care Products", "Upholstery Maintenance Guide"],
    images: ["/asset/images/s6.jpg", "/asset/images/sofa17.jpg", "/asset/images/sofa18.jpg"],
  },
  {
    id: 7,
    name: "Modern Titan Suspension Cloud",
    price: 1950000,
    rating: 4.6,
    stock: true,
    type: "new",
    category: "Sofa",
    material: "Carbon Fiber Frame & Floating Upholstery",
    description: "The Modern Titan Suspension Cloud represents the ultimate achievement in contemporary sofa design, featuring a revolutionary floating construction that creates the visual illusion of weightlessness while providing substantial comfort and unparalleled structural integrity. This massive sectional measures 4.5 meters in its L-shaped configuration and appears to float 15 centimeters above the floor thanks to a hidden carbon fiber framework that provides incredible strength while remaining virtually invisible. The seating surfaces are upholstered in a technical fabric that incorporates NASA-developed aerogel insulation for temperature regulation, over cushions filled with a proprietary foam that is 30% lighter than traditional materials while providing superior support and durability. The frame incorporates a suspension system originally developed for high-performance vehicles, with sixteen individual dampeners that absorb movement and provide perfect stability regardless of how the seating is used. Despite its substantial size and capacity to seat ten adults comfortably, the entire unit weighs only 280 kilograms due to the advanced materials used throughout its construction. This cloud doesn't just provide seating—it offers a glimpse into the future of furniture design where minimal visual weight meets maximal comfort and functionality.",
    includes: ["1 Floating Sectional (450cm x 280cm)", "4 Suspension Base Units", "Technical Fabric Cleaner", "Frame Adjustment Tools", "10-Year Performance Warranty"],
    images: ["/asset/images/s7.jpg", "/asset/images/sofa20.jpg", "/asset/images/sofa21.jpg"],
  },
  {
    id: 8,
    name: "Rustic Mountain King Lodge Throne",
    price: 1850000,
    rating: 4.7,
    stock: false,
    type: "classic",
    category: "Sofa",
    material: "Reclaimed Barn Wood & Leather Upholstery",
    description: "The Rustic Mountain King Lodge Throne channels the raw power and untamed beauty of nature through a sofa of truly epic proportions and character that brings the authentic spirit of the wilderness into your living space. This massive three-seater measures 2.9 meters in width and features a frame constructed from reclaimed barn wood beams that are over 200 years old, each bearing the marks of time and history that tell stories of agricultural heritage across its substantial surface. The back and seat cushions are upholstered in full-grain leather that was vegetable-tanned using traditional methods, creating a surface that develops a rich patina over years of use while providing exceptional durability and comfort. The arms are constructed from single pieces of oak measuring 25 centimeters in thickness, with live edges that preserve the natural contours of the original trees and emphasize the sofa's connection to nature. The frame incorporates fourteen individual support springs made from hand-forged iron, each capable of supporting 180 kilograms while providing the perfect balance of firmness and give. Weighing 380 kilograms, this throne doesn't just provide seating—it serves as a monument to natural beauty and traditional craftsmanship that will remain a family heirloom for generations to come.",
    includes: ["1 Lodge Sofa (290cm x 115cm)", "3 Leather Throw Pillows", "Wood Preservation Treatment", "Leather Care Kit", "Historical Documentation"],
    images: ["/asset/images/s8.jpg", "/asset/images/sofa23.jpg", "/asset/images/sofa24.jpg"],
  },
  {
    id: 9,
    name: "Art Deco Titanium Curved Majesty",
    price: 3250000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Sofa",
    material: "Macassar Ebony & Titanium Framework",
    description: "The Art Deco Titanium Curved Majesty represents a bold fusion of rare materials and architectural design that creates a sofa of museum-quality significance and substantial physical presence that transforms any living space into a gallery-worthy environment. This spectacular curved sofa measures 3.8 meters along its arc and features a frame constructed from consecutive cuts of Macassar ebony arranged in a dramatic geometric pattern that showcases the wood's striking natural stripes across its entire length. The supporting structure consists of aerospace-grade titanium that provides incredible strength while allowing for surprisingly slender profiles that defy conventional engineering expectations and create the illusion of floating above the floor. The seating area is upholstered in a custom-woven fabric that incorporates actual silver and gold threads in its pattern, over cushions filled with a revolutionary gel-infused memory foam that provides perfect support while regulating temperature throughout extended sitting sessions. Each element of this masterpiece required over 400 hours of skilled labor to complete, with particular attention paid to the seamless integration of traditional woodworking and space-age materials. Weighing 350 kilograms, this majesty doesn't just provide seating—it serves as a functional work of art that celebrates the perfect marriage of historical design principles and cutting-edge material science.",
    includes: ["1 Curved Sofa (380cm arc length)", "4 Geometric Throw Pillows", "Titanium Care Products", "Fabric Protection Treatment", "Museum-Quality Certification"],
    images: ["/asset/images/s9.jpg", "/asset/images/sofa26.jpg", "/asset/images/sofa27.jpg"],
  },
  {
    id: 10,
    name: "Gothic Cathedral Throne Sofa",
    price: 2950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Sofa",
    material: "Oak & Velvet Upholstery",
    description: "The Gothic Cathedral Throne Sofa draws inspiration from medieval ecclesiastical furniture, scaled to magnificent proportions and built with techniques that haven't changed in centuries to create a seating experience of awe-inspiring presence and spiritual grandeur. This massive two-seater measures 2.2 meters in width with a back that reaches a cathedral-like 1.4 meters in height, featuring carved spires, architectural tracery, and leaded glass inserts that required over 600 hours of master craftsmanship to complete. The frame is constructed from specially selected oak that was aged for seven years to achieve perfect stability, with joinery techniques that haven't changed since the Middle Ages and provide structural integrity capable of supporting weights exceeding 500 kilograms. The seat and back are upholstered in ecclesiastical purple velvet that was custom-woven to replicate historical textiles, over cushions filled with a combination of horsehair, wool, and down that provides both traditional firmness and modern comfort. The arms are wide enough to serve as auxiliary seating and feature carved details inspired by cathedral architecture, with reinforced structures that make them substantial enough for practical use. Weighing 320 kilograms, this throne doesn't just provide seating—it creates an environment of historical significance and spiritual contemplation that transforms ordinary relaxation into an experience of timeless elegance and grandeur.",
    includes: ["1 Throne Sofa (220cm x 140cm)", "2 Velvet Floor Cushions", "Wood Care Products", "Velvet Cleaning Solution", "Historical Reference Materials"],
    images: ["/asset/images/s10.jpg", "/asset/images/sofa29.jpg", "/asset/images/sofa30.jpg"],
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
    const filtered = sofaProducts
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
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Sofa Sets Collection</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore handcrafted sofa sets, filter, browse, and speak with the designer directly.
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
