import { FaLaptopCode, FaMobileAlt, FaBullhorn, FaSearch, FaPaintBrush, FaShareAlt, FaPencilRuler, FaShoppingCart } from 'react-icons/fa';

const servicesList = [
  { id: 1, title: 'Website Development', description: 'Custom, responsive websites built with the latest technologies.', icon: <FaLaptopCode /> },
  { id: 2, title: 'App Development', description: 'Native and cross-platform mobile applications for iOS and Android.', icon: <FaMobileAlt /> },
  { id: 3, title: 'Digital Marketing', description: 'Comprehensive marketing strategies to boost your brand awareness.', icon: <FaBullhorn /> },
  { id: 4, title: 'SEO Services', description: 'Optimize your website to rank higher and attract organic traffic.', icon: <FaSearch /> },
  { id: 5, title: 'Graphic Design', description: 'Stunning visuals and branding materials tailored to your business.', icon: <FaPaintBrush /> },
  { id: 6, title: 'Social Media Management', description: 'Engage with your audience and grow your social presence.', icon: <FaShareAlt /> },
  { id: 7, title: 'UI/UX Design', description: 'Intuitive and beautiful user interfaces for exceptional experiences.', icon: <FaPencilRuler /> },
  { id: 8, title: 'E-commerce Development', description: 'Robust online stores optimized for sales and performance.', icon: <FaShoppingCart /> },
];

const Services = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-4">Our Services</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          We offer a wide range of IT solutions designed to help your business grow and thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesList.map(service => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition text-center group">
              <div className="text-4xl text-primary mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-500 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
