from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session

from ..schemas.auth_schema import UserCreate, UserOut, Token
from ..controllers.auth_controller import AuthController
from ..core.database import get_db

router = APIRouter()

@router.post("/register", response_model=UserOut, status_code=201)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
    return AuthController(db).register(user_in)


@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    return AuthController(db).login(form_data.username, form_data.password)


@router.get("/profile", response_model=UserOut)
def profile(db: Session = Depends(get_db), token: str = Depends(AuthController.get_token)):
    return AuthController(db).profile(token)
