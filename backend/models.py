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
    match_score: int
    description: str
    salary_range: str

class SkillGap(BaseModel):
    name: str
    priority: str

class Phase(BaseModel):
    title: str
    period: str
    steps: List[str]

class AnalyzeResponse(BaseModel):
    career_recommendations: List[Career]
    skill_gaps: List[SkillGap]
    roadmap: List[Phase]
    skill_summary: str

