from fastapi import APIRouter

from database import users_collection

from auth import verify,create_token


router = APIRouter()


@router.post("/login")

def login(data:dict):

    user = users_collection.find_one({

        "email":data["email"]

    })

    if not user:

        return {

            "error":"User not found"

        }

    if not verify(data["password"],user["password"]):

        return {

            "error":"Invalid password"

        }

    token = create_token({

        "email":user["email"],

        "role":user["role"]

    })

    return {

        "token":token,

        "role":user["role"]

    }
