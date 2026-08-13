import React, { useEffect } from "react";
import ProductList from "../../../Component/Product/ProductList/ProductList";
import Slider from "../../../Component/Slider/Slider";
import HeroBanner from "../../../Component/HeroBanner/HeroBanner";
import Category from "../../../Component/Category/Category";
import Product from "../../../Component/Product/Product";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/ProductSlice/ProductSlice";


const HomePage = () => {

  return (
    <div>
      <HeroBanner />
      <Product />
      <Slider />
      <div className="max-w-7xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <ProductList />
      </div>
    </div>
  );
};

export default HomePage;
