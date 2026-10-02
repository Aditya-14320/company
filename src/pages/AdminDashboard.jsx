const AdminDashboard = () => {
  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-4xl font-bold text-center mb-12">Admin Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Internship Applications</h2>
            <div className="space-y-4">
              <p className="text-gray-500 italic">No applications found.</p>
              {/* Application Cards will map here */}
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Job Applications</h2>
            <div className="space-y-4">
              <p className="text-gray-500 italic">No applications found.</p>
              {/* Job Application Cards will map here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
