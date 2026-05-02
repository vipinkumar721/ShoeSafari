import React from "react";
import { Button } from "antd";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1554176259-aa961fc32671?q=80&w=818&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Desert"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <div className="max-w-xl text-white">
          {/* Subtitle */}
          <p className="text-xs md:text-sm tracking-widest text-gray-300 mb-2">
            THE EXPEDITION SERIES
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            STEP INTO <br /> THE WILD
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-gray-300 mb-6">
            Engineered for the relentless explorer. Our footwear combines
            high-performance ruggedness with the refined aesthetic of a modern
            pioneer.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              type="primary"
              size="large"
              className="!bg-orange-400 !rounded-[4px] !border-none !text-black font-semibold"
            >
              SHOP THE COLLECTION
            </Button>

            <Button
              size="large"
              className="!bg-transparent !rounded-[4px] !border-gray-400 !text-white"
            >
              EXPLORE HERITAGE
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;