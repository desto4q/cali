# from django.contrib import admin

# Register your models here.
from django.contrib import admin
from django.contrib.auth.models import User, Group
from .models import Profile, Tweet

    
class ProfileInline(admin.StackedInline):
    model = Profile
class UserAdmin(admin.ModelAdmin):
    model = User
    fields = ["username", "password"]
    inlines = [ProfileInline]
    
admin.site.register(Tweet,)
admin.site.unregister(User,)
admin.site.register(Profile)
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)