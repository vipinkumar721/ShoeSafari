import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Outlet, useNavigate } from "react-router-dom";
import { Boxes, User, Package, Menu } from "lucide-react";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menuItems = [
    {
      label: "All Product",
      icon: <Boxes size={18} />,
      path: "/admin/product-list",
    },
    {
      label: "Add Product",
      icon: <Package size={18} />,
      path: "/admin/addProduct",
    },
    {
      label: "Orders",
      icon: <Package size={18} />,
      path: "/admin/orders",
    },
  ];

  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:static z-50 top-0 left-0 h-full
          w-64 bg-[#121212] p-4 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0
        `}
      >
        {/* Profile */}
        <div className="bg-[#1e1e1e] rounded-xl px-4 py-3 flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
            <User size={18} />
          </div>
          <div>
            <p className="text-sm font-semibold">Admin Panel</p>
            <p className="text-xs text-gray-400 break-all">
              {user?.email}
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="flex flex-col gap-2">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => {
                navigate(item.path);
                setSidebarOpen(false);
              }}
              className="flex items-center gap-3 px-3 py-3 rounded-lg cursor-pointer transition-all hover:bg-[#1e1e1e] bg-[#2a2a2a] border-r-4 border-[#d3582b] text-sm"
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        
        {/* Topbar */}
        <div className="md:hidden flex items-center justify-between p-4 bg-[#1e293b]">
          <button onClick={() => setSidebarOpen(true)}>
            <Menu />
          </button>
          <h1 className="text-sm font-semibold">Admin Panel</h1>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;