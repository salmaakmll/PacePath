import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import CareerCard from '../components/CareerCard';
import SkillGapItem from '../components/SkillGapItem';
import RoadmapTimeline from '../components/RoadmapTimeline';

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { result } = location.state || {};

  // Mock data for fallback
  const finalResult = result || {
    career_recommendations: [
      { title: "Teknologi Specialist", match_score: 94, description: "Skill Problem Solving kamu sangat dicari di bidang ini.", salary_range: "Rp 8jt - 15jt", iconType: 'star' },
      { title: "Junior Consultant", match_score: 82, description: "Cocok untuk profil yang memiliki kemampuan analisis kuat.", salary_range: "Rp 7jt - 12jt", iconType: 'user' },
      { title: "Business Analyst", match_score: 71, description: "Menjembatani kebutuhan teknis dan strategi bisnis.", salary_range: "Rp 9jt - 18jt", iconType: 'chart' }
    ],
    skill_gaps: [
      { name: "Data Visualization", priority: "Penting" },
      { name: "Project Management", priority: "Menengah" },
      { name: "Stakeholder Management", priority: "Lanjutan" }
    ],
    roadmap: [
      { title: "Fondasi & Teori", period: "BULAN 1-2", steps: ["Pelajari metodologi industri", "Sertifikasi dasar online"] },
      { title: "Praktek & Proyek", period: "BULAN 3-4", steps: ["Bangun portfolio nyata", "Gunakan tools industri"] },
      { title: "Karir & Networking", period: "BULAN 5-6", steps: ["Optimasi profil LinkedIn", "Simulasi interview kerja"] }
    ],
    analyzed_skills: ["Problem Solving", "Komunikasi"]
  };

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header />
      
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Rekomendasi Karir</h1>
            <p className="text-slate-500 font-medium">
              Berdasarkan keahlian: <span className="text-primary font-bold">{(finalResult.analyzed_skills || []).join(', ')}</span>
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/form')}
              className="btn-secondary px-8 py-3"
            >
              Ulangi
            </button>
            <button 
              className="btn-primary px-8 py-3"
              onClick={() => window.print()}
            >
              Cetak Roadmap
            </button>
          </div>
        </div>

        {/* Top Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {finalResult.career_recommendations.map((career, idx) => (
            <CareerCard 
              key={idx}
              title={career.title}
              match={career.match_score}
              reason={career.description}
              salary={career.salary_range}
              iconType={career.iconType || (idx === 0 ? 'star' : idx === 1 ? 'user' : 'chart')}
            />
          ))}
        </div>

        {/* Bottom Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skill Gaps Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-orange-50 text-orange-500 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 20v-6M6 20V10M18 20V4"></path>
                </svg>
              </div>
              <h2 className="text-2xl font-black text-slate-900">Skill Gaps</h2>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-slate-50">
              <div className="space-y-2">
                {finalResult.skill_gaps.map((gap, idx) => (
                  <SkillGapItem 
                    key={idx} 
                    skill={gap.name || gap.skill} 
                    priority={gap.priority} 
                  />
                ))}
              </div>
            </div>
          </section>

          {/* Roadmap Section */}
          <section className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-primary/5 text-primary rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                </svg>
              </div>
              <h2 className="text-2xl font-black text-slate-900">Rencana 6 Bulan</h2>
            </div>

            <div className="bg-white rounded-[2rem] p-10 shadow-sm border border-slate-50">
              <RoadmapTimeline phases={finalResult.roadmap} />
            </div>
          </section>
        </div>
      </main>

      <footer className="py-12 border-t border-slate-100 mt-20 text-center">
        <p className="text-slate-400 text-sm font-medium">© 2024 PacePath Indonesia. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
};

export default ResultPage;
