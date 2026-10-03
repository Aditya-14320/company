import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent successfully!');
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Whether you have a question about our services, internships, or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-primary text-xl mt-1 mr-4" />
                <div>
                  <h4 className="font-semibold">Our Office</h4>
                  <p className="text-gray-600">Indrapuri C Sector<br />Near Croma, Bhopal</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-primary text-xl mr-4" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p className="text-gray-600">1800-880-220</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary text-xl mr-4" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p className="text-gray-600">hello@adyvanta.website</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input type="text" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Email</label>
                <input type="email" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input type="text" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea rows="4" required className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
