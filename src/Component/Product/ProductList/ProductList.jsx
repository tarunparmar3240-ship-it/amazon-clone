import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../../features/ProductSlice/ProductSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading) return <h2>Loading products...</h2>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div style={{ margin: "20px 0" }}>
      <h3>All Products List</h3>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div
              key={product._id}
              style={{ border: "1px solid #ccc", padding: "10px", width: "200px" }}
            >
              <img
                src={product.mainImage?.url}
                alt={product.name}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h3>{product.name}</h3>
              <p>Price: ₹{product.price}</p>
            </div>
          ))
        ) : (
          <p>Koi Product Nahi Mila!</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
