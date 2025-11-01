import React from "react";
import Hero from "../components/hero.jsx";
import Swipper from "../components/swipper.jsx";
import Categories from "../components/categories.jsx";
import Features from "../components/features.jsx";
import FeaturedProducts from "../components/featuredproducts.jsx";
import Testimonies from "../components/testimonies.jsx";
import Newsletter from "../components/newsletter.jsx";
import AboutTeam from "../components/aboutteam.jsx"; 

const Home = () => {
  return (
    <>
      <Hero />
      <Swipper />
      <Categories />
      <Features />
      <FeaturedProducts />
      <AboutTeam />
      <Testimonies />
      <Newsletter />
    </>
  );
};

export default Home;