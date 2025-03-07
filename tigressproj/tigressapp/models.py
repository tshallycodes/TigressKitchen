from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# The produts/menu
class Dishe(models.Model):
    name = models.CharField(max_length=100)
    price = models.IntegerField()
    desc = models.CharField(max_length=400)
    image = models.ImageField(upload_to='', blank=True, null=True)
    pid = models.CharField()
    allergens = models.CharField(max_length=255, default="No allergens")

    def __str__(self):
		    return self.name

# Privay Policy Page
class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=255, default="Privacy Policy")
    content = models.TextField()
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

# Service Terms Page
class TermsOfService(models.Model):
    title = models.CharField(max_length=255, default="Terms of Service")
    content = models.TextField()
    last_edited = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
