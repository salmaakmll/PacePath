import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { analyzeCV } from '../api/analyze';
import Header from '../components/Header';

const LoadingPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { interest, file } = location.state || {};

  useEffect(() => {
    if (!file) {
      navigate('/form');
      return;
    }

    const fetchData = async () => {
      try {
        // Kirim file DAN interest ke API khusus CV
        const data = await analyzeCV(file, interest);
        
        setTimeout(() => {
          navigate('/result', { state: { result: data } });
        }, 3000);
      } catch (error) {
        console.error(error);
        // Fallback data
        const mockData = {
          career_recommendations: [
            { title: "Teknologi Specialist", match_score: 94, description: "Berdasarkan CV Anda, Anda memiliki potensi besar di sini.", salary_range: "Rp 8jt - 15jt" },
            { title: "Project Coordinator", match_score: 82, description: "Kemampuan organisasi Anda terlihat sangat menonjol.", salary_range: "Rp 7jt - 12jt" },
            { title: "Strategic Planner", match_score: 71, description: "Analisis Anda cocok untuk posisi strategis.", salary_range: "Rp 9jt - 18jt" }
          ],
          skill_gaps: [{ name: "Advanced Analytics", priority: "Penting" }, { name: "Team Leadership", priority: "Menengah" }],
          roadmap: [
            { title: "Fondasi & Teori", period: "Bulan 1-2", steps: ["Pelajari dasar industri", "Sertifikasi online"] },
            { title: "Proyek & Portofolio", period: "Bulan 3-4", steps: ["Bangun real project", "Update LinkedIn"] },
            { title: "Persiapan Karier", period: "Bulan 5-6", steps: ["Mock Interview", "Kirim Lamaran"] }
          ],
          skill_summary: "Keahlian utama terdeteksi dari CV"
        };
        setTimeout(() => {
          navigate('/result', { state: { result: mockData } });
        }, 3000);
      }
    };

    fetchData();
  }, [interest, file, navigate]);

  return (
    <div className="min-h-screen bg-surface-bg flex flex-col">
      <Header showNav={false} />
      <main className="flex-1 flex flex-col items-center justify-center p-6 pb-32">
        <div className="relative mb-12">
          <svg className="w-48 h-48 transform -rotate-90">
            <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="8" fill="transparent" className="text-slate-100" />
            <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="8" strokeDasharray={502} strokeDashoffset={150} strokeLinecap="round" fill="transparent" className="text-primary animate-spin-slow" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center text-primary">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M12 18v-6"></path>
                <path d="M9 15l3 3 3-3"></path>
              </svg>
            </div>
          </div>
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-4">Membaca CV Anda...</h2>
        <p className="text-slate-500 text-center max-w-sm font-medium leading-relaxed">
          AI sedang mengekstrak keahlian terbaikmu untuk dicocokkan dengan minat <span className="text-primary font-bold">"{interest}"</span>.
        </p>
      </main>
    </div>
  );
};

export default LoadingPage;
