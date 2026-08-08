import React from "react";

const CategoryGrid = ({ categoryData, col = 2 }) => {
  return (
    <div className="w-full px-6 py-5 lg:hidden">
      {categoryData.map((item) => (
        <div key={item.id}>
          <h1 className="text-xl font-semibold py-3">{item.title}</h1>
          <div
            className={`grid gap-2 ${col === 3 ? "grid-cols-3" : "grid-cols-2"}`}
          >
            {item.img.map((img, indexImage) => (
              <div key={indexImage}>
                <img
                  src={img}
                  alt="product"
                  className="w-full h-full object-cover rounded-md"
                />
                {item.product && item.product[indexImage] && (
                  <p className="text-md text-gray-900">
                    {item.product[indexImage]}
                  </p>
                )}
              </div>
            ))}
          </div>
          <p className="mt-4 text-md font-semibold text-[#2162a1]">see more</p>
        </div>
      ))}
    </div>
  );
};

export default CategoryGrid;
