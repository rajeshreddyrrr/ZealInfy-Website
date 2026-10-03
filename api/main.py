import os
import uuid
import httpx
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr

app = FastAPI(title="ZealInfy Experience API", version="0.2.1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        origin.strip()
        for origin in os.getenv("CORS_ORIGINS", "http://localhost:3000").split(",")
        if origin.strip()
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ContactRequest(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    direction: str


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


@app.post("/api/contact")
async def contact(request: ContactRequest):
    """Forward a website enquiry to the ZealInfy email gateway."""
    gateway_url = os.getenv(
        "ZEALINFY_EMAIL_GATEWAY_URL",
        "https://zealinfy-ai-gateway-dev-c4cbarh0a3gddued.canadacentral-01.azurewebsites.net",
    ).rstrip("/")
    gateway_token = os.getenv("ZEALINFY_EMAIL_GATEWAY_TOKEN", "")
    notification_recipient = os.getenv("ZEALINFY_CONTACT_RECIPIENT", "connect@zealinfy.com")

    if not gateway_token:
        raise HTTPException(
            status_code=503,
            detail="Email service is not configured on the API server.",
        )

    body = (
        "<h2>New ZealInfy Website Enquiry</h2>"
        f"<p><strong>Name:</strong> {request.name}</p>"
        f"<p><strong>Email:</strong> {request.email}</p>"
        f"<p><strong>Direction:</strong> {request.direction}</p>"
        f"<p><strong>Subject:</strong> {request.subject}</p>"
        f"<p><strong>Message:</strong><br>{request.message.replace(chr(10), '<br>')}</p>"
    )

    payload = {
        "to": [notification_recipient],
        "cc": [],
        "bcc": [],
        "subject": request.subject or "New ZealInfy Website Enquiry",
        "body": body,
        "is_html": True,
    }

    headers = {
        "accept": "*/*",
        "Idempotency-Key": str(uuid.uuid4()),
        "Authorization": f"Bearer {gateway_token}",
        "Content-Type": "application/json",
    }

    try:
        async with httpx.AsyncClient(timeout=20) as client:
            response = await client.post(
                f"{gateway_url}/api/v1/email/send",
                json=payload,
                headers=headers,
            )
    except httpx.HTTPError as exc:
        raise HTTPException(
            status_code=502,
            detail="Unable to reach the ZealInfy email gateway.",
        ) from exc

    if response.is_error:
        raise HTTPException(
            status_code=502,
            detail=f"Email gateway rejected the enquiry (HTTP {response.status_code}).",
        )

    return {"status": "sent", "message": "Your enquiry has been sent successfully."}
