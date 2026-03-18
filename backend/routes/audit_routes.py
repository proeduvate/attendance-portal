from fastapi import APIRouter
from database import attendance_collection,intern_collection

router=APIRouter()


@router.get("/patterns")

def patterns():

    interns=list(

        intern_collection.find({},{"_id":0})

    )

    result=[]

    for i in interns:

        data=list(

            attendance_collection.find(

                {"intern_id":i["intern_id"]}

            )

        )

        absent=0

        for d in data:

            if d["status"]=="ABSENT":

                absent+=1


        if absent>=3:

            result.append({

                "name":i["name"],

                "intern_id":i["intern_id"],

                "absent_count":absent

            })


    return result
