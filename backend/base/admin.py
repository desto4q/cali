# from django.contrib import admin
# Register your models here.
from django.contrib import admin
from django.contrib.auth.models import Group
from .models import Profile, Tweet ,User

class UserProfile(admin.StackedInline):
    model = Profile
    max_num = 1    

class UserAdmin(admin.ModelAdmin):
    model = User
    fields = ["username", "password"]
    inlines = [UserProfile]



admin.site.register(User)
admin.site.register(Tweet,)
admin.site.unregister(User,)
admin.site.register(Profile)
admin.site.register(User, UserAdmin)
admin.site.unregister(Group)