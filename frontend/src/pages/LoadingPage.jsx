import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { analyzeSkills } from '../api/analyze';
import Header from '../components/Header';

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { skills, experience, interest } = location.state || {};

  useEffect(() => {
    if (!skills) {
      navigate('/form');
      return;
    }

    const fetchData = async () => {
      try {
        const data = await analyzeSkills(skills, experience, interest);
        // Aesthetics delay
        setTimeout(() => {
          navigate('/result', { state: { result: data } });
        }, 3000);
      } catch (error) {
        console.error(error);
        // Mock data for demo purposes if backend is down
        const mockData = {
          career_recommendations: [
            { title: "Teknologi Specialist", match_score: 94, description: "Skill Problem Solving kamu sangat dicari di bidang ini.", salary_range: "Rp 8jt - 15jt" },
            { title: "Junior Consultant", match_score: 82, description: "Cocok untuk profil yang memiliki kemampuan analisis kuat.", salary_range: "Rp 7jt - 12jt" },
            { title: "Business Analyst", match_score: 71, description: "Menjembatani kebutuhan teknis dan strategi bisnis.", salary_range: "Rp 9jt - 18jt" }
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
          ]
        };
        setTimeout(() => {
          navigate('/result', { state: { result: mockData } });
        }, 3000);
      }
    };

    fetchData();
  }, [skills, experience, interest, navigate]);

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header showNav={false} />
      
      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-32">
        <div className="relative mb-12">
          {/* Circular Progress SVG */}
          <svg className="w-48 h-48 transform -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-slate-100"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray={502}
              strokeDashoffset={150}
              strokeLinecap="round"
              fill="transparent"
              className="text-primary animate-spin-slow"
            />
          </svg>
          
          {/* Robot Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-indigo-50 rounded-full flex items-center justify-center shadow-inner">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="10" rx="2" stroke="#5243e8" strokeWidth="2"/>
                <circle cx="8" cy="15" r="1.5" fill="#5243e8"/>
                <circle cx="16" cy="15" r="1.5" fill="#5243e8"/>
                <path d="M9 19H15" stroke="#5243e8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 11V8" stroke="#5243e8" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 8H16" stroke="#5243e8" strokeWidth="2" strokeLinecap="round"/>
                <circle cx="12" cy="7" r="2" stroke="#5243e8" strokeWidth="2"/>
              </svg>
            </div>
          </div>
        </div>
        
        <h2 className="text-3xl font-black text-slate-900 mb-4 animate-pulse">Menganalisis Profilmu...</h2>
        <p className="text-slate-500 text-center max-w-sm italic leading-relaxed">
          "Sedang mencocokkan keahlianmu dengan 500+ jenis pekerjaan di Indonesia..."
        </p>

        <footer className="fixed bottom-10 left-0 w-full text-center">
          <p className="text-slate-400 text-xs font-medium tracking-wide">
            © 2024 PacePath Indonesia. Prototipe AI Career Advisor.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default LoadingPage;
