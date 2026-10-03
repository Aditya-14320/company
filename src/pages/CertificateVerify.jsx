import { useState } from 'react';
import { FaCheckCircle, FaTimesCircle, FaSearch, FaSpinner, FaDownload } from 'react-icons/fa';
import { db } from '../firebase/config';
import { collection, query, where, getDocs } from 'firebase/firestore';

const CertificateVerify = () => {
  const [certId, setCertId] = useState('');
  const [verificationResult, setVerificationResult] = useState(null); // null | 'success' | 'error'
  const [certData, setCertData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e) => {
    e.preventDefault();
    if (!certId.trim()) return;

    setLoading(true);
    setVerificationResult(null);
    setCertData(null);

    try {
      const q = query(collection(db, "certificates"), where("certId", "==", certId.trim().toUpperCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        // Found the cert
        const docSnap = querySnapshot.docs[0];
        setCertData(docSnap.data());
        setVerificationResult('success');
      } else {
        setVerificationResult('error');
      }
    } catch (error) {
      console.error("Error verifying certificate:", error);
      setVerificationResult('error');
    } finally {
      setLoading(false);
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
                placeholder="e.g. ADYVANTA2026" 
                required
                className="w-full p-4 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-gray-900 font-medium" 
              />
              <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="mt-6 w-full flex items-center justify-center bg-primary text-white py-3 px-6 rounded-full font-semibold hover:bg-rose-700 transition-colors shadow-md disabled:bg-rose-400"
            >
              {loading ? <FaSpinner className="animate-spin mr-2" /> : 'Verify Now'}
            </button>
          </form>

          {/* Result Area */}
          {verificationResult === 'success' && certData && (
            <div className="p-6 bg-green-50 border border-green-200 rounded-xl animate-fade-in text-left">
              <div className="text-center">
                <FaCheckCircle className="text-4xl text-green-500 mx-auto mb-3" />
                <h3 className="text-xl font-bold text-green-800 mb-1">Certificate Verified!</h3>
                <p className="text-green-700 mb-4">This is a valid certificate.</p>
              </div>
              <div className="mt-4 text-sm text-green-800 space-y-2 bg-white p-4 rounded border border-green-100 mb-4">
                <p><span className="font-semibold w-24 inline-block text-green-600">ID:</span> {certData.certId}</p>
                <p><span className="font-semibold w-24 inline-block text-green-600">Issued To:</span> {certData.studentName}</p>
                <p><span className="font-semibold w-24 inline-block text-green-600">Course/Role:</span> {certData.course}</p>
                <p><span className="font-semibold w-24 inline-block text-green-600">Issue Date:</span> {certData.issueDate}</p>
              </div>
              
              {certData.fileUrl && (
                <div className="text-center">
                  <a 
                    href={certData.fileUrl} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center justify-center bg-green-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-green-700 transition-colors shadow-md"
                  >
                    <FaDownload className="mr-2" /> View Certificate Document
                  </a>
                </div>
              )}
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
