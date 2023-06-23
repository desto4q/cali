from rest_framework.response import Response;
from rest_framework.decorators import api_view
from django.shortcuts import render, HttpResponse
from base.models import Tweet, User
from .serializer import *
from django.http import JsonResponse
from django.db.models import Q
import json
from rest_framework.pagination import PageNumberPagination


@api_view(["GET"])
def home(request):
    users = User.objects.all()
    serializer = fetchSerializer(users, many=True)
    return Response(serializer.data)




@api_view(["GET"])
def all_tweets(request):
    pagination = PageNumberPagination()
    tweetsList = Tweet.objects.all()
    result = pagination.paginate_queryset(tweetsList,request)
    serializer = tweetserializer(result,many=True)
    return pagination.get_paginated_response(serializer.data)

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
    paginator = PageNumberPagination()
    paginator.page_size = 5
    tweetsList = Tweet.objects.all().order_by(pk).reverse()
    result = paginator.paginate_queryset(tweetsList,request)
    serializer = PostSerializer(result,many=True)
    return paginator.get_paginated_response(serializer.data)

@api_view(["POST"])
def post_tweet(request):
    tweet = tweetserializer(data= request.data)
    if tweet.is_valid():
        tweet.save()
        return Response(tweet.data)
    return Response(tweet.errors)

@api_view(["POST"])
def create_user(request):
    L_user = request.data.get("username")
    L_password = request.data.get("password")
    try:
        exist = userSerializer(User.objects.get(username = L_user))
        return Response("exist")
    except:
        user = userSerializer(data=request.data)
        if user.is_valid():
            user.save()
            return Response(user.data)
        else:
            return Response("wrong format")

@api_view(['POST'])
def login(request):
    L_user = request.data.get("username")
    L_password = request.data.get("password")
    try: 
        exist = userSerializer(User.objects.get(username = L_user))
        check_Pass = exist.data.get("password")
        if L_password  == check_Pass: 
            return Response(exist.data)
        else:
            return Response("incorrect password")
    except: 
        return Response("err")
    
    
    

@api_view(["POST"])
def delete_tweet(request):
    l_id = request.data.get("id")
    getTweet = Tweet.objects.get(id = l_id)
    tweet = tweetserializer(getTweet)
    getTweet.delete()
    return Response(tweet.data)