import { useState } from "react";
import trackingData from "../data/trackingData"; // Import your tracking data

export default function Tracking() {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents form submission from refreshing the page
    setError(""); // Clear previous errors

    if (!trackingCode.trim()) {
      setError("Please enter a valid tracking code.");
      return;
    }

    // Check if the tracking code exists in trackingData
    const result = trackingData[trackingCode];

    if (result) {
      setTrackingResult(result);
    } else {
      setTrackingResult(null);
      setError("Tracking code not found.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Track Your Package</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-lg w-80">
        <input
          type="text"
          placeholder="Enter Tracking Code"
          value={trackingCode}
          onChange={(e) => setTrackingCode(e.target.value)}
          className="border p-2 rounded w-full mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Track Package
        </button>
      </form>

      {/* Display Tracking Result */}
      {trackingResult && (
        <div className="mt-4 bg-white p-4 shadow rounded-lg w-80">
          <h2 className="text-xl font-bold text-gray-800">Tracking Details</h2>
          <p><strong>Current Location:</strong> {trackingResult.currentLocation}</p>
          <p><strong>Status:</strong> {trackingResult.status}</p>
          <p><strong>Next Stop:</strong> {trackingResult.nextStop}</p>
          <p><strong>Estimated Delivery:</strong> {trackingResult.eta}</p>
        </div>
      )}

      {/* Display Error */}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}