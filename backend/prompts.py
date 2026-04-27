def build_career_prompt(skills: list[str], experience: str, interest: str) -> str:
    skills_str = ", ".join(skills)
    
    return f"""You are a professional career advisor for the Indonesian job market.
Given the following user profile:
- Skills: {skills_str}
- Experience: {experience}
- Interest: {interest}

Respond ONLY with a valid JSON object — no markdown formatting, no backticks, no explanatory text.
The JSON must strictly follow this structure:
{{
  "careers": [
    {{
      "title": "Name of the career position",
      "match": 90,
      "reason": "Short explanation of why this fits their skills",
      "salary": "Estimated salary in IDR (e.g. Rp 8-15 jt/bulan)"
    }}
  ],
  "skill_gaps": ["skill to learn 1", "skill to learn 2", "skill to learn 3"],
  "top_career": "Name of the career with highest match",
  "roadmap": [
    {{
      "period": "e.g. Bulan 1-2",
      "task": "Specific learning or action task"
    }}
  ]
}}

Generate exactly 3 recommendations in the 'careers' array, and exactly 3 phases in the 'roadmap' array.
"""
