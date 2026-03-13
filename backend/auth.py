from passlib.context import CryptContext

from datetime import datetime,timedelta

from jose import jwt

SECRET_KEY="PROEDUVATE_SECRET"

ALGORITHM="HS256"

pwd = CryptContext(schemes=["bcrypt"])


def hash_password(password):

    return pwd.hash(password)


def verify(password,hashed):

    return pwd.verify(password,hashed)


def create_token(data):

    data["exp"] = datetime.utcnow()+timedelta(hours=10)

    return jwt.encode(data,SECRET_KEY,algorithm=ALGORITHM)
