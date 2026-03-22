from fastapi import APIRouter, Depends
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
<<<<<<< HEAD
from .. import models, schemas
from ..core.database import get_db
from ..services.auth_service import (
    hash_password,
    verify_password,
    create_access_token,
    get_current_user,
)
=======

from ..schemas.auth_schema import UserCreate, UserOut, Token
from ..controllers.auth_controller import AuthController
from ..core.database import get_db

>>>>>>> a440034 (refactor: remove unnecessary files and modify the auth)


@router.post("/register", response_model=UserOut, status_code=201)
def register(user_in: UserCreate, db: Session = Depends(get_db)):
<<<<<<< HEAD

    existing = get_user_by_email(db, user_in.email)

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

=======
    return AuthController(db).register(user_in)
   
>>>>>>> a440034 (refactor: remove unnecessary files and modify the auth)

@router.post("/login", response_model=Token)
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    return AuthController(db).login(form_data.username, form_data.password)


@router.get("/profile", response_model=UserOut)
def profile(db: Session = Depends(get_db), token: str = Depends(AuthController.get_token)):
    return AuthController(db).profile(token)
