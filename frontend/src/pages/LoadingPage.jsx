import React, { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { analyzeCV } from '../api/analyze';
import Header from '../components/Header';

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { interest, file } = location.state || {};
  const hasFetched = useRef(false);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    if (!file) {
      navigate('/form');
      return;
    }

    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        // Kirim file DAN interest ke API khusus CV
        const data = await analyzeCV(file, interest);
        
        setTimeout(() => {
          navigate('/result', { state: { result: data } });
        }, 3000);
      } catch (error) {
        console.error(error);
        setErrorMsg('Terjadi kesalahan. Silakan coba beberapa saat lagi.');
      }
    };

    fetchData();
  }, [interest, file, navigate]);

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header showNav={false} />
      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-32">
        {errorMsg ? (
          <div className="flex flex-col items-center text-center max-w-md animate-in fade-in zoom-in duration-300">
            <div className="w-20 h-20 bg-red-50 text-red-500 rounded-2xl flex items-center justify-center mb-6">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900 mb-4">Analisis Gagal</h2>
            <p className="text-slate-500 font-medium leading-relaxed mb-8">
              {errorMsg}
            </p>
            <button onClick={() => navigate('/form')} className="btn-primary w-full">
              Kembali
            </button>
          </div>
        ) : (
          <>
            <div className="mb-12 flex items-center justify-center">
              <svg className="animate-spin w-24 h-24 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-100" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h2 className="text-3xl font-black text-slate-900 mb-4">Membaca CV Anda...</h2>
            <p className="text-slate-500 text-center max-w-sm font-medium leading-relaxed">
              AI sedang mengekstrak keahlian terbaikmu untuk dicocokkan dengan minat <span className="text-primary font-bold">"{interest}"</span>.
            </p>
          </>
        )}
      </main>
    </div>
  );
};

export default LoadingPage;
