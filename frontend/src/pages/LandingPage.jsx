import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-6 pt-12 pb-24 flex flex-col items-center text-center">
        {/* Floating Sparkle Icon */}
        <div className="mb-12 w-24 h-24 bg-[#eef2ff] rounded-[2.5rem] flex items-center justify-center shadow-sm animate-float">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 3L14.5 9L21 11.5L14.5 14L12 20L9.5 14L3 11.5L9.5 9L12 3Z" stroke="#5243e8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18 16L19 19L22 20L19 21L18 24L17 21L14 20L17 19L18 16Z" fill="#5243e8"/>
          </svg>
        </div>

        <h1 className="text-5xl md:text-[5.5rem] font-black text-slate-900 mb-8 leading-[1.05] tracking-tight">
          Temukan Jalur Karier <br />
          <span className="text-primary relative inline-block">
            Terbaikmu
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-primary/10 -z-10 rounded-full"></span>
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
        <div className="mt-24 flex flex-wrap justify-center gap-12">
          {[
            { 
              label: '100+ Roles', 
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
