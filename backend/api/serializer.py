from rest_framework import serializers
from base.models import Tweet


class tweetserializer(serializers.ModelSerializer):
    class Meta:
        model = Tweet
        fields ="__all__"
        extra_kwargs = {'std_code': {'required': False},'uni_code': {'required': False},'last_name': {'required': False},'first_name': {'required': False}}