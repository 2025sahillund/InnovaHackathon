from typing import List

from fastapi import APIRouter
from pydantic import BaseModel

from ai.roadmap_generator import generate_roadmap

router = APIRouter(
    prefix="/roadmap",
    tags=["Roadmap Generator"]
)


class RoadmapRequest(BaseModel):

    goal: str
    skills: List[str]
    experience: str
    duration_weeks: int


@router.post("/generate")
def roadmap(req: RoadmapRequest):

    result = generate_roadmap(
        req.goal,
        ", ".join(req.skills),
        req.experience,
        req.duration_weeks
    )

    return {
        "success": True,
        "data": result
    }