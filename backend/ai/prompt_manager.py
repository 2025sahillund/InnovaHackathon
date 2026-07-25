from pathlib import Path

PROMPT_DIR = Path("prompts")


def load_prompt(filename):

    file_path = PROMPT_DIR / filename

    with open(file_path, "r", encoding="utf-8") as file:
        return file.read()


def fill_prompt(prompt, values):

    for key, value in values.items():

        prompt = prompt.replace(
            "{{" + key + "}}",
            str(value)
        )

    return prompt