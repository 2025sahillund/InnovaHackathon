from fastapi import APIRouter
from pydantic import BaseModel

from ai.roadmap_generator import generate_learning_roadmap

router = APIRouter(
    prefix="/api/roadmap",
    tags=["Roadmap"]
)


class RoadmapRequest(BaseModel):

    role: str
    experience: str
    company: str
    skills: list


@router.post("/generate")
def roadmap(req: RoadmapRequest):

    result = generate_learning_roadmap(
        req.role,
        req.experience,
        req.company,
        req.skills,
    )

    return {
        "success": True,
        "data": result,
    }