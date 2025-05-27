
# serializers/notification/notification.py
from rest_framework import serializers
from marketplace.models.notification.notification import Notification

class NotificationSerializer(serializers.ModelSerializer):
    """システム通知シリアライザ"""
    class Meta:
        model = Notification
        fields = ['id', 'user', 'type', 'message', 'is_read', 'created_at']
        read_only_fields = ['id', 'created_at']
