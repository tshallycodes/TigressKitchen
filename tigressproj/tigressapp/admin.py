from django.contrib import admin
from .models import *

# Register your models here.

admin.site.register(Dishe)

admin.site.register(PrivacyPolicy)
class PrivacyPolicyAdmin(admin.ModelAdmin):
    list_display = ('title', 'last_edited')
    search_fields = ('title',)

admin.site.register(TermsOfService)
class TermsOfServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'last_edited')
    search_fields = ('title',)
    

