from rest_framework.response import Response;
from rest_framework.decorators import api_view
from django.shortcuts import render, HttpResponse
from base.models import Tweet, User
from .serializer import *
from django.db.models import Q


@api_view(["GET"])
def home(request):
    users = User.objects.all()
    serializer = userSerializer(users, many=True)
    return Response(serializer.data)




@api_view(["GET"])
def all_tweets(request):
    tweetsList = Tweet.objects.all()
    serializer = tweetserializer(tweetsList,many=True)
    return Response(serializer.data)

@api_view(["GET"])
def find_user(request,pk):
    try:
        findUser = userSerializer(User.objects.get(username = pk))
        if findUser:
            return Response(findUser.data)
    except:
        return Response("error")
    
        

@api_view(["GET"])
def all_tweets_ordered(request,pk):
    tweetsList = Tweet.objects.all().order_by(pk)
    serializer = PostSerializer(tweetsList,many=True)
    # serializer = tweetserializer()
    return Response(serializer.data)

@api_view(["POST"])
def post_tweet(request):
    tweet = tweetserializer(data= request.data)
    if tweet.is_valid():
        tweet.save()
        return Response(tweet.data)
    return Response(tweet.errors)

@api_view(["POST"])
def create_user(request):
    try:
        user = userSerializer(data=request.data)
        exist = User.objects.get(username = user.username)
        if user.username != exist:
            user.save()
            return Response(user.data)
    except:
        return Response("exists")
