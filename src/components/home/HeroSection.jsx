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
      <div className="relative md:max-w-[1700px] m-auto z-10 flex items-center h-full px-6">
        <div className="max-w-xl text-white">
          {/* Subtitle */}
          <p className="text-xs md:text-2xl tracking-widest text-gray-300">
            THE SAFARI COLLECTION
          </p>

          {/* Title */}
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight mb-4">
            STEP INTO THE WILD
          </h1>

          {/* Description */}
          <p className="text-sm md:text-xl text-gray-300 mb-6">
            Crafted for explorers who never settle. ShoeSafari footwear blends
            durability, comfort, and style for every journey.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button
              type="primary"
              size="large"
              className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              EXPLORE COLLECTION
            </Button>

            <Button
              size="large"
              className="!bg-transparent !rounded-[4px] !border-gray-500 !text-white !font-semibold hover:scale-105 transition-all duration-300 ease-in-out transform"
            >
              START YOUR JOURNEY
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
