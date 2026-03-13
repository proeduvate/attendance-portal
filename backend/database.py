from pymongo import MongoClient

# MongoDB Atlas Connection
MONGO_URL = "mongodb+srv://admin:Admin123@cluster0.ba4hjmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

client = MongoClient(
    MONGO_URL,
    serverSelectionTimeoutMS=5000
)

db = client["intern_attendance_db"]

users_collection = db["users"]
intern_collection = db["interns"]
attendance_collection = db["attendance"]
audit_collection = db["audit_logs"]
pattern_collection = db["patterns"]

print("MongoDB Connected Successfully")
