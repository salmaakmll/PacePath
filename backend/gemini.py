import google.generativeai as genai
import json
from config import get_settings
from prompts import build_career_prompt

settings = get_settings()

if settings.gemini_api_key:
    genai.configure(api_key=settings.gemini_api_key)

# Menggunakan fitur JSON Schema dari Gemini 2.5 Flash
# agar AI selalu dipaksa merespons dalam bentuk JSON yang valid.
generation_config = genai.GenerationConfig(
    response_mime_type="application/json"
)

def get_career_recommendation(skills: list[str], experience: str, interest: str) -> dict:
    if not settings.gemini_api_key:
        raise ValueError("API Key Gemini belum di-setting di .env")
        
    model = genai.GenerativeModel(
        model_name="gemini-2.5-flash",
        generation_config=generation_config
    )
    
    # 1. Bangun prompt menggunakan file terpisah
    prompt = build_career_prompt(skills, experience, interest)
    
    try:
        # 2. Panggil API Gemini
        response = model.generate_content(prompt)
        
        # 3. Parse string JSON dari Gemini menjadi Dictionary Python
        result = json.loads(response.text)
        return result
        
    except json.JSONDecodeError:
        print("Error: Gemini tidak mengembalikan JSON yang valid")
        raise Exception("Gagal mem-parsing response AI")
    except Exception as e:
        print(f"Error memanggil API Gemini: {e}")
        raise e
