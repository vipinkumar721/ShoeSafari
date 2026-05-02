import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Sneakers",
    subtitle: "Engineered for everyday explorers.",
    cta: "EXPLORE SNEAKERS →",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "CASUAL ESSENTIALS",
    subtitle: "Effortless style for every step.",
    cta: "DISCOVER →",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    className: "",
  },
  {
    title: "PERFORMANCE SERIES",
    subtitle: "Built for speed, endurance, and power.",
    cta: "TRAIN HARD →",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHNob2VzfGVufDB8fDB8fHww",
    className: "",
  },
  {
    title: "Premium",
    subtitle: "Luxury meets durability.",
    cta: "VIEW COLLECTION →",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    className: "md:col-span-2",
  },
];

const EssentialGear = () => {

const navigate = useNavigate();

  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
     <div className="m-auto container">
       {/* Heading */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <p className="text-md tracking-widest text-gray-400">CURATED COLLECTION</p>
        <h2 className="text-2xl tracking-wide md:text-5xl font-bold">
          ESSENTIAL GEAR
        </h2>
        </div>

        <div>
          <Button
              type="primary"
              size="large"
              className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 ease-in-out transform"
              onClick={() => navigate("/products")}
            >
              VIEW ALL GEAR →
            </Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[380px]">
        {categories.map((item, index) => (
          <div
            key={index}
            className={`relative rounded-[4px] overflow-hidden group ${item.className}`}
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-lg md:text-xl font-semibold">
                {item.title}
              </h3>
              {item.subtitle && (
                <p className="text-sm text-gray-300 mb-2">
                  {item.subtitle}
                </p>
              )}
              <button className="text-xs tracking-wide text-white/80 hover:text-white">
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