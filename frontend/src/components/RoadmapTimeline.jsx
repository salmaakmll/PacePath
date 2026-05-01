import React from 'react';

const RoadmapTimeline = ({ phases }) => {
  return (
    <div className="space-y-10 relative">
      <div className="absolute left-6 top-2 bottom-2 w-0.5 bg-slate-100"></div>
      
      {phases.map((phase, index) => (
        <div key={index} className="relative pl-16">
          {/* Timeline Dot */}
          <div className="absolute left-0 top-0 w-12 h-12 bg-white border-2 border-primary/20 rounded-full flex items-center justify-center shadow-sm z-10">
            <div className="w-8 h-8 bg-primary/5 rounded-full flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5243e8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-black text-slate-900">{phase.title}</h4>
              <span className="text-[11px] font-black text-primary uppercase tracking-widest">{phase.period}</span>
            </div>
            
            <ul className="space-y-3">
              {phase.steps.map((step, sIdx) => (
                <li key={sIdx} className="flex items-start group">
                  <span className="text-primary mt-1.5 mr-3 opacity-50 group-hover:opacity-100 transition-opacity">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </span>
                  <span className="text-slate-600 font-medium text-sm leading-relaxed">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoadmapTimeline;
