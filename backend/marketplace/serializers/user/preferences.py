
# serializers/user/preferences.py
from rest_framework import serializers
from marketplace.models.user.preferences import Preferences

class PreferencesSerializer(serializers.ModelSerializer):
    """ユーザー設定シリアライザ"""
    class Meta:
        model = Preferences
        fields = ['id', 'user', 'language', 'timezone', 'email_notifications']
        read_only_fields = ['id', 'user']
