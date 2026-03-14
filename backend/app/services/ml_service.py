from datetime import date, timedelta
from typing import List

from .. import models, schemas


def forecast_monthly_spending(transactions: List[models.Transaction]) -> schemas.ForecastResponse:
    """
    Very simple placeholder forecaster.
    Uses the average of the last 3 months as the next 3 months' forecast.
    """
    if not transactions:
        items = []
        today = date.today()
        for i in range(3):
            future_month = (today.replace(day=1) + timedelta(days=32 * (i + 1))).strftime("%Y-%m")
            items.append(schemas.ForecastItem(month=future_month, amount=0.0))
        return schemas.ForecastResponse(items=items)

    by_month = {}
    for tx in transactions:
        key = tx.date.strftime("%Y-%m")
        by_month.setdefault(key, 0.0)
        if tx.amount < 0:
            by_month[key] += -tx.amount

    last_months = sorted(by_month.items())[-3:]
    avg = sum(v for _, v in last_months) / len(last_months) if last_months else 0.0

    today = date.today()
    items = []
    for i in range(3):
        future_month = (today.replace(day=1) + timedelta(days=32 * (i + 1))).strftime("%Y-%m")
        items.append(schemas.ForecastItem(month=future_month, amount=avg))

    return schemas.ForecastResponse(items=items)

