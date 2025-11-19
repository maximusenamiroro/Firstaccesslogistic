import { useState } from "react";
import trackingData from "../data/trackingData";

export default function Tracking() {
  const [trackingCode, setTrackingCode] = useState("");
  const [trackingResult, setTrackingResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setTrackingResult(null);

    const trimmedCode = trackingCode.trim();

    if (!trimmedCode) {
      setError("Please enter a tracking ID to continue.");
      return;
    }

    const result =
      trackingData[trimmedCode] || trackingData[trimmedCode.toUpperCase()];

    if (result) {
      setTrackingResult(result);
    } else {
      setError("We couldn’t find any shipment with this tracking ID.");
    }
  };

  return (
    <section className="min-h-screen w-full flex items-center justify-center bg-[#FFF6EB] px-4 py-16">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-sm uppercase tracking-[0.2em] text-[#7A5F4A]">
            Shipment Tracking
          </p>
          <h1 className="mt-2 text-3xl md:text-4xl font-bold text-[#5A3A23]">
            Track your delivery in real time
          </h1>
          <p className="mt-3 text-sm md:text-base text-[#7A5F4A] max-w-xl mx-auto">
            Enter your tracking ID to see the current status, route history, and
            estimated delivery date of your shipment.
          </p>
        </div>

        {/* Layout: Form + Result */}
        <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)] items-start">
          {/* Form card */}
          <div className="bg-white shadow-lg rounded-2xl p-5 md:p-6 border border-[#F3C9A6]/60">
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
                  placeholder="e.g. 123456"
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
          <div className="bg-white shadow-lg rounded-2xl p-5 md:p-6 border border-[#F3C9A6]/60 min-h-[220px]">
            {!trackingResult && !error && (
              <div className="flex h-full items-center justify-center">
                <p className="text-sm text-[#7A5F4A] text-center">
                  Tracking details will appear here once you enter a valid
                  tracking ID.
                  <span className="block mt-1 text-xs text-[#C48653]">
                    Try using <code>123456</code> or <code>789101</code> as
                    sample IDs.
                  </span>
                </p>
              </div>
            )}

            {trackingResult && (
              <div className="space-y-5">
                {/* Top: status + code */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] uppercase tracking-wide text-[#7A5F4A]">
                      Current status
                    </p>
                    <p className="mt-1 inline-flex items-center rounded-full bg-[#E6F1FF] px-3 py-1 text-xs font-semibold text-[#1F6FBF]">
                      {trackingResult.status}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-[11px] uppercase tracking-wide text-[#7A5F4A]">
                      Tracking ID
                    </p>
                    <p className="text-sm font-semibold text-[#5A3A23]">
                      {trackingResult.trackingId || trackingCode.trim()}
                    </p>
                    {trackingResult.serviceType && (
                      <p className="text-[11px] text-[#7A5F4A] mt-0.5">
                        {trackingResult.serviceType}
                      </p>
                    )}
                  </div>
                </div>

                <hr className="border-[#F3C9A6]/70" />

                {/* Sender / Receiver / Location / ETA */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
                  {/* Sender */}
                  {trackingResult.senderName && (
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Sender
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingResult.senderName}
                      </p>
                      {trackingResult.senderAddress && (
                        <p className="text-xs text-[#7A5F4A] mt-0.5">
                          {trackingResult.senderAddress}
                        </p>
                      )}
                    </div>
                  )}

                  {/* Receiver */}
                  {trackingResult.receiverName && (
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Receiver
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingResult.receiverName}
                      </p>
                      {trackingResult.receiverAddress && (
                        <p className="text-xs text-[#7A5F4A] mt-0.5">
                          {trackingResult.receiverAddress}
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
                      {trackingResult.currentLocation}
                    </p>
                  </div>

                  {/* Next stop */}
                  <div>
                    <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                      Next stop
                    </p>
                    <p className="font-medium text-[#5A3A23]">
                      {trackingResult.nextStop}
                    </p>
                  </div>

                  {/* ETA */}
                  <div>
                    <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                      Estimated delivery
                    </p>
                    <p className="font-medium text-[#5A3A23]">
                      {trackingResult.eta}
                    </p>
                  </div>

                  {/* Last updated */}
                  {trackingResult.lastUpdated && (
                    <div>
                      <p className="text-[11px] uppercase text-[#7A5F4A] mb-0.5">
                        Last updated
                      </p>
                      <p className="font-medium text-[#5A3A23]">
                        {trackingResult.lastUpdated}
                      </p>
                    </div>
                  )}
                </div>

                {/* Journey timeline */}
                {trackingResult.history &&
                  trackingResult.history.length > 0 && (
                    <div className="mt-4 border-t border-[#F3C9A6]/70 pt-4">
                      <p className="text-xs uppercase tracking-wide text-[#7A5F4A] mb-3">
                        Shipment journey
                      </p>
                      <div className="space-y-4">
                        {trackingResult.history.map((step, index) => {
                          const isLast =
                            index === trackingResult.history.length - 1;
                          const isActive = step.status === "In progress";
                          const isCompleted = step.status === "Completed";

                          return (
                            <div key={index} className="flex gap-3">
                              {/* Line + dot */}
                              <div className="flex flex-col items-center">
                                <div
                                  className={`w-3 h-3 rounded-full border-2
                                    ${
                                      isActive
                                        ? "border-[#1F6FBF] bg-[#1F6FBF]"
                                        : ""
                                    }
                                    ${
                                      isCompleted
                                        ? "border-[#4FA3E4] bg-[#4FA3E4]"
                                        : ""
                                    }
                                    ${
                                      !isActive && !isCompleted
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
    </section>
  );
}
