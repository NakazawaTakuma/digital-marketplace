
# serializers/license/download.py
from rest_framework import serializers
from marketplace.models.license.download import DownloadHistory

class DownloadHistorySerializer(serializers.ModelSerializer):
    """ダウンロード履歴シリアライザ"""
    class Meta:
        model = DownloadHistory
        fields = ['id', 'user', 'asset', 'downloaded_at', 'ip_address']
        read_only_fields = ['id', 'downloaded_at']
