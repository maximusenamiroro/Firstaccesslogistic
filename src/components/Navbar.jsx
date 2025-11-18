import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md w-full fixed z-50 bg-[#F3C9A6]">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-black">
          FirstAccessLogistics
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-[#C48653] text-[#4A3A32]">Home</Link>
          <Link to="/about" className="hover:text-[#C48653] text-[#4A3A32]">About</Link>
          <Link to="/services" className="hover:text-[#C48653] text-[#4A3A32]">Services</Link>
          <Link to="/contact" className="hover:text-[#C48653] text-[#4A3A32]">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#F3C9A6] shadow-md">
          <Link to="/" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Home</Link>
          <Link to="/about" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">About</Link>
          <Link to="/services" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Services</Link>
          <Link to="/contact" className="block px-4 py-2 hover:text-[#C48653] text-[#4A3A32]">Contact</Link>
        </div>
      )}
    </nav>
  );
}
