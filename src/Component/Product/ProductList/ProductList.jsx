import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/ProductSlice/ProductSlice";
import { useNavigate } from "react-router-dom";

const ProductList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <p className="text-red-500">{error}</p>;
  
  return (
    <div className="my-5">
      <h3 className="text-xl py-2">All Products List</h3>
      <div className="flex overflow-x-auto scrollbar-none gap-5">
        {products && products.length > 0 ? (
          products.map((product) => (
            <div onClick={() => navigate(`/product/${product._id}`)} key={product._id} className="shrink-0">
              <img
                src={product.mainImage?.url}
                alt={product.name}
                className=""
              />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>Koi Product Nahi Mila</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
