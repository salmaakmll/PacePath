import React from 'react';

const SkillTag = ({ label, onRemove }) => {
  return (
    <div className="flex items-center bg-white border border-slate-100 text-primary px-4 py-2.5 rounded-xl text-sm font-bold shadow-sm group">
      <span>{label}</span>
      <button 
        onClick={() => onRemove(label)}
        className="ml-2.5 text-slate-400 hover:text-red-500 transition-colors"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  );
};

export default SkillTag;
