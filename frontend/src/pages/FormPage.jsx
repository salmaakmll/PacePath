import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import SkillTag from '../components/SkillTag';

const FormPage = () => {
  const navigate = useNavigate();
  const [skills, setSkills] = useState(['Python']);
  const [inputValue, setInputValue] = useState('');
  const [experience, setExperience] = useState('Fresh Graduate');
  const [interest, setInterest] = useState('teknologi');

  const suggestions = ['JavaScript', 'Python', 'Microsoft Excel', 'Public Speaking', 'Graphic Design'];

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      if (!skills.includes(inputValue.trim())) {
        setSkills([...skills, inputValue.trim()]);
      }
      setInputValue('');
    }
  };

  const removeSkill = (skillToRemove) => {
    setSkills(skills.filter(s => s !== skillToRemove));
  };

  const addSkill = (skill) => {
    if (!skills.includes(skill)) {
      setSkills([...skills, skill]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (skills.length === 0) {
      alert('Mohon masukkan setidaknya satu skill.');
      return;
    }
    navigate('/loading', { state: { skills, experience, interest } });
  };

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header showNav={false} />
      
      <main className="flex-1 flex items-center justify-center p-6 pb-20">
        <div className="w-full max-w-3xl animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.03)] border border-slate-100 overflow-hidden">
            <div className="px-10 pt-12 pb-8">
              <h1 className="text-3xl font-black text-slate-900 mb-2">Profil Keahlianmu</h1>
              <p className="text-slate-500 font-medium">Beritahu kami apa yang kamu kuasai dan apa minatmu.</p>
            </div>
            
            <form onSubmit={handleSubmit} className="px-10 pb-10 space-y-10">
              {/* Skill Input Section */}
              <div className="space-y-4">
                <label className="block text-sm font-bold text-slate-900">
                  Skill yang dimiliki
                </label>
                <div className="p-6 bg-[#f8f9fc] border-2 border-dashed border-slate-200 rounded-[1.5rem] min-h-[120px] flex flex-wrap gap-3 items-start transition-all focus-within:border-primary/40">
                  {skills.map(skill => (
                    <SkillTag key={skill} label={skill} onRemove={removeSkill} />
                  ))}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ketik skill & tekan Enter..."
                    className="flex-1 min-w-[150px] bg-transparent border-none outline-none py-2 text-slate-600 font-medium placeholder:text-slate-400"
                  />
                </div>
                
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mr-2">Saran:</span>
                  {suggestions.map(skill => (
                    <button
                      key={skill}
                      type="button"
                      onClick={() => addSkill(skill)}
                      className="px-3 py-1 bg-slate-100 hover:bg-primary/10 hover:text-primary text-slate-500 text-xs font-bold rounded-lg transition-all"
                    >
                      +{skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Two Column Layout for Selects */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-900">
                    Pengalaman Saat Ini
                  </label>
                  <div className="relative">
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      className="w-full px-5 py-4 bg-[#f8f9fc] border border-transparent rounded-2xl focus:bg-white focus:border-primary outline-none transition-all appearance-none font-medium text-slate-700 cursor-pointer"
                    >
                      <option>Fresh Graduate</option>
                      <option>1-2 Tahun</option>
                      <option>3-5 Tahun</option>
                      <option>5+ Tahun</option>
                    </select>
                    <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="block text-sm font-bold text-slate-900">
                    Area Minat (Opsional)
                  </label>
                  <input
                    type="text"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    placeholder="Misal: teknologi"
                    className="input-field border-transparent bg-[#f8f9fc] focus:bg-white font-medium text-slate-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full btn-primary py-5 rounded-2xl text-lg group"
              >
                Cari Jalur Karier Saya
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FormPage;
