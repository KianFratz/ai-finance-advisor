from datetime import datetime, timedelta, timezone
from typing import Optional

import jwt
from fastapi import HTTPException, status
from jwt.exceptions import ExpiredSignatureError, InvalidTokenError
from sqlalchemy.orm import Session

from ..core.security import pwd_context, JWT_EXPIRE_MINUTES, JWT_ALGORITHM, JWT_SECRET
from ..repositories.user_repository import UserRepository
from ..schemas.auth_schema import UserCreate, UserOut, Token


class AuthService:
    def __init__(self, db: Session):
        self.repo = UserRepository(db)

    def register(self, user_in: UserCreate) -> UserOut:
        if self.repo.get_by_email(user_in.email):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Email already registered",
            )

        user = self.repo.create(
            email=user_in.email,
            hashed_password=_hash_password(user_in.password),
            monthly_income=user_in.monthly_income,
        )

        return UserOut.model_validate(user)

    def login(self, email: str, password: str) -> Token:
        user = self.repo.get_by_email(email)

        if not user or not _verify_password(password, user.password_hash):
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid credentials",
                headers={"WWW-Authenticate": "Bearer"},
            )

        return Token(access_token=_create_access_token(user.id), token_type="bearer")

    def get_current_user(self, token: str) -> UserOut:
        credentials_exception = HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Could not validate credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
        try:
            payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
            user_id: Optional[str] = payload.get("sub")
        except ExpiredSignatureError:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Token has expired",
                headers={"WWW-Authenticate": "Bearer"},
            )
        except InvalidTokenError:
            raise credentials_exception

        if user_id is None:
            raise credentials_exception

        user = self.repo.get_by_id(int(user_id))
        if user is None:
            raise credentials_exception

        return UserOut.model_validate(user)


def _hash_password(password: str) -> str:
    return pwd_context.hash(password)

def _verify_password(plain: str, hashed: str) -> bool:
    return pwd_context.verify(plain, hashed)

def _create_access_token(user_id: int) -> str:
    expire = datetime.now(timezone.utc) + timedelta(minutes=JWT_EXPIRE_MINUTES)
    payload = {"sub": str(user_id), "exp": expire}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)