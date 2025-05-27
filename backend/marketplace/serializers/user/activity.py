# serializers/user/activity.py
from rest_framework import serializers
from marketplace.models.user.activity import ActivityLog

class ActivityLogSerializer(serializers.ModelSerializer):
    """ユーザー活動履歴シリアライザ"""
    class Meta:
        model = ActivityLog
        fields = ['id', 'user', 'action', 'ip_address', 'user_agent', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']