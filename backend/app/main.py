import logging

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse

from app.core.database import Base, engine
from app import models  # noqa: F401
from app.routers import auth as auth_router
from app.routers import transactions as transactions_router
from app.routers import analytics as analytics_router
from app.routers import forecast as forecast_router
from app.routers import advisor as advisor_router

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

Base.metadata.create_all(bind=engine)

app = FastAPI(title="Personal Finance AI Advisor")

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.exception_handler(HTTPException)
def http_exception_handler(request, exc: HTTPException):
    return JSONResponse(
        status_code=exc.status_code,
        content={"detail": exc.detail},
    )

@app.exception_handler(Exception)
def unhandled_exception_handler(request, exc: Exception):
    logger.exception("Unhandled exception: %s", exc)
    return JSONResponse(
        status_code=500,
        content={"detail": "Internal server error"},
    )

@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(auth_router.router)
app.include_router(transactions_router.router)
app.include_router(analytics_router.router)
app.include_router(forecast_router.router)
app.include_router(advisor_router.router)