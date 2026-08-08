import React from "react";
import CategoryGrid from "./CategoryGrid/CategoryGrid";
import c1 from "../../assets/c1.jpg";
import c2 from "../../assets/c2.jpg";
import c3 from "../../assets/c3.jpg";
import c4 from "../../assets/c4.jpg";

import col1 from "../../assets/col1.webp";
import col2 from "../../assets/col2.webp";
import col3 from "../../assets/col3.webp";
import col4 from "../../assets/col4.webp";
import col5 from "../../assets/col5.jpg";
import col6 from "../../assets/col6.webp";
import col7 from "../../assets/col7.webp";
import col8 from "../../assets/col8.webp";
import col9 from "../../assets/col9.webp";

const Category = () => {
  const Data2x2 = [
    {
      id: 1,
      img: [c1, c2, c3, c4],
      title: "All under 499 | Kurtis, beauty & more",
      product: ["Krutis & Kurtas", "Sarees", "MakeUp", "Explore more"],
    },
  ];

  const Data3x3 = [
    {
      id: 2,
      title: "Min. 45% off | Curated products from Indian artisans",
      img: [col1, col2, col3, col4, col5, col6, col7, col8, col9], // Apne 9 image variables yahan lagayein
    },
  ];
  return (
    <div>
      <CategoryGrid categoryData={Data2x2} col={2} />
      <CategoryGrid categoryData={Data3x3} col={3} />
    </div>
  );
};

export default Category;
