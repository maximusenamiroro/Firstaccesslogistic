import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Background from "../assets/image/Detailsbackground.png";


export default function About() {
  const values = [
  {
    title: "Innovation",
    description:
      "We embrace new technologies and continuously improve our processes to offer smarter, faster, and more efficient logistics solutions that keep our clients ahead in a fast-moving world.",
  },
  {
    title: "Integrity",
    description:
      "We operate with full transparency, honesty, and respect. Every shipment, communication, and business decision is handled with the highest ethical standards to build trust that lasts.",
  },
  {
    title: "Excellence",
    description:
      "From customer service to delivery, we strive for perfection in every detail. Our commitment to excellence ensures reliability, consistency, and the best possible experience for our clients.",
  },
];



  return (
    <div>
      <Navbar />

      <div
        className="flex flex-col items-center px-4 py-12 w-full min-h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${Background})` }}
      >
        {/* Header Section */}
        <header className="text-center mt-6 mb-12 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-[rgba(2,1,16,0.59)]">
    At First Access Logistics, we’re passionate about providing reliable and innovative logistics solutions
    that empower businesses and individuals. Our goal is to combine efficiency, technology, and trust to
    deliver exceptional logistics and supply chain experiences.
  </p>
        </header>

        {/* Mission / Values Section */}
        <main className="flex-grow container mx-auto px-4 mb-12 grid gap-6 md:grid-cols-3 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md pt-24 px-4 hover:shadow-xl transition-shadow duration-300 text-center"
            >
              <h2 className="text-2xl font-semibold mb-2">{value.title}</h2>
              <p className="text-gray-700">{value.description}</p>
            </div>
          ))}
        </main>

    
      </div>

      <Footer />
    </div>
  );
}
