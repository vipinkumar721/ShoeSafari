import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} from "../redux/cartSlice";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { ShoppingBag, Truck, ShieldCheck, X, ChevronLeft } from "lucide-react";

export default function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const total = subtotal;

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto container px-4 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-12 lg:py-16">
        {/* Header */}
        <div className="mb-6 sm:mb-10">
          <p className="text-md text-gray-100 uppercase mb-1">Your Vault</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide">
            TOTAL CART{""}
            <span className="text-orange-400 text-lg sm:text-xl font-semibold">
              ({cartItems.length})
            </span>
          </h1>
        </div>

        {cartItems.length === 0 ? (
          /* ── Empty State ── */
          <div className="flex flex-col items-center justify-center py-24 text-center gap-4">
            <ShoppingBag size={48} className="text-white/10" />
            <p className="text-white/30 text-sm tracking-widest uppercase">
              Your vault is empty
            </p>
            <button
              onClick={() => navigate("/products")}
              className="mt-2 text-xs tracking-[0.2em] uppercase text-orange-400 border border-orange-400/30 px-5 py-2 hover:bg-orange-400/10 transition rounded-sm"
            >
              Explore Products →
            </button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
            {/* ── LEFT: Cart Items ── */}
            <div className="w-full lg:flex-1 space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#111] rounded-[4px] overflow-hidden flex gap-0"
                >
                  {/* Image */}
                  <div
                    className="w-24 sm:w-32 md:w-36 flex-shrink-0 cursor-pointer"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      style={{ minHeight: "110px" }}
                    />
                  </div>

                  {/* Info */}
                  <div className="flex w-full flex-col sm:flex-row sm:items-center justify-between p-3 sm:p-4 md:p-5 gap-3">
                    <div className="flex flex-col">
                      <div>
                        <h3 className="text-sm sm:text-2xl font-semibold pr-2">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-[15px] text-gray-500 mt-1 mb-2">
                        {item.description ||
                          "Engineered for explorers. Built with durability and comfort to handle every terrain."}
                      </p>

                      <span className="border-1 w-[100px] text-center border-gray-600 rounded-[4px] px-2 py-1">
                        {item.category}
                      </span>

                      {/* Qty controls */}
                      <div className="flex items-center gap-2 mt-3">
                        <button
                          onClick={() => dispatch(decreaseQty(item.id))}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-sm transition"
                        >
                          -
                        </button>
                        <span className="w-6 text-center text-sm font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => dispatch(increaseQty(item.id))}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm text-sm transition"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <div className="flex flex-col justify-between h-full">
                      {/* Price */}
                      <p className="text-base sm:text-lg font-bold text-orange-400 flex-shrink-0 tabular-nums">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>

                      {/* Remove */}
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-white/20 border-1 px-3 py-1 rounded-[4px] hover:text-red-400 transition mt-0.5"
                        aria-label="Remove item"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full flex flex-col justify-end">
                {/* Clear cart */}
                <button
                  onClick={() => dispatch(clearCart())}
                  className="text-[13px] text-end tracking-widest uppercase text-white/50 hover:text-red-400 transition mt-2"
                >
                  Clear Vault
                </button>
              </div>
            </div>

            {/* ── RIGHT: Order Summary ── */}
            <div className="w-full lg:w-[340px] xl:w-[380px] flex-shrink-0">
              <div className="bg-[#111] rounded-[4px] p-5 sm:p-6">
                <h2 className="text-xl tracking-[0.25em] uppercase text-gray-400 mb-5">
                  Order Summary
                </h2>

                {/* Line items */}
                <div className="space-y-3 text-md">
                  <div className="flex justify-between text-gray-400">
                    <span>
                      Subtotal{" "}
                      <span className="text-white/20 text-md">
                        ({cartItems.length} item
                        {cartItems.length > 1 ? "s" : ""})
                      </span>
                    </span>
                    <span className="text-white tabular-nums">
                      ₹{subtotal.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex justify-between text-gray-400">
                    <span>Shipping</span>
                    <span className="text-green-400 text-xs font-semibold tracking-wide">
                      FREE
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/5 my-5" />

                {/* Total */}
                <div className="flex justify-between items-baseline">
                  <span className="text-2xl font-semibold tracking-wide">
                    Total
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-orange-400 tabular-nums">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={() => navigate("/checkout")}
                  className="mt-6 w-full overflow-hidden
                    flex items-center justify-center gap-2
                    py-3.5 rounded-[4px]
                    text-white font-bold text-[14px] tracking-wider uppercase
                    bg-orange-400 cursor-pointer"
                >
                  {/* Shimmer */}
                  <span className="pointer-events-none inset-0" />
                  Order Complete →
                </button>

                {/* Trust badges */}
                <div className="mt-5 space-y-2.5">
                  <div className="flex items-center gap-2.5 text-[13px] text-white/30">
                    <ShieldCheck
                      size={13}
                      className="text-orange-400/60 flex-shrink-0"
                    />
                    Secure encrypted checkout
                  </div>
                  <div className="flex items-center gap-2.5 text-[13px] text-white/30">
                    <Truck
                      size={13}
                      className="text-orange-400/60 flex-shrink-0"
                    />
                    Arrives in 3–5 business days
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/products")}
                className="flex items-center gap-1.5 text-xs tracking-widest text-gray-400 hover:text-white uppercase transition mt-4"
              >
                <ChevronLeft size={13} /> Continue Shopping
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
