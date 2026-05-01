import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showNav = true, compact = false }) => {
  return (
    <header className={`w-full ${compact ? 'py-4' : 'py-6'} px-6`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-indigo-100 group-hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 3L4 14H11L10 21L19 10H12L13 3Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="white"/>
            </svg>
          </div>
          <span className="text-2xl font-black text-slate-900 tracking-tight">PacePath</span>
        </Link>

        {showNav ? (
          <div className="flex items-center space-x-8">
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Beranda</Link>
              <Link to="/career-guide" className="text-sm font-bold text-slate-600 hover:text-primary transition-colors">Panduan Karir</Link>
            </nav>
            <button className="bg-primary text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all hover:bg-primary-dark active:scale-95 shadow-md shadow-indigo-100">
              Masuk
            </button>
          </div>
        ) : (
          <div className="flex items-center space-x-6">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">AI-Powered Advisor</span>
            <button className="p-2 text-slate-400 hover:text-primary transition-colors">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
