import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-16 border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="text-2xl font-black text-white tracking-tight flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg"></div>
              TechNova
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 leading-relaxed">
              We empower businesses with cutting-edge digital solutions and nurture the next generation of tech leaders through hands-on internships.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/internships" className="hover:text-white transition-colors">Internships</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/verify" className="hover:text-primary transition-colors text-primary font-medium">Verify Certificate</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Contact Info</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Indrapuri C Sector</li>
              <li>Near Croma, Bhopal</li>
              <li className="pt-2">
                <a href="mailto:hello@technova.com" className="text-white hover:text-primary transition-colors">hello@technova.com</a>
              </li>
              <li>
                <a href="tel:1800880220" className="text-white hover:text-primary transition-colors">1800-880-220</a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TechNova IT Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
