import json

from ai.gemini_client import ask_gemini
from ai.prompt_manager import load_prompt, fill_prompt


def evaluate_answer(question, answer):

    prompt = load_prompt("evaluation_prompt.txt")

    prompt = fill_prompt(
        prompt,
        {
            "question": question,
            "answer": answer
        }
    )

    response = ask_gemini(prompt)

    return json.loads(response)