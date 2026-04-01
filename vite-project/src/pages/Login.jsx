import { useNavigate } from "react-router-dom";
import { useState } from "react";
import API from "../services/api";

export default function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("login/", {
        username: form.email,
        password: form.password,
      });

      if (res.data?.access) {
        localStorage.setItem("token", res.data.access);
      }

      navigate("/dashboard");
    } catch (err) {
      alert(
        err.response?.data?.detail ||
          err.response?.data?.non_field_errors ||
          JSON.stringify(err.response?.data) ||
          "Login failed ❌"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-lg w-[300px]"
      >
        <h2 className="text-xl font-bold mb-4 text-center">Login</h2>

        <input
          type="text"
          name="email"
          placeholder="Enter Email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-3 p-2 border rounded-lg"
        />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
          className="w-full mb-4 p-2 border rounded-lg"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#FF9933] text-white py-2 rounded-lg"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-[#FF9933] cursor-pointer"
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
}
