import React, { useEffect, useState } from "react";
import axios from "axios";

import HeroSection from "../sections/HeroSection";
import FAQSection from "../sections/FAQSection";
import Contact from "../sections/Contact";
import MapView from "../components/MapView";

const Home = () => {
  const [lands, setLands] = useState([]);

  useEffect(() => {
    axios
      .get("https://zameense123.pythonanywhere.com/api/lands/")
      .then((res) => {
        console.log("DATA:", res.data);
        setLands([
  {
    id: 1,
    price: 500000,
    location: "Ahmedabad",
    property_type: "Plot",
    images: [{ image: "https://via.placeholder.com/300" }]
  }
]);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      {/* 🔥 Hero */}
      <HeroSection />

      {/* 🔥 MAP + LIST SECTION */}
      <div className="h-screen">
        <div className="flex h-full">

          {/* ✅ LEFT MAP */}
          <div className="w-1/2 h-full border-4 border-red-500">
            <MapView />
          </div>

          {/* ✅ RIGHT LIST */}
          <div className="w-1/2 h-full overflow-y-scroll p-4 bg-gray-100">
            {lands.map((land) => (
              <div
                key={land.id}
                className="bg-white p-3 mb-4 rounded-lg shadow"
              >
                <img
                  src={land.images?.[0]?.image}
                  alt="land"
                  className="h-40 w-full object-cover rounded"
                />

                <h2 className="font-bold text-lg mt-2">
                  ₹ {land.price}
                </h2>

                <p className="text-gray-600">{land.location}</p>
                <p className="text-sm">{land.property_type}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* 🔥 Other Sections */}
      <FAQSection />
      <Contact />
    </>
  );
};

export default Home;