import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ showNav = true, compact = false }) => {
  return (
    <header className={`w-full ${compact ? 'py-4' : 'py-6'} px-6 bg-white border-b border-slate-200/80 sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center group">
          <img src="/PacePath.png" alt="PacePath Logo" className="h-12 w-auto group-hover:scale-105 transition-transform" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
