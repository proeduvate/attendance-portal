from fastapi import APIRouter
from database import attendance_collection
from datetime import datetime,timedelta

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


@router.get("/dashboard_stats")

def dashboard_stats():

    today=datetime.now().date()

    week=today-timedelta(days=7)

    month=today-timedelta(days=30)


    def count(date_from):

        data=list(attendance_collection.find())

        present=0
        absent=0
        leave=0

        for d in data:

            d_date=datetime.strptime(

                d["date"],

                "%Y-%m-%d"

            ).date()

            if d_date>=date_from:

                if d["status"]=="PRESENT":

                    present+=1

                elif d["status"]=="ABSENT":

                    absent+=1

                else:

                    leave+=1

        return{

            "present":present,

            "absent":absent,

            "leave":leave

        }


    return{

        "week":count(week),

        "month":count(month)

    }


@router.get("/attendance_trend")

def trend():

    data=list(attendance_collection.find())

    result={}

    for d in data:

        date=d["date"]

        if date not in result:

            result[date]={

                "present":0,

                "absent":0

            }

        if d["status"]=="PRESENT":

            result[date]["present"]+=1

        if d["status"]=="ABSENT":

            result[date]["absent"]+=1


    final=[]

    for k in sorted(result.keys()):

        final.append({

            "date":k,

            "present":result[k]["present"],

            "absent":result[k]["absent"]

        })

    return final
    
