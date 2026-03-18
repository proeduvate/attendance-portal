from fastapi import APIRouter
from database import audit_collection

router = APIRouter()


@router.get("/audit")

def get_audit():

    data=list(

        audit_collection.find(

            {},

            {"_id":0}

        )

    )

    return data


@router.post("/audit")

def add_audit(data:dict):

    audit_collection.insert_one(data)

    return{

        "message":"Audit logged"

    }
