import React, { useEffect } from "react";
import amazon from "../../assets/amazon.jpg";
import { AiTwotoneDelete } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  getUserCart,
  removeItemCart,
} from "../../features/cartSlice/cartSlice";

const CartProduct = () => {
  const dispatch = useDispatch();

  const { loading, items, cartTotal, error } = useSelector(
    (state) => state.cart,
  );

  if (loading) {
    return (
      <div className="text-xl text-center">
        <h2>Loading your cart...</h2>
      </div>
    );
  }

  if (error) return <div>{error}</div>;

  if (error) {
    return (
      <div className="text-2xl">
        <h2>Error: {error}</h2>
      </div>
    );
  }

  if (!items && items.length === 0) {
    return (
      <div className="text-2xl text-center">
        <h2>Your Cart is Empty</h2>
      </div>
    );
  }

  if (items.length === 0) {
    <h1>Your Cart is Empty</h1>;
  }

  const handelQuantityChange = () => {
    dispatch(addItemToCart({ productId, quantity }));
  };

  console.log("This My Data", items);

  return (
    <div className="flex justify-center gap-10 bg-[#EAEDED] w-full px-2 py-12">
      {/* Col 1 */}
      <div className="w-full max-w-6xl bg-white border-0 border-gray-600">
        {/* first */}
        <div className="flex justify-between px-2 py-8 border-b">
          <div>
            <h1 className="text-3xl">Shpping Cart</h1>
            <p className="text-sm">
              No items Selected.
              <span className="text-[#2162a1]"> Select all items</span>
            </p>
          </div>
          <p className="flex items-end ">Price</p>
        </div>
        {/* Second */}
        <div className="py-8 flex flex-col gap-6 px-5">
          {items.map((item, index) => (
            <div key={index} className="flex gap-5">
              {/* Product img */}
              <img
                src={item?.product?.mainImage?.url}
                alt={item.title}
                className="w-50 h-fit object-contain"
              />
              <div className="space-y-1">
                <h3 className="text-2xl">{item?.product?.name}</h3>
                <p className="text-md max-w-3xl text-black">
                  {item?.product?.description}
                </p>
                <p>Price: ₹{item.product?.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Total Stock: {item.product?.stock}</p>

                <div>
                  <button className="flex items-center gap-5 border-4 text-xl mt-4 border-yellow-400 rounded-2xl px-2">
                    <AiTwotoneDelete
                      onClick={() => dispatch(removeItemCart(item.product._id))}
                    />
                    {item.quantity}
                    <IoMdAdd
                      onClick={() =>
                        dispatch(
                          addItemToCart({
                            productId: item.product._id,
                            quantity: item.quantity + 1,
                          }),
                        )
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Col 2 */}
      <div className="w-100 bg-white p-10 hidden lg:block">
        <h1 className="text-2xl text-center">Order Summary</h1>
        <div className="flex flex-col mx-5 mt-10">
          <span className="text-2xl ">SubTotal: ₹{cartTotal}</span>
          <span className="text-xl mt-2">Taxes & Shipping: free</span>
          <p className=" text-2xl text-white mt-10 mx-auto bg-gray-500 w-full text-center">
            GrandTotal: ₹{cartTotal}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
