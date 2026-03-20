from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..services.auth_service import get_current_user
from ..core.database import get_db
from ..services.ml_service import forecast_monthly_spending


router = APIRouter(prefix="/forecast", tags=["forecast"])


@router.get("/monthly", response_model=schemas.ForecastResponse)
def monthly_forecast(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    txs = (
        db.query(models.Transaction)
        .filter(models.Transaction.user_id == current_user.id)
        .all()
    )
    return forecast_monthly_spending(txs)

