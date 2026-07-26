from fastapi import FastAPI

from routes.ai import router as ai_router
from routes.exam import router as exam_router
from routes.interview import router as interview_router
from routes.evaluation import router as evaluation_router
from routes.roadmap import router as roadmap_router
from routes.recommendation import router as recommendation_router

app = FastAPI(
    title="PrepPilot AI"
)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://innova-frontend-9bg8.onrender.com/"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(ai_router)
app.include_router(exam_router)
app.include_router(interview_router)
app.include_router(evaluation_router)
app.include_router(roadmap_router)
app.include_router(recommendation_router)


@app.get("/")
def home():
    return {
        "message": "PrepPilot Backend Running"
    }