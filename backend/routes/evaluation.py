from fastapi import APIRouter
from pydantic import BaseModel

from ai.evaluator import evaluate_answer
from ai.adaptive_engine import get_next_difficulty

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

    adaptive_result = get_next_difficulty(result["score"])
    return {
        "success": True,
        "data": {
            **result,
            **adaptive_result
        }
    
    }