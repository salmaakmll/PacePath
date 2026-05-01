import React from 'react';

const SkillGapItem = ({ skill, priority }) => {
  const getBadgeStyles = (p) => {
    switch (p.toLowerCase()) {
      case 'penting':
        return 'bg-orange-50 text-orange-500';
      case 'menengah':
        return 'bg-amber-50 text-amber-500';
      case 'lanjutan':
        return 'bg-blue-50 text-blue-500';
      default:
        return 'bg-slate-50 text-slate-500';
    }
  };

  return (
    <div className="flex items-center justify-between p-5 bg-white border border-slate-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow mb-3">
      <span className="font-bold text-slate-700">{skill}</span>
      <span className={`text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-wider ${getBadgeStyles(priority)}`}>
        {priority}
      </span>
    </div>
  );
};

export default SkillGapItem;
