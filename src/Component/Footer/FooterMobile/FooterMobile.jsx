import React from "react";
import { FaCaretUp } from "react-icons/fa";
import { IoEarthOutline } from "react-icons/io5";

const FooterMobile = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-[#37475A] flex flex-col justify-center items-center h-12">
        <FaCaretUp className="text-white" />
        <h1 className="text-sm text-white">TOP OF PAGE</h1>
      </div>
      <div className="flex justify-start gap-5 items-center bg-[#232F3E] text-white p-10">
        <ul className="text-md space-y-2">
          <li>Amazon.in</li>
          <li>Your Orders</li>
          <li>Amazon App Download</li>
          <li>Your Lists</li>
          <li>Your Recently Viewed Items</li>
          <li>Recalls and Product Safety Alerts</li>
          <li>Customer Service</li>
        </ul>
        <ul className="text-md space-y-2">
          <li>Tarun's Amazon.in</li>
          <li>Amazon Pay</li>
          <li>Amazon Live</li>
          <li>Your Account</li>
          <li>Your Returns</li>
          <li>Sell</li>
          <li>Help</li>
        </ul>
      </div>

      <div className="text-white text-center bg-[#0D141E] p-10 space-y-5">
        <div className="flex justify-center items-center gap-2">
          <IoEarthOutline />
          <p className="text-sm text-gray-300">English</p>
        </div>
        <p>Switch Accounts</p>
        <p>Sign Out</p>

        <div className="text-xs space-y-2 text-gray-300">
          <div className="flex items-center justify-center gap-5"> 
            <span>Conditions of Use</span>
            <span>Privacy Notice</span>
            <span>Interest-Based Ads</span>
          </div>
          <p>© 1996-2026, Amazon.com, Inc. and its affiliates</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
