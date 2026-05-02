import { useState } from "react";
import {
  Search,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  LogOut,
  Settings,
  Package,
  Heart,
  Shield,
} from "lucide-react";
import {
  Drawer,
  Avatar,
  Tag,
  Divider,
  Badge,
  Tooltip,
  ConfigProvider,
  theme,
} from "antd";

/* ─────────────────────────────────────────
   Ant Design dark theme token override
───────────────────────────────────────── */
const antdTheme = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorBgElevated: "#1f1610",
    colorBorder: "rgba(255,255,255,0.08)",
    colorText: "#f0ece4",
    colorTextSecondary: "#9c9080",
    borderRadiusLG: 0,
    fontFamily: "'Barlow', sans-serif",
  },
  components: {
    Drawer: {
      colorBgElevated: "#1a1208",
      paddingLG: 0,
    },
  },
};

/* ─────────────────────────────────────────
   Static data
───────────────────────────────────────── */
const NAV_LINKS = [
  { label: "Footwear", href: "#" },
  { label: "Heritage", href: "#" },
  { label: "Expeditions", href: "#" },
  { label: "Sustainability", href: "#" },
];

const USER = {
  name: "Marcus Veld",
  email: "marcus.veld@equip.com",
  phone: "+91 98765 43210",
  location: "Chandigarh, India",
  memberSince: "March 2021",
  tier: "Summit",
  orders: 24,
  wishlist: 7,
  points: 4850,
  avatar: null, // use initials fallback
};

const RECENT_ORDERS = [
  { id: "#EQ-8821", item: "Ridgeline GTX Boot", status: "Delivered", color: "success" },
  { id: "#EQ-8744", item: "Alpine Trail Mid", status: "Shipped", color: "processing" },
  { id: "#EQ-8601", item: "Summit Sandal Pro", status: "Processing", color: "warning" },
];

/* ─────────────────────────────────────────
   Profile Drawer
───────────────────────────────────────── */
function ProfileDrawer({ open, onClose }) {
  return (
    <ConfigProvider theme={antdTheme}>
      <Drawer
        open={open}
        onClose={onClose}
        placement="right"
        width={380}
        closable={false}
        styles={{
          body: { padding: 0, background: "#1a1208" },
          mask: { backdropFilter: "blur(4px)", background: "rgba(0,0,0,0.6)" },
          header: { display: "none" },
          wrapper: { boxShadow: "-4px 0 40px rgba(0,0,0,0.6)" },
        }}
      >
        {/* ── Header band ── */}
        <div
          className="relative h-28 flex items-end px-6 pb-4"
          style={{
            background:
              "linear-gradient(135deg, #2a1a08 0%, #3d2510 50%, #1a1208 100%)",
          }}
        >
          {/* subtle grain overlay */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")",
            }}
          />
          {/* Close btn */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-[#9c9080] hover:text-[#e8734a] transition-colors p-1"
          >
            <X size={18} />
          </button>

          {/* Avatar + name */}
          <div className="flex items-end gap-4 relative z-10">
            <div className="relative">
              <Avatar
                size={64}
                style={{
                  background: "linear-gradient(135deg, #e8734a, #c4522e)",
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 700,
                  fontSize: 22,
                  border: "2px solid rgba(232,115,74,0.4)",
                  flexShrink: 0,
                }}
              >
                MV
              </Avatar>
              <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-500 border-2 border-[#1a1208]" />
            </div>
            <div>
              <p
                className="text-[#f0ece4] font-bold tracking-wide leading-tight"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 16 }}
              >
                {USER.name}
              </p>
              <Tag
                style={{
                  background: "rgba(232,115,74,0.15)",
                  border: "1px solid rgba(232,115,74,0.35)",
                  color: "#e8734a",
                  fontFamily: "'Barlow', sans-serif",
                  fontWeight: 600,
                  fontSize: 10,
                  letterSpacing: "0.12em",
                  marginTop: 4,
                  padding: "0 8px",
                }}
              >
                ⛰ {USER.tier} Member
              </Tag>
            </div>
          </div>
        </div>

        {/* ── Stats row ── */}
        <div
          className="grid grid-cols-3 border-b"
          style={{ borderColor: "rgba(255,255,255,0.07)" }}
        >
          {[
            { label: "Orders", value: USER.orders, icon: Package },
            { label: "Wishlist", value: USER.wishlist, icon: Heart },
            { label: "Points", value: USER.points.toLocaleString(), icon: Shield },
          ].map(({ label, value, icon: Icon }) => (
            <button
              key={label}
              className="flex flex-col items-center py-5 gap-1 hover:bg-white/5 transition-colors group"
            >
              <Icon
                size={16}
                className="text-[#9c9080] group-hover:text-[#e8734a] transition-colors"
              />
              <span
                className="text-[#f0ece4] font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: 18 }}
              >
                {value}
              </span>
              <span
                className="text-[#6b6050] uppercase tracking-widest"
                style={{ fontSize: 9 }}
              >
                {label}
              </span>
            </button>
          ))}
        </div>

        {/* ── Contact info ── */}
        <div className="px-6 py-5">
          <p
            className="text-[#6b6050] uppercase tracking-widest mb-4"
            style={{ fontSize: 10, fontFamily: "'Barlow', sans-serif" }}
          >
            Account Details
          </p>
          {[
            { icon: Mail, text: USER.email },
            { icon: Phone, text: USER.phone },
            { icon: MapPin, text: USER.location },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-3 mb-4">
              <Icon size={14} className="text-[#e8734a] flex-shrink-0" />
              <span
                className="text-[#9c9080]"
                style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13 }}
              >
                {text}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-3">
            <Shield size={14} className="text-[#e8734a]" />
            <span
              className="text-[#9c9080]"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13 }}
            >
              Member since {USER.memberSince}
            </span>
          </div>
        </div>

        <Divider style={{ borderColor: "rgba(255,255,255,0.07)", margin: "0 0" }} />

        {/* ── Recent orders ── */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <p
              className="text-[#6b6050] uppercase tracking-widest"
              style={{ fontSize: 10, fontFamily: "'Barlow', sans-serif" }}
            >
              Recent Orders
            </p>
            <button className="text-[#e8734a] flex items-center gap-1 hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, letterSpacing: "0.05em" }}
            >
              View all <ChevronRight size={12} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {RECENT_ORDERS.map((order) => (
              <div
                key={order.id}
                className="flex items-center justify-between p-3 rounded transition-colors hover:bg-white/5 cursor-pointer"
                style={{ background: "rgba(255,255,255,0.03)" }}
              >
                <div>
                  <p
                    className="text-[#f0ece4] mb-1"
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: 13,
                      fontWeight: 600,
                    }}
                  >
                    {order.item}
                  </p>
                  <p
                    className="text-[#6b6050]"
                    style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11 }}
                  >
                    {order.id}
                  </p>
                </div>
                <Badge
                  status={order.color}
                  text={
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: 11,
                        color: "#9c9080",
                      }}
                    >
                      {order.status}
                    </span>
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <Divider style={{ borderColor: "rgba(255,255,255,0.07)", margin: "0 0" }} />

        {/* ── Footer actions ── */}
        <div className="px-6 py-5 flex flex-col gap-2">
          <button
            className="flex items-center gap-3 w-full px-4 py-3 rounded text-left transition-colors hover:bg-white/5"
            style={{ background: "rgba(255,255,255,0.02)" }}
          >
            <Settings size={15} className="text-[#9c9080]" />
            <span
              className="text-[#9c9080]"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500 }}
            >
              Account Settings
            </span>
            <ChevronRight size={13} className="text-[#6b6050] ml-auto" />
          </button>
          <button
            className="flex items-center gap-3 w-full px-4 py-3 rounded text-left transition-colors hover:bg-red-950/30 group"
          >
            <LogOut size={15} className="text-[#9c9080] group-hover:text-red-400 transition-colors" />
            <span
              className="text-[#9c9080] group-hover:text-red-400 transition-colors"
              style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 500 }}
            >
              Sign Out
            </span>
          </button>
        </div>
      </Drawer>
    </ConfigProvider>
  );
}

/* ─────────────────────────────────────────
   Main Navbar
───────────────────────────────────────── */
export default function EquipNavbar() {
  const [activeLink, setActiveLink] = useState("Footwear");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Barlow:wght@400;500;600&display=swap');
      `}</style>

      {/* ── Sticky Navbar ── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between h-16 px-12 border-b"
        style={{
          background: "#1a1208",
          borderColor: "rgba(255,255,255,0.04)",
          fontFamily: "'Barlow', sans-serif",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          className="text-xl tracking-widest font-extrabold select-none flex-shrink-0"
          style={{ color: "#e8734a", fontFamily: "'Montserrat', sans-serif" }}
        >
          EQUIP
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-9 list-none m-0 p-0">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => { e.preventDefault(); setActiveLink(label); }}
                className="relative text-sm font-semibold tracking-wide pb-1 transition-colors duration-200 no-underline"
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
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Icons */}
        <div className="hidden md:flex items-center gap-5 flex-shrink-0">
          {[
            { Icon: Search, label: "Search", onClick: undefined },
            { Icon: ShoppingBag, label: "Bag", onClick: undefined },
            { Icon: User, label: "Account", onClick: () => setProfileOpen(true) },
          ].map(({ Icon, label, onClick }) => (
            <Tooltip key={label} title={label} placement="bottom"
              overlayStyle={{ fontFamily: "'Barlow', sans-serif", fontSize: 12 }}
            >
              <button
                aria-label={label}
                onClick={onClick}
                className="flex items-center justify-center p-1 rounded transition-all duration-200 hover:scale-110"
                style={{ color: "#f0ece4", background: "none", border: "none", cursor: "pointer" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#e8734a")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#f0ece4")}
              >
                <Icon size={20} strokeWidth={1.8} />
              </button>
            </Tooltip>
          ))}
        </div>

        {/* Mobile: icons + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setProfileOpen(true)}
            aria-label="Account"
            style={{ color: "#f0ece4", background: "none", border: "none", cursor: "pointer" }}
          >
            <User size={20} strokeWidth={1.8} />
          </button>
          <button
            onClick={() => setMobileOpen((p) => !p)}
            aria-label="Toggle menu"
            style={{ color: "#f0ece4", background: "none", border: "none", cursor: "pointer" }}
          >
            {mobileOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </nav>

      {/* ── Mobile Drawer ── */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: mobileOpen ? 320 : 0,
          background: "#1a1208",
          borderBottom: mobileOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <ul className="list-none m-0 p-0 px-6">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(label);
                  setMobileOpen(false);
                }}
                className="flex items-center justify-between py-4 no-underline border-b transition-all duration-200"
                style={{
                  color: activeLink === label ? "#e8734a" : "#f0ece4",
                  borderColor: "rgba(255,255,255,0.06)",
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: 15,
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  paddingLeft: activeLink === label ? 8 : 0,
                }}
              >
                {label}
                <ChevronRight size={14} style={{ color: "#6b6050" }} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile icon row */}
        <div className="flex items-center gap-5 px-6 py-4">
          {[Search, ShoppingBag].map((Icon, i) => (
            <button
              key={i}
              style={{ color: "#9c9080", background: "none", border: "none", cursor: "pointer" }}
            >
              <Icon size={18} strokeWidth={1.8} />
            </button>
          ))}
        </div>
      </div>

      {/* ── Profile Drawer ── */}
      <ProfileDrawer open={profileOpen} onClose={() => setProfileOpen(false)} />
    </>
  );
}