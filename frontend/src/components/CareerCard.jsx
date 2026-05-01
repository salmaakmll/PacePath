import React from 'react';

const CareerCard = ({ title, match, reason, salary, iconType }) => {
  const isTop = match >= 90;
  
  const getIcon = () => {
    switch (iconType) {
      case 'star':
        return (
          <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
          </div>
        );
      case 'user':
        return (
          <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
        );
      case 'chart':
        return (
          <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path>
              <path d="M22 12A10 10 0 0 0 12 2v10z"></path>
            </svg>
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 bg-indigo-50 text-primary rounded-xl flex items-center justify-center text-lg">
            💼
          </div>
        );
    }
  };

  return (
    <div className={`card p-8 relative flex flex-col h-full transition-all hover:scale-[1.02] ${
      isTop ? 'border-primary/30 ring-1 ring-primary/20' : ''
    }`}>
      <div className="flex justify-between items-start mb-6">
        {getIcon()}
        <span className="text-2xl font-black text-primary">{match}%</span>
      </div>

      <h3 className="text-xl font-black text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-1">
        {reason}
      </p>

      <div className="pt-6 border-t border-slate-50 flex flex-col gap-1">
        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Gaji Estimasi</span>
        <span className="text-lg font-black text-slate-900">{salary}</span>
      </div>
    </div>
  );
};

export default CareerCard;
