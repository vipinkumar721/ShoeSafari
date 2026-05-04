import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Sneakers",
    subtitle: "Engineered for everyday explorers.",
    cta: "EXPLORE SNEAKERS →",
    image: "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
    // sm: spans 2 cols (2-col grid), lg: spans 2 of 3 cols
    className: "sm:col-span-2 lg:col-span-2 lg:row-span-1",
  },
  {
    title: "CASUAL ESSENTIALS",
    subtitle: "Effortless style for every step.",
    cta: "DISCOVER →",
    image: "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
    className: "",
  },
  {
    title: "PERFORMANCE SERIES",
    subtitle: "Built for speed, endurance, and power.",
    cta: "TRAIN HARD →",
    image:
      "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
    className: "",
  },
  {
    title: "Premium",
    subtitle: "Luxury meets durability.",
    cta: "VIEW COLLECTION →",
    image:
      "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
    // sm: spans 2 cols, lg: spans 2 of 3 cols
    className: "sm:col-span-2 lg:col-span-2",
  },
];

const EssentialGear = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-16 py-10 md:py-16 lg:py-20">
      <div className="mx-auto container">

        {/* Heading — stacks on mobile, side-by-side on sm+ */}
        <div className="mb-8 md:mb-10 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-end">
          <div>
            <p className="text-xs sm:text-sm tracking-widest text-gray-400 uppercase mb-1">
              Curated Collection
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              ESSENTIAL GEAR
            </h2>
          </div>

          <div className="self-start sm:self-auto">
            <Button
              type="primary"
              size="large"
              className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:!bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out transform text-sm sm:text-base"
              onClick={() => navigate("/products")}
            >
              VIEW ALL GEAR →
            </Button>
          </div>
        </div>

        {/* 
          Grid layout:
            mobile  (default) : 1 column,  row height 220px
            sm      (640px+)  : 2 columns, row height 260px  → Sneakers & Premium span 2 cols
            lg      (1024px+) : 3 columns, row height 360px  → Sneakers & Premium span 2 of 3 cols
        */}
        <div className="
          grid gap-5 sm:gap-4 md:gap-5 lg:gap-6
          grid-cols-1
          auto-rows-[220px]
          sm:grid-cols-2
          sm:auto-rows-[260px]
          lg:grid-cols-3
          lg:auto-rows-[360px]
        ">
          {categories.map((item, index) => (
            <div
              key={index}
              className={`relative rounded-[4px] overflow-hidden group cursor-pointer ${item.className}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold leading-tight">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-xs sm:text-sm text-gray-300 mt-0.5 mb-1.5 sm:mb-2">
                    {item.subtitle}
                  </p>
                )}
                <button className="text-[11px] sm:text-xs tracking-wide text-white/80 hover:text-white transition-colors duration-200">
                  {item.cta}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EssentialGear;