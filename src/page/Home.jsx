import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trackingData from "../data/trackingData"; // Import tracking data

export default function Home() {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (trackingData[trackingCode]) {
      setTrackingInfo(trackingData[trackingCode]);
      setError("");
    } else {
      setTrackingInfo(null);
      setError("Invalid tracking code. Please try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-14 px-4 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Fast & Reliable Logistics</h1>
        <p className="text-lg max-w-xl">
          Track your package easily and enjoy fast delivery services with FirstAccessLogistics.
        </p>
      </div>

      {/* Tracking Section */}
      <div className="flex flex-col items-center mt-10 px-4 py-12">
        <h2 className="text-2xl font-bold mb-4">Track Your Package</h2>
        <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-full max-w-md">
          <input
            type="text"
            placeholder="Enter Tracking Code"
            value={trackingCode}
            onChange={(e) => setTrackingCode(e.target.value)}
            className="border p-3 rounded w-full mb-4"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 w-full font-semibold"
          >
            Track Package
          </button>
        </form>

        {/* Display Tracking Result */}
        {trackingInfo && (
          <div className="mt-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-md">
            <h3 className="text-xl font-bold mb-2">Tracking Details</h3>
            <p><strong>Current Location:</strong> {trackingInfo.currentLocation}</p>
            <p><strong>Status:</strong> {trackingInfo.status}</p>
            <p><strong>Next Stop:</strong> {trackingInfo.nextStop}</p>
            <p><strong>ETA:</strong> {trackingInfo.eta}</p>
          </div>
        )}

        {/* Display Error Message */}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}