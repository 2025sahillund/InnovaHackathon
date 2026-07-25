import json

from ai.gemini_client import ask_gemini
from ai.prompt_manager import load_prompt, fill_prompt


def generate_interview_questions(role, experience, difficulty, questions):

    prompt = load_prompt("interview_prompt.txt")

    prompt = fill_prompt(
        prompt,
        {
            "role": role,
            "experience": experience,
            "difficulty": difficulty,
            "questions": questions
        }
    )

    response = ask_gemini(prompt)

    return json.loads(response)