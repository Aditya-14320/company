import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2" onClick={closeMenu}>
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg shrink-0"></div>
          TechNova
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <Link to="/internships" className="hover:text-primary transition-colors">Internships</Link>
          <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
          <Link to="/verify" className="hover:text-primary transition-colors font-semibold text-primary">Verify</Link>
        </div>
        <div className="hidden md:block">
          <Link to="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-primary transition-colors shadow-sm">
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-600 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 flex flex-col space-y-4 shadow-lg absolute w-full">
          <Link to="/about" className="text-gray-700 font-medium hover:text-primary transition-colors" onClick={closeMenu}>About</Link>
          <Link to="/services" className="text-gray-700 font-medium hover:text-primary transition-colors" onClick={closeMenu}>Services</Link>
          <Link to="/internships" className="text-gray-700 font-medium hover:text-primary transition-colors" onClick={closeMenu}>Internships</Link>
          <Link to="/careers" className="text-gray-700 font-medium hover:text-primary transition-colors" onClick={closeMenu}>Careers</Link>
          <Link to="/verify" className="text-primary font-semibold transition-colors" onClick={closeMenu}>Verify Certificate</Link>
          <Link to="/contact" className="bg-primary text-white text-center py-3 rounded-full font-medium transition-colors" onClick={closeMenu}>
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
