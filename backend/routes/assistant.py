from fastapi import APIRouter
from pydantic import BaseModel

from ai.assistant import assistant_chat

router = APIRouter(
    prefix="/api/assistant",
    tags=["Assistant"]
)


class ChatRequest(BaseModel):
    message: str


@router.post("/chat")
def chat(req: ChatRequest):

    response = assistant_chat(req.message)

    return {
        "success": True,
        "data": {
            "reply": response
        }
    }