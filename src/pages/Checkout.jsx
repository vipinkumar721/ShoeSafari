import { useAuth } from "../context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { db } from "../config/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
const cart = useSelector((state) => state.cart.cartItems);
  const { user } = useAuth();
  const navigate = useNavigate();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 450;
  const total = subtotal + shipping;

  const handleOrder = async () => {
    try {
      await addDoc(collection(db, "orders"), {
        userId: user.uid,
        items: cart,
        total,
        createdAt: serverTimestamp(),
      });

      alert("Order placed successfully ✅");
      navigate("/products");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Checkout 💳</h2>

      {cart.map((item) => (
        <div key={item.id} className="border p-3 mb-2">
          {item.name} × {item.quantity}
        </div>
      ))}

      <h3 className="mt-4 font-bold">Total: ₹ {total}</h3>

      <Button
        type="primary"
        className="mt-4"
        onClick={handleOrder}
      >
        Place Order
      </Button>
    </div>
  );
}