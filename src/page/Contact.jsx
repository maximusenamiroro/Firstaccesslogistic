import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Background from "../assets/image/Detailsbackground.png"; // Replace with your own background

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "df68d78f-c6d8-4028-9c90-3ba0834c1483",
          subject: formData.subject,
          sender_name: formData.name,
          sender_email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message. Try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Background Section */}
      <div
        className="flex flex-col items-center justify-center px-4 py-16 w-full flex-grow bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Header */}
        <header className="text-center mt-6 mb-12 max-w-2xl bg-white bg-opacity-5 p-6 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-gray-800 text-lg">
            Have questions or need assistance? Fill out the form below and our team at First Access Logistics
            will get back to you promptly.
          </p>
        </header>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-15 rounded-lg shadow-xl p-10 w-full max-w-2xl grid gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
            className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-colors"
          >
            Send Message
          </button>

          {status && <p className="text-center mt-2 text-gray-700">{status}</p>}
        </form>
      </div>

      <Footer />
    </div>
  );
}
