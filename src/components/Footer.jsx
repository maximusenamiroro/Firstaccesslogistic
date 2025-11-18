export default function Footer() {
    return (
      <footer className="bg-[#F3C9A6] text-white">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-[#C48653] text-[#4A3A32]">Home</a></li>
              <li><a href="#" className="hover:text-[#C48653] text-[#4A3A32]">About</a></li>
              <li><a href="#" className="hover:text-[#C48653] text-[#4A3A32]">Services</a></li>
              <li><a href="#" className="hover:text-[#C48653] text-[#4A3A32]">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg text-[#4A3A32] font-semibold">Contact Us</h3>
            <p className="mt-2 text-[#4A3A32]">📍 123 Logistics Street, Lagos, Nigeria</p>
            <p className="text-[#4A3A32]">📧 support@firstaccesslogistics.com</p>
            <p className="text-[#4A3A32]">📞 +234 800 123 4567</p>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="border-t border-gray-400 text-center text-[#4A3A32] py-4 text-sm">
          &copy; {new Date().getFullYear()} FirstAccessLogistics. All rights reserved.
        </div>
      </footer>
    );
  }