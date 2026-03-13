from fastapi import APIRouter
from database import intern_collection

router=APIRouter()

@router.post("/add_intern")
def add(data:dict):
    intern_collection.insert_one(data)
    return {"msg":"added"}

@router.get("/interns")
def interns():
    return list(intern_collection.find({},{"_id":0}))
