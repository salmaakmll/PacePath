import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const FormPage = () => {
  const navigate = useNavigate();
  const [interest, setInterest] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert('Mohon upload file CV PDF Anda.');
      return;
    }
    if (!interest.trim()) {
      alert('Mohon isi Area Minat agar hasil lebih akurat.');
      return;
    }
    
    navigate('/loading', { state: { interest, file } });
  };

  return (
    <div className="h-screen overflow-hidden bg-surface-bg flex flex-col">
      <Header showNav={false} />
      
      <main className="flex-1 flex items-center justify-center p-6 pb-12">
        <div className="w-full max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
            <div className="px-10 pt-8 pb-4">
              <h1 className="text-3xl font-black text-slate-900 mb-2">Analisis Karier AI</h1>
              <p className="text-slate-500 font-medium">Upload CV Anda dan beri tahu kami minat karier Anda.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="px-10 pb-8 space-y-6">
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900">
                  Upload CV (Wajib PDF)
                </label>
                <label className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-xl cursor-pointer transition-all ${file ? 'border-primary bg-primary/5' : 'border-slate-200 bg-[#f8f9fc] hover:border-primary/40'}`}>
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <div className={`w-12 h-12 mb-2 rounded-2xl flex items-center justify-center ${file ? 'bg-primary text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                        <polyline points="14 2 14 8 20 8"></polyline>
                        <line x1="12" y1="18" x2="12" y2="12"></line>
                        <line x1="9" y1="15" x2="15" y2="15"></line>
                      </svg>
                    </div>
                    <p className="text-base font-bold text-slate-700">
                      {file ? file.name : 'Pilih file PDF CV Anda'}
                    </p>
                    <p className="text-sm text-slate-400 mt-1">
                      {file ? 'File siap dianalisis' : 'Drag & drop atau klik untuk mencari'}
                    </p>
                  </div>
                  <input type="file" className="hidden" accept=".pdf" onChange={(e) => setFile(e.target.files[0])} />
                </label>
              </div>

              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900">
                  Apa Minat atau Impian Kariermu?
                </label>
                <input
                  type="text"
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="Contoh: Digital Marketing, Software Engineer, UI/UX Designer..."
                  className="w-full px-6 py-5 bg-[#f8f9fc] border-2 border-transparent rounded-xl focus:bg-white focus:border-primary outline-none transition-all font-medium text-slate-700 text-lg shadow-sm"
                  required
                />
                <p className="text-xs text-slate-400 font-medium pl-2">
                  *AI akan mencocokkan isi CV Anda dengan minat ini.
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full btn-primary py-5 rounded-xl text-xl font-bold group shadow-lg shadow-primary/20"
                >
                  Analisis Karier Saya
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormPage;
