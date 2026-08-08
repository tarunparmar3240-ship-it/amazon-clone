import React, { useState,useEffect } from "react";
import airConditioners from "../../../assets/air-Conditioners.jpg";
import refrigerators from "../../../assets/Refrigerators.jpg";
import microwaves from "../../../assets/Microwaves.jpg";
import washingMachine from "../../../assets/washing-machine.jpg";

import electronics from "../../../assets/Electronices.jpg";
import fan from "../../../assets/fan.jpg";
import industrialSupplies from "../../../assets/industrials-supplies.jpg";
import amazon from "../../../assets/amazon.jpg";

import headPhone1 from "../../../assets/headPhone1.jpg";
import headPhone2 from "../../../assets/headPhone2.jpg";
import headPhone3 from "../../../assets/headPhone3.jpg";
import headPhone4 from "../../../assets/headPhone4.jpg";

import bedsheet from "../../../assets/bedsheets.jpg";
import curtains from "../../../assets/curtians.jpg";
import ironing from "../../../assets/Ironing.jpg";
import decor from "../../../assets/decor.jpg";
const ProductGrid = () => {
  const cardsData = [
    {
      id: 1,
      title: "Appliances for your home | Up to 55% off",
      items: [
        { name: "Air conditions", img: airConditioners },
        { name: "Refrigerators", img: refrigerators },
        { name: "Microwaves", img: microwaves },
        { name: "Washing machines", img: washingMachine },
      ],
      linkText: "See more",
    },
    {
      id: 2,
      title: "Bulk order discounts + 10% Guaranteed cashback",
      items: [
        { name: "Electronics & accessories", img: electronics },
        { name: "Home appliances", img: fan },
        { name: "Industrial", img: industrialSupplies },
        { name: "Register using GST Uydam, FSSAI or BPAN", img: amazon },
      ],
      linkText: "See more",
    },
    {
      id: 3,
      title: "Up to 75% off | Deals on headphones",
      items: [
        { img: headPhone1, customClass: "h-35" },
        { img: headPhone2, customClass: "h-35" },
        { img: headPhone3, customClass: "h-35 px-5" },
        { img: headPhone4, customClass: "h-35" },
      ],
      linkText: "See more",
    },
    {
      id: 4,
      title: "Staring ₹199 | Amazon Brands & more",
      items: [
        { name: "Starting ₹199 | Bedsheets", img: bedsheet },
        { name: "Starting ₹199 | Curtains", img: curtains },
        { name: "Minimum 40% off | lroning boards & more", img: ironing },
        { name: "Up to 60% Home decor", img: decor },
      ],
      linkText: "See more",
    },
  ];
  return (
    <div className="relative z-20 max-w-[1500px] mx-auto px-4 -mt-89">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {cardsData.map((card) => (  
          <div key={card.id} className="bg-white p-4 flex flex-col shadow-md">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{card.title}</h2>
            <div className="grid grid-cols-2 gap-3">
              {card.items.map((subItem, idx) => (
                <div key={idx} className="mb-2 cursor-pointer group">
                    <div className="mb-1 overflow-hidden">
                      <img 
                        src={subItem.img} 
                        alt={subItem.name}
                        // className="w-full object-cover group-hover:scale-105 transition-transform duration-200" 
                        className={`w-full ${subItem.customClass}`}
                    />
                    </div>
                    <p className="text-xs text-gray-700 font-medium leading-tight">{subItem.name}</p>
                </div>
              ))}
            </div>
            {/* <a href="#" className="text-xs text-cyan-700 font-semibold hover:text-orange-700 hover:underline mt-3">
                {card.linkText}
            </a> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;