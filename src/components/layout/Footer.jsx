import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-14 md:py-20 border-t border-white/10">
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">SAFARI</h2>
          <p className="text-sm mb-4">
            Defining the intersection of performance and luxury for the modern explorer.
            From the city to the summit.
          </p>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">SHOP</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">All Footwear</li>
            <li className="hover:text-white cursor-pointer">New Arrivals</li>
            <li className="hover:text-white cursor-pointer">Limited Edition</li>
            <li className="hover:text-white cursor-pointer">Care Products</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Privacy Policy</li>
            <li className="hover:text-white cursor-pointer">Terms of Service</li>
            <li className="hover:text-white cursor-pointer">Shipping & Returns</li>
            <li className="hover:text-white cursor-pointer">Contact Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-sm font-semibold mb-4">DISPATCH</h3>
          <p className="text-sm mb-4">
            Join the expedition list for early access drops.
          </p>

          <div className="flex items-center bg-white/10 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="EMAIL ADDRESS"
              className="bg-transparent px-3 py-2 text-sm outline-none w-full text-white placeholder-gray-500"
            />
            <button className="px-3 text-orange-400 hover:text-white transition">
              {/* <ArrowRight size={18} /> */}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/10 pt-6 text-lg text-gray-500 gap-4">
        <p>© 2026 EQUIP EXPEDITIONS. ALL RIGHTS RESERVED.</p>

        <div className="flex text-sm gap-6 tracking-widest">
          <span>STAY WILD</span>
          <span>KEEP MOVING</span>
          <span>RESPECT THE EARTH</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;