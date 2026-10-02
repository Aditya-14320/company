import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaSearch } from 'react-icons/fa';

const CertificateVerify = () => {
  const [certId, setCertId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null); // null | 'success' | 'error'

  const handleVerify = (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    // TODO: Connect to Firebase to verify actual certificate ID
    // Simulating an API call
    if (certId.trim().toUpperCase() === 'TECHNOVA2026') {
      setVerificationResult('success');
    } else {
      setVerificationResult('error');
    }
  };

  return (
    <div className="py-20 bg-gray-50 min-h-[80vh] flex flex-col items-center justify-center">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Verify Certificate</h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Enter the certificate ID found at the bottom of your document to verify its authenticity.
          </p>

          <form onSubmit={handleVerify} className="max-w-md mx-auto mb-8">
            <div className="relative">
              <input 
                type="text" 
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                placeholder="e.g. TECHNOVA2026" 
                required
                className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 font-medium" 
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button 
              type="submit" 
              className="mt-6 w-full bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-rose-700 transition-colors shadow-md"
            >
              Verify Now
            </button>
          </form>

          {/* Result Area */}
          {verificationResult === 'success' && (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl animate-fade-in">
              <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-800 mb-1">Certificate Verified!</h3>
              <p className="text-green-700">This is a valid certificate issued by TechNova.</p>
              <div className="mt-4 text-sm text-green-600 space-y-1">
                <p><span className="font-semibold">Issued To:</span> John Doe</p>
                <p><span className="font-semibold">Course/Role:</span> Web Development Intern</p>
                <p><span className="font-semibold">Issue Date:</span> October 2, 2026</p>
              </div>
            </div>
          )}

          {verificationResult === 'error' && (
            <div className="p-6 bg-red-50 border border-red-200 rounded-xl animate-fade-in">
              <FaTimesCircle className="text-4xl text-red-500 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-red-800 mb-1">Verification Failed</h3>
              <p className="text-red-700">No matching certificate found. Please check your ID and try again.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default CertificateVerify;
