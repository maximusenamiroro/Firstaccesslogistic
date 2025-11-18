import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Bacground from "../assets/image/Detailsbackground.png"

export default function service() {
  const services = [
    {
      title: "Freight Forwarding",
      description: "Fast and secure freight forwarding services locally and internationally.",
    },
    {
      title: "Warehousing",
      description: "Safe and organized storage solutions for all types of goods.",
    },
    {
      title: "Customs Clearance",
      description: "Hassle-free customs clearance for imports and exports.",
    },
    {
      title: "Logistics Consulting",
      description: "Optimize your supply chain and logistics operations.",
    },
  ];

  return (<div>
     <Navbar/>
    <div className="flex flex-col items-center px-4 py-12 w-full min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${Bacground})` }}>
      <header className="text-center mb-8">
        
        <h1 className="text-4xl font-bold mt-21 mb-2">Our Services</h1>
        <p className="text-lg text-gray-800">
          Explore the solutions we offer to help your business succeed.
        </p>
      </header>

      <main className="flex-grow container mx-auto px-12 mb-8 grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-12 hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.title}</h2>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </main>
     
    </div>
    <Footer/>
    </div>
  );
}
