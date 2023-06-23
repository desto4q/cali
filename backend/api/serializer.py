from rest_framework import serializers
from base.models import Tweet,User,Profile

class ProfileSerializer(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username",read_only=True)
    class Meta:
        model = Profile
        fields = ["id","user","profileImg"]


class tweetserializer(serializers.ModelSerializer):
    # user = ProfileSerializer()
    class Meta:
        model = Tweet
        fields = "__all__"
        extra_kwargs = {'std_code': {'required': False},'uni_code': {'required': False},'last_name': {'required': False},'first_name': {'required': False}}
        
        
        
class userSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = "__all__"
        extra_kwargs = {'std_code': {'required': False},'uni_code': {'required': False},'last_name': {'required': False},'first_name': {'required': False}}
        
class fetchSerializer(serializers.ModelSerializer): 
    class Meta:
        model = User
        fields = ["id","username"]
        extra_kwargs = {'std_code': {'required': False},'uni_code': {'required': False},'last_name': {'required': False},'first_name': {'required': False}}
        
        
class PostProfile(serializers.ModelSerializer):
    user = serializers.SlugRelatedField(slug_field="username",read_only=True)
    class Meta:
        model = Profile
        fields = ["user","id"]
        
        
class PostSerializer(serializers.ModelSerializer):
    user = PostProfile()
    class Meta: 
        model = Tweet
        fields = "__all__"