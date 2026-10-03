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
    <div className="py-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Premium IT <span className="text-primary">Services</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            At Adyvanta Technologies, we offer a wide range of specialized IT solutions designed to help your business innovate, grow, and thrive in the digital age.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesList.map(service => (
            <div key={service.id} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
              <div className="w-16 h-16 bg-rose-50 rounded-2xl text-primary flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300 mx-auto">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
