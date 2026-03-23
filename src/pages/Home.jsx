import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import HeroSection from "../sections/HeroSection";
import FeaturedListings from "../sections/FeaturedListings";
import FAQSection from "../sections/FAQSection";
import Contact from "../sections/Contact";




const Home = () => {
  const [lands, setLands] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/lands/")
      .then((res) => {
        console.log("DATA:", res.data);
        setLands(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Listings */}
      <FeaturedListings lands={lands} />
        {/* ✅ REFERRAL SECTION */}
      <section className="bg-orange-50 py-16 text-center">

        <h2 className="text-3xl font-bold mb-4">
          Earn Money by Referring Friends 🎉
        </h2>

        <p className="text-gray-600 mb-6">
          Share your referral link and earn rewards when users list land.
        </p>

        <button
          onClick={() => navigate("/referral")}
          className="bg-[#FF9933] hover:bg-[#E67300] text-white px-6 py-3 rounded-lg"
        >
          Refer Now
        </button>

      </section>

      {/* Other Sections */}
      
      <FAQSection />
      <Contact />
    </>
  );
};

export default Home;