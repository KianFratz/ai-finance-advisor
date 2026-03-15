from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..database import get_db
from ..services.auth_service import get_current_user
from ..services.advisor_service import generate_financial_advice
from .analytics_controller import spending_summary, category_breakdown


router = APIRouter(prefix="/advisor", tags=["advisor"])


@router.get("/financial-advice", response_model=schemas.AdviceResponse)
def financial_advice(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    summary = spending_summary(db=db, current_user=current_user)
    breakdown = category_breakdown(db=db, current_user=current_user)
    advice_text = generate_financial_advice(summary, breakdown)
    return schemas.AdviceResponse(advice=advice_text)

