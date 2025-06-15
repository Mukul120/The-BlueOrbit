import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Footer from "../components/Footer";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    technology: "",
    visa: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message);
      setFormData({
        name: "",
        email: "",
        phone: "",
        technology: "",
        visa: "",
        location: "",
        message: "",
      });

    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <>
      <div
        className="w-full h-[70vh] bg-cover bg-center relative flex items-center justify-center"
        style={{ backgroundImage: `url('./about.jpeg')` }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-60 z-0"></div>
        <div className="relative z-10 text-white flex flex-col gap-4 items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold capitalize">contact us</h1>
          <div className="flex items-center justify-center font-semibold text-lg">
            <span>Home</span>
            <ChevronRight />
            <span>contact us</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row min-h-screen bg-white justify-center items-center md:my-10 my-5">

        {/* Left Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 text-white p-8 space-y-6 flex flex-col justify-center"
        >
          <div className="space-y-7 bg-blue-700 p-10 rounded-xl">
            <div>
              <p className="text-2xl font-semibold flex gap-3 items-center capitalize">
                <Phone className="w-15 p-2 border text-black bg-white h-15 rounded-full" /> Call Us
              </p>
              <p className="text-lg">+1 307-309-2505</p>
            </div>
            <hr />
            <div>
              <p className="text-xl font-semibold flex gap-3 items-center capitalize">
                <Mail className="w-15 p-2 border text-black bg-white h-15 rounded-full" /> Email
              </p>
              <p className="text-lg">Info@Vision-Xperts.Com</p>
            </div>
            <hr />
            <div>
              <p className="text-xl font-semibold flex items-center gap-3">
                <MapPin className="w-15 p-2 border text-black bg-white h-15 rounded-full" /> Location
              </p>
              <p>1309 Coffeen Ave, WY, 82801</p>
              <p>639 Escon Emporio, Satellite, AMD - 380015</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full md:w-1/2 p-8 text-center space-y-10"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready To Get Started?</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Your Email"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="Phone Number"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="technology"
              value={formData.technology}
              onChange={handleChange}
              required
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Technology</option>
              <option value="FullStack Developer">FullStack Developer</option>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Data Analyst">Data Analyst</option>
              <option value="Business Analyst">Business Analyst</option>
              <option value="Cloud Engineer">Cloud Engineer</option>
              <option value="Data Scientist">Data Scientist</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Java Developer">Java Developer</option>
              <option value="Python Developer">Python Developer</option>
              <option value="DevOps">DevOps</option>
              <option value="Cyber Security">Cyber Security</option>
            </select>

            <input
              name="visa"
              value={formData.visa}
              onChange={handleChange}
              required
              placeholder="Visa Status"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              placeholder="Your Location"
              className="p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Write your message here..."
            className="w-full h-32 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-3 rounded-xl hover:bg-blue-800 transition duration-300 w-full md:w-fit"
          >
            Contact Us
          </button>
        </motion.form>
      </div>
      <Footer />
    </>
  );
};

export default ContactForm;
