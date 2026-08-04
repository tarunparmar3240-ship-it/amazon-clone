import React from "react";
import HeroBanner from "../../Component/HeroBanner/HeroBanner";
import SliderComponent from "react-slick";
import ProductGrid from "../../Component/Product/ProductDesktop/ProductDesktop";
import ProductSlider from "../../Component/Slider/ProductSlider/ProductSlider";
import Product from "../../Component/Product/Product";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroBanner />
      {/* <ProductGrid /> */}
      <Product />
      <ProductSlider />
    </div>
  );
};

export default Home;
