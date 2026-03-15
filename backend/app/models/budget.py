from datetime import datetime, date

from sqlalchemy import Column, Integer, String, Float, Date, Text, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from ..core.database import Base

class Budget(Base):
    __tablename__ = "budgets"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id"), index=True, nullable=False)
    category = Column(String, nullable=False)
    monthly_limit = Column(Float, nullable=False)

    user = relationship("User", back_populates="budgets")