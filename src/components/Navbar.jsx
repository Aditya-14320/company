import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-black text-gray-900 tracking-tight flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
          TechNova
        </Link>
        <div className="hidden md:flex space-x-8 text-gray-600 font-medium items-center">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
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
      </div>
    </nav>
  );
};

export default Navbar;
