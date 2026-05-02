import React, { useState } from "react";
import { Tooltip, Button } from "antd";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home" },
  { label: "About" },
  { label: "Products" },
  { label: "Contact Us" },
];

const ICON_ACTIONS = [
  { Icon: Search, label: "Search" },
  { Icon: ShoppingBag, label: "Bag" },
  { Icon: User, label: "Account" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (label) => {
    setActiveLink(label);
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className="sticky top-0 z-50"
        style={{
          background: "#1a1208",
          borderBottom: "1px solid rgba(255,255,255,0.04)",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        <div className="max-w-[1750px] m-auto flex items-center justify-between h-20 px-6 md:px-12">
          <Link
            className="text-2xl tracking-widest font-extrabold select-none flex-shrink-0"
            style={{ color: "#e8734a", fontFamily: "'Montserrat', sans-serif" }}
          >
            LOGO 
          </Link>

          <ul className="hidden md:flex items-center gap-14 list-none m-0 p-0">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  onClick={() => handleLinkClick(label)}
                  className="relative text-md font-semibold tracking-wide pb-1 transition-colors duration-200 no-underline"
                  style={{
                    color: activeLink === label ? "#e8734a" : "#f0ece4",
                    letterSpacing: "0.05em",
                  }}
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 transition-all duration-300"
                    style={{
                      background: "#e8734a",
                      width: activeLink === label ? "100%" : "0%",
                    }}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 flex-shrink-0">
            <div className="hidden md:flex items-center gap-8">
              {ICON_ACTIONS.map(({ Icon, label }) => (
                <Tooltip
                  key={label}
                  title={label}
                  placement="bottom"
                  overlayStyle={{ fontSize: 12 }}
                >
                  <Button
                    className="flex items-center justify-center !px-0 rounded transition-all duration-200 hover:scale-110"
                    style={{
                      color: "#f0ece4",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#e8734a")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "#f0ece4")
                    }
                  >
                    <Icon size={20} strokeWidth={1.8} />
                  </Button>
                </Tooltip>
              ))}
            </div>

            <div className="flex md:hidden items-center gap-3">
              {[
                { Icon: Search, label: "Search" },
                { Icon: ShoppingBag, label: "Bag" },
              ].map(({ Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  style={{
                    color: "#f0ece4",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Icon size={20} strokeWidth={1.8} />
                </button>
              ))}

              <button
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                onClick={() => setMenuOpen((prev) => !prev)}
                style={{
                  color: "#f0ece4",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 0.2s",
                }}
              >
                {menuOpen ? (
                  <X size={22} strokeWidth={1.8} />
                ) : (
                  <Menu size={22} strokeWidth={1.8} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div
          style={{
            overflow: "hidden",
            maxHeight: menuOpen ? "400px" : "0px",
            transition: "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
            background: "#1a1208",
            borderTop: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
          }}
        >
          <ul className="list-none m-0 p-0 flex flex-col">
            {NAV_LINKS.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  onClick={() => handleLinkClick(label)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 24px",
                    color: activeLink === label ? "#e8734a" : "#f0ece4",
                    fontWeight: 600,
                    fontSize: "0.95rem",
                    letterSpacing: "0.05em",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(255,255,255,0.04)",
                    background:
                      activeLink === label
                        ? "rgba(232,115,74,0.08)"
                        : "transparent",
                    transition: "background 0.2s, color 0.2s",
                  }}
                >
                  {label}
                  {activeLink === label && (
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: "#e8734a",
                        display: "inline-block",
                      }}
                    />
                  )}
                </Link>
              </li>
            ))}

            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: 24,
                padding: "14px 24px",
              }}
            >
              <button
                aria-label="Account"
                style={{
                  color: "#f0ece4",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                }}
              >
                <User size={18} strokeWidth={1.8} />
                Account
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
