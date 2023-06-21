from django.db import models
import uuid
# from django.contrib.auth.models import User
from django.db.models.signals import post_save
from django.dispatch import receiver
# Create your models here.


class User(models.Model):
    username = models.CharField(max_length=40,unique=True)
    password = models.CharField(max_length=20,default="")
    def __str__(self):
        return f"{self.username}"


class Profile(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    follows = models.ManyToManyField("self", related_name="followed_by",symmetrical=False,blank=True)
    profileImg = models.CharField(max_length=500,blank=True,)
    def __str__(self):
        return self.user.username    


class Tweet(models.Model):
    user = models.ForeignKey(Profile,related_name="meeps", on_delete=models.DO_NOTHING,related_query_name="profile")
    body = models.CharField(max_length=1000)
    created_at = models.DateTimeField(auto_now_add=True)
    image = models.CharField(max_length=500, null=True, blank=True)
    # class Meta: 
    #     ordering = ["-created_at"]
    def __str__(self) -> str:
        return (f"{self.user}" f"{self.created_at:%Y-%M-%D}:" f"{self.body}")
    
    





@receiver(post_save,sender=User)
def create_profile(sender, instance,created, **kwargs):
    if created:
        # user_profile = Profile(user=instance.username)
        # user_profile.save()
        # #have user follow self
        # user_profile.follows.set([instance.profile.id])
        # user_profile.save()
        Profile.objects.create(user = instance)

# post_save.connect(create_profile,sender=User)