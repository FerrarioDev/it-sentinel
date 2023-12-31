from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import User

class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['dnarID', 'email', 'password', 'first_name', 'last_name']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            dnarID = validated_data['dnarID'], 
            first_name=validated_data['first_name'], 
            last_name= validated_data['last_name'],
        )

        user.set_password(validated_data['password'])
        user.save()
        return user
    
class UserLoginSerializer(serializers.ModelSerializer):
    dnarID = serializers.CharField()
    password = serializers.CharField(write_only = True)
    class Meta:
        model = User 
        fields = ['dnarID', 'password']