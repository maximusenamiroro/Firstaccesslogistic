import { Link } from "react-router-dom";

export default function Footer() {
    return (
      <footer className="bg-[#F3C9A6] text-white">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold text-[#4A3A32]">FirstAccessLogistics</h2>
            <p className="mt-2 text-[#4A3A32]">
              Reliable and fast logistics services to get your package delivered on time.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg text-[#4A3A32] font-semibold">Quick Links</h3>
          <Link to="/" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">About</Link>
          <Link to="/service" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Service</Link>
          <Link to="/contact" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Contact</Link>
          </div>
  
          {/* Contact Info */}
         
        </div>
  
        {/* Copyright Section */}
        <div className="border-t border-gray-400 text-center text-[#4A3A32] py-4 text-sm">
          &copy; {new Date().getFullYear()} FirstAccessLogistics. All rights reserved.
        </div>
      </footer>
    );
  }