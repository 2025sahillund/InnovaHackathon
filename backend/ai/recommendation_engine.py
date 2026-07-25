import json

from ai.gemini_client import ask_gemini
from ai.prompt_manager import load_prompt, fill_prompt


def generate_recommendation(
    goal,
    exam_score,
    interview_score,
    weak_topics
):

    prompt = load_prompt("recommendation_prompt.txt")

    prompt = fill_prompt(
        prompt,
        {
            "goal": goal,
            "exam_score": exam_score,
            "interview_score": interview_score,
            "weak_topics": weak_topics
        }
    )

    response = ask_gemini(prompt)

    return json.loads(response)