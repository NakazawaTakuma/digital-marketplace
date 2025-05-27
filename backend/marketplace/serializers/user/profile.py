
# serializers/user/profile.py
from rest_framework import serializers
from marketplace.models.user.profile import Profile

class ProfileSerializer(serializers.ModelSerializer):
    """ユーザープロフィールシリアライザ"""
    class Meta:
        model = Profile
        fields = ['id', 'user', 'display_name', 'avatar', 'bio', 'website_url']
        read_only_fields = ['id', 'user']
