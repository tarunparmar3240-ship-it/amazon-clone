import React, { useRef } from "react";
import SliderComponent from "react-slick";
import "slick-carousel/slick/slick.css"; //Layout CSS
import "slick-carousel/slick/slick-theme.css"; //Design CSS
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";

const HeroBanner = () => {
  const sliderRef = useRef(null);
  const Slider = SliderComponent.default || SliderComponent;
  
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    sliderToScroll: 1,
    arrows: false,
    autoplaySpeed: 4000,
  };


  const bannerImages = [banner1, banner2, banner3, banner4, banner5, banner6];

  return (
    <div className="relative w-full overflow-hidden hidden md:block bg-gray-100">
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-10 top-1/8 z-20 cursor-pointer text-4xl text-gray-700"
      >
        <SlArrowLeft />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-10 top-1/8 z-20 cursor-pointer text-4xl text-gray-700"
      >
        <SlArrowRight />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {bannerImages.map((item,index) => (
          <div key={index} className="w-full focus:outline-none px-4">
            <img
              src={item}
              alt={index}
              className="w-full h-auto object-cover min-h-75"
            />
          </div>
        ))}
      </Slider>
      <div className="absolute inset-0 bg-linear-to-b from-white-600 via-white/20 to-white"></div>
    </div>
  );
};

export default HeroBanner;
