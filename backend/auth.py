from passlib.context import CryptContext
from datetime import datetime,timedelta
from jose import jwt
from config import SECRET_KEY,ALGORITHM

pwd=CryptContext(schemes=["bcrypt"])

def hash_password(p):
    return pwd.hash(p)

def verify(p,h):
    return pwd.verify(p,h)

def create_token(data):
    data["exp"]=datetime.utcnow()+timedelta(hours=10)
    return jwt.encode(data,SECRET_KEY,algorithm=ALGORITHM)
