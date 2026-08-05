import React from "react";
import HeroBanner from "../../Component/HeroBanner/HeroBanner";
import SliderComponent from "react-slick";
import Product from "../../Component/Product/Product";
import Slider from "../../Component/Slider/Slider";
import CategoryGrid from "../../Component/Category/CategoryGrid/CategoryGrid";
import Category from "../../Component/Category/Category";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroBanner />
      <Product />
      <Slider />
      <Category />
    </div>
  );
};

export default Home;
