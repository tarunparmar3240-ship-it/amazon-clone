import React from "react";
import amazon from "../../../assets/amazonLogo.png";
import { IoEarthOutline } from "react-icons/io5";
// import india from "../../assets/india.png";
import india from "../../../assets/india.png";

const FooterDesktop = () => {
  return (
    <div className="w-full">
      <div className="bg-[#485769] h-10 flex items-center justify-center">
        <p className="text-white text-sm font-semibold">Back to top</p>
      </div>

      <div className="flex justify-center gap-40 bg-[#232F3E] text-white py-10 border-b border-gray-600">
        <div>
          <h3 className="font-bold mb-3">Get to Know Us</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>About Amazon</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Connect With Us</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>Fackbook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Make Money with Us</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Supply to Amazon</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3">Let Us Help You</h3>
          <ul className="text-sm space-y-2 text-gray-200">
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>Recalls and Product Safety Alerts</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#232F3E] py-10">
        <div className="flex items-center justify-center gap-20">
          <img className="w-25 text-center" src={amazon} alt="" />
          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-gray-300 px-6 py-1 border-2">
              <IoEarthOutline />
              <p className="text-sm">English</p>
            </div>
            <div className="flex items-center gap-2 text-gray-300 px-6 py-1 border-2">
              <img className="w-5" src={india} alt="" />
              <p>India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#131A22] text-white py-8 px-4">
        <div className="max-w-3xl mx-auto grid grid-cols-4 gap-x-8 gap-y-4 mb-8 pr-60">
          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              AbeBooks
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Books, art
              <br />& collectibles
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              Amazon Web Services
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Scalable Cloud
              <br />
              Computing Services
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              Audible
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Download
              <br />
              Audio Books
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              IMDb
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Movies, TV
              <br />& Celebrities
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              Shopbop
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Designer
              <br />
              Fashion Brands
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              Amazon Business
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Everything For
              <br />
              Your Business
            </span>
          </div>

          <div>
            <a
              href="#"
              className="hover:underline font-bold text-[12px] text-gray-200 block leading-tight"
            >
              Amazon Music
            </a>
            <span className="text-gray-400 text-[11px] block leading-tight">
              Stream millions of
              <br />
              songs
            </span>
          </div>
        </div>

        <div className="text-center text-[11px] text-gray-300 space-y-1">
          <div className="flex justify-center space-x-3">
            <a href="#" className="hover:underline">
              Conditions of Use & Sale
            </a>
            <a href="#" className="hover:underline">
              Privacy Notice
            </a>
            <a href="#" className="hover:underline">
              Interest-Based Ads
            </a>
          </div>
          <p className="text-gray-400 text-[10px]">
            &copy; 1996-2026, Amazon.com, Inc. or its affiliates
          </p>
        </div>
      </div>

      <div className="w-full h-10 bg-white"></div>
    </div>
  );
};

export default FooterDesktop;
