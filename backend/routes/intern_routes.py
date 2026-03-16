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


return{

"present":present,

"absent":absent,

"leave":leave

}
