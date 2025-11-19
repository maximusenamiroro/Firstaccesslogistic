const trackingData = {
  "FAL-7G4K9D2P": {
    trackingId: "FAL-7G4K9D2P",
    serviceType: "Express Delivery",
    senderName: "First Access Finance Bank",
    senderAddress: "Sacramento, USA 🇺🇸",
    receiverName: "Gail Ryan",
    receiverAddress: "Summerfield, FL 🇺🇸",

    currentLocation: "Summerfield, FL 🇺🇸",
    status: "In transit",
    nextStop: "Reciever Doorstep",
    eta: "Thu, 20 Nov 2025",
    lastUpdated: "Today • 10:42 AM",

 history: [
  {
    location: "Sacramento, CA – Local Facility",
    description: "Shipment received from sender.",
    status: "Completed",
  },
  {
    location: "Oakland, CA – Regional Hub",
    description: "Package sorted at West Coast hub.",
    status: "Completed",
  },
  {
    location: "Dallas, TX – Transit Hub",
    description: "In transit across the country.",
    status: "Completed",
  },
  {
    location: "Jacksonville, FL – Destination Hub",
    description: "Next stop at Florida distribution center.",
    status: "Completed",
  },
  {
    location: "Ocala, FL – Local Facility",
    description: "Preparing for final delivery to Summerfield.",
    status: "Completed",
  },
  {
    location: "Summerfield, FL",
    description: "Out for delivery to recipient.",
    status: "In progress",
  },
]

  },

  "789101": {
    trackingId: "789101",
    serviceType: "Standard Delivery",
    senderName: "Emily Carter",
    senderAddress: "New York, USA 🇺🇸",
    receiverName: "Daniel Smith",
    receiverAddress: "Toronto, Canada 🇨🇦",

    currentLocation: "New York, USA 🇺🇸",
    status: "Shipped",
    nextStop: "Toronto, Canada 🇨🇦",
    eta: "Sun, 23 Nov 2025",
    lastUpdated: "Yesterday • 05:20 PM",

    history: [
      {
        location: "Brooklyn, New York 🇺🇸",
        description: "Shipment created. Label generated.",
        timestamp: "Sat, 15 Nov 2025 • 11:12 AM",
        status: "Completed",
      },
      {
        location: "NYC Sort Facility 🇺🇸",
        description: "Package received at origin facility.",
        timestamp: "Sat, 15 Nov 2025 • 03:45 PM",
        status: "Completed",
      },
      {
        location: "NYC International Hub 🇺🇸",
        description: "Departed facility. En route to Toronto.",
        timestamp: "Sun, 16 Nov 2025 • 09:10 AM",
        status: "In progress",
      },
      {
        location: "Toronto, Canada 🇨🇦",
        description: "Arrival scan pending.",
        timestamp: "—",
        status: "Pending",
      },
    ],
  },
};

export default trackingData;
