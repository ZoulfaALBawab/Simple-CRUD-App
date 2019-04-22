from django.db import models
from mongoengine import Document
from mongoengine.fields import StringField


# Create your models here.


class User(Document):
    meta = {'collection': 'user'}
    first_name = StringField(required=True)
    last_name = StringField(required=True)
    email = StringField(required=True)
    phoneNum = StringField(required=True)

## I have to check if it is (StringField) for numbers or not !!! 

