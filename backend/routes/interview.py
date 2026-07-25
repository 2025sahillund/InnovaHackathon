from fastapi import APIRouter
from pydantic import BaseModel

from ai.interview_generator import generate_interview_questions

router = APIRouter(
    prefix="/interview",
    tags=["Interview Generator"]
)


class InterviewRequest(BaseModel):
    role: str
    experience: str
    difficulty: str
    questions: int


@router.post("/generate")
def generate_interview(req: InterviewRequest):

    result = generate_interview_questions(
        req.role,
        req.experience,
        req.difficulty,
        req.questions
    )

    return {
        "success": True,
        "data": result
    }