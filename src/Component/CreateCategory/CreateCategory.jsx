import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  postCategory,
  getCategory,
} from "../../features/categorySlice/categorySlice";

const CreateCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    dispatch(postCategory(name))
      .unwrap()
      .then(() => {
        alert("Category Added Successfully!");
        setName("");
        dispatch(getCategory());
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="p-4 mb-6">
      <h3>Add New Category</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit" className="ml-3">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
