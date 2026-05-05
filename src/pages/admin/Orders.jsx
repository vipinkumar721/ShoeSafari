import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../config/firebase";
import { Button, Modal, Space } from "antd";

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

  
  const info = (order) => {
    Modal.info({
      title: "Order Details",
      content: (
        <div className="max-h-[400px] overflow-y-auto text-white">
          <p className="font-semibold mb-2">
            User ID: {order.userId}
          </p>
          <p className="mb-4">
            Total: ₹{order.total}
          </p>

          {/* ✅ Safe mapping */}
          {order.items?.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 border-b pb-2 mb-2"
            >
              <img
                className="w-16 h-16 object-cover rounded"
                src={item.image}
                alt={item.name}
              />
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-200">
                  Qty: {item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] text-white p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">ALL ORDERS</h1>
        <p className="text-gray-400 text-sm">NEW ORDERS ADDED</p>
      </div>

      <div>
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="flex justify-between items-center text-black bg-white rounded-[6px] p-4 mb-3"
          >
            <h1 className="w-[20%] font-medium">
              Order: {index + 1}
            </h1>

            <h2 className="w-[40%] text-sm">
              User ID: {order.userId}
            </h2>

            <h4 className="w-[20%] font-semibold">
              ₹{order.total}
            </h4>

            <Space className="w-[20%] flex justify-end">
              <Button
                className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300"
                
                // ✅ IMPORTANT FIX
                onClick={() => info(order)}
              >
                View Details
              </Button>
            </Space>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;