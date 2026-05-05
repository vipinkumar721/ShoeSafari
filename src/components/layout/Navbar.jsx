import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "" },
  { label: "Products", to: "/products" },
  { label: "Contact Us", to: "" },
];

const ICON_ACTIONS = [
  { Icon: Search, label: "Search", to: "" },
  { Icon: ShoppingBag, label: "Bag", to: "/cart" },
  { Icon: User, label: "Account", to: "" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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
          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-1">
            {ICON_ACTIONS.map(({ Icon, label, to }) => (
              <Tooltip key={label} title={label}>
                <Link to={to}>
                  <Button
                    className="!bg-transparent !border-none hover:scale-110 transition"
                    style={{ color: "#f0ece4" }}
                  >
                    <Icon size={20} />
                  </Button>
                </Link>
              </Tooltip>
            ))}
          </div>

          {/* MOBILE ICONS */}
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
          maxHeight: menuOpen ? "400px" : "0px",
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
                  style={{
                    display: "block",
                    padding: "14px 24px",
                    color: isActive ? "#e8734a" : "#f0ece4",
                    fontWeight: 600,
                  }}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          <li>
            <Link
              to="/account"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 24px",
                color: "#f0ece4",
              }}
            >
              <User size={18} />
              Account
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
