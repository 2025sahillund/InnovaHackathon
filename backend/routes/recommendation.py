from typing import List

from fastapi import APIRouter
from pydantic import BaseModel

from ai.recommendation_engine import generate_recommendation

router = APIRouter(
    prefix="/recommendation",
    tags=["Recommendation Engine"]
)


class RecommendationRequest(BaseModel):

    goal: str
    exam_score: int
    interview_score: int
    weak_topics: List[str]


@router.post("/generate")
def recommendation(req: RecommendationRequest):

    result = generate_recommendation(
        req.goal,
        req.exam_score,
        req.interview_score,
        ", ".join(req.weak_topics)
    )

    return {
        "success": True,
        "data": result
    }