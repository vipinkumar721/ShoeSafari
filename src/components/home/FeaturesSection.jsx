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
    title: "Eco-Certified",
    desc: "100% sustainable materials sourced from ethical producers.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Lifetime Warranty",
    desc: "Our gear is built to last a lifetime. We guarantee it.",
  },
  {
    icon: <Globe size={22} />,
    title: "Expedited Global",
    desc: "Free carbon-neutral shipping on all orders.",
  },
  {
    icon: <Headphones size={22} />,
    title: "Explorer Support",
    desc: "24/7 assistance for all your gear and journey needs.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-14 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {features.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            
            {/* Icon Box */}
            <div className="w-12 h-12 flex items-center justify-center rounded-[4px] bg-white/10 mb-4 text-orange-400">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-base font-semibold mb-2">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-400 max-w-[220px]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;