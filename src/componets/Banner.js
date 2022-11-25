import React from "react";
import slider1 from "../assets/slider-1.avif";
import slider2 from "../assets/slider-2.webp";
import slider3 from "../assets/slider-3.png";

const Banner = () => {
  return (
    <div className="mt-5">
      <div className="carousel w-full h-96">
        <div id="item1" className="carousel-item w-full">
          <img src={slider3} className="w-full" alt="" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src={slider2} className="w-full" alt="" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src={slider1} className="w-full" alt="" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
      </div>
    </div>
  );
};

export default Banner;
