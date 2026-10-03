from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI(title="ZealInfy Experience API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class BuildRequest(BaseModel):
    direction: str
    current_system: str | None = None
    priority: str | None = None


@app.get("/api/health")
def health():
    return {"status": "ok", "service": "zealinfy-experience-api"}


@app.post("/api/build/recommendation")
def build_recommendation(request: BuildRequest):
    recommendations = {
        "idea": "Start with a lightweight discovery and solution architecture.",
        "engineering": "Assess the existing application, identify technical debt, and plan incremental modernization.",
        "intelligence": "Identify a focused AI use case, connect the required data, and introduce an AI-assisted workflow.",
        "cloud": "Map workloads, dependencies, security requirements, and define a staged cloud migration.",
        "automation": "Map the manual workflow, identify decision points, and automate the highest-value steps.",
        "impact": "Define the business outcome, measurable success criteria, and an engineering roadmap.",
    }
    return {
        "direction": request.direction,
        "recommendation": recommendations.get(request.direction, recommendations["idea"]),
        "next_step": "Connect this recommendation flow to the ZealInfy AI layer as the experience evolves.",
    }
