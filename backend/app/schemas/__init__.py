from datetime import datetime, date
from typing import Optional, List

from pydantic import BaseModel, EmailStr


class UserCreate(BaseModel):
    email: EmailStr
    password: str
    monthly_income: Optional[float] = None


class UserOut(BaseModel):
    id: int
    email: EmailStr
    monthly_income: Optional[float] = None
    created_at: datetime

    class Config:
        from_attributes = True


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class TransactionBase(BaseModel):
    date: date
    description: str
    amount: float
    category: Optional[str] = None


class TransactionCreate(TransactionBase):
    pass


class TransactionOut(TransactionBase):
    id: int

    class Config:
        from_attributes = True


class SpendingSummary(BaseModel):
    total_income: float
    total_spent: float
    savings: float


class CategoryBreakdownItem(BaseModel):
    category: str
    amount: float


class CategoryBreakdown(BaseModel):
    items: List[CategoryBreakdownItem]


class MonthlyTrendItem(BaseModel):
    month: str
    amount: float


class MonthlyTrends(BaseModel):
    items: List[MonthlyTrendItem]


class ForecastItem(BaseModel):
    month: str
    amount: float


class ForecastResponse(BaseModel):
    items: List[ForecastItem]


class AdviceResponse(BaseModel):
    advice: str

