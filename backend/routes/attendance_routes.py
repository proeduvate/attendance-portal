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

    yesterday=today-timedelta(days=1)

    week=today-timedelta(days=7)

    month=today-timedelta(days=30)


    def count(date_from):

        data=list(

            attendance_collection.find()

        )

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


    today_data=count(today)

    yesterday_data=count(yesterday)

    week_data=count(week)

    month_data=count(month)


    return{

        "today":today_data,

        "yesterday":yesterday_data,

        "week":week_data,

        "month":month_data

    }
