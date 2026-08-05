import React from "react";
import m1 from "../../../assets/m1.jpg";
import m2 from "../../../assets/m2.jpg";
import m3 from "../../../assets/m3.jpg";
import m4 from "../../../assets/m4.jpg";
import m5 from "../../../assets/m5.jpg";
import m6 from "../../../assets/m6.jpg";
import m7 from "../../../assets/m7.jpg";
import m8 from "../../../assets/m8.jpg";
import m9 from "../../../assets/m9.jpg";
import m10 from "../../../assets/m10.jpg";
import m11 from "../../../assets/m11.jpg";
import m12 from "../../../assets/m12.jpg";
import m13 from "../../../assets/m13.jpg";
import m14 from "../../../assets/m14.jpg";
import m15 from "../../../assets/m15.jpg";
import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";
import p5 from "../../../assets/p5.jpg";
import p6 from "../../../assets/p6.jpg";
import p7 from "../../../assets/p7.jpg";
import p8 from "../../../assets/p8.jpg";
import p9 from "../../../assets/p9.jpg";

const ProductMobile = () => {
  const sliderData = [
    {
      id: 1,
      type: "P",
      img: [p1, p2, p8, p9, p5, p6, p7, p4, p3],
      title: [
        "",
        "Stay tuned",
        "Rakhi gifting store",
        "Deals on fashion",
        "Deals on electronics",
        "Budget Finds Under 499",
        "Great deals on S25 Ultra 5G",
        "Ambrane",
        "",
      ],
    },
    {
      id: 2,
      type: "M",
      img: [m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, m13, m14, m15],
      title: [
        "Stay turn",
        "Prime",
        "Mobile",
        "bazaar",
        "Pay",
        "Mx Player",
        "Deals",
        "Fashion",
        "Eletronics",
        "Shop Live",
        "Home",
        "Daily Need",
        "Travel",
        "Beauty",
        "Contact us",
      ],
    },
  ];
  return (
    <div className="w-full py-2">
      {sliderData.map((row) => (
        <div key={row.id} className="overflow-x-auto scrollbar-none px-4 mb-4">
          <div className="flex gap-2">
            {/* TYPE 'P' ROW LAYOUT */}
            {row.type === "P" &&
              row.img.map((image, imgIndex) => (
                <div
                  key={imgIndex}
                  className="shrink-0 w-45 border border-gray-300 rounded-lg p-1 relative"
                >
                  <p className="absolute text-md ml-1 mt-1 font-bold line-clamp-2 text-white">
                    {row.title[imgIndex]}
                  </p>
                  <img
                    src={image}
                    alt="product"
                    className="w-full h-60 object-cover mx-auto rounded-xl"
                  />
                </div>
              ))}
          </div>

          {/* TYPE 'M' ROW LAYOUT */}
          <div className="flex gap-10 items-center">
            {row.type === "M" &&
              row.img.map((image, imgIndex) => (
                <div key={imgIndex} className="shrink-0 text-center">
                  <img
                    src={image}
                    alt="product"
                    className="w-15 h-15 object-cover"
                  />
                  {row.title[imgIndex] && (
                    <p className="mt-1 font-semibold">{row.title[imgIndex]}</p>
                  )}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductMobile;

// <div>
//   {/* Row Number 1 */}
//   <div className="w-full py-3">
//     {sliderData.map((item,index) => (
//       <div key={index} className="overflow-x-auto scrollbar-none px-4">
//         {/* Row Number 1 */}
//         <div className="flex gap-2">
//           {item.img.map((image, imgIndex) => (
//             <div
//               key={imgIndex}
//               className="shrink-0 w-45 border border-gray-300 rounded-lg p-1 relative"
//             >
//               <p className="absolute text-md ml-1 mt-1 font-bold line-clamp-2 text-white">
//                 {item.title[imgIndex]}
//               </p>
//               <img
//                 src={image}
//                 alt="product"
//                 className="w-full h-60 object-cover mx-auto rounded-xl"
//               />
//             </div>
//           ))}
//         </div>
//       </div>
//     ))}
//   </div>

//   {/* Row Number 2 */}
//   <div>
//     {sliderData.map((item) => (
//       <div key={item.id} className="">
//           {item.type === 'M' && (
//             <div>
//               {item.img.map((img, imgindex) => (
//                 <div>
//                   <img src={img} alt="product"  />
//                   {/* <p>{item.title[imgindex]}</p> */}
//                 </div>
//               ))}
//             </div>
//           )}
//       </div>
//     ))}
//   </div>
// </div>
