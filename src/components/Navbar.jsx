import  { useState, useEffect } from "react";
import { Menu, X, Ship, Search, User, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { 
      name: "Services", 
      href: "/services",
      dropdown: [
        { name: "Ocean Freight", href: "/services" },
        { name: "Air Freight", href: "/services/" },
        { name: "Land Transportation", href: "/services" },
        { name: "Warehousing", href: "/services" },
        { name: "Customs Clearance", href: "/services" }
      ]
    },
    { name: "Track Shipment", href: "/track" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contactus" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = (itemName) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <>
      {/* Main navbar */}
      <nav className={`fixed w-full left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-2" 
          : "bg-white py-4"
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12  rounded-full flex items-center justify-center shadow-md">
             <img src="blueanchor.png" className="rounded-lg" />
            </div>
            <div className="text-blue-900">
              <div className="font-bold text-xl tracking-tight">BlueAnchor</div>
              <div className="text-xs text-blue-600 font-medium">Global Logistics</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="flex items-center px-4 py-2 text-blue-900 hover:text-blue-600 transition-colors duration-200 text-sm font-medium rounded-lg hover:bg-blue-50"
                  onMouseEnter={() => item.dropdown && toggleDropdown(item.name)}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown size={16} className="ml-1 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {/* Dropdown menu */}
                {item.dropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2"
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <div className="pt-2">
                      <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Auth buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <button className="text-blue-900 px-5 py-2.5 rounded-full font-medium hover:text-blue-600 transition-colors duration-200 flex items-center">
              <User size={18} className="mr-2" />
              Login
            </button>
            <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2.5 rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-xl border-t border-blue-100 transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}>
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <a
                  href={item.href}
                  className="flex items-center justify-between py-3 px-4 text-blue-900 hover:bg-blue-50 rounded-lg transition-colors duration-200 text-base font-medium"
                  onClick={() => !item.dropdown && setIsMenuOpen(false)}
                >
                  <div className="flex items-center">
                    {item.name}
                  </div>
                  {item.dropdown && (
                    <button onClick={() => toggleDropdown(item.name)}>
                      <ChevronDown size={18} className={`transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </a>
                
                {/* Mobile dropdown */}
                {item.dropdown && activeDropdown === item.name && (
                  <div className="pl-10 pr-4 pb-2 space-y-2">
                    {item.dropdown.map((dropdownItem) => (
                      <a
                        key={dropdownItem.name}
                        href={dropdownItem.href}
                        className="block py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors duration-200"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {dropdownItem.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            <div className="pt-4 border-t border-gray-100 mt-4 space-y-3">
              <button className="w-full flex items-center justify-center text-blue-900 border border-blue-200 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors duration-200">
                <User size={18} className="mr-2" />
                Login
              </button>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-full font-medium hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Add some spacing for the fixed navbar */}
      <div className="h-24 md:h-28"></div>
    </>
  );
};

export default Navbar;