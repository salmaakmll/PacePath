import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen overflow-hidden bg-surface-bg flex flex-col">
      <Header />

      <main className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center relative">
        
        <div className="relative mb-6">
          {/* Glow Effect moved to be around the badge */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#99acff] rounded-full blur-3xl opacity-60 z-0 pointer-events-none"></div>
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-full bg-white/60 border border-slate-200/60 shadow-sm backdrop-blur-sm relative z-10">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
            <span className="text-sm font-bold text-slate-700">AI-Powered Career Advisor</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-900 mb-8 leading-[1.05] tracking-tight relative z-10">
          Temukan Jalur Karier <br />
          <span className="text-[#2563EB]">
            Terbaikmu
          </span> dengan AI
        </h1>

        <p className="text-xl text-slate-500 max-w-2xl mb-12 leading-relaxed font-medium">
          PacePath membantu mahasiswa & fresh graduate Indonesia mencocokkan keahlian mereka dengan pekerjaan impian. Cepat, tepat, dan gratis.
        </p>

        <button
          onClick={() => navigate('/form')}
          className="btn-primary text-lg py-5 px-12 rounded-[1.5rem] hover:-translate-y-1"
        >
          Mulai Analisis Sekarang
        </button>

        {/* Features / Stats */}
        <div className="mt-8 flex flex-wrap justify-center gap-8 md:gap-12">
          {[
            {
              label: 'Roles',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              )
            },
            {
              label: 'Personalized Roadmap',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              )
            },
            {
              label: 'IDR Salaries',
              icon: (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              )
            }
          ].map((stat, i) => (
            <div key={i} className="flex items-center space-x-3 text-slate-400 font-bold text-sm tracking-wide">
              <span className="opacity-70">{stat.icon}</span>
              <span className="uppercase tracking-[0.05em]">{stat.label}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
