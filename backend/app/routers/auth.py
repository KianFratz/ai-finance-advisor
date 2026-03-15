from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import models, schemas
from ..core.database import get_db
from ..services.auth_service import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
)


router = APIRouter(prefix="/auth", tags=["auth"])


@router.post("/register", response_model=schemas.UserOut)
def register(user_in: schemas.UserCreate, db: Session = Depends(get_db)):

    existing = auth_service.get_user_by_email(db, user_in.email)

    if existing:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST, 
            detail="Email already registered"
        )

    return auth_service.create_user(
        db,
        user_in.email,
        user_in.password,
        user_in.monthly_income,
    )


@router.post("/login", response_model=schemas.Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(models.User.email == form_data.username).first()
    if not user or not verify_password(form_data.password, user.password_hash):
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")

    token = create_access_token(user_id=user.id)
    return schemas.Token(access_token=token)


@router.get("/profile", response_model=schemas.UserOut)
def profile(current_user: models.User = Depends(get_current_user)):
    return current_user

