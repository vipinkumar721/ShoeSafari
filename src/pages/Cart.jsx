import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, increaseQty, decreaseQty } from "../redux/cartSlice";
import Navbar from "../components/layout/Navbar";

export default function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 450;
  const insurance = 200;
  const total = subtotal + shipping + insurance;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-black text-white p-8">
        {/* Heading */}
        <h1 className="text-3xl font-bold mb-2">Your Cart</h1>
        <p className="text-gray-400 mb-8">Reserved items for your journey.</p>

        <div className="grid grid-cols-3 gap-6">
          {/* LEFT SIDE (Cart Items) */}
          <div className="col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-[#111] p-4 rounded-lg flex justify-between items-center"
              >
                {/* Product Info */}
                <div className="flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-md"
                  />

                  <div>
                    <p className="text-xs text-orange-400 uppercase">
                      Performance Series
                    </p>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-400 text-sm">Premium Gear</p>

                    {/* Qty Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => dispatch(decreaseQty(item.id))}
                        className="px-3 py-1 bg-[#222] rounded"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => dispatch(increaseQty(item.id))}
                        className="px-3 py-1 bg-[#222] rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-gray-400 text-sm ml-3 hover:text-red-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <p className="text-lg font-semibold">
                  ₹ {item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE (Summary) */}
          <div className="bg-[#111] p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₹ {subtotal}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-orange-400">₹ {shipping}</span>
              </div>

              <div className="flex justify-between">
                <span>Insurance</span>
                <span>₹ {insurance}</span>
              </div>
            </div>

            <div className="border-t border-gray-700 my-4"></div>

            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-orange-500">₹ {total}</span>
            </div>

            <Button
              type="primary"
              className="w-full mt-4 !bg-orange-500 !border-none h-10"
            >
              CHECKOUT
            </Button>

            <p className="text-xs text-gray-500 mt-3 text-center">
              Secure checkout guaranteed
            </p>

            <div className="mt-4 bg-[#1a1a1a] text-center p-3 rounded text-sm text-yellow-400">
              Free shipping unlocked 🚀
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
