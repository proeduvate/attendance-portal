from pymongo import MongoClient
client=MongoClient("mongodb://localhost:27017")
db=client["intern_attendance_db"]
users_collection=db["users"]
intern_collection=db["interns"]
attendance_collection=db["attendance"]
audit_collection=db["audit_logs"]
pattern_collection=db["patterns"]
