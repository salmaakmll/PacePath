import React from 'react';

const SkillSuggestions = ({ suggestions, onAdd }) => {
  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {suggestions.map((skill) => (
        <button
          key={skill}
          onClick={() => onAdd(skill)}
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium transition-colors"
        >
          + {skill}
        </button>
      ))}
    </div>
  );
};

export default SkillSuggestions;
