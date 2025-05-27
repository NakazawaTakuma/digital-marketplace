# serializers/user/core.py
from rest_framework import serializers
from marketplace.models.user.core import User

class UserSerializer(serializers.ModelSerializer):
    """ユーザー認証情報シリアライザ"""
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_active', 'is_staff', 'date_joined', 'last_login']
        read_only_fields = ['id', 'date_joined', 'last_login']
