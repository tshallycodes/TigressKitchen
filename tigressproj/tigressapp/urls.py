from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('menu/', views.menu, name='menu'),
    path('contact/', views.contact, name='contact'),
    path('cart/', views.contact, name='cart'),
    path('policy/', views.privacy_policy, name='policy'),
    path('serviceterms/', views.terms_of_service, name='serviceterms'),
    path('allergens/', views.allergens, name='allergens'),
    # path('dish/<int:dish_id>/', views.dish_details, name='dish_details'),
]