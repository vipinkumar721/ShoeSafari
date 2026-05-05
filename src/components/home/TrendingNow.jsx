import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    name: "TERRA FORGE X1",
    desc: "EXPEDITION SERIES / SANDSTONE",
    price: "$210",
    tag: "BESTSELLER",
    image: "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
  },
  {
    name: "URBAN SERIES / OBSIDIAN BLACK",
    desc: "CITY / OBSIDIAN",
    price: "$185",
    tag: "NEW DROP",
    image: "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
  },
  {
    name: "SAVANNA SCOUT PRO",
    desc: "HERITAGE SERIES / SIENNA CLAY",
    price: "$245",
    tag: "SUSTAINABLE",
    image: "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
  },
  {
    name: "GLACIER RUNNER V2",
    desc: "PERFORMANCE SERIES / ICE GREY",
    price: "$199",
    tag: "TRENDING",
    image:
      "https://res.cloudinary.com/dwngo5vya/image/upload/q_auto/f_auto/v1777890582/nike_shoe_etvhnc.jpg",
  },
];

const TrendingNow = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      // Scroll by one card width dynamically
      const card = scrollRef.current.querySelector("[data-card]");
      const scrollAmount = card ? card.offsetWidth + 24 : 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-black text-white px-4 sm:px-8 md:px-12 lg:px-16 py-10 sm:py-14 lg:py-20">
      <div className="container mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
              Top Picks
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide">
              FEATURED EXPEDITIONS
            </h2>
          </div>

          {/* Arrows — visible on all screen sizes */}
          <div className="flex gap-2 sm:gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-200 flex-shrink-0"
              aria-label="Scroll left"
            >
              <ChevronLeft size={16} className="sm:hidden" />
              <ChevronLeft size={20} className="hidden sm:block" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-8 h-8 sm:w-10 sm:h-10 border border-gray-600 flex items-center justify-center rounded-full hover:bg-white hover:text-black transition-all duration-200 flex-shrink-0"
              aria-label="Scroll right"
            >
              <ChevronRight size={16} className="sm:hidden" />
              <ChevronRight size={20} className="hidden sm:block" />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
        >
          {products.map((item, index) => (
            <div
              key={index}
              data-card
              className="
                flex-shrink-0
                w-[78vw]
                sm:w-[280px]
                md:w-[320px]
                lg:w-[480px]
              "
            >
              {/* Card image */}
              <div
                className="
                  relative rounded-[4px] overflow-hidden bg-neutral-900 group
                  h-[220px]
                  sm:h-[280px]
                  md:h-[320px]
                  lg:h-[380px]
                  hover:scale-[1.02] transition duration-300
                "
              >
                {/* Tag */}
                {item.tag && (
                  <span className="absolute top-3 right-3 z-10 text-[10px] sm:text-sm font-semibold text-white bg-orange-400 px-3 py-1 rounded-[4px]">
                    {item.tag}
                  </span>
                )}

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Bottom gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
              </div>

              {/* Info */}
              <div className="mt-3 sm:mt-4">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-sm sm:text-lg lg:text-xl font-semibold leading-tight">
                    {item.name}
                  </h3>
                  <span className="text-sm sm:text-lg lg:text-xl font-semibold tracking-wide text-orange-400 flex-shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs lg:text-sm text-gray-400 mt-0.5">
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