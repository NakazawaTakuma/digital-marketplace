from rest_framework import serializers
from .models import Notification, LicenseKey, DownloadHistory

class NotificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notification
        fields = ['id', 'user', 'type', 'message', 'is_read', 'created_at']
        read_only_fields = ['id', 'created_at']

class LicenseKeySerializer(serializers.ModelSerializer):
    class Meta:
        model = LicenseKey
        fields = ['id', 'order_item', 'key', 'issued_at', 'expires_at']
        read_only_fields = ['id', 'issued_at']

class DownloadHistorySerializer(serializers.ModelSerializer):
    class Meta:
        model = DownloadHistory
        fields = ['id', 'user', 'asset', 'downloaded_at', 'ip_address']
        read_only_fields = ['id', 'downloaded_at']