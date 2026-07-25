import json

from ai.gemini_client import ask_gemini


def evaluate_interview(questions, answers):
    prompt = f"""
You are a Senior Technical Interviewer.

Evaluate the interview.

Questions:
{json.dumps(questions, indent=2)}

Candidate Answers:
{json.dumps(answers, indent=2)}

Return ONLY valid JSON.

{{
  "overall_score": 0,
  "technical_score": 0,
  "communication_score": 0,
  "confidence_score": 0,
  "strengths": [
    ""
  ],
  "weaknesses": [
    ""
  ],
  "improvements": [
    ""
  ],
  "overall_feedback": ""
}}
"""

    response = ask_gemini(prompt)

    return json.loads(response)