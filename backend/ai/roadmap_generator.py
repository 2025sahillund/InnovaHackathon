import json

from ai.gemini_client import ask_gemini


def generate_learning_roadmap(
    role,
    experience,
    company,
    skills
):

    prompt = f"""
You are an expert Software Engineering Mentor.

Create a personalized roadmap.

Role:
{role}

Experience:
{experience}

Target Company:
{company}

Current Skills:
{", ".join(skills)}

Return ONLY valid JSON.

{{
  "title":"Python Developer Roadmap",

  "estimated_duration":"4 Months",

  "phases":[

    {{
      "phase":"Phase 1",

      "duration":"2 Weeks",

      "topics":[
        "",
        "",
        ""
      ]
    }}

  ],

  "projects":[
    "",
    "",
    ""
  ],

  "resources":[
    "",
    "",
    ""
  ],

  "tips":[
    "",
    "",
    ""
  ]
}}

"""

    response = ask_gemini(prompt)

    return json.loads(response)