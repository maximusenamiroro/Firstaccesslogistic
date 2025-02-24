export default function Navbar() {
    return (
      <nav className="bg-gery-200 text-black shadow-md w-full">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold">FirstAccessLogistics</a>
  
          {/* Navigation */}
          <div className="space-x-6">
            <a href="#" className="hover:text-gray-300">Home</a>
            <a href="#" className="hover:text-gray-300">About</a>
            <a href="#" className="hover:text-gray-300">Services</a>
            <a href="#" className="hover:text-gray-300">Contact</a>
          </div>
        </div>
      </nav>
    );
  }