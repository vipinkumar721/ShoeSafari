import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "TERRA FORGE X1",
    desc: "EXPEDITION SERIES / SANDSTONE",
    price: "$210",
    tag: "BESTSELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "URBAN SERIES / OBSIDIAN BLACK",
    desc: "CITY / OBSIDIAN",
    price: "$185",
    tag: "NEW DROP",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
  {
    name: "SAVANNA SCOUT PRO",
    desc: "HERITAGE SERIES / SIENNA CLAY",
    price: "$245",
    tag: "SUSTAINABLE",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },

  {
    name: "GLACIER RUNNER V2",
    desc: "PERFORMANCE SERIES / ICE GREY",
    price: "$199",
    tag: "TRENDING",
    image:
      "https://plus.unsplash.com/premium_photo-1663127429325-3acefe582da5?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnQlMjBzaG9lc3xlbnwwfHwwfHx8MA%3D%3D",
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
      
     <div className="container m-auto">
       {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl tracking-wide md:text-5xl font-bold">
          FEATURED EXPEDITIONS
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
            <div className="relative rounded-[4px] md:h-[330px] md:w-[430px]  overflow-hidden bg-neutral-900 group hover:scale-105 transition duration-300">
              
              {/* Tag */}
              {item.tag && (
                <span className="absolute top-3 right-3 text-sm font-semibold text-white bg-orange-400 text-black px-2 py-1 rounded">
                  {item.tag}
                </span>
              )}

              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
            </div>

            {/* Info */}
            <div className="mt-3">
              <div className="flex justify-between items-center">
                <h3 className="text-sm md:text-xl font-semibold">
                  {item.name}
                </h3>
                <span className="text-sm md:text-xl font-semibold tracking-wide text-orange-400">
                  {item.price}
                </span>
              </div>
              <p className="text-xs md:text-[16px] text-gray-400">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
     </div>
    </section>
  );
};

export default TrendingNow;