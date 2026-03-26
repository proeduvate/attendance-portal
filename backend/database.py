from pymongo import MongoClient
import certifi
import os

# ============================
# MongoDB Atlas Connection
# ============================

MONGO_URL = "mongodb+srv://admin:Admin123@cluster0.ba4hjmo.mongodb.net/intern_attendance_db?retryWrites=true&w=majority"

try:

    client = MongoClient(

        MONGO_URL,

        tls=True,

        tlsCAFile=certifi.where(),

        serverSelectionTimeoutMS=5000,

        connectTimeoutMS=20000,

        socketTimeoutMS=20000

    )

    # Test connection
    client.admin.command('ping')

    print("MongoDB Connected Successfully")

except Exception as e:

    print("MongoDB Connection Failed")
    print(e)


# ============================
# Database
# ============================

db = client["intern_attendance_db"]


# ============================
# Collections
# ============================

users_collection = db["users"]

intern_collection = db["interns"]

attendance_collection = db["attendance"]

audit_collection = db["audit_logs"]

pattern_collection = db["patterns"]
