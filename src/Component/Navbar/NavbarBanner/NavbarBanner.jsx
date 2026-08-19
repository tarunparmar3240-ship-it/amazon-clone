import React from "react";
import { IoMdMenu } from "react-icons/io";
import { Link } from "react-router-dom";

const NavbarBanner = () => {
  const bannerItems = [
    "Fresh",
    "Prime Video",
    "Sell",
    "Keep Shopping for",
    "Amazon Pay",
    "Today's Deals",
    "Bestsellers",
    "Buy Again",
    "Prime",
    "Mobiles",
    "Gift Cards",
  ];

  return (
    <div className="w-full bg-[#232f3e] text-white items-center justify-start hidden lg:flex gap-5 px-4 py-1.5">
      <div className="flex items-center gap-1">
        <IoMdMenu className="text-2xl" />
        <span className="font-bold text-sm">All</span>
      </div>
      <div className="flex gap-4">
        {bannerItems.map((item, index) => (
          <p
            className="cursor-pointer font-semibold text-sm border border-transparent hover:border-white p-1 rounded transition-all duration-150"
            key={index}
          >
            {item}
          </p>
        ))}
      </div>

      <button className="mx-40">
        <Link to='/admin' className="text-xl bg-blue-500 px-4 rounded-2xl">
          Admin
        </Link>
      </button>
    </div>
  );
};

export default NavbarBanner;
