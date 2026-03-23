import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BuyLand = () => {
  const navigate = useNavigate();

  const [lands, setLands] = useState([]);
  const [filteredLands, setFilteredLands] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔍 FILTER STATES
  const [location, setLocation] = useState("");
  const [landType, setLandType] = useState("");
  const [sortType, setSortType] = useState("");

  // 📄 PAGINATION
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // 🚀 FETCH DATA
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/lands/")
      .then((res) => {
        setLands(res.data);
        setFilteredLands(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // 🔍 FILTER + SORT
  useEffect(() => {
    let data = [...lands];

    if (location) {
      data = data.filter(item =>
        item.location.toLowerCase().includes(location.toLowerCase())
      );
    }

    if (landType) {
      data = data.filter(item => item.land_type === landType);
    }

    if (sortType === "low") {
      data.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    if (sortType === "high") {
      data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    }

    setFilteredLands(data);
    setCurrentPage(1);
  }, [location, landType, sortType, lands]);

  // 📄 PAGINATION LOGIC
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentLands = filteredLands.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredLands.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">

      {/* 🔍 FILTER BAR */}
      <div className="bg-white p-4 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-4">

        <input
          placeholder="📍 Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        />

        <select
          onChange={(e) => setLandType(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Land Type</option>
          <option>Agricultural</option>
          <option>Residential</option>
          <option>Commercial</option>
        </select>

        <select
          onChange={(e) => setSortType(e.target.value)}
          className="border px-4 py-2 rounded-lg"
        >
          <option value="">Sort</option>
          <option value="low">Price Low → High</option>
          <option value="high">Price High → Low</option>
        </select>

      </div>

      {/* LOADING */}
      {loading && (
        <p className="text-center py-10">Loading lands...</p>
      )}

      {/* EMPTY */}
      {!loading && filteredLands.length === 0 && (
        <p className="text-center py-10">No lands found</p>
      )}

      {/* 🏡 GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {currentLands.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate(`/land/${item.id}`)}
            className="cursor-pointer bg-white rounded-xl shadow hover:shadow-xl transition overflow-hidden"
          >

            <img
              src={item.image}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 space-y-2">

              <h3 className="font-semibold text-lg">{item.title}</h3>

              <p className="text-gray-500 text-sm">📍 {item.location}</p>

              <p className="text-green-700 font-bold">
                ₹{item.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/land/${item.id}`);
                }}
                className="w-full mt-3 bg-[#FF9933] text-white py-2 rounded-lg"
              >
                View Details
              </button>

            </div>
          </div>
        ))}

      </div>

      {/* 📄 PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-10 gap-2 flex-wrap">

          {[...Array(totalPages)].map((_, i) => {
            const page = i + 1;

            return (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 border rounded-lg ${
                  currentPage === page
                    ? "bg-[#FF9933] text-white"
                    : "bg-white"
                }`}
              >
                {page}
              </button>
            );
          })}

        </div>
      )}

    </div>
  );
};

export default BuyLand;