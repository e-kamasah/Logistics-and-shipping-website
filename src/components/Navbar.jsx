import { useState } from "react";
import logoImage from '/blueanchor.jpg';
import { Menu, X } from "lucide-react";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Track Shipment", href: "/track" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="fixed bg-white left-0 right-0 z-20 flex items-center justify-between p-4 md:p-6">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <img
          src={logoImage}
          alt="BlueAnchor Logo"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="text-black">
          <div className="font-bold text-lg">BlueAnchor</div>
        </div>
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="text-black hover:text-blue-200 transition-colors duration-200 text-sm font-medium"
          >
            {item.name}
          </a>
        ))}
        <button className="bg-white text-black px-6 py-2 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
          Login
        </button>
        <button className="border border-white text-blue-900 px-6 py-2 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
          Register
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden text-black p-2"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm z-30 border-t border-blue-700">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-black hover:text-blue-200 transition-colors duration-200 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="pt-4 space-y-3">
              <button className="w-full text-black border-black bg-blue-100 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
                Login
              </button>
              <button className="w-full   bg-blue-100 text-black px-6 py-3 rounded-full font-medium hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Register
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;