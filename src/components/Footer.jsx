export default function Footer() {
    return (
      <footer className="bg-blue-600 text-white mt-16">
        <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold">FirstAccessLogistics</h2>
            <p className="mt-2 text-gray-200">
              Reliable and fast logistics services to get your package delivered on time.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="mt-2">📍 123 Logistics Street, Lagos, Nigeria</p>
            <p>📧 support@firstaccesslogistics.com</p>
            <p>📞 +234 800 123 4567</p>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="border-t border-gray-400 text-center py-4 text-sm">
          &copy; {new Date().getFullYear()} FirstAccessLogistics. All rights reserved.
        </div>
      </footer>
    );
  }