import React, { useState, useEffect } from "react";
import amazonLogo from "../../../assets/amazonLogo.png";
import india from "../../../assets/india.png";
import { SlLocationPin } from "react-icons/sl";
import { FaSortDown } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { BiCart, BiUser } from "react-icons/bi";
import authSlice from "../../../features/authSlice/authSlice";
import { useSelector } from "react-redux";
import LocationModel from "../../LocationModel/LocationModel";

const NavbarBelt = () => {
  const { user } = useSelector((state) => state.auth);
  const username = user?.username || localStorage.getItem("username");
  const boxHover =
    "border border-transparent hover:border-white px-2 py-2 cursor-pointer flex itmes-center";
  const [selectedLocation, setSelectedLocation] = useState("Select Location");
  const [isModalOpen, setIsModlaOpen] = useState(false);

  return (
    <div className="w-full bg-[#131921] text-white min-h-15 flex py-1 flex-col md:flex-row md:py-0 items-center justify-between px-2 gap-2">
      {/* LEFT CONTAINER */}
      <div className="flex items-center justify-between gap-1 w-full md:w-auto md:justify-start">
        {/*Logo Box*/}
        <div className={boxHover}>
          <img
            src={amazonLogo}
            alt="amazon logo"
            className="w-22.5 object-contain pt-1"
          />
          <span className="text-xs font-bold pt-3 -mt-1">.in</span>
        </div>
        {/* Location Box */}
        <div onClick={() => setIsModlaOpen(true)} className={`${boxHover}`}>
          <div className="md:flex flex-col hidden">
            <div className="text-gray-300 text-sm">Deliver to</div>
            <div className="text-white text-sm font-bold">
              {selectedLocation}
            </div>
          </div>
        </div>
        {/* Location Modal */}
        <div className="hidden md:block">
          <LocationModel
            isOpen={isModalOpen}
            onClose={() => setIsModlaOpen(false)}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
        {/* Mobile View Top Right Items */}
        <div className="flex md:hidden items-center gap-3 pr-1">
          <div className="flex items-center gap-1 text-xs cursor-pointer">
            <span>sign in</span>
            <BiUser className="text-xl" />
          </div>
          <div className="relative cursor-pointer">
            <FaCartShopping className="text-2xl" />
            <span className="absolute top-0 left-3 text-[#f08804] font-bold text-xs">
              0
            </span>
          </div>
        </div>
      </div>
      {/* MIDDEL CONTAINER */}
      <div className="w-full md:flex-1 flex h-10 rounded-md overflow-hidden md:mx-2  focus-within:ring-3 focus-within:ring-[#febd69]">
        <select className="w-15 bg-gray-100 text-black text-xs px-2 border-r hidden lg:block border-gray-300 outline-none cursor-pointer hover:bg-gray-200">
          <option>All</option>
          <option>Fashion</option>
          <option>Electronics</option>
        </select>

        <input
          type="text"
          placeholder="Search Amazon.in"
          className="w-full bg-white text-gray-800 font-medium pl-2"
        />

        <button className="bg-[#febd69] hover:bg-[#f3a847] px-3 cursor-pointer">
          <IoMdSearch className="text-2xl text-black" />
        </button>
      </div>
      {/* RIGHT CONTAINER */}
      <div className="gap-5 hidden lg:flex items-center">
        <div className={`${boxHover} gap-1`}>
          <img src={india} alt="india-flag" className="w-5 object-contain" />
          <span className="font-bold text-sm">EN</span>
        </div>
        <div className={`${boxHover} flex-col `}>
          <span className="text-xs">
            Hello {username ? username : "sign in"}
          </span>
          <span className="text-sm font-bold -mt-1">Account & Lists </span>
        </div>

        <div className={`${boxHover} flex-col`}>
          <span className="text-xs">Returns</span>
          <span className="-mt-1 text-sm font-bold">&Orders</span>
        </div>

        <div className={`${boxHover}`}>
          <div className="flex items-center flex-col">
            <span className="text-lg  text-orange-400">0</span>
            <FaCartShopping className="-mt-1 text-xl mr-1" />
          </div>
          <p className="mt-6 text-sm font-medium">Cart</p>
        </div>
      </div>
      <div className="w-screen -mx-2 bg-[#232f3e] flex md:hidden items-center px-4 py-2 text-white gap-2 border-t border-[#3a4553]">
        <SlLocationPin className="text-xl font-bold" />
        <span className="font-medium text-lg">
          Delivering to Ahmedabad 395005 - Update location
        </span>
      </div>
    </div>
  );
};

export default NavbarBelt;
