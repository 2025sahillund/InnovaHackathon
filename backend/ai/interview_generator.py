import json

from ai.gemini_client import ask_gemini
from ai.prompt_manager import load_prompt, fill_prompt


def generate_interview_questions(
    role,
    company,
    experience,
    difficulty,
    interview_type,
    question_count
):

    prompt = load_prompt("interview_prompt.txt")

    prompt = fill_prompt(
        prompt,
        {
            "role": role,
            "company": company,
            "experience": experience,
            "difficulty": difficulty,
            "type": interview_type,
            "questions": question_count,
        }
    )

    response = ask_gemini(prompt)

    return json.loads(response)