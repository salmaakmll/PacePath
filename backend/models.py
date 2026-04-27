from pydantic import BaseModel, Field
from typing import List

# Request Model
class AnalyzeRequest(BaseModel):
    skills: List[str] = Field(..., min_length=1, description="List of user skills")
    experience: str = Field(..., description="User's experience level")
    interest: str = Field(..., description="User's career interest")

# Response Models
class Career(BaseModel):
    title: str
    match: int
    reason: str
    salary: str

class Phase(BaseModel):
    period: str
    task: str

class AnalyzeResponse(BaseModel):
    careers: List[Career]
    skill_gaps: List[str]
    top_career: str
    roadmap: List[Phase]
