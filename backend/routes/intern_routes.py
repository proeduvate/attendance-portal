from fastapi import APIRouter
from database import intern_collection,attendance_collection

router = APIRouter()


@router.post("/add_intern")

def add_intern(data:dict):

    intern_collection.insert_one(data)

    return{

        "message":"Intern Added"

    }


@router.get("/interns")

def get_interns():

    data=list(

        intern_collection.find(

            {},

            {"_id":0}

        )

    )

    return data


@router.get("/intern/{id}")

def get_intern(id:str):

    return intern_collection.find_one(

        {"intern_id":id},

        {"_id":0}

    )


@router.get("/intern_stats/{id}")

def stats(id:str):

    data=list(

        attendance_collection.find(

            {"intern_id":id}

        )

    )

    present=0
    absent=0
    leave=0

    for d in data:

        if d["status"]=="PRESENT":

            present+=1

        elif d["status"]=="ABSENT":

            absent+=1

        else:

            leave+=1


    total=present+absent+leave

    attendance_percent=0

    if total>0:

        attendance_percent=round((present/total)*100)


    reliability=100-(absent*10)

    if reliability<0:

        reliability=0


    if reliability>85:

        risk="SAFE"

    elif reliability>60:

        risk="WARNING"

    else:

        risk="CRITICAL"


    return{

        "present":present,

        "absent":absent,

        "leave":leave,

        "attendance_percent":attendance_percent,

        "reliability":reliability,

        "risk":risk

    }
