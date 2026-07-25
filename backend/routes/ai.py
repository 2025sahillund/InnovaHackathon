from fastapi import APIRouter
from pydantic import BaseModel

from ai.gemini_client import ask_gemini

router = APIRouter(prefix="/ai", tags=["AI"])


class PromptRequest(BaseModel):
    prompt: str


@router.post("/chat")
def chat(req: PromptRequest):

    answer = ask_gemini(req.prompt)

    return {
        "response": answer
    }