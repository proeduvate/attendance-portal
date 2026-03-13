from pymongo import MongoClient
client=MongoClient("mongodb+srv://admin:Admin123@cluster0.ba4hjmo.mongodb.net/?appName=Cluster0")
client=MongoClient(MONGO_URL)
db=client["intern_attendance_db"]
users_collection=db["users"]
intern_collection=db["interns"]
attendance_collection=db["attendance"]
audit_collection=db["audit_logs"]
pattern_collection=db["patterns"]
