
import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Buy Land", path: "/buy-land" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  // 🔥 Lock background scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  // 🔥 Detect scroll
 useEffect(() => {
  const handleScroll = () => {
    console.log("scrollY:", window.scrollY); // 👈 ADD THIS
    setScrolled(window.scrollY > 50);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-b border-gray-200 py-2"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between transition-all duration-300">

          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Zameense"
              className={`transition-all duration-300 ${
                scrolled ? "h-5" : "h-7"
              }`}
            />
          </Link>

          {/* DESKTOP MENU */}
          <ul
            className={`hidden md:flex gap-8 font-medium transition-all duration-300 ${
              scrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <Link
                  to={item.path}
                  className="hover:text-[#FF9933] transition"
                >
                  {item.label}
                </Link>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF9933] transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT SECTION */}
          <div className="flex items-center gap-2">

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-4">

              <button
                onClick={() => navigate("/login")}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  scrolled
                    ? "border border-[#FF9933] text-[#FF9933] hover:bg-orange-50"
                    : "bg-white text-[#FF9933]"
                }`}
              >
                Login
              </button>

              <button
                onClick={() => navigate("/sell-land")}
                className={`px-5 py-2 rounded-lg font-medium shadow transition ${
                  scrolled
                    ? "bg-[#FF9933] text-white hover:bg-[#E67300]"
                    : "bg-[#FF9933] text-white"
                }`}
              >
                Sell Land
              </button>

            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setOpen(true)}
            >
              <FiMenu size={26} />
            </button>

          </div>
        </div>
      </nav>

      {/* 🔥 OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-[998]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* 🔥 MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white z-[999] shadow-2xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >

        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <img src={logo} alt="logo" className="h-6" />

          <button onClick={() => setOpen(false)}>
            <FiX size={26} />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col px-6 py-6 gap-6">

          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              onClick={() => setOpen(false)}
              className="text-lg font-medium text-gray-700 hover:text-[#FF9933]"
            >
              {item.label}
            </Link>
          ))}

          {/* BUTTONS */}
          <div className="border-t pt-6 flex flex-col gap-4">

            <button
              onClick={() => {
                navigate("/login");
                setOpen(false);
              }}
              className="w-full border border-[#FF9933] text-[#FF9933] py-2 rounded-lg font-medium"
            >
              Login
            </button>

            <button
              onClick={() => {
                navigate("/sell-land");
                setOpen(false);
              }}
              className="w-full bg-[#FF9933] text-white py-2 rounded-lg font-medium shadow"
            >
              Sell Land
            </button>

          </div>
        </div>
      </div>
    </>
  );
}
```
