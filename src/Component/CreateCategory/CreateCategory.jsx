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
      <h3 className=" text-center text-2xl">Add New Category</h3>
      <form onSubmit={handleSubmit} className="text-center mt-10">
        <input
          type="text"
          placeholder="Category Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="text-md border rounded-l-2xl py-1 pl-1"
        />
        <button type="submit" className="bg-blue-400 text-md py-[4.8px] rounded-r-2xl">
          Add Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
