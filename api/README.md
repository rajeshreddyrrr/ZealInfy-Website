# ZealInfy Experience API

Python FastAPI backend foundation for the ZealInfy interactive experience.

## Run locally

```bash
cd api
python -m venv .venv
# Windows: .venv\Scripts\activate
# Linux/macOS: source .venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```

Health check: `GET /api/health`

The first business endpoint is `POST /api/build/recommendation`. It is intentionally deterministic for now so the frontend can be connected without locking ZealInfy into an AI provider or database. It can later be backed by an LLM, database, CRM, or agent workflow.
