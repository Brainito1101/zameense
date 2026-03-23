import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Register:", form);

    // 👉 later API call
    navigate("/dashboard");
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
          placeholder="Full Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full border p-3 rounded-lg"
        />

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full border p-3 rounded-lg"
        />

        <button className="w-full bg-[#FF9933] text-white py-3 rounded-lg">
          Register
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