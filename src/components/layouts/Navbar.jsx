import logo from "../../assets/images/logo.png";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const menuItems = [
  
  { label: "Home", path: "/" },
  { label: "Buy Land", path: "/buy-land" },

 
];


export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<nav className="bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-200 sticky top-0 z-50">

  <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

    {/* LEFT: LOGO */}
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Zameense" className="h-7" />
    </Link>

    {/* CENTER: MENU */}
    <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
      {menuItems.map((item, index) => (
        <li key={index} className="relative group cursor-pointer">
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

    {/* RIGHT: BUTTONS */}
    <div className="flex items-center gap-4">

      {/* LOGIN */}
      <button
        onClick={() => navigate("/login")}
        className="border border-[#FF9933] text-[#FF9933] px-4 py-2 rounded-lg font-medium hover:bg-orange-50 transition"
      >
        Login
      </button>

      {/* SELL LAND */}
      <button
        onClick={() => navigate("/sell-land")}
        className="bg-[#FF9933] hover:bg-[#E67300] text-white px-5 py-2 rounded-lg font-medium shadow hover:scale-105 transition"
      >
        Sell Land
      </button>

      {/* MOBILE MENU */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>

    </div>

  </div>

  {/* MOBILE MENU */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-300 ${
      open ? "max-h-[500px]" : "max-h-0"
    }`}
  >
    <ul className="flex flex-col gap-5 bg-white px-6 py-6 shadow-md">
      {menuItems.map((item, index) => (
        <li key={index} className="text-gray-700 hover:text-[#FF9933]">
          <Link to={item.path}>{item.label}</Link>
        </li>
      ))}

      <button
        onClick={() => navigate("/sell-land")}
        className="bg-[#FF9933] text-white py-2 rounded-full"
      >
        Post Your Land
      </button>
    </ul>
  </div>

</nav>
  );
}