import React, { useState, useEffect } from "react";
import { Tooltip, Button, Popover } from "antd";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "" },
  { label: "Products", to: "/products" },
  { label: "Contact Us", to: "" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  
  const profileContent = (
    <div className="min-w-[130px]">
      <p className="font-semibold text-sm">
        Profile: {user?.displayName || "User"}
      </p>
      <p className="text-sm text-gray-500 mb-3">
        {user?.email}
      </p>

      <button
        onClick={handleLogout}
        className="w-full bg-[#e8734a] cursor-pointer text-white py-1 rounded hover:opacity-90"
      >
        Sign Out
      </button>
    </div>
  );

  return (
    <nav className="bg-[#1a1208]">
      <div className="max-w-[1750px] m-auto flex items-center justify-between h-20 px-6 md:px-12">

        {/* LOGO */}
        <div
          onClick={() => navigate("/")}
          className="cursor-pointer text-2xl text-[#e8734a] tracking-widest font-extrabold"
        >
          LOGO
        </div>

        {/* DESKTOP LINKS */}
        <ul className="hidden md:flex items-center gap-14">
          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;

            return (
              <li key={label}>
                <Link
                  to={to}
                  className="relative font-semibold pb-1"
                  style={{
                    color: isActive ? "#e8734a" : "#f0ece4",
                  }}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                      background: "#e8734a",
                      width: isActive ? "100%" : "0%",
                    }}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-4">

          {/* DESKTOP */}
          <div className="hidden md:flex items-center gap-1">

            <Tooltip title="Search">
              <Link to="/">
                <Button className="!bg-transparent !border-none hover:scale-110" style={{ color: "#f0ece4" }}>
                  <Search size={20} />
                </Button>
              </Link>
            </Tooltip>

            <Tooltip title="Cart">
              <Link to="/cart">
                <Button className="!bg-transparent !border-none hover:scale-110" style={{ color: "#f0ece4" }}>
                  <ShoppingBag size={20} />
                </Button>
              </Link>
            </Tooltip>

            {/* PROFILE ICON WITH HOVER */}
            <Popover content={profileContent} trigger="hover" placement="bottom">
              <Button className="!bg-transparent !border-none hover:scale-110" style={{ color: "#f0ece4" }}>
                <User size={20} />
              </Button>
            </Popover>

          </div>

          {/* MOBILE */}
          <div className="flex md:hidden items-center gap-3">
            <Link to="/search">
              <Search size={20} color="#f0ece4" />
            </Link>

            <Link to="/cart">
              <ShoppingBag size={20} color="#f0ece4" />
            </Link>

            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={22} color="#f0ece4" />
              ) : (
                <Menu size={22} color="#f0ece4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        style={{
          maxHeight: menuOpen ? "500px" : "0px",
          overflow: "hidden",
          transition: "0.3s",
          background: "#1a1208",
        }}
      >
        <ul className="flex flex-col">

          {NAV_LINKS.map(({ label, to }) => {
            const isActive = location.pathname === to;

            return (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 font-semibold"
                  style={{
                    color: isActive ? "#e8734a" : "#f0ece4",
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* MOBILE PROFILE SECTION */}
          {user && (
            <li className="px-6 py-3 text-white border-t border-gray-700">
              <p className="font-semibold text-sm">{user.displayName || "User"}</p>
              <p className="text-xs text-gray-400 mb-2">{user.email}</p>

              <button
                onClick={handleLogout}
                className="w-full bg-[#e8734a] py-1 rounded"
              >
                Sign Out
              </button>
            </li>
          )}

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;