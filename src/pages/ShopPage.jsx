import { Checkbox } from "antd";
import { useState } from "react";

const products = [
  {
    name: "VANGUARD SCOUT X",
    price: "$320",
    desc: "Heavy-duty weather-resistant gear.",
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    name: "Sahara Rover",
    price: "$210",
    desc: "Lightweight performance with enhanced grip and durability.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "KALAHARI ELITE PRO",
    price: "$440",
    desc: "Premium leather construction for unmatched strength and style.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
];

const categories = [
  "EXPEDITION SERIES",
  "URBAN RUNNERS",
  "TECH SANDALS",
  "HERITAGE LEATHER",
];

const ShopPage = () => {
  const [selected, setSelected] = useState([]);

  const onChange = (checkedValues) => {
    console.log("Selected Categories:", checkedValues);
    setSelected(checkedValues);
  };

  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
      <div className="m-auto container">
        {/* Header */}
        <div className="mb-10">
          <p className="text-xs md:text-lg tracking-widest text-gray-400 mb-2">
            GEAR FOR THE JOURNEY
          </p>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            EXPLORE EVERY TERRAIN
          </h1>
          <p className="text-gray-400 max-w-xl text-sm md:text-base">
            Engineered for every path you take — from city streets to rugged
            trails. Built for comfort, durability, and performance.
          </p>
        </div>

        {/* Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="md:col-span-1 mt-11">
            <div className="bg-neutral-900 !text-white p-5 rounded-[4px] shadow-lg border-none">
              {/* Heading */}
              <h3 className="text-lg md:text-2xl font-semibold mb-6 tracking-wide">
                CATEGORIES
              </h3>

              {/* Checkbox Group */}
              <Checkbox.Group
                value={selected}
                onChange={onChange}
                className="flex flex-col gap-3"
              >
                {categories.map((cat) => (
                  <Checkbox key={cat} value={cat}>
                    <span className="text-gray-400 text-lg pl-2 hover:text-white transition">
                      {cat}
                    </span>
                  </Checkbox>
                ))}
              </Checkbox.Group>
            </div>
          </aside>

          {/* Products */}
          <div className="md:col-span-3">
            {/* Top Bar */}
            <div className="flex justify-end items-center mb-4 text-lg text-gray-400">
              <span>Showing {products.length} products</span>
            </div>

            {/* Grid */}
            <div className="flex flex-wrap justify-between gap-11">
              {products.map((item, index) => (
                <div
                  key={index}
                  className="bg-neutral-900 rounded-[4px] overflow-hidden group w-[350px]"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-[350px] object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Info */}
                  <div className="p-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-sm md:text-xl font-semibold">
                        {item.name}
                      </h3>
                      <span className="text-sm md:text-xl font-semibold tracking-wide text-orange-400">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-xs md:text-[16px] text-gray-400 h-11 my-2">
                      {item.desc}
                    </p>

                    {/* Tags */}
                    <div className="flex gap-2 mt-3">
                      <span className="text-xs font-medium text-white bg-orange-400 text-black px-2 py-1 rounded">
                        SUSTAINABLE
                      </span>
                      <span className="text-xs font-medium text-white bg-orange-400 text-black px-2 py-1 rounded">
                        MULTIPLE COLORS
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;
