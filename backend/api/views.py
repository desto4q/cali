from rest_framework.response import Response;
from rest_framework.decorators import api_view
from django.shortcuts import render, HttpResponse
from base.models import Tweet
from .serializer import tweetserializer


@api_view(["GET"])
def home(request):
    
    # return HttpResponse("welcome")
    return Response("home")


@api_view(["GET"])
def all_tweets(request):
    tweetsList = Tweet.objects.all()
    serializer = tweetserializer(tweetsList,many=True)
    return Response(serializer.data)



@api_view(["GET"])
def all_tweets_ordered(request,pk):
    tweetsList = Tweet.objects.all().order_by(pk)
    serializer = tweetserializer(tweetsList,many=True)
    
    return Response(serializer.data)