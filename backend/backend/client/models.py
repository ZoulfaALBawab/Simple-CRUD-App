from django.db import models

# Create your models here.

class Client(models.Model):  
    firstName = models.CharField(max_length=100)
    lastName = models.CharField(max_length=100)
    email = models.CharField(max_length=100)

    def __str__(self):
        return self.firstName
 

class Meta:
    ordering = ('firstName')


 
 
 
 