import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "TERRA-FORGE 01",
    desc: "EXPEDITION / SANDSTONE",
    price: "$210",
    tag: "HOT",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "AERO-STEP NOIR",
    desc: "CITY / OBSIDIAN",
    price: "$185",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "SAVANNA SCOUT",
    desc: "HERITAGE / SIENNA",
    price: "$245",
    tag: "ECO",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
];

const TrendingNow = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl md:text-3xl font-semibold">
          TRENDING NOW
        </h2>

        {/* Arrows */}
        <div className="hidden md:flex gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide"
      >
        {products.map((item, index) => (
          <div
            key={index}
            className="min-w-[260px] md:min-w-[300px] flex-shrink-0"
          >
            {/* Card */}
            <div className="relative rounded-[4px] overflow-hidden bg-neutral-900 group">
              
              {/* Tag */}
              {item.tag && (
                <span className="absolute top-3 right-3 text-xs bg-orange-400 text-black px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-[220px] object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-semibold">
                  {item.name}
                </h3>
                <span className="text-sm text-orange-400">
                  {item.price}
                </span>
              </div>
              <p className="text-xs text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingNow;