import React from "react";
import HeroBanner from "../../Component/HeroBanner/HeroBanner";
import SliderComponent from "react-slick";
import Product from "../../Component/Product/Product";
import Slider from "../../Component/Slider/Slider";
import CategoryGrid from "../../Component/Category/CategoryGrid/CategoryGrid";
import Category from "../../Component/Category/Category";
import CreateCategory from "../../Component/CreateCategory/CreateCategory";
import CategoryList from "../../Component/CreateCategory/CategoryList";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <HeroBanner />
      <Product />
      <Slider />
      <Category />
      <CreateCategory />
      <CategoryList />
    </div>
  );
};

export default Home;
