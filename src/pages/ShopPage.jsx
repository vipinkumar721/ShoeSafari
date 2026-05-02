import React from "react";

const products = [
  {
    name: "Vanguard Scout",
    price: "$320",
    desc: "Heavy-duty weather-resistant gear.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    name: "Sahara Rover",
    price: "$210",
    desc: "Lightweight mesh with reinforced sole.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    name: "Kalahari Elite",
    price: "$440",
    desc: "Full-grain buffalo leather boots.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552",
  },
];

const ShopPage = () => {
  return (
    <section className="bg-black text-white px-6 md:px-16 py-12 md:py-20">
      
      {/* Header */}
      <div className="mb-10">
        <p className="text-xs tracking-widest text-orange-400 mb-2">
          EQUIPMENT FOR THE UNCHARTED
        </p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          All Terrain Gear
        </h1>
        <p className="text-gray-400 max-w-xl text-sm md:text-base">
          High-performance footwear engineered for rugged landscapes.
          Tested in the wild, crafted for the journey.
        </p>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <aside className="md:col-span-1 space-y-8">
          
          {/* Categories */}
          <div>
            <h3 className="text-sm font-semibold mb-4">CATEGORIES</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Expedition Boots</li>
              <li className="hover:text-white cursor-pointer">Safari Runners</li>
              <li className="hover:text-white cursor-pointer">Tech Sandals</li>
              <li className="hover:text-white cursor-pointer">Heritage Leather</li>
            </ul>
          </div>

          {/* Size */}
          <div>
            <h3 className="text-sm font-semibold mb-4">SIZE</h3>
            <div className="flex flex-wrap gap-2">
              {["EU 40", "EU 41", "EU 42", "EU 43", "EU 44"].map((size) => (
                <button
                  key={size}
                  className="px-3 py-1 border border-gray-600 text-xs rounded hover:bg-white hover:text-black transition"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="md:col-span-3">
          
          {/* Top Bar */}
          <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
            <span>Showing {products.length} products</span>
            <span>SORT BY: Newest Arrival</span>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((item, index) => (
              <div
                key={index}
                className="bg-neutral-900 rounded-xl overflow-hidden group"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[250px] object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Info */}
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold">
                      {item.name}
                    </h3>
                    <span className="text-orange-400 text-sm">
                      {item.price}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {item.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex gap-2 mt-3">
                    <span className="text-[10px] px-2 py-1 bg-white/10 rounded">
                      ECO MATERIAL
                    </span>
                    <span className="text-[10px] px-2 py-1 bg-white/10 rounded">
                      COLORS
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopPage;