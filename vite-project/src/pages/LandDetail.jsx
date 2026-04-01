import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";

const LandDetail = () => {
  const { id } = useParams();

  const [land, setLand] = useState(null);

  useEffect(() => {
    API.get(`lands/${id}/`)
      .then((res) => {
        setLand(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  if (!land) return <p className="text-center mt-10">Loading...</p>;
console.log("IMAGES:", land.images);
  return (
    <div className="max-w-5xl mx-auto p-6">

      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-4">{land.title}</h1>

      {/* IMAGE */}
      {/* IMAGE */}
<img
  src={
    land.images?.[0]?.image
      ? land.images[0].image.startsWith("http")
        ? land.images[0].image
        : `http://127.0.0.1:8000${land.images[0].image}`
      : "https://dummyimage.com/600x400/cccccc/000000&text=No+Image"
  }
  alt={land.title}
  className="w-full h-80 object-cover rounded-xl mb-6"
  onError={(e) => {
    e.target.src = "https://dummyimage.com/600x400/cccccc/000000&text=Error";
  }}
/>

      {/* DETAILS */}
      <div className="space-y-2">
        <p>📍 {land.location}</p>
        <p>🏷 Type: {land.property_type}</p>
        <p className="text-green-700 font-bold text-xl">₹{land.price}</p>
        <p>📐 Area: {land.area}</p>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">Description</h3>
        <p className="text-gray-600">{land.description}</p>
      </div>

      {/* MAP */}
      <div className="mt-6">
        <h3 className="font-semibold text-lg mb-2">📍 Location Map</h3>

        <iframe
          src={`https://www.google.com/maps?q=${land.location}&output=embed`}
          className="w-full h-64 rounded-lg border"
          loading="lazy"
        />
      </div>

    </div>
  );
};

export default LandDetail;