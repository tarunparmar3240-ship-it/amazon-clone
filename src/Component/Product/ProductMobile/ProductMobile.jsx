import React from "react";
import product1 from "../../../assets/product1.jpg";
import product2 from "../../../assets/product2.jpg";
import product3 from "../../../assets/product3.jpg";
import product4 from "../../../assets/product4.jpg";
import product5 from "../../../assets/product5.jpg";
import product6 from "../../../assets/product6.jpg";
import product7 from "../../../assets/product7.jpg";
import product8 from "../../../assets/product8.jpg";
import video1 from "../../../assets/video1.mp4";
import video2 from "../../../assets/video2.mp4";

const ProductMobile = () => {
  const mobileBanners = [
    {
      id: 1,
      type: "video",
      video: [video2, video1],
      title: ["Spread the word", "Spread the word"],
      subtitle: ["Big savings await", "Up to 50% off"],
    },
    {
      id: 2,
      type: "grid",
      title: [
        "Starting ₹549",
        "Starting ₹449",
        "Starting ₹999",
        "Starting ₹1199",
        "Starting ₹699",
        "Starting ₹899",
        "Starting ₹399",
        "Starting ₹159",
      ],
      subtitle: [
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
        "This is subTitle",
      ],
      images: [
        product1,
        product2,
        product3,
        product4,
        product5,
        product6,
        product7,
        product8,
      ],
    },
  ];
  return (
    <div className="flex overflow-x-auto pt-2 pl-4 scrollbar-none gap-3">
      {mobileBanners.map((item) => (
        <div key={item.id} className="flex-shrink-0">
          {item.type === "video" && (
            <div className="relative flex gap-2">
              {item.video.map((vid, index) => {
                const play = [1];
                const isBlack = play.includes(index);
                return (
                  <div>
                    <h1 className="absolute p-2 text-4xl font-bold text-white">
                      {item.title[index]}
                    </h1>
                    <p
                      className={`absolute p-2 text-xl font-semibold top-10 ${isBlack ? "text-white" : "text-black"}`}
                    >
                      {item.subtitle[index]}
                    </p>
                    <video
                      key={index}
                      src={vid}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-80 h-auto object-cover rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          )}
          {item.type === "grid" && (
            <div className="flex gap-3">
              {item.images.map((img, index) => {
                const blackIndices = [2, 3, 5, 6, 7];
                const isBlack = blackIndices.includes(index);
                return (
                  <div className="flex relative gap-3">
                    <h1
                      className={`absolute top-2 left-4 z-10 font-bold text-4xl rounded ${isBlack ? "text-black" : "text-white"}`}
                    >
                      {item.title[index]}
                    </h1>
                    <p   className={`absolute left-4 text-xl font-semibold top-14 ${isBlack ? "text-black" : "text-white"}`} >{item.subtitle[index]}</p>
                    <img
                      src={img}
                      alt="product"
                      className="w-80 object-cover rounded-2xl"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductMobile;
