from fastapi import FastAPI
from database import users_collection
from auth import hash_password
from routes import auth_routes,intern_routes,attendance_routes,upload_routes,audit_routes

app=FastAPI()

app.include_router(auth_routes.router)
app.include_router(intern_routes.router)
app.include_router(attendance_routes.router)
app.include_router(upload_routes.router)
app.include_router(audit_routes.router)

@app.get("/")
def home():
    return {"msg":"API running"}

if users_collection.find_one({"email":"admin@proeduvate.com"}) is None:
    users_collection.insert_one({
    "email":"admin@proeduvate.com",
    "password":hash_password("Admin@123"),
    "role":"HR_ADMIN"
    })
