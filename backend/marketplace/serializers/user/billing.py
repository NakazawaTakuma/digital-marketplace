
# serializers/user/billing.py
from rest_framework import serializers
from marketplace.models.user.billing import PaymentMethod, BillingRecord

class PaymentMethodSerializer(serializers.ModelSerializer):
    """支払い方法シリアライザ"""
    class Meta:
        model = PaymentMethod
        fields = ['id', 'user', 'type', 'details', 'is_default']
        read_only_fields = ['id', 'user']

class BillingRecordSerializer(serializers.ModelSerializer):
    """請求履歴シリアライザ"""
    class Meta:
        model = BillingRecord
        fields = ['id', 'user', 'amount', 'currency', 'description', 'created_at']
        read_only_fields = ['id', 'user', 'created_at']
