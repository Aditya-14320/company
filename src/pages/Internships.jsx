import { useState } from 'react';

const internshipsList = [
  { id: 1, title: 'Web Development Intern', duration: '3 Months', location: 'Remote' },
  { id: 2, title: 'Digital Marketing Intern', duration: '6 Months', location: 'Hybrid' },
  { id: 3, title: 'Graphic Design Intern', duration: '3 Months', location: 'Remote' },
];

const Internships = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', college: '', course: '', internshipRole: '', resume: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if(name === 'resume') {
      setFormData({...formData, resume: files[0]});
    } else {
      setFormData({...formData, [name]: value});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Internship Application Submitted:', formData);
    alert('Application submitted successfully!');
    // TODO: Send to Firebase & EmailJS
  };

  return (
    <div className="py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h1 className="text-4xl font-bold text-center mb-12">Internship Opportunities</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Opportunities List */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Available Roles</h2>
            <div className="space-y-4">
              {internshipsList.map(internship => (
                <div key={internship.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-primary mb-1">{internship.title}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="mr-4">Duration: {internship.duration}</span>
                    <span>Location: {internship.location}</span>
                  </div>
                  <p className="text-gray-600 text-sm">Join our team and get hands-on experience working on real-world projects with industry experts.</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h2 className="text-2xl font-semibold mb-6">Apply Now</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" name="fullName" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" name="email" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phone" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">College Name</label>
                <input type="text" name="college" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Course/Degree</label>
                <input type="text" name="course" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Internship Role</label>
                <select name="internshipRole" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a role</option>
                  {internshipsList.map(i => <option key={i.id} value={i.title}>{i.title}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Resume</label>
                <input type="file" name="resume" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" accept=".pdf,.doc,.docx" />
              </div>
              <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition font-semibold">
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internships;
