from fastapi import FastAPI
from pydantic import BaseModel
from services.gemini_service import generate_text

app = FastAPI()

class PromptRequest(BaseModel):
    prompt: str

@app.get("/")
def root():
    return {"message": "Gemini FastAPI Backend Running"}

@app.post("/generate")
def generate(req: PromptRequest):
    result = generate_text(req.prompt)
    return {"response": result}