from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import users_collection
from auth import hash_password

from routes import auth_routes
from routes import intern_routes
from routes import attendance_routes
from routes import upload_routes
from routes import audit_routes


app = FastAPI()


# CORS FIX
app.add_middleware(

    CORSMiddleware,

    allow_origins=["*"],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],

)


# ROUTES
app.include_router(auth_routes.router)
app.include_router(intern_routes.router)
app.include_router(attendance_routes.router)
app.include_router(upload_routes.router)
app.include_router(audit_routes.router)


@app.get("/")
def home():

    return {

        "message":"Smart Intern Attendance System Running"

    }


# CREATE DEFAULT ADMIN
def create_admin():

    admin = users_collection.find_one({

        "email":"admin@proeduvate.com"

    })

    if admin is None:

        users_collection.insert_one({

            "email":"admin@proeduvate.com",

            "password":hash_password("Admin@123"),

            "role":"HR_ADMIN"

        })

        print("Default Admin Created")

    else:

        print("Admin already exists")


create_admin()
