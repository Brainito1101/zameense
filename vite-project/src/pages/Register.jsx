import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await API.post("register/", {
        username: form.email,
        email: form.email,
        password: form.password,
        first_name: form.name
      });

      if (res.data?.access) {
        localStorage.setItem("token", res.data.access);
      }
      navigate("/dashboard");

    } catch (err) {
      alert(
        err.response?.data?.detail ||
        err.response?.data?.email?.[0] ||
        err.response?.data?.password?.[0] ||
        JSON.stringify(err.response?.data) ||
        "Registration failed ❌"
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Create Account
        </h2>

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-3 rounded-lg"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-3 rounded-lg"
          required
        />

        <button disabled={loading} className="w-full bg-[#FF9933] text-white py-3 rounded-lg">
          {loading ? "Registering..." : "Register"}
        </button>

        <p className="text-sm text-center">
          Already have account?
          <span
            onClick={() => navigate("/login")}
            className="text-[#FF9933] cursor-pointer"
          >
            Login
          </span>
        </p>

      </form>
    </div>
  );
};

export default Register;