import React from "react";
import {
  Leaf,
  ShieldCheck,
  Globe,
  Headphones,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={22} />,
    title: "SUSTAINABLE CRAFT",
    desc: "Built with responsibly sourced materials, designed for a better tomorrow.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "BUILT TO LAST",
    desc: "Engineered for durability. Made to endure every journey you take.",
  },
  {
    icon: <Globe size={22} />,
    title: "WORLDWIDE DELIVERY",
    desc: "Fast, reliable shipping wherever your journey takes you.",
  },
  {
    icon: <Headphones size={22} />,
    title: "ALWAYS WITH YOU",
    desc: "24/7 support for every step of your adventure.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14 md:py-20">
      <div className="m-auto container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">

            {/* Icon Box */}
            <div className="w-12 h-12 flex items-center justify-center rounded-[4px] bg-white/10 mb-4 text-orange-400 hover:scale-120 transition duration-300">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-lg font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-[16px] text-gray-400 max-w-[220px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;