from django.shortcuts import render
from django.http import HttpResponse 
from .models import *
# Create your views here.

def home(request):
    return render(request, '../templates/index.html')

def menu(request):
    dishes = Dishe.objects.all()  # Get all products
    return render(request, '../templates/menu.html', {'dishes': dishes})

def contact(request):
    return render(request, '../templates/contact.html')

def privacy_policy(request):
    policy = PrivacyPolicy.objects.all()
    return render(request, 'policy.html', {'policy': policy})

def terms_of_service(request):
    terms = TermsOfService.objects.all()
    return render(request, 'serviceterms.html', {'terms': terms})

def allergens(request):
    dishes = Dishe.objects.all()
    return render(request, 'allergens.html', {'dishes': dishes})


