import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";
import Home from "./pages/Home";
import BuyLand from "./pages/BuyLand";
import HeroSection from "./sections/HeroSection";
import Contact from "./sections/Contact"; 
// import FeaturedListings from "./sections/FeaturedListings";
import SellLand from "./pages/SellLand";
import Referral from "./pages/Referral";
import Dashboard from "./pages/Dashboard";
import "leaflet/dist/leaflet.css";



function App() {
  return (
    <BrowserRouter>

      {/* GLOBAL */}
      <Navbar />

      {/* ONLY ROUTES */}
      <div className="pt-20">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Buy-Land" element={<BuyLand />} />
        {/* <Route path="/land/:id" element={<LandDetails />} /> */}
        {/* <Route path="/Land/:id" element={<FeaturedListings />} /> */}
        <Route path="/Sell-Land" element={<SellLand />} />
        <Route path="/Referral" element={<Referral />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      
      </Routes>
      </div>
      {/* GLOBAL */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;
