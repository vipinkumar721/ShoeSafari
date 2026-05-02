import React from "react";

const StorySection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-16 md:py-24">
      <div className="m-auto container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* LEFT - Image Card */}
        <div className="relative rounded-[4px] overflow-hidden group">
          <img
            src="https://images.unsplash.com/photo-1500534314209-a25ddb2bd429"
            alt="Hiking boots"
            className="w-full h-[400px] md:h-[500px] object-cover group-hover:scale-105 transition duration-500"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70"></div>

          {/* Overlay Content */}
          <div className="absolute bottom-8 left-8 right-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">
              BUILT FOR EVERY TERRAIN
            </h3>
            <p className="text-sm text-gray-300">
              We merge advanced materials with precision craftsmanship to create
              footwear that performs in every environment — strong, reliable,
              and built to endure.
            </p>
          </div>
        </div>

        {/* RIGHT - Text Content */}
        <div className="max-w-xl">
          <p className="text-xs md:text-lg tracking-widest text-gray-400 mb-2">
            THE HERITAGE
          </p>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            CRAFTED FOR THE JOURNEY.
          </h2>

          <p className="text-gray-300 mb-4 text-sm md:text-base">
            At ShoeSafari, we believe every journey begins with the right
            foundation. Our footwear is designed for explorers who move beyond
            limits — combining durability, comfort, and timeless style to
            support every step you take.
          </p>

          <p className="text-gray-300 mb-6 text-sm md:text-base">
            We combine centuries-old leathercraft techniques with
            aerospace-grade synthetics to create a hybrid that is breathable,
            indestructible, and unapologetically bold.
          </p>

          {/* CTA */}
          <button className="text-sm tracking-wide flex items-center gap-2 group">
            OUR STORY →
          </button>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
