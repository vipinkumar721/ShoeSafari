import Navbar from "../../components/layout/Navbar";
import { useAuth } from "../../context/AuthContext";
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { Button } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { Boxes, ShoppingCart, User } from "lucide-react";
import { Package } from "lucide-react";

// const menuItems = [
//   { name: "Inventory", icon: <Boxes size={18} /> },
//   { name: "See Products", icon: <ShoppingCart size={18} /> },
// ];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const auth = getAuth();

  const handleSignout = async () => {
    await signOut(auth);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <aside className="w-[16%] bg-[#121212] text-[#c7a17a] flex flex-col p-4">
          <div className="bg-[#1e1e1e] p-3 rounded-xl flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-white">
              <User size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-white">Admin Panel</p>
              <p className="text-xs text-gray-400">{user?.email}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <button
              onClick={() => navigate("/adminDashboard/product-list")}
              className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] bg-[#2a2a2a] border-r-4 text-white"
            >
              <span>
                <Boxes />
              </span>
              <span className="text-sm font-medium">All Product</span>
            </button>
            <button
              onClick={() => navigate("/adminDashboard/addProduct")}
              className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] bg-[#2a2a2a] border-r-4 border-orange-500 text-white"
            >
              <span>
                <Package />
              </span>
              <span className="text-sm font-medium">Add Product</span>
            </button>
          </div>
        </aside>
        <div className="w-[84%]">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
