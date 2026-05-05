from fastapi import FastAPI, HTTPException, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from config import get_settings
from models import AnalyzeRequest, AnalyzeResponse
from gemini import get_career_recommendation, get_cv_analysis
from services.pdf_service import extract_text_from_pdf

settings = get_settings()

app = FastAPI(title="PacePath Backend API")

# CORS Setup
origins = [
    settings.frontend_url,
    "http://localhost:3000",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
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
        
        return AnalyzeResponse(**recommendation_data)
        
    except ValueError as ve:
        # Error dari sistem kita (misal: API key kosong)
        raise HTTPException(status_code=500, detail=str(ve))
    except Exception as e:
        # Error karena masalah jaringan atau output AI berantakan
        print(f"Error endpoint /analyze: {e}")
        raise HTTPException(status_code=502, detail="AI service unavailable or failed to parse response")

@app.post("/analyze-cv", response_model=AnalyzeResponse)
async def analyze_cv(
    file: UploadFile = File(...),
    interest: str = Form(...)
):
    if not file.filename.endswith('.pdf'):
        raise HTTPException(status_code=400, detail="Hanya file PDF yang diperbolehkan")
    
    try:
        content = await file.read()
        text = extract_text_from_pdf(content)
        
        if not text.strip():
            raise HTTPException(status_code=400, detail="PDF tidak terbaca atau kosong")
            
        result = get_cv_analysis(text, interest)
        return AnalyzeResponse(**result)
        
    except Exception as e:
        print(f"Error analyze-cv: {e}")
        raise HTTPException(status_code=500, detail=str(e))