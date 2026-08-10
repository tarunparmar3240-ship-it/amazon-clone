import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../../features/categorySlice/categorySlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  return (
    <div className="mb-6 p-4">
      <h3>Category List</h3>
      {loading && <p>Loading Categories...</p>}
      {error && <p className="text-red-400">{error}</p>}
      <ul>
        {categories && categories.length > 0 ? (
          categories.map((cat) => <li key={cat._id}>{cat.name}</li>)
        ) : (
          <p>No Categories Found!</p>
        )}
      </ul>
    </div>
  );
};

export default CategoryList;