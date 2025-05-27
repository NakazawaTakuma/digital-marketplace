# serializers/user/address.py
from rest_framework import serializers
from marketplace.models.user.address import Address

class AddressSerializer(serializers.ModelSerializer):
    """住所・連絡先シリアライザ"""
    class Meta:
        model = Address
        fields = ['id', 'user', 'type', 'line1', 'line2', 'city', 'state', 'postal_code', 'country', 'phone_number']
        read_only_fields = ['id', 'user']