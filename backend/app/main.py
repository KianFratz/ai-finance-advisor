from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .database import Base, engine
from .routers import auth as auth_router
from .routers import transactions as transactions_router
from .routers import analytics as analytics_router
from .routers import forecast as forecast_router
from .routers import advisor as advisor_router


Base.metadata.create_all(bind=engine)

app = FastAPI(title="Personal Finance AI Advisor")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/health")
def health():
    return {"status": "ok"}


app.include_router(auth_router.router)
app.include_router(transactions_router.router)
app.include_router(analytics_router.router)
app.include_router(forecast_router.router)
app.include_router(advisor_router.router)

