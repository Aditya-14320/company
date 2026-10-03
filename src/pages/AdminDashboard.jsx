import { useState, useEffect } from 'react';
import { db, auth } from '../firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { signOut } from 'firebase/auth';

const AdminDashboard = () => {
  const [certId, setCertId] = useState('');
  const [studentName, setStudentName] = useState('');
  const [course, setCourse] = useState('');
  const [issueDate, setIssueDate] = useState('');
  const [certFileUrl, setCertFileUrl] = useState('');
  
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCertificates = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "certificates"));
      const certs = [];
      querySnapshot.forEach((doc) => {
        certs.push({ id: doc.id, ...doc.data() });
      });
      setCertificates(certs);
    } catch (error) {
      console.error("Error fetching certificates: ", error);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleAddCertificate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "certificates"), {
        certId: certId.trim().toUpperCase(),
        studentName,
        course,
        issueDate,
        fileUrl: certFileUrl.trim() // save the provided Drive link
      });

      setCertId(''); setStudentName(''); setCourse(''); setIssueDate(''); setCertFileUrl('');
      fetchCertificates();
      alert("Certificate added successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to add certificate. See console for details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if(window.confirm("Are you sure you want to delete this certificate?")) {
      try {
        await deleteDoc(doc(db, "certificates", id));
        fetchCertificates();
      } catch (error) {
        console.error("Error deleting document: ", error);
      }
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-gray-200 text-gray-800 px-4 py-2 rounded font-medium hover:bg-gray-300 transition-colors">
            Logout
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Internship Applications</h2>
            <div className="space-y-4">
              <p className="text-gray-500 italic">No applications found.</p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-semibold mb-4 text-primary">Job Applications</h2>
            <div className="space-y-4">
              <p className="text-gray-500 italic">No applications found.</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Manage Certificates</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Add Certificate Form */}
            <div>
              <h3 className="text-xl font-medium mb-4">Add New Certificate</h3>
              <form onSubmit={handleAddCertificate} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificate ID</label>
                  <input type="text" value={certId} onChange={e => setCertId(e.target.value)} required className="mt-1 w-full p-2 border rounded" placeholder="e.g. ADYVANTA2026" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Student Name</label>
                  <input type="text" value={studentName} onChange={e => setStudentName(e.target.value)} required className="mt-1 w-full p-2 border rounded" placeholder="e.g. John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Course / Role</label>
                  <input type="text" value={course} onChange={e => setCourse(e.target.value)} required className="mt-1 w-full p-2 border rounded" placeholder="e.g. Web Development Intern" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Issue Date</label>
                  <input type="date" value={issueDate} onChange={e => setIssueDate(e.target.value)} required className="mt-1 w-full p-2 border rounded" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Certificate Link (e.g. Google Drive)</label>
                  <input 
                    type="url" 
                    value={certFileUrl}
                    onChange={e => setCertFileUrl(e.target.value)} 
                    placeholder="https://drive.google.com/..."
                    className="mt-1 w-full p-2 border rounded bg-white" 
                  />
                </div>
                <button type="submit" disabled={loading} className="w-full bg-primary text-white py-2 px-4 rounded hover:bg-rose-700 transition">
                  {loading ? 'Adding...' : 'Add Certificate'}
                </button>
              </form>
            </div>

            {/* List Certificates */}
            <div>
              <h3 className="text-xl font-medium mb-4">Existing Certificates</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
                {certificates.length === 0 ? (
                  <p className="text-gray-500 italic">No certificates found.</p>
                ) : (
                  certificates.map(cert => (
                    <div key={cert.id} className="p-4 border border-gray-200 rounded flex justify-between items-start">
                      <div>
                        <p className="font-bold text-gray-800">{cert.certId}</p>
                        <p className="text-sm text-gray-600">{cert.studentName} - {cert.course}</p>
                        <p className="text-xs text-gray-400 mt-1">Issued: {cert.issueDate}</p>
                        {cert.fileUrl && (
                          <a href={cert.fileUrl} target="_blank" rel="noreferrer" className="text-sm text-blue-600 hover:underline mt-1 inline-block">
                            View Document
                          </a>
                        )}
                      </div>
                      <button onClick={() => handleDelete(cert.id)} className="text-red-500 hover:text-red-700 text-sm font-medium">Delete</button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default AdminDashboard;
