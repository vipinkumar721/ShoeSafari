import React from "react";

const StorySection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT - Image Card */}
        <div className="relative rounded-[4px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            alt="Hiking boots"
            className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Overlay Content */}
          <div className="absolute bottom-6 left-6 right-6">
            <p className="text-xs text-orange-400 mb-2">
              SINCE 1984
            </p>
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              BUILT FOR THE PATH UNKNOWN
            </h3>
            <p className="text-sm text-gray-300">
              Our journey started in the heart of the Rift Valley, testing
              prototypes against the most demanding terrain on Earth.
            </p>
          </div>
        </div>

        {/* RIGHT - Text Content */}
        <div className="max-w-xl">
          <p className="text-xs tracking-widest text-gray-400 mb-2">
            THE HERITAGE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            CRAFTED FOR <br /> ENDURANCE.
          </h2>

          <p className="text-gray-300 mb-4 text-sm md:text-base">
            At EQUP, we believe that the soul of exploration lies in the
            equipment you carry. Every stitch, lug, and eyelet in our footwear
            is designed with a singular purpose: to never be the reason you turn
            back.
          </p>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            We combine centuries-old leathercraft techniques with aerospace-grade
            synthetics to create a hybrid that is breathable, indestructible, and
            unapologetically bold.
          </p>

          {/* CTA */}
          <button className="text-sm tracking-wide flex items-center gap-2 group">
            OUR STORY
            <span className="w-8 h-[1px] bg-white group-hover:w-12 transition-all"></span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;