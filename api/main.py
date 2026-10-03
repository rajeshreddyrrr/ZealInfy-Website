import os
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="ZealInfy Experience API", version="0.2.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[origin.strip() for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",") if origin.strip()],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class BuildRequest(BaseModel):
    direction: str
    current_system: str | None = None
    priority: str | None = None

class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    direction: str

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

@app.post("/api/contact")
async def contact(request: ContactRequest):
    """Send a website enquiry through the existing ZealInfy outreach/email gateway.

    The gateway URL and API key are server-side environment variables. No credentials
    are exposed to the React application.
    """
    gateway_url = os.getenv("ZEALINFY_GATEWAY_URL", "").rstrip("/")
    gateway_key = os.getenv("ZEALINFY_GATEWAY_API_KEY", "")
    if not gateway_url or not gateway_key:
        raise HTTPException(status_code=503, detail="Email service is not configured.")

    payload = {
        "email": request.email,
        "firstName": request.name,
        "lastName": "",
        "jobTitle": "Website Enquiry",
        "companyName": "",
        "mobile": "",
        "website": "",
        "linkedin": "",
        "source": "ZealInfy Website",
        "relevantService": request.direction,
        "partnershipScore": 0,
        "subject": request.subject,
        "body": (
            f"<h2>New ZealInfy Website Enquiry</h2>"
            f"<p><strong>Name:</strong> {request.name}</p>"
            f"<p><strong>Email:</strong> {request.email}</p>"
            f"<p><strong>Direction:</strong> {request.direction}</p>"
            f"<p><strong>Subject:</strong> {request.subject}</p>"
            f"<p><strong>Message:</strong><br>{request.message.replace(chr(10), '<br>')}</p>"
        ),
        "is_html": True,
    }

    headers = {"Content-Type": "application/json", "Authorization": f"Bearer {gateway_key}"}
    try:
        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.post(f"{gateway_url}/api/freelance/outreach", json=payload, headers=headers)
        if response.is_error:
            raise HTTPException(status_code=502, detail="Email service could not process the enquiry.")
    except httpx.HTTPError as exc:
        raise HTTPException(status_code=502, detail="Unable to reach the email service.") from exc

    return {"status": "sent", "message": "Your enquiry has been sent successfully."}
