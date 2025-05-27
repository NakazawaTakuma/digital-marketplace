
# serializers/license/license_key.py
from rest_framework import serializers
from marketplace.models.license.license_key import LicenseKey

class LicenseKeySerializer(serializers.ModelSerializer):
    """ライセンスキーシリアライザ"""
    class Meta:
        model = LicenseKey
        fields = ['id', 'order_item', 'key', 'issued_at', 'expires_at']
        read_only_fields = ['id', 'issued_at']
