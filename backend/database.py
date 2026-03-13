from pymongo import MongoClient

# MongoDB Atlas connection string
MONGO_URL = "mongodb+srv://admin:Admin123@cluster0.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(MONGO_URL)

db = client["intern_attendance_db"]

users_collection = db["users"]

intern_collection = db["interns"]

attendance_collection = db["attendance"]

audit_collection = db["audit_logs"]

pattern_collection = db["patterns"]
