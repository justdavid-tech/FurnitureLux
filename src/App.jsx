

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar.jsx";
// import Home from "./pages/home.jsx";
// import About from "./pages/about.jsx";
// import Contact from "./pages/contact.jsx";
// import Blog from "./pages/blog.jsx";
// import Dining from "./categories/dining.jsx";
// import Bedroom from "./categories/bedroom.jsx";
// import Sofa from "./categories/sofa.jsx";
// import "./App.css";

// const App = () => (
//   <Router>
//     <div className="App">
//       <Navbar />
//       <Routes>
//         {/* Main Pages */}
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/blog" element={<Blog />} />
        
//         {/* Category Pages */}
//         <Route path="/categories/dining" element={<Dining />} />
//         <Route path="/categories/bedroom" element={<Bedroom />} />
//         <Route path="/categories/sofa" element={<Sofa />} />
//       </Routes>
//     </div>
//   </Router>
// );

// export default App;

// import React from "react";
// import Navbar from "./components/navbar.jsx";
// import Hero from "./components/hero.jsx";
// import Footer from "./components/footer.jsx";

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Hero />
//       <Footer />
//     </>
//   );
// };

// export default App;


import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Swipper from "./components/swipper.jsx";
import Categories from "./components/categories.jsx";
import Features from "./components/features.jsx";
import FeaturedProducts from "./components/featuredproducts.jsx";
import Testimonies from "./components/testimonies.jsx";
import Newsletter from "./components/newsletter.jsx";
import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Swipper />
      <Categories />
      <Features />
      <FeaturedProducts />
      <Testimonies />
      <Newsletter />
      <Footer />
    </>
  );
};

export default App;