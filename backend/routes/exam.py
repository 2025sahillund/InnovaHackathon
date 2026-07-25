from fastapi import APIRouter
from pydantic import BaseModel
from typing import List, Dict

from ai.question_generator import generate_exam_questions

router = APIRouter(
    prefix="/exam",
    tags=["Exam Generator"]
)


class ExamRequest(BaseModel):

    subject: str
    topics: List[str]
    difficulty: str
    duration: int
    include_answers: bool
    question_distribution: Dict[str, int]


@router.post("/generate")
def generate_exam(req: ExamRequest):

    result = generate_exam_questions(
        req.subject,
        req.topics,
        req.difficulty,
        req.duration,
        req.include_answers,
        req.question_distribution
    )

    return {
        "success": True,
        "data": result
    }