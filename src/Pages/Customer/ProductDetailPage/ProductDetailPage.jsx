import React, { useEffect } from "react";
import ProductList from "../../../Component/Product/ProductList/ProductList";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductById } from "../../../features/ProductSlice/ProductSlice";
import { addItemToCart } from "../../../features/cartSlice/cartSlice";

const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Redux se singleProduct aur loading read karein
  const { singleProduct, loading } = useSelector((state) => state.product);

  const handleAddToCart = () => {
    if (!singleProduct?._id && !singleProduct?.id) return;

    dispatch(
      addItemToCart({
        productId: singleProduct._id || singleProduct.id,
        quantity: 1,
      }),
    );
  };

  useEffect(() => {
    if (id) {
      dispatch(getProductById(id));
    }
  }, [id, dispatch]);

  if (loading) {
    return <div className="p-10 text-center font-bold">Loading...</div>;
  }

  if (!singleProduct) {
    return (
      <div className="p-10 text-center text-xl font-bold">
        Invalid Product ID
      </div>
    );
  }

  return (
    <div className="max-w-6xl flex mx-auto py-10 px-4 flex-col lg:flex-row">
      <div className="w-full">
        <img
          src={singleProduct.mainImage?.url}
          alt={singleProduct.title}
          className="w-96 h-96 object-contain"
        />
      </div>
      <div className="w-full flex flex-col">
        <div className="border-b border-gray-400">
          <h1 className="text-3xl">{singleProduct.name}</h1>
          <p className="text-md">{singleProduct.description}</p>
        </div>
        <p className="py-2 px-3 text-2xl">₹{singleProduct.price}</p>
        <button
          onClick={handleAddToCart}
          className="text-2xl bg-yellow-300 py-3 px-8 rounded-full w-fit mx-auto my-10 shadow-md transition-all"
        >
          {loading ? "Adding..." : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailPage;
