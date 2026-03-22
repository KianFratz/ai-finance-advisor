from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from ..schemas.auth_schema import UserCreate, UserOut, Token
from ..services.auth_service import AuthService
from ..core.database import get_db

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/auth/login")


class AuthController:
    def __init__(self, db: Session):
        self.service = AuthService(db)

    # Kept as a static/class-level dependency so FastAPI can resolve it
    @staticmethod
    def get_token(token: str = Depends(oauth2_scheme)) -> str:
        return token

    def register(self, user_in: UserCreate) -> UserOut:
        return self.service.register(user_in)

    def login(self, email: str, password: str) -> Token:
        return self.service.login(email, password)

    def profile(self, token: str) -> UserOut:
        return self.service.get_current_user(token)

