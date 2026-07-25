from fastapi import APIRouter
from pydantic import BaseModel

from ai.interview_generator import generate_interview_questions
from ai.interview_evaluator import evaluate_interview
router = APIRouter(
    prefix="/api/interview",
    tags=["Interview"]
)


class InterviewRequest(BaseModel):
    role: str
    company: str
    experience: str
    difficulty: str
    type: str
    questions: int


@router.post("/generate")
def generate_interview(req: InterviewRequest):

    

    result = generate_interview_questions(
        req.role,
        req.company,
        req.experience,
        req.difficulty,
        req.type,
        req.questions
    )

    return {
        "success": True,
        "data": result
    }
class EvaluationRequest(BaseModel):
    questions: list
    answers: list

@router.post("/evaluate")
def evaluate(req: EvaluationRequest):

    result = evaluate_interview(
        req.questions,
        req.answers
    )

    return {
        "success": True,
        "data": result
    }