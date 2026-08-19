import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  postProduct,
  getProduct,
} from "../../../features/ProductSlice/ProductSlice";
import { getCategory } from "../../../features/categorySlice/categorySlice";

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);
  const { loading, error } = useSelector((state) => state.product);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    stock: "",
    mainImage: null,
  });

  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (categories.length === 0) {
      dispatch(getCategory());
    }
  }, [dispatch, categories.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, mainImage: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");

    const data = new FormData();
    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("stock", formData.stock);
    if (formData.mainImage) {
      data.append("mainImage", formData.mainImage);
    }

    dispatch(postProduct(data))
      .unwrap()
      .then(() => {
        setSuccessMessage("Product successfully created!");
        dispatch(getProduct());
        setFormData({
          name: "",
          description: "",
          price: "",
          category: "",
          stock: "",
          mainImage: null,
        });
      })
      .catch((err) => console.error("Create Product Error:", err));
  };


  return (
    <div className="max-w-125 my-2 mx-auto p-5">
      <h2 className="text-center text-2xl font-semibold mb-8">
        Add New Product
      </h2>
      {error && <p className="text-red-400">{error}</p>}
      {successMessage && <p className="text-red-400">{successMessage}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Product Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-100 p-2 border"
          />
        </div>

        <div className="mb-4">
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-100 p-2 border"
          />
        </div>

        <div className="mb-4 flex flex-col">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            className="w-100 p-2 border"
          />
        </div>

        <div className="mb-2 flex flex-col">
          <label>Stock:</label>
          <input
            type="number"
            name="stock"
            value={formData.stock}
            onChange={handleChange}
            required
            className="w-100 p-2 border"
          />
        </div>

        <div className="mb-2">
          <label>Select Category:</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-100 p-2 border"
          >
            <option value="">-- Choose Category --</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-2">
          <label>Image File:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            required
            className="w-100 p-2"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-100 p-2 bg-[#28a745] text-white rounded-2xl"
        >
          {loading ? "Adding Product..." : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
