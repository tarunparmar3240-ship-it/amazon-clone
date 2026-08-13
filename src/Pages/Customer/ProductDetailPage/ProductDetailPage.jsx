import React, { useEffect } from "react";
import ProductList from "../../../Component/Product/ProductList/ProductList";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ProductDetailPage = () => {
  //Step 3 useParams hook URl ki value ki active ID Read Karna
  const { id } = useParams();
  const navigate = useNavigate();

  //Redux store se Product aur loading status nikalna
  const {products, loading} = useSelector((state) => state.product);

  const singleProduct = products?.find((item) => item._id === id);


  useEffect(() => {
    if(loading && products && products.length > 0 && !singleProduct) {
      navigate('/404'); // Aapka catch-all / not-found route
    }
  }, [loading, products, singleProduct, navigate]);

  if(loading) {
    return 
    <div className="p-10 text-center font-bold">
      Loading...
    </div>
  }
 
  if (!singleProduct) {
    return (
      <div className="p-10 text-center text-xl font-bold">
      Invalid Product ID
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Column: product Large Image */}
      <div className="flex justify-center border p-4 rounded-lg">
        <img
          src={singleProduct.mainImage?.url}
          alt={singleProduct.title}
          className="w-96 h-96 object-contain"
        />
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold">{singleProduct.title}</h1>
        <p className="text-gray-600 leading-relaxed">
          {singleProduct.description}
        </p>
        <div className="text-3xl font-bold text-gray-900">
          ₹{singleProduct.price}
        </div>

        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-3 px-8 rounded-full w-fit shadow-md transition-all">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
