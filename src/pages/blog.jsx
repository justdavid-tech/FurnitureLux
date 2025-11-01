import { useEffect, useState } from "react";
import { client, urlFor } from "../lib/sanityClient";
import { Link } from "react-router-dom";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  const [loading, setLoading] = useState(true);

  // ✅ Fetch categories
  useEffect(() => {
    client
      .fetch(`*[_type == "category"] | order(title asc)`)
      .then((data) => {
        setCategories(data);
        console.log("📦 Categories loaded:", data);
        // Debug: Check category structure
        data.forEach(cat => {
          console.log(`Category: ${cat.title}, Slug: ${cat.slug?.current}`);
        });
      })
      .catch(console.error);
  }, []);

  // ✅ Fetch posts dynamically based on category, sort, and search
  useEffect(() => {
    setLoading(true);

    // Fetch ALL posts with their categories
    const query = `*[_type == "post"] | order(publishedAt ${
      sortOrder === "newest" ? "desc" : "asc"
    }) {
      title,
      slug,
      author->{ name },
      mainImage,
      publishedAt,
      categories[]->{ title, slug }
    }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("✅ All posts fetched:", data);
        
        // Filter by category in JavaScript
        let filtered = data;
        
        if (activeCategory) {
          filtered = data.filter((post) => {
            const hasCategory = post.categories?.some(
              (cat) => cat.slug?.current === activeCategory
            );
            console.log(`Post "${post.title}" has category "${activeCategory}":`, hasCategory);
            return hasCategory;
          });
          console.log(`✅ Posts filtered by category "${activeCategory}":`, filtered);
        }
        
        // Filter by search query
        if (searchQuery) {
          filtered = filtered.filter((post) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase())
          );
        }
        
        setPosts(filtered);
        setLoading(false);
      })
      .catch((error) => {
        console.error("❌ Error fetching posts:", error);
        setLoading(false);
      });
  }, [activeCategory, sortOrder, searchQuery]);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16">
      {/* 🌟 Header */}
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900">
        LuxFurnish <span className="text-brand">Blog</span>
      </h1>

      {/* 🔍 Search + Sort Controls */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full md:w-1/2 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand text-gray-700"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        {/* Sort */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="w-full md:w-1/4 px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-brand text-gray-700"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>

      {/* 🏷️ Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => {
            console.log("🔘 Clicked: All categories");
            setActiveCategory(null);
          }}
          className={`px-5 py-2 rounded-full font-medium transition ${
            !activeCategory
              ? "bg-brand text-white shadow"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>

        {categories.map((cat) => {
          const slugValue = cat?.slug?.current || "";
          return (
            <button
              key={cat._id}
              onClick={() => {
                console.log("🔘 Clicked category:", cat.title, "Slug:", slugValue);
                setActiveCategory(slugValue);
              }}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === slugValue
                  ? "bg-brand text-white shadow"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
              disabled={!slugValue}
            >
              {cat.title || "Untitled"}
            </button>
          );
        })}
      </div>

      {/* 📰 Blog Posts Grid */}
      {loading ? (
        <p className="text-center text-gray-500">Loading blog posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500">
          No blog posts found {activeCategory && `for this category`}.
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <article
              key={index}
              className="rounded-2xl shadow-lg overflow-hidden bg-white hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              {post.mainImage && (
                <img
                  src={urlFor(post.mainImage).width(600).url()}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-56 object-cover"
                />
              )}

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">
                    by {post.author?.name || "Unknown"} ·{" "}
                    {new Date(post.publishedAt).toLocaleDateString()}
                  </p>

                  {/* Display categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {post.categories.map((cat, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                        >
                          {cat.title}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  to={`/blog/${post.slug?.current}`}
                  className="text-brand font-semibold hover:underline mt-4"
                >
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Blog;