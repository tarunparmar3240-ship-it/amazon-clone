import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { categorySlice } from "../../features/categorySlice/categorySlice";
import { postCategory } from "../../features/categorySlice/categorySlice";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  // Loading state track karne ke liye (Optional)
  const { loading, error } = useSelector((state) => state.cate);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return alert("Category ka naam bharein!");

    // Step 2 Core: createCategory thunk ko dispatch karna
    dispatch(postCategory(name))
      .unwrap()
      .then(() => {
        alert("Category successfully ban gayi!");
        setName(""); // Input reset
      })
      .catch((err) => {
        alert(`Error: ${err}`);
      });
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>Add New Category</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name (e.g., Electronics)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Adding..." : "Add Category"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateCategory;