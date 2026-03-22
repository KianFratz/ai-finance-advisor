from collections import defaultdict
from typing import List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from .. import models, schemas
from ..services.auth_service import get_current_user
from ..core.database import get_db


router = APIRouter(prefix="/analytics", tags=["analytics"])


@router.get("/spending-summary", response_model=schemas.SpendingSummary)
def spending_summary(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    txs: List[models.Transaction] = (
        db.query(models.Transaction)
        .filter(models.Transaction.user_id == current_user.id)
        .all()
    )

    total_spent = sum(t.amount for t in txs if t.amount < 0) * -1
    total_income = sum(t.amount for t in txs if t.amount > 0)
    monthly_income = current_user.monthly_income or total_income
    savings = monthly_income - total_spent

    return schemas.SpendingSummary(
        total_income=monthly_income,
        total_spent=total_spent,
        savings=savings,
    )


@router.get("/category-breakdown", response_model=schemas.CategoryBreakdown)
def category_breakdown(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    txs: List[models.Transaction] = (
        db.query(models.Transaction)
        .filter(models.Transaction.user_id == current_user.id)
        .all()
    )

    totals = defaultdict(float)
    for t in txs:
        cat = t.category or "Uncategorized"
        if t.amount < 0:
            totals[cat] += -t.amount

    items = [
        schemas.CategoryBreakdownItem(category=cat, amount=amount)
        for cat, amount in totals.items()
    ]
    return schemas.CategoryBreakdown(items=items)


@router.get("/monthly-trends", response_model=schemas.MonthlyTrends)
def monthly_trends(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    txs: List[models.Transaction] = (
        db.query(models.Transaction)
        .filter(models.Transaction.user_id == current_user.id)
        .all()
    )

    by_month = defaultdict(float)
    for t in txs:
        key = t.date.strftime("%Y-%m")
        by_month[key] += t.amount

    items = [
        schemas.MonthlyTrendItem(month=month, amount=amount)
        for month, amount in sorted(by_month.items())
    ]
    return schemas.MonthlyTrends(items=items)

