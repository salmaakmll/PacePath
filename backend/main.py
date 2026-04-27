from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from config import get_settings
from models import AnalyzeRequest, AnalyzeResponse
from gemini import get_career_recommendation

settings = get_settings()

app = FastAPI(title="PacePath Backend API")

# CORS Setup
origins = [
    settings.frontend_url,
    "http://localhost:3000",
    "https://pacepath.vercel.app"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def health_check():
    return {"status": "ok", "message": "PacePath Backend is running"}

@app.post("/analyze", response_model=AnalyzeResponse)
def analyze_skills(request: AnalyzeRequest):
    try:
        # Memanggil logika integrasi Gemini
        recommendation_data = get_career_recommendation(
            skills=request.skills,
            experience=request.experience,
            interest=request.interest
        )
        
        # FastAPI/Pydantic akan otomatis memvalidasi apakah response_data
        # sesuai dengan skema AnalyzeResponse.
        return AnalyzeResponse(**recommendation_data)
        
    except ValueError as ve:
        # Error dari sistem kita (misal: API key kosong)
        raise HTTPException(status_code=500, detail=str(ve))
    except Exception as e:
        # Error karena masalah jaringan atau output AI berantakan
        print(f"Error endpoint /analyze: {e}")
        raise HTTPException(status_code=502, detail="AI service unavailable or failed to parse response")