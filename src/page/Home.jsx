import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import trackingData from "../data/trackingData";
import Bacground from "../assets/image/Detailsbackground.png";

export default function Home() {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingInfo, setTrackingInfo] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setTrackingInfo(null);

    const trimmedCode = trackingCode.trim();

    if (!trimmedCode) {
      setError("Please enter a tracking ID to continue.");
      return;
    }

    // Allow both raw and uppercase tracking IDs
    const result =
      trackingData[trimmedCode] || trackingData[trimmedCode.toUpperCase()];

    if (result) {
      setTrackingInfo(result);
    } else {
      setError("Invalid tracking code. Please check and try again.");
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-14 px-4 bg-[#5A3A23] text-white">
        <h1 className="text-4xl font-bold mt-12 mb-4">
          Fast & Reliable Logistics
        </h1>
        <p className="text-lg max-w-xl">
          Track your package easily and enjoy fast delivery services with
          FirstAccessLogistics.
        </p>
      </div>

      {/* Tracking Section */}
      <div
        className="flex-1 flex flex-col items-center px-4 py-12 w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Bacground})` }}
      >
        <div className="w-full max-w-5xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-[#F3C9A6]/70 px-4 py-8 md:px-8 md:py-10 mt-10 mb-10">
          {/* Section header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-[#103248] mb-2">
              Track Your Package
            </h2>
            <p className="text-sm md:text-base text-[#7A5F4A] max-w-xl mx-auto">
              Enter your tracking ID to view the latest status, sender and
              receiver details, and the full journey of your shipment.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
            {/* Form card */}
            <div className="bg-white rounded-2xl shadow-md p-5 md:p-6 border border-[#F3C9A6]/70">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="tracking-code"
                    className="block text-sm font-medium text-[#5A3A23] mb-1.5"
                  >
                    Tracking ID
                  </label>
                  <input
                    id="tracking-code"
                    type="text"
                    placeholder="e.g. FAL-9H2L5Q7R"
                    value={trackingCode}
                    onChange={(e) => setTrackingCode(e.target.value)}
                    className="w-full rounded-lg border border-[#E2B289] bg-[#FFF9F2] px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#1F6FBF]/70 focus:border-[#1F6FBF]"
                  />
                  <p className="mt-1 text-[11px] text-[#7A5F4A]">
                    You can find this ID in your shipment confirmation email or
                    receipt.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-[#1F6FBF] py-2.5 text-sm font-semibold text-white hover:bg-[#4FA3E4] transition-colors"
                >
                  Track package
                </button>
              </form>

              {error && (
                <p className="mt-3 text-xs text-red-600 bg-red-50 border border-red-100 rounded-lg px-3 py-2">
                  {error}
                </p>
              )}
            </div>

            {/* Result card */}
            <div className="bg-white rounded-2xl shadow-md p-5 md:p-6 border border-[#F3C9A6]/70 min-h-[220px]">
              {!trackingInfo && !error && (
                <div className="flex h-full items-center justify-center">
                  <p className="text-sm text-[#7A5F4A] text-center">
                    Tracking details will appear here once you enter a valid
                    tracking ID.
                    
                  </p>
                </div>
              )}

              {trackingInfo && (
                <div className="space-y-5">
                  {/* Top: status + code */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <p className="text-[11px] uppercase tracking-wide text-[#7A5F4A]">
                        Current status
                      </p>
                      <p className="mt-1 inline-flex items-center rounded-full bg-[#E6F1FF] px-3 py-1 text-xs font-semibold text-[#1F6FBF]">
                        {trackingInfo.status}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-[11px] uppercase tracking-wide text-[#7A5F4A]">
                        Tracking ID
                      </p>
                      <p className="text-sm font-semibold text-[#5A3A23]">
                        {trackingInfo.trackingId || trackingCode.trim()}
                      </p>
                      {trackingInfo.serviceType && (
                        <p className="text-[11px] text-[#7A5F4A] mt-0.5">
                          {trackingInfo.serviceType}
                        </p>
                      )}
                    </div>
                  </div>

                  <hr className="border-[#F3C9A6]/70" />

                  {/* Sender / Receiver / Location / ETA */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                    {/* Sender */}
                    {(trackingInfo.senderName || trackingInfo.senderAddress) && (
                      <div>
                        <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                          Sender
                        </p>
                        {trackingInfo.senderName && (
                          <p className="font-medium text-[#5A3A23]">
                            {trackingInfo.senderName}
                          </p>
                        )}
                        {trackingInfo.senderAddress && (
                          <p className="text-xs text-[#7A5F4A] mt-0.5">
                            {trackingInfo.senderAddress}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Receiver */}
                    {(trackingInfo.receiverName ||
                      trackingInfo.receiverAddress ||
                      trackingInfo.RecieverName) && (
                        <div>
                          <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                            Receiver
                          </p>
                          <p className="font-medium text-[#5A3A23]">
                            {trackingInfo.receiverName ||
                              trackingInfo.RecieverName ||
                              "—"}
                          </p>
                          {trackingInfo.receiverAddress && (
                            <p className="text-xs text-[#7A5F4A] mt-0.5">
                              {trackingInfo.receiverAddress}
                            </p>
                          )}
                        </div>
                      )}

                    {/* Current location */}
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Current location
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingInfo.currentLocation}
                      </p>
                    </div>

                    {/* Next stop */}
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Next stop
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingInfo.nextStop}
                      </p>
                    </div>

                    {/* ETA */}
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Estimated delivery
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingInfo.eta}
                      </p>
                    </div>

                    {/* Last updated */}
                    {trackingInfo.lastUpdated && (
                      <div>
                        <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                          Last updated
                        </p>
                        <p className="font-medium text-[#5A3A23]">
                          {trackingInfo.lastUpdated}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Journey timeline */}
                  {trackingInfo.history && trackingInfo.history.length > 0 && (
                    <div className="mt-4 border-t border-[#F3C9A6]/70 pt-4">
                      <p className="text-xs uppercase tracking-wide text-[#7A5F4A] mb-3">
                        Shipment journey
                      </p>
                      <div className="space-y-4">
                        {trackingInfo.history.map((step, index) => {
                          const isLast =
                            index === trackingInfo.history.length - 1;
                          const isActive = step.status === "In progress";
                          const isCompleted = step.status === "Completed";

                          return (
                            <div key={index} className="flex gap-3">
                              {/* Line + dot */}
                              <div className="flex flex-col items-center">
                                <div
                                  className={`w-3 h-3 rounded-full border-2
                                    ${isActive
                                      ? "border-[#1F6FBF] bg-[#1F6FBF]"
                                      : ""
                                    }
                                    ${isCompleted
                                      ? "border-[#4FA3E4] bg-[#4FA3E4]"
                                      : ""
                                    }
                                    ${!isActive && !isCompleted
                                      ? "border-[#C48653] bg-[#FFF6EB]"
                                      : ""
                                    }
                                  `}
                                />
                                {!isLast && (
                                  <div className="flex-1 w-px bg-[#F3C9A6] mt-1 mb-[-4px]" />
                                )}
                              </div>

                              {/* Text */}
                              <div className="flex-1">
                                <p className="text-sm font-semibold text-[#5A3A23]">
                                  {step.location}
                                </p>
                                <p className="text-xs text-[#7A5F4A] mt-0.5">
                                  {step.description}
                                </p>
                                <p className="text-[11px] text-[#C48653] mt-0.5">
                                  {step.timestamp}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
