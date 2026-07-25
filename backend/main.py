from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.exam import router as exam_router
from routes.interview import router as interview_router
from routes.evaluation import router as evaluation_router
from routes.roadmap import router as roadmap_router
from routes.recommendation import router as recommendation_router
from routes.ai import router as ai_router
from routes.assistant import router as assistant_router

app = FastAPI(
    title="PrepPilot AI API",
    version="1.0.0"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register Routes
app.include_router(exam_router)
app.include_router(interview_router)
app.include_router(evaluation_router)
app.include_router(roadmap_router)
app.include_router(recommendation_router)
app.include_router(ai_router)
app.include_router(assistant_router)

@app.get("/")
def root():
    return {
        "message": "PrepPilot AI Backend Running"
    }