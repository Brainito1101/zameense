import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Login:", form);

    // 👉 later API call
    navigate("/Dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-full max-w-md space-y-4"
      >

        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>

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
          Login
        </button>

        <p className="text-sm text-center">
          Don’t have account?
          <span
            onClick={() => navigate("/Register")}
            className="text-[#FF9933] cursor-pointer"
          >
            Register
          </span>
        </p>

      </form>
    </div>
  );
};

export default Login;