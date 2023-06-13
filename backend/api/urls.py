from django.urls import path

from . import views


urlpatterns = [
    path("", views.home ,name="home"),
    path("tweets/", views.all_tweets, name="all_tweets"),
    path("tweets_order/<str:pk>", views.all_tweets_ordered, name="all_tweets"),
    
] 
