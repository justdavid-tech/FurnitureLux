// src/pages/bedroom.jsx
import React, { useState, useMemo } from "react";
import { Star, StarHalf, X, Filter, ShoppingCart } from "lucide-react";

// ---------------------- Sample Product Data ----------------------
const bedroomProducts = [
  {
    id: 1,
    name: "Imperial Monarch Bedroom Suite",
    price: 3850000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Bedroom",
    material: "Solid Brazilian Rosewood & Italian Marble",
    description: "The Imperial Monarch Bedroom Suite represents the absolute pinnacle of luxury sleeping accommodations, a monumental collection that transforms any bedroom into a royal chamber worthy of heads of state. The centerpiece is an enormous king-sized bed measuring a majestic 2.5 meters wide and 2.8 meters long, constructed from centuries-old Brazilian rosewood trees that were carefully selected for their identical grain patterns and rich, deep coloration. The massive headboard stands an impressive 2.4 meters tall, featuring hand-carved floral motifs and architectural elements that required over 500 hours of master craftsmanship to complete. The bed frame incorporates a revolutionary suspension system using aircraft-grade cables and reinforced steel supports capable of supporting over 900 kilograms while providing perfect stability. The matching wardrobe stands as a fortress of storage, measuring 3.2 meters wide and 2.6 meters tall with twelve individual compartments, each featuring custom lighting, cedar lining, and security locking mechanisms. This suite doesn't just provide sleeping quarters—it creates an environment of unparalleled luxury and comfort that will be admired for generations.",
    includes: ["1 Monarch King Bed (250cm x 280cm)", "1 Massive Wardrobe (320cm x 260cm)", "2 Nightstands", "Dressing Table with Mirror", "Bench", "Premium Care Kit", "Certificate of Authenticity"],
    images: ["/asset/images/b1.jpg", "/asset/images/bedroom2.jpg", "/asset/images/bedroom3.jpg"],
  },
  {
    id: 2,
    name: "Titanic Oak Fortress Bedroom Collection",
    price: 2950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Bedroom",
    material: "Century-Old European Oak & Wrought Iron",
    description: "Prepare to be overwhelmed by the sheer magnitude and presence of the Titanic Oak Fortress Bedroom Collection, a suite of bedroom furniture built on a scale rarely seen outside of historic castles and palaces. The monumental bed frame is constructed from specially harvested European oak trees that were aged for eight years to achieve perfect stability, featuring a headboard that reaches an astonishing 2.6 meters in height and incorporates medieval-inspired ironwork weighing over 120 kilograms. The bed's base consists of twelve individual support legs each measuring 15 centimeters in diameter, providing structural integrity capable of supporting weights exceeding 1,200 kilograms. The matching armoire stands as a veritable wall of storage, measuring 3.5 meters wide and 2.8 meters tall with twenty separate compartments including specialized sections for formal wear, casual clothing, and accessories. Each piece in this collection features hand-forged iron hardware, triple-reinforced joinery, and a 12-step finishing process that enhances the wood's natural beauty while providing unprecedented protection. This is bedroom furniture that makes a statement of permanent, unshakable quality.",
    includes: ["1 Fortress King Bed (260cm x 270cm)", "1 Grand Armoire (350cm x 280cm)", "2 Substantial Nightstands", "Storage Chest", "Full-Length Mirror", "Lifetime Structural Warranty"],
    images: ["/asset/images/b2.jpg", "/asset/images/bedroom5.jpg", "/asset/images/bedroom6.jpg"],
  },
  {
    id: 3,
    name: "Celestial Granite Bedroom Sanctuary",
    price: 4650000,
    rating: 5.0,
    stock: true,
    type: "new",
    category: "Bedroom",
    material: "Black Galaxy Granite & Bronze Framework",
    description: "The Celestial Granite Bedroom Sanctuary represents a quantum leap in luxury bedroom design, featuring furniture pieces that blend geological magnificence with architectural brilliance in a collection of truly epic proportions. The bed frame alone is a masterpiece of engineering and natural beauty, incorporating slabs of Black Galaxy granite that weigh nearly 400 kilograms in the headboard and side panels, each piece selected for its dramatic crystal formations that sparkle like a starry night sky. The bed measures a massive 2.7 meters wide with a headboard reaching 2.5 meters high, supported by a bronze framework that required specialized foundry techniques to create. The matching dresser stretches an impressive 2.8 meters in length, featuring nine deep drawers with silent closing mechanisms and integrated lighting that illuminates the granite surfaces from within. Every piece in this collection undergoes a 25-step quality control process and requires a team of four specialists for proper installation. This sanctuary doesn't just provide sleeping space—it creates an environment where luxury, comfort, and natural beauty coexist on a monumental scale.",
    includes: ["1 Sanctuary King Bed (270cm x 290cm)", "1 Granite Dresser (280cm x 120cm)", "2 Nightstands with Granite Tops", "Wardrobe Unit", "Matching Vanity", "White Glove Installation"],
    images: ["/asset/images/b3.jpg", "/asset/images/bedroom8.jpg", "/asset/images/bedroom9.jpg"],
  },
  {
    id: 4,
    name: "Regal Walnut Dynasty Bedroom Suite",
    price: 3250000,
    rating: 4.9,
    stock: false,
    type: "classic",
    category: "Bedroom",
    material: "Black American Walnut & Brass Inlays",
    description: "The Regal Walnut Dynasty Bedroom Suite stands as a testament to what happens when unlimited resources meet uncompromising craftsmanship in the pursuit of creating the world's most magnificent bedroom furniture. The centerpiece is an enormous California king bed measuring 2.8 meters wide and 3.1 meters long, crafted from sixteen individual boards of premium black American walnut that were book-matched to create a continuous grain pattern across the massive headboard that stretches 2.6 meters high. The bed's substructure incorporates a revolutionary engineering design using titanium reinforcements hidden within traditional joinery, allowing it to support weights exceeding 1,100 kilograms while maintaining elegant, slender profiles. The matching wardrobe system consists of three separate units that combine to form a storage wall measuring 4.2 meters wide, featuring twenty-four individual compartments with custom dividers, automatic lighting, and humidity control systems. Each piece in this collection represents months of dedicated craftsmanship and embodies the perfect marriage of traditional woodworking techniques with space-age materials science.",
    includes: ["1 Dynasty California King Bed (280cm x 310cm)", "3-Piece Wardrobe System (420cm combined)", "2 Executive Nightstands", "Storage Bench", "Dressing Table", "Digital Care System"],
    images: ["/asset/images/b4.jpg", "/asset/images/bedroom11.jpg", "/asset/images/bedroom12.jpg"],
  },
  {
    id: 5,
    name: "Olympian Stone Bedroom Colossus",
    price: 4150000,
    rating: 4.7,
    stock: true,
    type: "new",
    category: "Bedroom",
    material: "Fossil Stone & Stainless Steel Reinforcement",
    description: "Behold the Olympian Stone Bedroom Colossus, a bedroom suite of such monumental proportions and breathtaking presence that it redefines the very concept of luxury sleeping accommodations. The bed features a headboard constructed from a single slab of natural fossil stone containing actual prehistoric ammonites and sea creatures preserved for millions of years, now transformed into a functional work of art measuring 2.7 meters wide and requiring a custom-built steel frame capable of supporting its 650-kilogram weight. The bed frame incorporates a medical-grade suspension system originally developed for luxury hospitals, featuring sixteen individual support zones that can be customized for firmness and provide perfect spinal alignment regardless of sleeping position. The matching storage wall stretches an awe-inspiring 3.8 meters in length and features eighteen individual compartments with automatic opening mechanisms, integrated lighting, and security systems that would be appropriate for a high-end jewelry store. This collection represents the ultimate investment in restorative sleep, combining natural history with cutting-edge comfort technology in a package so substantial it requires structural assessment of your flooring before installation.",
    includes: ["1 Colossus King Bed (270cm x 280cm)", "1 Storage Wall Unit (380cm x 240cm)", "2 Stone Top Nightstands", "Media Console", "Custom Lighting System", "Structural Assessment Service"],
    images: ["/asset/images/b5.jpg", "/asset/images/bedroom14.jpg", "/asset/images/bedroom15.jpg"],
  },
  {
    id: 6,
    name: "Victorian Empire Bedroom Collection",
    price: 3750000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Bedroom",
    material: "Cherry Wood & Gold Leaf Accents",
    description: "The Victorian Empire Bedroom Collection transports you to an era of unparalleled opulence and grandeur, meticulously crafted to replicate the bedroom suites found in European palaces while incorporating modern structural engineering for unprecedented durability and comfort. The magnificent bed stretches an impressive 2.9 meters wide with a headboard reaching a cathedral-like 2.7 meters in height, featuring elaborate carvings inspired by Victorian architecture and hand-applied gold leaf detailing that required over 800 hours of artisan work to complete. The matching wardrobe stands as a fortress of storage, measuring 3.6 meters wide and 2.7 meters tall with twenty-eight individual compartments including specialized sections for formal wear, accessories, and valuables. Each piece in this collection features balloon-style carvings, deeply tufted velvet inserts, and frames reinforced with steel cores to ensure they can withstand generations of use while maintaining their majestic appearance. This collection doesn't just provide sleeping and storage solutions—it creates an experience, transforming everyday routines into royal ceremonies and making every night's sleep feel like a state occasion of historical significance.",
    includes: ["1 Empire King Bed (290cm x 300cm)", "1 Grand Wardrobe (360cm x 270cm)", "2 Ornate Nightstands", "Dressing Table with Mirror", "Storage Ottoman", "Historical Style Guide"],
    images: ["/asset/images/b6.jpg", "/asset/images/bedroom17.jpg", "/asset/images/bedroom18.jpg"],
  },
  {
    id: 7,
    name: "Modern Titan Bedroom Fortress",
    price: 2950000,
    rating: 4.6,
    stock: true,
    type: "new",
    category: "Bedroom",
    material: "Triple-Laminated Glass & Carbon Fiber",
    description: "The Modern Titan Bedroom Fortress represents the ultimate achievement in contemporary bedroom furniture engineering, featuring pieces constructed from space-age materials that create an environment of stunning visual impact and unbelievable structural integrity. The bed frame is a technological marvel featuring a headboard made from three layers of industrial-strength glass laminated together to create a surface of crystal clarity measuring 2.6 meters wide, supported by a revolutionary carbon fiber substructure that remains virtually invisible while providing support for over 800 kilograms. The matching storage system consists of four individual units that combine to form a seamless wall of storage measuring 4.5 meters wide, featuring thirty-two individual compartments with automatic opening, integrated lighting, and climate control systems that protect valuable clothing items. The entire collection features a floating aesthetic that creates an illusion of space while its substantial construction provides undeniable presence, making it perfect for modern interiors where both style and substance are equally valued. This is bedroom furniture that pushes the boundaries of what's possible with modern materials while delivering uncompromising performance and breathtaking beauty.",
    includes: ["1 Titan King Bed (260cm x 280cm)", "4-Piece Storage System (450cm combined)", "2 Floating Nightstands", "Media Wall Unit", "Integrated Lighting System", "10-Year Performance Warranty"],
    images: ["/asset/images/b7.jpg", "/asset/images/bedroom20.jpg", "/asset/images/bedroom21.jpg"],
  },
  {
    id: 8,
    name: "Rustic Mountain King Bedroom Suite",
    price: 2850000,
    rating: 4.7,
    stock: false,
    type: "classic",
    category: "Bedroom",
    material: "Reclaimed Barn Wood & Iron Hardware",
    description: "The Rustic Mountain King Bedroom Suite channels the raw power and untamed beauty of nature through furniture of truly epic proportions and character that brings the soul of the wilderness into your sleeping environment. The massive bed is constructed from reclaimed barn wood beams that are over 200 years old, each bearing the marks of time and history that tell stories of agricultural heritage across its 2.8-meter width. The headboard stands an impressive 2.4 meters tall and features a live-edge design that preserves the natural contours of the original trees, with a thickness of 15 centimeters that emphasizes its substantial presence and connection to nature. The base consists of four industrial-sized iron supports weighing 75 kilograms each, forged using traditional blacksmithing techniques and featuring custom scrollwork that complements the wood's rustic character. The matching storage wall continues the theme of substantial craftsmanship, measuring 3.9 meters wide and featuring eighteen individual compartments with custom dividers, iron hardware, and integrated lighting that highlights the wood's rich patina. This collection brings the authentic spirit of the forest into your bedroom with furniture built to last centuries.",
    includes: ["1 Mountain King Bed (280cm x 290cm)", "1 Storage Wall (390cm x 250cm)", "2 Rustic Nightstands", "Storage Trunk", "Full-Length Mirror", "Wood Preservation Treatment"],
    images: ["/asset/images/bedroom22.jpg", "/asset/images/bedroom23.jpg", "/asset/images/bedroom24.jpg"],
  },
  {
    id: 9,
    name: "Art Deco Titanium Bedroom Majesty",
    price: 4250000,
    rating: 4.9,
    stock: true,
    type: "new",
    category: "Bedroom",
    material: "Macassar Ebony & Titanium Framework",
    description: "The Art Deco Titanium Bedroom Majesty represents a bold fusion of rare materials and architectural design that creates bedroom furniture of museum-quality significance and substantial physical presence that transforms any sleeping space into a gallery-worthy environment. The bed features a headboard crafted from consecutive cuts of Macassar ebony, arranged in a dramatic geometric pattern that radiates from the center and showcases the wood's striking natural stripes across its 2.7-meter width. Beneath this exquisite surface lies a framework of aerospace-grade titanium that provides incredible strength while allowing for surprisingly slender profiles that defy conventional engineering expectations. The matching storage system consists of five individual units that combine to create a seamless wall of elegance measuring 4.8 meters wide, featuring thirty-six individual compartments with automatic opening, custom lighting, and security systems worthy of a luxury boutique. Each piece in this collection incorporates hidden suspension systems, dynamic support mechanisms, and artisan details that required over 600 hours of skilled labor per item to complete. This suite represents the pinnacle of both art and function in bedroom furniture design.",
    includes: ["1 Majesty King Bed (270cm x 290cm)", "5-Piece Storage System (480cm combined)", "2 Sculptural Nightstands", "Vanity Unit", "Bench", "Museum-Quality Certification"],
    images: ["/asset/images/bedroom25.jpg", "/asset/images/bedroom26.jpg", "/asset/images/bedroom27.jpg"],
  },
  {
    id: 10,
    name: "Gothic Cathedral Bedroom Throne Suite",
    price: 3950000,
    rating: 4.8,
    stock: true,
    type: "classic",
    category: "Bedroom",
    material: "Oak & Leaded Glass Inserts",
    description: "The Gothic Cathedral Bedroom Throne Suite draws inspiration from medieval ecclesiastical furniture, scaled to magnificent proportions and built with techniques that haven't changed in centuries to create a sleeping environment of awe-inspiring presence and spiritual grandeur. The monumental bed stretches an impressive 3 meters wide with a headboard reaching a cathedral-like 2.8 meters in height, featuring carved spires, leaded glass inserts, and architectural elements that required over 1,200 hours of master craftsmanship to complete. The matching armoire stands as a veritable fortress of storage, measuring 3.8 meters wide and 2.7 meters tall with twenty-four individual compartments including specialized sections for formal wear, liturgical vestments, and precious items. Each piece in this collection features intricate tracery patterns, hand-forged iron hardware, and a 15-step finishing process that enhances the wood's natural beauty while providing protection for centuries of use. The sheer scale and presence of this suite transforms any bedroom into a hall worthy of royalty and spiritual contemplation, with each piece serving as both functional furniture and standalone artwork that celebrates centuries of woodworking tradition and architectural brilliance.",
    includes: ["1 Cathedral King Bed (300cm x 310cm)", "1 Grand Armoire (380cm x 270cm)", "2 Ornate Nightstands", "Prayer Bench", "Full-Length Mirror", "Historical Documentation"],
    images: ["/asset/images/bedroom28.jpg", "/asset/images/bedroom29.jpg", "/asset/images/bedroom30.jpg"],
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
    const filtered = bedroomProducts
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
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">Bedroom Sets Collection</h1>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Explore handcrafted bedroom sets — filter, browse, and speak with the designer directly.
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
