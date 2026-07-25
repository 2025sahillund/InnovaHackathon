import json

from ai.gemini_client import ask_gemini
from ai.prompt_manager import load_prompt, fill_prompt


def generate_exam_questions(
    subject,
    topics,
    difficulty,
    duration,
    include_answers,
    question_distribution
):

    prompt = load_prompt("exam_prompt.txt")

    prompt = fill_prompt(
        prompt,
        {
            "subject": subject,
            "topics": ", ".join(topics),
            "difficulty": difficulty,
            "duration": duration,
            "include_answers": include_answers,
            "mcq": question_distribution["mcq"],
            "coding": question_distribution["coding"],
            "theory": question_distribution["theory"]
        }
    )

    response = ask_gemini(prompt)

    return json.loads(response)