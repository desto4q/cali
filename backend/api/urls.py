from django.urls import path

from . import views


urlpatterns = [
    path("", views.home ,name="home"),
    path("tweets/", views.all_tweets, name="all_tweets"),
    path("tweets_order/<str:pk>", views.all_tweets_ordered, name="all_tweets"),
    path("tweet/add", views.post_tweet, name="post"),
    path("user/<str:pk>", views.find_user, name="findUser"),
    path("create/", views.create_user, name="createUser"),
    path("login/", views.login, name="login"),
    path("tweet/delete", views.delete_tweet, name="deleteTweet"),
    path("userpost/<int:pk>", views.viewing.as_view(),name="tweeter "),
    path("search/", views.search,name="search"),
    path("searchuser/", views.searchUser,name="searchUser"),
] 
