import { useState } from 'react';

const jobList = [
  { id: 1, title: 'Senior Frontend Developer', type: 'Full-time', experience: '3+ Years' },
  { id: 2, title: 'SEO Specialist', type: 'Full-time', experience: '2+ Years' },
  { id: 3, title: 'UI/UX Designer', type: 'Contract', experience: '1+ Years' },
];

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '', email: '', phone: '', experience: '', position: '', resume: null
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
    console.log('Job Application Submitted:', formData);
    alert('Job Application submitted successfully!');
    // TODO: Send to Firebase & EmailJS
  };

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Careers at <span className="text-primary">Adyvanta</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our team of passionate tech professionals and build solutions that matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Opportunities List */}
          <div>
            <h2 className="text-2xl font-semibold mb-6">Current Openings</h2>
            <div className="space-y-4">
              {jobList.map(job => (
                <div key={job.id} className="bg-white p-5 rounded-lg shadow-sm border border-gray-200">
                  <h3 className="text-xl font-bold text-primary mb-1">{job.title}</h3>
                  <div className="text-sm text-gray-500 mb-2">
                    <span className="mr-4">Type: {job.type}</span>
                    <span>Experience: {job.experience}</span>
                  </div>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">Years of Experience</label>
                <input type="number" name="experience" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position Applied For</label>
                <select name="position" required onChange={handleChange} className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select a position</option>
                  {jobList.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
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

export default Careers;
