from typing import Optional
from sqlalchemy.orm import Session
from sqlalchemy.exc import IntegrityError
from fastapi import HTTPException, status

from ..models.user import User


class UserRepository:
    def __init__(self, db: Session):
        self.db = db

    def get_by_email(self, email: str) -> Optional[User]:
        return self.db.query(User).filter(User.email == email).first()
    
    def get_by_id(self, user_id: int) -> Optional[User]:
        return self.db.query(User).filter(User.id == user_id).first()

    def create(self, email: str, hashed_password: str, monthly_income: Optional[float]) -> User:
        user = User(
            email=email,
            password_hash=hashed_password,
            monthly_income=monthly_income,
        )
        self.db.add(user)
        try:
            self.db.commit()
            self.db.refresh(user)
        except IntegrityError:
            self.db.rollback()
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )
        return user
        