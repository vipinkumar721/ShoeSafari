import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Sneakers",
    subtitle: "Urban mobility meets athletic comfort",
    cta: "VIEW CATEGORY →",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    title: "Casual",
    subtitle: "",
    cta: "EXPLORE →",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    className: "",
  },
  {
    title: "Sports",
    subtitle: "",
    cta: "EXPLORE →",
    image:
      "https://images.unsplash.com/photo-1528701800489-20be3c7fbe1c",
    className: "",
  },
  {
    title: "Premium",
    subtitle: "Rare materials. Exceptional craftsmanship.",
    cta: "VIEW CATEGORY →",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
    className: "md:col-span-2",
  },
];

const EssentialGear = () => {

const navigate = useNavigate();

  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
      {/* Heading */}
      <div className="mb-10 flex justify-between">
        <div>
          <p className="text-xs tracking-widest text-gray-400">CURATION</p>
        <h2 className="text-2xl md:text-4xl font-bold">
          ESSENTIAL GEAR
        </h2>
        </div>

        <div>
          <Button onClick={() => navigate("/products")}>All Products</Button>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] md:auto-rows-[220px]">
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
    </section>
  );
};

export default EssentialGear;