import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

// Import your pages
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Blog from "./pages/blog.jsx";
import BlogPost from "./pages/blogpost.jsx"; 

// Import sub-pages
import Bedroom from "./categories/bedroom.jsx";
import Dining from "./categories/dining.jsx";
import Sofa from "./categories/sofa.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />

        
        {/* Sub-routes for categories */}
        <Route path="/categories/bedroom" element={<Bedroom />} />
        <Route path="/categories/dining" element={<Dining />} />
        <Route path="/categories/sofa" element={<Sofa />} />
      </Routes>
      <Footer />
      </>
  );
};

export default App;