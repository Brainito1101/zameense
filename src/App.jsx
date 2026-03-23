import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import BuyLand from "./pages/BuyLand";
// import LandDetails from "./pages/LandDetails";
import HeroSection from "./sections/HeroSection";
import Contact from "./sections/Contact"; 
import FeaturedListings from "./sections/FeaturedListings";
import SellLand from "./pages/SellLand";
import Referral from "./pages/Referral";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";


function App() {
  return (
    <BrowserRouter>

      {/* GLOBAL */}
      <Navbar />

      {/* ONLY ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy-land" element={<BuyLand />} />
        {/* <Route path="/land/:id" element={<LandDetails />} /> */}
        <Route path="/land/:id" element={<FeaturedListings />} />
        <Route path="/sell-land" element={<SellLand />} />
        <Route path="/referral" element={<Referral />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      {/* GLOBAL */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
