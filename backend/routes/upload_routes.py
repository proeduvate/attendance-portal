from fastapi import APIRouter,UploadFile,File
from services.parser import parse
from database import intern_collection,attendance_collection
from datetime import date

router=APIRouter()

@router.post("/upload_attendance")
async def up(file:UploadFile=File(...)):
    txt=(await file.read()).decode()
    p,a,l=parse(txt)
    today=str(date.today())
    for n in p:
        i=intern_collection.find_one({"name":n})
        if i:
            attendance_collection.insert_one({"intern_id":i["intern_id"],"date":today,"status":"PRESENT"})
    for n in a:
        i=intern_collection.find_one({"name":n})
        if i:
            attendance_collection.insert_one({"intern_id":i["intern_id"],"date":today,"status":"ABSENT"})
    for n in l:
        i=intern_collection.find_one({"name":n})
        if i:
            attendance_collection.insert_one({"intern_id":i["intern_id"],"date":today,"status":"LEAVE"})
    return {"msg":"done"}
