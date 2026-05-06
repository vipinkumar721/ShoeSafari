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
        <div className="max-h-[400px] overflow-y-auto !text-black">
          <p className="font-semibold mb-2">
            User ID: {order.userId}
          </p>
          <p className="mb-4">
            Total: ₹{order.total}
          </p>

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
    <div className="min-h-screen bg-[#121212] text-white p-4 sm:p-6">
      
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">ALL ORDERS</h1>
        <p className="text-gray-400 text-xs sm:text-sm">
          NEW ORDERS ADDED
        </p>
      </div>

      {/* Orders List */}
      <div>
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="
              flex flex-col sm:flex-row 
              sm:justify-between sm:items-center 
              text-white bg-[#2a2a2a] rounded-[6px] 
              p-4 mb-3 gap-2 sm:gap-0
            "
          >
            {/* Order Number */}
            <h1 className="sm:w-[20%] font-medium text-sm sm:text-base">
              Order: {index + 1}
            </h1>

            {/* User ID */}
            <h2 className="sm:w-[40%] text-xs sm:text-sm break-all">
              User ID: {order.userId}
            </h2>

            {/* Total */}
            <h4 className="sm:w-[20%] font-semibold text-sm sm:text-base">
              ₹{order.total}
            </h4>

            {/* Button */}
            <Space className="sm:w-[20%] flex sm:justify-end">
              <Button
                className="!bg-[#d3582b] !rounded-[4px] !border-none !text-white !font-semibold hover:bg-orange-600 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
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
