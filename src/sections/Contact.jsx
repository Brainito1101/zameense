import React from "react";

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      
      <h2 className="text-3xl font-bold text-center mb-12">
        Contact Us
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-4">

        {/* LEFT INFO */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold">Get in touch</h3>

          <p className="text-gray-600">
            Have questions? We're here to help you buy or sell land easily.
          </p>

          <div className="space-y-3 text-gray-700">
            <p>📞 +91 9876543210</p>
            <p>📧 info@zameense.com</p>
            <p>📍 Ahmedabad, India</p>
          </div>

          <button className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition">
            WhatsApp Us
          </button>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
          
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          />

          <input
            type="text"
            placeholder="Phone / WhatsApp"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          />

          <textarea
            placeholder="Your Message"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-orange-400"
          ></textarea>

          <button className="w-full bg-[#FF9933] hover:bg-[#E67300] text-white py-3 rounded-lg font-medium shadow">
            Send Message
          </button>
        </div>

      </div>
    </section>
  );
};

export default Contact;
