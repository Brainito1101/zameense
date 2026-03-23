import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const SellLand = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    whatsapp: "",
    email: "",
    location: "",
    size: "",
    land_type: "",
    price: "",
    description: "",
    image: null,
    website: "" // honeypot (anti-spam)
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [captcha, setCaptcha] = useState(null);

  // 🔄 HANDLE CHANGE
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ VALIDATION
  const validate = () => {
    let newErrors = {};

    if (!formData.full_name) newErrors.full_name = "Full name required";
    if (!formData.phone.match(/^[0-9]{10}$/))
      newErrors.phone = "Invalid phone number";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email";
    if (!formData.location) newErrors.location = "Location required";
    if (!formData.price) newErrors.price = "Price required";

    if (formData.image) {
      if (!["image/jpeg", "image/png"].includes(formData.image.type)) {
        newErrors.image = "Only JPG/PNG allowed";
      }
      if (formData.image.size > 2 * 1024 * 1024) {
        newErrors.image = "Max size 2MB";
      }
    }

    return newErrors;
  };

 // 🚀 SUBMIT
const handleSubmit = (e) => {
  e.preventDefault();

  // ✅ CAPTCHA CHECK
  if (!captcha) {
    alert("Please verify CAPTCHA");
    return;
  }

  // ✅ HONEYPOT CHECK
  if (formData.website) return;

  // ✅ VALIDATION
  const validationErrors = validate();
  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // ✅ SUCCESS
  console.log("FORM DATA:", formData);
  setSubmitted(true);
};
  // 🎉 SUCCESS MESSAGE
  if (submitted) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold text-green-600">
          Thank you! 🎉
        </h2>
        <p className="mt-2 text-gray-600">
          Your land will be reviewed within 24–48 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">

      <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow">

        <h2 className="text-2xl font-bold mb-6 text-center">
          Sell Your Land
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* FULL NAME */}
          <input
            name="full_name"
            placeholder="Full Name"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.full_name}</p>

          {/* PHONE */}
          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.phone}</p>

          {/* WHATSAPP */}
          <input
            name="whatsapp"
            placeholder="WhatsApp Number"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* EMAIL */}
          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.email}</p>

          {/* LOCATION */}
          <input
            name="location"
            placeholder="Location"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.location}</p>

          {/* SIZE */}
          <input
            name="size"
            placeholder="Land Size (e.g. 2 Acre)"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* LAND TYPE */}
          <select
            name="land_type"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          >
            <option value="">Select Land Type</option>
            <option>Agricultural</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>

          {/* PRICE */}
          <input
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <p className="text-red-500 text-sm">{errors.price}</p>

          {/* DESCRIPTION */}
          <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          {/* IMAGE */}
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full"
          />
          <p className="text-red-500 text-sm">{errors.image}</p>

          {/* HONEYPOT (hidden) */}
          <input
            type="text"
            name="website"
            onChange={handleChange}
            className="hidden"
          />
          <ReCAPTCHA
  sitekey="YOUR_SITE_KEY"
  onChange={(value) => setCaptcha(value)}
/>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-[#FF9933] hover:bg-[#E67300] text-white py-3 rounded-lg font-semibold"
          >
            Submit Land
          </button>

        </form>

      </div>
    </div>
  );
};

export default SellLand;