def build_career_prompt(skills: list[str], experience: str, interest: str) -> str:
    skills_str = ", ".join(skills)
    
    return f"""You are an expert career advisor specializing in the Indonesian job market.
    
USER PROFILE:
- Skills: {skills_str}
- Experience Level: {experience}
- Area of Interest: {interest}

TASK:
Analyze the user profile and generate personalized career recommendations. Respond ONLY with a valid JSON object.
Use Bahasa Indonesia for all text values.

STRICT JSON STRUCTURE:
{{
  "career_recommendations": [
    {{
      "title": "Job Title",
      "match_score": <int 50-95>,
      "description": "Short explanation why this fits their skills",
      "salary_range": "Rp X-Y jt/bulan"
    }}
  ],
  "skill_gaps": [
    {{
      "name": "Skill/Tool Name",
      "priority": "Penting"
    }},
    {{
      "name": "Skill/Tool Name",
      "priority": "Menengah"
    }},
    {{
      "name": "Skill/Tool Name",
      "priority": "Lanjutan"
    }}
  ],
  "roadmap": [
    {{
      "title": "Phase Title (e.g. Fondasi & Teori)",
      "period": "Bulan 1-2",
      "steps": ["Step 1", "Step 2"]
    }},
    {{
      "title": "Phase Title",
      "period": "Bulan 3-4",
      "steps": ["Step 1", "Step 2"]
    }},
    {{
      "title": "Phase Title",
      "period": "Bulan 5-6",
      "steps": ["Step 1", "Step 2"]
    }}
  ]
}}

CONSTRAINTS:
- career_recommendations MUST have exactly 3 items.
- skill_gaps MUST have exactly 3 items.
- roadmap MUST have exactly 3 items.
- All text in Bahasa Indonesia.
"""

def build_cv_analysis_prompt(cv_text: str, interest: str) -> str:
    return f"""You are an expert career advisor. Analyze the following CV and user interest.

CV CONTENT:
{cv_text}

USER INTEREST:
{interest}

TASK:
1. Extract skills/experience from CV.
2. Combine with the user's "Interest" to provide 3 career paths.
3. Respond ONLY with a valid JSON in Bahasa Indonesia.

STRICT JSON STRUCTURE:
{{
  "career_recommendations": [
    {{
      "title": "Job Title",
      "match_score": <int 50-95>,
      "description": "Short explanation",
      "salary_range": "Rp X-Y jt/bulan"
    }}
  ],
  "skill_gaps": [
    {{ "name": "Skill", "priority": "Penting" }}
  ],
  "roadmap": [
    {{ "title": "Fondasi & Teori", "period": "Bulan 1-2", "steps": ["Step 1", "Step 2"] }},
    {{ "title": "Proyek & Portofolio", "period": "Bulan 3-4", "steps": ["Step 1", "Step 2"] }},
    {{ "title": "Persiapan Karier", "period": "Bulan 5-6", "steps": ["Step 1", "Step 2"] }}
  ],
  "skill_summary": "Ringkasan 3-5 kata tentang keahlian utama (misal: Backend Dev, Cloud, & Data Analysis)"
}}

CONSTRAINTS:
- roadmap MUST contain exactly 3 phases covering 6 months.
- All text in Bahasa Indonesia.
"""


