from fastapi import APIRouter
from pydantic import BaseModel

from ai.evaluator import evaluate_answer

router = APIRouter(
    prefix="/evaluation",
    tags=["Answer Evaluation"]
)


class EvaluationRequest(BaseModel):

    question: str
    answer: str


@router.post("/evaluate")
def evaluate(req: EvaluationRequest):

    result = evaluate_answer(
        req.question,
        req.answer
    )

    return {
        "success": True,
        "data": result
    }