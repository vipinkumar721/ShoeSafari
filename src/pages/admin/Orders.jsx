import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const querySnapshot = await getDocs(collection(db, "orders"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    };
    fetchOrders();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-[#121212] text-white p-6">
        <div className="mb-6">
          <div>
            <h1 className="text-3xl font-bold">ALL ORDERS</h1>
            <p className="text-gray-400 text-sm">NEW ORDERS ADDED</p>
          </div>
        </div>
        <div>
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex justify-between bg-gray-800 p-3 gap-2"
            >
              <h1>Serial No. {order.index}</h1>
              <h2>User ID: {order.userId}</h2>
              <h4>Total Price: {order.total}</h4>
              {order.items.map((item, index) => (
                <div key={index}>
                  {item.name} X {item.quantity}
                  <div>
                    <img
                      className="w-25 h-25 object-cover"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default Orders;
