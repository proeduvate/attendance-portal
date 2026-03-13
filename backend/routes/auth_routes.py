from fastapi import APIRouter
from database import users_collection
from auth import verify,create_token

router=APIRouter()

@router.post("/login")
def login(data:dict):
    u=users_collection.find_one({"email":data["email"]})
    if not u:
        return {"error":"no user"}
    if not verify(data["password"],u["password"]):
        return {"error":"wrong"}
    token=create_token({"email":u["email"],"role":u["role"]})
    return {"token":token}
