from typing import List

from fastapi import APIRouter, Depends, HTTPException, UploadFile, File
from sqlalchemy.orm import Session
import pandas as pd

from .. import models, schemas
from ..database import get_db
from ..services.auth_service import get_current_user


router = APIRouter(prefix="/transactions", tags=["transactions"])


@router.post("/upload", response_model=List[schemas.TransactionOut])
async def upload_transactions(
    file: UploadFile = File(...),
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    # Expecting a CSV with columns: date, description, amount, [category]
    content = await file.read()
    df = pd.read_csv(pd.io.common.BytesIO(content))

    required_columns = {"date", "description", "amount"}
    if not required_columns.issubset(df.columns):
        raise HTTPException(status_code=400, detail=f"CSV must contain columns: {', '.join(required_columns)}")

    created = []
    for _, row in df.iterrows():
        tx = models.Transaction(
            user_id=current_user.id,
            date=pd.to_datetime(row["date"]).date(),
            description=str(row["description"]),
            amount=float(row["amount"]),
            category=str(row["category"]) if "category" in df.columns else None,
        )
        db.add(tx)
        created.append(tx)

    db.commit()
    for tx in created:
        db.refresh(tx)
    return created


@router.get("", response_model=List[schemas.TransactionOut])
def list_transactions(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    txs = (
        db.query(models.Transaction)
        .filter(models.Transaction.user_id == current_user.id)
        .order_by(models.Transaction.date.desc())
        .all()
    )
    return txs


@router.delete("/{transaction_id}")
def delete_transaction(
    transaction_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(get_current_user),
):
    tx = (
        db.query(models.Transaction)
        .filter(models.Transaction.id == transaction_id, models.Transaction.user_id == current_user.id)
        .first()
    )
    if not tx:
        raise HTTPException(status_code=404, detail="Transaction not found")
    db.delete(tx)
    db.commit()
    return {"status": "deleted"}

