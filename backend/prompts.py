def build_career_prompt(skills: list[str], experience: str, interest: str) -> str:
    skills_str = ", ".join(skills)
    
    return f"""You are an expert career advisor specializing in the Indonesian job market with deep knowledge of industry trends, salary benchmarks, and in-demand skills across all sectors in Indonesia as of 2024-2025.

USER PROFILE:
- Skills: {skills_str}
- Experience Level: {experience}
- Area of Interest: {interest}

THINKING PROCESS (do this silently before writing JSON):
Step 1 - Skill Analysis: Identify which skills are technical vs soft skills. Note which are rare/high-demand in Indonesia.
Step 2 - Experience Calibration: Adjust expectations and salary ranges based on experience level. Fresh Graduate = entry-level roles, 1-2 years = junior roles, 3-5 years = mid roles, 5+ years = senior roles.
Step 3 - Career Matching: Find 3 careers that genuinely align with the skill combination — not just the interest area. Consider how skills transfer across roles. Assign match scores honestly: best fit 82-95, second 65-81, third 50-64.
Step 4 - Skill Gap Identification: Compare user's current skills against what each top career actually requires day-to-day. Prioritize gaps by: PENTING = blocks entry without it, MENENGAH = needed within 3 months, LANJUTAN = needed for growth.
Step 5 - Roadmap Design: Build a 6-month plan specifically for the top career. Each phase must be sequential and build on the previous. Name real tools, platforms, and certifications by name.

After completing all thinking steps, output ONLY the JSON below — no explanations, no markdown, no backticks.

STRICT JSON STRUCTURE:
{{
  "career_recommendations": [
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing their specific skills, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to {experience} level)"
    }},
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing their specific skills, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to {experience} level)"
    }},
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing their specific skills, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to {experience} level)"
    }}
  ],
  "skill_gaps": [
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Penting"
    }},
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Menengah"
    }},
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Lanjutan"
    }}
  ],
  "roadmap": [
    {{
      "title": "Fondasi & Teori",
      "period": "Bulan 1-2",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }},
    {{
      "title": "Praktek & Proyek",
      "period": "Bulan 3-4",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }},
    {{
      "title": "Karier & Networking",
      "period": "Bulan 5-6",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }}
  ]
}}

HARD CONSTRAINTS:
- career_recommendations MUST have exactly 3 items, ordered by match_score descending
- skill_gaps MUST have exactly 3 items, one per priority level
- roadmap MUST have exactly 3 phases in order: Bulan 1-2, Bulan 3-4, Bulan 5-6
- match_scores MUST be unique integers
- All text values MUST be in Bahasa Indonesia
- salary_range MUST reflect {experience} level realistically
- Output MUST be valid parseable JSON only
"""


def build_cv_analysis_prompt(cv_text: str, interest: str) -> str:
    return f"""You are an expert career advisor specializing in the Indonesian job market with deep knowledge of industry trends, salary benchmarks, and in-demand skills across all sectors in Indonesia as of 2024-2025.

CV CONTENT:
{cv_text}

USER INTEREST:
{interest}

THINKING PROCESS (do this silently before writing JSON):
Step 1 - CV Parsing: Extract all explicit skills (tools, technologies, languages), implicit skills (inferred from job responsibilities), education background, and total years of experience from the CV.
Step 2 - Experience Calibration: Determine experience level from CV (Fresh Graduate / Junior / Mid / Senior). Use this to calibrate salary ranges and role seniority.
Step 3 - Interest Alignment: Identify where the user's extracted skills overlap with their stated interest area. Note where there are gaps between current profile and interest.
Step 4 - Career Matching: Find 3 careers that best combine extracted skills + interest. Do not recommend careers that are completely unrelated to either. Assign match scores honestly: best fit 82-95, second 65-81, third 50-64.
Step 5 - Skill Gap Identification: Based on the top career match, identify 3 skills the user does not currently have but are required. Prioritize: PENTING = blocks entry, MENENGAH = needed within 3 months, LANJUTAN = needed for growth.
Step 6 - Roadmap Design: Build a realistic 6-month plan for the top career. Each phase must be sequential, build on the previous, and reference real tools, platforms, and certifications by name.
Step 7 - Skill Summary: Write a 3-5 word summary of the user's core strengths extracted from the CV (e.g. "Backend Dev, Cloud, & Data Analysis").

After completing all thinking steps, output ONLY the JSON below — no explanations, no markdown, no backticks.

STRICT JSON STRUCTURE:
{{
  "career_recommendations": [
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing skills found in CV, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to experience level found in CV)"
    }},
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing skills found in CV, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to experience level found in CV)"
    }},
    {{
      "title": "Exact job title used in Indonesian job postings",
      "match_score": <int, unique per career, descending order>,
      "description": "2 sentences: one referencing skills found in CV, one on growth potential in Indonesia",
      "salary_range": "Rp X-Y jt/bulan (calibrated to experience level found in CV)"
    }}
  ],
  "skill_gaps": [
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Penting"
    }},
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Menengah"
    }},
    {{
      "name": "Specific tool, technology, or skill name — not a broad category",
      "priority": "Lanjutan"
    }}
  ],
  "roadmap": [
    {{
      "title": "Fondasi & Teori",
      "period": "Bulan 1-2",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }},
    {{
      "title": "Praktek & Proyek",
      "period": "Bulan 3-4",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }},
    {{
      "title": "Karier & Networking",
      "period": "Bulan 5-6",
      "steps": [
        "Actionable step mentioning specific platform/tool/course by name",
        "Actionable step mentioning specific platform/tool/course by name"
      ]
    }}
  ],
  "skill_summary": "3-5 kata merangkum keahlian utama dari CV (contoh: Backend Dev, Cloud, & Data Analysis)"
}}

HARD CONSTRAINTS:
- career_recommendations MUST have exactly 3 items, ordered by match_score descending
- skill_gaps MUST have exactly 3 items, one per priority level
- roadmap MUST have exactly 3 phases in order: Bulan 1-2, Bulan 3-4, Bulan 5-6
- match_scores MUST be unique integers
- All text values MUST be in Bahasa Indonesia
- salary_range MUST reflect experience level found in CV
- skill_summary MUST be derived from CV content, not the interest field
- Output MUST be valid parseable JSON only
"""