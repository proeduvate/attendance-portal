from fastapi import APIRouter
from database import attendance_collection

router=APIRouter()


@router.get("/attendance/{intern_id}")

def get_attendance(intern_id:str):

    data=list(

        attendance_collection.find(

            {"intern_id":intern_id},

            {"_id":0}

        )

    )

    return data
