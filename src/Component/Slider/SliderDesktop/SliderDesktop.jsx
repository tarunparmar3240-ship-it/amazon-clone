import React, { useRef } from "react";
import prod1 from "../../../assets/prod1.jpg";
import prod2 from "../../../assets/prod2.jpg";
import prod3 from "../../../assets/prod3.jpg";
import prod4 from "../../../assets/prod4.jpg";
import prod5 from "../../../assets/prod5.jpg";
import prod6 from "../../../assets/prod6.jpg";
import prod7 from "../../../assets/prod7.jpg";
import prod8 from "../../../assets/prod8.jpg";
import prod9 from "../../../assets/prod9.jpg";
import prod10 from "../../../assets/prod10.jpg";
import prod11 from "../../../assets/prod11.jpg";
import prod12 from "../../../assets/prod12.jpg";
import prod13 from "../../../assets/prod13.jpg";
import prod14 from "../../../assets/prod14.jpg";
import prod15 from "../../../assets/prod15.jpg";
import prod16 from "../../../assets/prod16.jpg";
import prod17 from "../../../assets/prod17.jpg";
import prod18 from "../../../assets/prod18.jpg";
import prod19 from "../../../assets/prod19.jpg";
import prod20 from "../../../assets/prod20.jpg";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa";

const ProductSlider = () => {
  const sliderRef = useRef(null);
  const sliderData = [
    {
      id: 1,
      img: prod1,
    },
    {
      id: 2,
      img: prod2,
    },
    {
      id: 3,
      img: prod3,
    },
    {
      id: 4,
      img: prod4,
    },
    {
      id: 5,
      img: prod5,
    },
    {
      id: 6,
      img: prod6,
    },
    {
      id: 7,
      img: prod7,
    },
    {
      id: 8,
      img: prod8,
    },
    {
      id: 9,
      img: prod9,
    },
    {
      id: 10,
      img: prod10,
    },
    {
      id: 11,
      img: prod11,
    },
    {
      id: 12,
      img: prod12,
    },
    {
      id: 13,
      img: prod13,
    },
    {
      id: 14,
      img: prod14,
    },
    {
      id: 15,
      img: prod15,
    },
    {
      id: 16,
      img: prod16,
    },
    {
      id: 17,
      img: prod17,
    },
    {
      id: 18,
      img: prod18,
      size: "w-60 object-contain",
    },
    {
      id: 19,
      img: prod19,
    },
    {
      id: 20,
      img: prod20,
    },
  ];

  const handleScroll = (scrollOffset) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: scrollOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="my-4 p-5 bg-white max-w-[1480px] hidden md:block mx-auto shadow-sm relative">
      <h1 className="text-xl font-bold py-2">
        Best Sellers in Computers & Accessories
      </h1>
      <button
        onClick={() => handleScroll(500)}
        className="absolute top-1/3 text-2xl right-0 bg-white py-8 px-3"
      >
        <FaChevronRight />
      </button>
      <button
        onClick={() => handleScroll(-500)}
        className="absolute top-1/3 text-2xl left-0 bg-white py-8 px-3"
      >
        <FaChevronLeft />
      </button>
      <div ref={sliderRef} className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-thin">
        {sliderData.map((item) => (
          <img
            key={item.id}
            src={item.img}
            alt={item.id}
            className={`cursor-pointer ${item.size}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
