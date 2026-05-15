import google.generativeai as genai
import json
from config import get_settings
from prompts import build_career_prompt, build_cv_analysis_prompt

settings = get_settings()

if settings.gemini_api_key:
    genai.configure(api_key=settings.gemini_api_key)

# Konfigurasi agar merespons dalam format JSON
generation_config = genai.GenerationConfig(
    response_mime_type="application/json"
)

def get_career_recommendation(skills: list[str], experience: str, interest: str) -> dict:
    if not settings.gemini_api_key:
        raise ValueError("API Key Gemini belum di-setting di .env")
        
    # Menggunakan nama model yang lebih standar: gemini-1.5-flash
    model = genai.GenerativeModel(
        model_name="gemini-3.1-flash-lite-preview",
        generation_config=generation_config
    )
    
    prompt = build_career_prompt(skills, experience, interest)
    
    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)
    except Exception as e:
        print(f"Error AI Manual: {e}")
        raise e

def get_cv_analysis(cv_text: str, interest: str) -> dict:
    if not settings.gemini_api_key:
        raise ValueError("API Key Gemini belum di-setting di .env")
        
    # Gunakan model yang sama: gemini-2.5-flash
    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash",
        generation_config=generation_config
    )
    
    prompt = build_cv_analysis_prompt(cv_text, interest)
    
    try:
        response = model.generate_content(prompt)
        return json.loads(response.text)
    except Exception as e:
        print(f"Error AI CV Analysis: {e}")
        raise e
